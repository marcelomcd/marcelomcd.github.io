/**
 * Script de build simples
 * Agrupa módulos ES6 em um único arquivo para compatibilidade
 *
 * NOTA: Em produção, considere usar um bundler como Rollup ou Webpack
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "src");
const OUTPUT_FILE = path.join(__dirname, "script.js");

/**
 * Lê arquivo e retorna conteúdo
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Erro ao ler arquivo ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Processa imports e substitui por conteúdo
 */
function processImports(content, filePath, processed = new Set()) {
  const importRegex =
    /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"];?/g;
  let processedContent = content;
  const dir = path.dirname(filePath);

  processedContent = processedContent.replace(importRegex, (match, importPath) => {
    const resolvedPath = path.resolve(dir, importPath);
    const fullPath = resolvedPath.endsWith(".js") ? resolvedPath : `${resolvedPath}.js`;

    if (processed.has(fullPath)) {
      return `// Import já processado: ${importPath}`;
    }

    processed.add(fullPath);

    const importedContent = readFile(fullPath);
    if (!importedContent) {
      return `// Erro ao importar: ${importPath}`;
    }

    // Remove exports e processa imports recursivamente
    const withoutExports = importedContent
      .replace(/export\s+/g, "")
      .replace(/export\s+default\s+/g, "const ")
      .replace(/export\s*\{[^}]*\}\s*;?/g, "");

    return processImports(withoutExports, fullPath, processed);
  });

  return processedContent;
}

/**
 * Build principal
 */
function build() {
  console.log("Iniciando build...");

  const mainFile = path.join(SRC_DIR, "main.js");
  const mainContent = readFile(mainFile);

  if (!mainContent) {
    console.error("Erro: Não foi possível ler main.js");
    process.exit(1);
  }

  // Processa imports recursivamente
  const bundled = processImports(mainContent, mainFile);

  // Adiciona header
  const header = `/*
 * MARCELO MACEDO - PORTFOLIO 2025
 * Modern Professional Portfolio
 * 
 * Este arquivo foi gerado automaticamente a partir dos módulos em src/
 * Para editar, modifique os arquivos em src/ e execute: npm run build
 */

`;

  // Adiciona estilos inline (mantém compatibilidade)
  const styles = `
const style = document.createElement("style");
style.textContent = \`
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }

  .nav-list a.active {
    color: var(--accent);
  }

  .nav-list a.active::before {
    transform: translateX(-50%) scaleX(1);
  }
\`;
document.head.appendChild(style);
`;

  const finalContent = header + bundled + styles;

  // Escreve arquivo
  fs.writeFileSync(OUTPUT_FILE, finalContent, "utf8");

  console.log(`Build concluído: ${OUTPUT_FILE}`);
  console.log(`Tamanho: ${(finalContent.length / 1024).toFixed(2)} KB`);
}

// Executa build
build();
