/**
 * Utilitários de validação
 * Funções puras para validação de dados
 */

/**
 * Valida formato de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} true se válido, false caso contrário
 */
export function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida se string não está vazia
 * @param {string} value - Valor a ser validado
 * @returns {boolean} true se não vazio, false caso contrário
 */
export function isNotEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Sanitiza string removendo caracteres perigosos
 * @param {string} input - String a ser sanitizada
 * @returns {string} String sanitizada
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < e >
    .replace(/javascript:/gi, "") // Remove javascript:
    .replace(/on\w+=/gi, ""); // Remove event handlers
}

/**
 * Valida formato de telefone brasileiro
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} true se válido, false caso contrário
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") {
    return false;
  }

  // Remove caracteres não numéricos
  const cleaned = phone.replace(/\D/g, "");

  // Valida telefone brasileiro (10 ou 11 dígitos)
  // (21) 99999-9999 ou (21) 9999-9999
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/**
 * Formata telefone para exibição
 * @param {string} phone - Telefone a ser formatado
 * @returns {string} Telefone formatado
 */
export function formatPhone(phone) {
  if (!phone) {
    return "";
  }

  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  return phone;
}

/**
 * Valida dados do formulário de contato
 * @param {Object} formData - Dados do formulário
 * @param {string} formData.name - Nome
 * @param {string} formData.email - Email
 * @param {string} formData.phone - Telefone
 * @param {string} formData.company - Empresa (opcional)
 * @param {string} formData.message - Mensagem
 * @returns {Object} { valid: boolean, errors: string[] }
 */
export function validateContactForm(formData) {
  const errors = [];

  if (!isNotEmpty(formData.name)) {
    errors.push("Nome é obrigatório");
  }

  if (!isNotEmpty(formData.email)) {
    errors.push("Email é obrigatório");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Email inválido");
  }

  if (!isNotEmpty(formData.phone)) {
    errors.push("Telefone é obrigatório");
  } else if (!isValidPhone(formData.phone)) {
    errors.push("Telefone inválido. Use o formato (21) 99999-9999");
  }

  if (!isNotEmpty(formData.message)) {
    errors.push("Mensagem é obrigatória");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
