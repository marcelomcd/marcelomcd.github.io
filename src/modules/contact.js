/**
 * Módulo de Contato
 * Gerencia formulário de contato e envio via WhatsApp
 */

import { getElement } from "../utils/dom.js";
import { validateContactForm, sanitizeInput, formatPhone } from "../utils/validation.js";
import { logger } from "../utils/logger.js";
import { showNotification } from "./notifications.js";

/**
 * Configuração do WhatsApp
 */
const WHATSAPP_CONFIG = {
  phoneNumber: "5521979208480", // Número no formato internacional sem + e espaços
  defaultMessage: "Olá! Vim através do seu portfólio."
};

/**
 * Obtém traduções baseadas no idioma atual
 * @returns {Object} Objeto com traduções
 */
function getTranslations() {
  const lang = document.documentElement.getAttribute("lang") || "";
  const isPt = lang.toLowerCase().startsWith("pt");

  return {
    form_fill: isPt
      ? "Por favor, preencha todos os campos obrigatórios"
      : "Please fill all required fields",
    form_invalid_email: isPt ? "Por favor, insira um email válido" : "Please enter a valid email",
    form_invalid_phone: isPt
      ? "Por favor, insira um telefone válido"
      : "Please enter a valid phone",
    sending: isPt ? "Abrindo WhatsApp..." : "Opening WhatsApp...",
    sent: isPt ? "Redirecionando..." : "Redirecting...",
    success: (name) =>
      isPt ? `Redirecionando para WhatsApp, ${name}!` : `Redirecting to WhatsApp, ${name}!`,
    send_error: isPt
      ? "Ops! Algo deu errado. Por favor, tente novamente."
      : "Oops! Something went wrong. Please try again."
  };
}

/**
 * Formata mensagem para WhatsApp
 * @param {Object} formData - Dados do formulário
 * @returns {string} Mensagem formatada
 */
function formatWhatsAppMessage(formData) {
  const lang = document.documentElement.getAttribute("lang") || "";
  const isPt = lang.toLowerCase().startsWith("pt");

  let message = isPt ? "Olá Marcelo! 👋\n\n" : "Hello Marcelo! 👋\n\n";
  message += isPt
    ? "Vim através do seu portfólio e gostaria de entrar em contato.\n\n"
    : "I came through your portfolio and would like to get in touch.\n\n";
  message += `*${isPt ? "Nome" : "Name"}:* ${formData.name}\n`;
  message += `*${isPt ? "E-mail" : "Email"}:* ${formData.email}\n`;
  message += `*${isPt ? "Telefone" : "Phone"}:* ${formatPhone(formData.phone)}\n`;

  if (formData.company && formData.company.trim()) {
    message += `*${isPt ? "Empresa" : "Company"}:* ${formData.company}\n`;
  }

  message += `\n*${isPt ? "Mensagem" : "Message"}:*\n${formData.message}`;

  return encodeURIComponent(message);
}

/**
 * Abre WhatsApp com mensagem pré-formatada
 * @param {string} message - Mensagem formatada (já codificada)
 */
function openWhatsApp(message) {
  // Formato: https://wa.me/número?text=mensagem
  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${message}`;

  // Tenta abrir em nova aba, se falhar, redireciona na mesma aba
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  // Fallback: se popup foi bloqueado, redireciona na mesma janela
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = url;
  }
}

/**
 * Inicializa formulário de contato
 */
export function initContactForm() {
  const form = getElement("#contactForm");
  if (!form) {
    logger.warn("Formulário de contato não encontrado");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) {
      return;
    }

    const originalText = submitBtn.innerHTML;
    const i18n = getTranslations();

    // Obtém e sanitiza dados do formulário
    const formData = {
      name: sanitizeInput(getElement("#name")?.value || ""),
      email: sanitizeInput(getElement("#email")?.value || ""),
      phone: sanitizeInput(getElement("#phone")?.value || ""),
      company: sanitizeInput(getElement("#company")?.value || ""),
      message: sanitizeInput(getElement("#message")?.value || "")
    };

    // Valida formulário
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      showNotification(validation.errors[0] || i18n.form_fill, "error");
      logger.warn("Validação de formulário falhou", { errors: validation.errors });
      return;
    }

    // Desabilita botão e mostra loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + i18n.sending;

    try {
      // Formata mensagem para WhatsApp
      const whatsappMessage = formatWhatsAppMessage(formData);

      logger.info("Formulário validado, abrindo WhatsApp", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      // Abre WhatsApp imediatamente
      openWhatsApp(whatsappMessage);

      // Mostra notificação de sucesso
      showNotification(i18n.success(formData.name), "success");

      // Limpa formulário
      form.reset();

      // Restaura botão após 2 segundos
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 2000);
    } catch (error) {
      logger.error("Erro ao processar formulário", error, { email: formData.email });
      submitBtn.innerHTML = '<i class="fas fa-times"></i> Erro';
      showNotification(i18n.send_error, "error");

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 2000);
    }
  });

  logger.debug("Formulário de contato inicializado");
}
