/**
 * Módulo de Notificações
 * Gerencia notificações toast para feedback ao usuário
 */

import { NOTIFICATION_CONFIG } from "../config.js";
import { logger } from "../utils/logger.js";

/**
 * Cria e exibe notificação toast
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo de notificação ('success' ou 'error')
 */
export function showNotification(message, type = "info") {
  if (!message) {
    logger.warn("Tentativa de exibir notificação sem mensagem");
    return;
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  const bgColor = type === "success" ? "rgba(40, 200, 64, 0.9)" : "rgba(255, 95, 87, 0.9)";
  const icon = type === "success" ? "check-circle" : "exclamation-circle";

  notification.style.cssText = `
    position: fixed;
    top: ${NOTIFICATION_CONFIG.position.top}px;
    right: ${NOTIFICATION_CONFIG.position.right}px;
    background: ${bgColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
    backdrop-filter: blur(10px);
    max-width: 400px;
  `;

  notification.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <span style="margin-left: 0.5rem;">${message}</span>
  `;

  document.body.appendChild(notification);

  logger.debug("Notificação exibida", { type, message });

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, NOTIFICATION_CONFIG.animationDuration);
  }, NOTIFICATION_CONFIG.duration);
}
