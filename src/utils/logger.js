/**
 * Sistema de logging estruturado
 * Fornece logs consistentes para debugging e observabilidade
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

const CURRENT_LOG_LEVEL =
  process.env.NODE_ENV === "production" ? LOG_LEVELS.WARN : LOG_LEVELS.DEBUG;

/**
 * Formata mensagem de log com contexto
 * @param {string} level - Nível do log
 * @param {string} message - Mensagem principal
 * @param {Object} context - Contexto adicional
 * @returns {Object} Objeto de log estruturado
 */
function formatLog(level, message, context = {}) {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context
  };
}

/**
 * Logger principal
 */
export const logger = {
  /**
   * Log de debug (apenas em desenvolvimento)
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  debug(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.DEBUG) {
      const log = formatLog("DEBUG", message, context);
      console.debug(JSON.stringify(log));
    }
  },

  /**
   * Log de informação
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  info(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.INFO) {
      const log = formatLog("INFO", message, context);
      console.info(JSON.stringify(log));
    }
  },

  /**
   * Log de aviso
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  warn(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.WARN) {
      const log = formatLog("WARN", message, context);
      console.warn(JSON.stringify(log));
    }
  },

  /**
   * Log de erro
   * @param {string} message - Mensagem
   * @param {Error} error - Objeto de erro
   * @param {Object} context - Contexto adicional
   */
  error(message, error = null, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.ERROR) {
      const log = formatLog("ERROR", message, {
        ...context,
        error: error
          ? {
              name: error.name,
              message: error.message,
              stack: process.env.NODE_ENV !== "production" ? error.stack : undefined
            }
          : undefined
      });
      console.error(JSON.stringify(log));
    }
  }
};
