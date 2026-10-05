// Printable CV in the active site language.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("cv-toggle");
  const dropdown = document.getElementById("cv-dropdown");
  const fullBtn = document.getElementById("download-full-cv");
  const compactBtn = document.getElementById("download-compact-cv");

  if (toggle && dropdown) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdown.classList.toggle("active");
    });
    document.addEventListener("click", () => dropdown.classList.remove("active"));
    dropdown.addEventListener("click", (event) => event.stopPropagation());
  }

  if (fullBtn) fullBtn.addEventListener("click", () => openCv(false));
  if (compactBtn) compactBtn.addEventListener("click", () => openCv(true));
});

const cvCopy = {
  pt: {
    title: "Currículo",
    role: "Software Engineer",
    summary:
      "Software Engineer na PicPay, com mais de 7 anos em automação, integrações e dados. Constrói RPA, agentes de IA e plataformas de métricas em ambiente de fintech, com Python, UiPath, BotCity, SQL e AWS.",
    contact: "Contato",
    experience: "Experiência",
    skills: "Competências",
    jobs: [
      ["2026 — atual", "Software Engineer · PicPay", "Tempo integral · Remoto", [
        "RPA e automação com Python, UiPath e BotCity, com foco em escala e confiabilidade.",
        "Sustentação de robôs em produção, incidentes, monitoramento e melhoria contínua.",
        "Plataforma de métricas de automação: performance, SLA e decisão orientada a dados.",
        "Redesenho de processos antes da automação para aumentar ROI.",
        "APIs, SQL e AWS (Lambda, API Gateway, RDS), agentes de IA, skills e MCP."
      ]],
      ["2024 — 2026", "Solution Engineer · Quali IT", "Liderança técnica", [
        "Liderança técnica em automação e integrações backend/frontend.",
        "Padrões arquiteturais, APIs, Azure DevOps e bancos relacionais."
      ]],
      ["2023", "RPA Developer · ONS", "Setor elétrico", [
        "Automações RPA e integrações com UiPath e Python em processos críticos."
      ]],
      ["2022", "RPA Developer · Tata Consultancy Services", "Consultoria global", [
        "UiPath, Automation Anywhere, Python, C# e dashboards de monitoramento."
      ]],
      ["2019", "RPA Developer Junior · Infosys", "Início em RPA", [
        "Robôs com UiPath e Automation Anywhere e integrações via API."
      ]]
    ],
    skillLine: "Python · UiPath · BotCity · ChatBot · Dify · Prompt Master · AWS · Azure · SQL · Power BI · Agentes de IA · MCP · GitHub"
  },
  en: {
    title: "Resume",
    role: "Software Engineer",
    summary:
      "Software Engineer at PicPay with 7+ years in automation, integrations and data. Builds RPA, AI agents and automation metrics platforms in fintech, using Python, UiPath, BotCity, SQL and AWS.",
    contact: "Contact",
    experience: "Experience",
    skills: "Skills",
    jobs: [
      ["2026 — present", "Software Engineer · PicPay", "Full-time · Remote", [
        "Designed RPA and process automation with Python, UiPath and BotCity for scale and reliability.",
        "Supported production bots: stability, incidents, monitoring and continuous improvement.",
        "Helped build an automation metrics platform for performance, SLAs and data-driven decisions.",
        "Analyzed and redesigned processes before automation to raise ROI.",
        "Integrations with APIs, SQL and AWS (Lambda, API Gateway, RDS), plus AI agents, skills and MCP."
      ]],
      ["2024 — 2026", "Solution Engineer · Quali IT", "Technical leadership", [
        "Technical leadership in automation and backend/frontend integrations.",
        "Architecture patterns, APIs, Azure DevOps and relational databases."
      ]],
      ["2023", "RPA Developer · ONS", "Electric sector", [
        "RPA automations and integrations with UiPath and Python for critical processes."
      ]],
      ["2022", "RPA Developer · Tata Consultancy Services", "Global consulting", [
        "UiPath, Automation Anywhere, Python, C# and bot monitoring dashboards."
      ]],
      ["2019", "RPA Developer Junior · Infosys", "RPA foundation", [
        "Bots with UiPath and Automation Anywhere, plus API integrations."
      ]]
    ],
    skillLine: "Python · UiPath · BotCity · ChatBot · Dify · Prompt Master · AWS · Azure · SQL · Power BI · AI Agents · MCP · GitHub"
  },
  es: {
    title: "Currículum",
    role: "Software Engineer",
    summary:
      "Software Engineer en PicPay, con más de 7 años en automatización, integraciones y datos. Construye RPA, agentes de IA y plataformas de métricas en fintech, con Python, UiPath, BotCity, SQL y AWS.",
    contact: "Contacto",
    experience: "Experiencia",
    skills: "Competencias",
    jobs: [
      ["2026 — actualidad", "Software Engineer · PicPay", "Jornada completa · Remoto", [
        "Diseño de RPA y automatización de procesos con Python, UiPath y BotCity, con foco en escala y fiabilidad.",
        "Soporte de robots en producción: estabilidad, incidentes, monitorización y mejora continua.",
        "Plataforma de métricas de automatización: rendimiento, SLA y decisión basada en datos.",
        "Rediseño de procesos antes de automatizar para aumentar el ROI.",
        "APIs, SQL y AWS (Lambda, API Gateway, RDS), agentes de IA, skills y MCP."
      ]],
      ["2024 — 2026", "Solution Engineer · Quali IT", "Liderazgo técnico", [
        "Liderazgo técnico en automatización e integraciones backend/frontend.",
        "Patrones de arquitectura, APIs, Azure DevOps y bases relacionales."
      ]],
      ["2023", "RPA Developer · ONS", "Sector eléctrico", [
        "Automatizaciones RPA e integraciones con UiPath y Python en procesos críticos."
      ]],
      ["2022", "RPA Developer · Tata Consultancy Services", "Consultoría global", [
        "UiPath, Automation Anywhere, Python, C# y paneles de monitorización."
      ]],
      ["2019", "RPA Developer Junior · Infosys", "Inicio en RPA", [
        "Robots con UiPath y Automation Anywhere e integraciones por API."
      ]]
    ],
    skillLine: "Python · UiPath · BotCity · ChatBot · Dify · Prompt Master · AWS · Azure · SQL · Power BI · Agentes de IA · MCP · GitHub"
  }
};

function openCv(compact) {
  const lang = typeof currentLang === "string" && cvCopy[currentLang] ? currentLang : "pt";
  const copy = cvCopy[lang];
  const jobs = compact ? copy.jobs.slice(0, 2) : copy.jobs;
  const jobsHtml = jobs.map(([period, title, meta, items]) => `
    <section>
      <p class="period">${period}</p>
      <h2>${title}</h2>
      <p class="meta">${meta}</p>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `).join("");

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>Marcelo Macedo — ${copy.title}</title>
  <style>
    body { font-family: Inter, Segoe UI, sans-serif; color: #111827; margin: 40px; line-height: 1.45; }
    h1 { margin: 0; font-size: 28px; }
    .role { color: #0f766e; font-weight: 700; margin: 4px 0 12px; }
    .summary { max-width: 720px; }
    h2 { font-size: 16px; margin: 0; }
    h3 { margin: 22px 0 8px; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: #0f766e; }
    .period { margin: 0; color: #6b7280; font-size: 12px; }
    .meta { margin: 2px 0 6px; color: #374151; font-size: 13px; }
    ul { margin: 0 0 14px 18px; padding: 0; }
    a { color: #0f766e; }
    @media print { body { margin: 18px; } }
  </style>
</head>
<body>
  <h1>Marcelo Macedo</h1>
  <p class="role">${copy.role}</p>
  <p class="summary">${copy.summary}</p>
  <h3>${copy.contact}</h3>
  <p>Rio de Janeiro, Brasil · Remoto<br>
  marcelo.macedo.business@gmail.com<br>
  linkedin.com/in/marcelo-macedo-jr · github.com/marcelomcd · marcelomcd.github.io</p>
  <h3>${copy.skills}</h3>
  <p>${copy.skillLine}</p>
  <h3>${copy.experience}</h3>
  ${jobsHtml}
  <script>window.print()<\/script>
</body>
</html>`;

  const popup = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
  if (!popup) return;
  popup.document.open();
  popup.document.write(html);
  popup.document.close();
}
