/**
 * Project Cards Data
 *
 * This file contains all project entries displayed in the "Selected work" section.
 *
 * HOW TO ADD A NEW PROJECT:
 *   Add a new object to the `projects` array below following the ProjectCard interface.
 *   Each project needs a tag, title, at least one paragraph, and an outcome line.
 *
 * HOW TO EDIT A PROJECT:
 *   Find the project by its title and update the relevant fields directly.
 *
 * HOW TO REMOVE A PROJECT:
 *   Delete the entire object (from opening `{` to closing `},`) for the project you want to remove.
 *
 * HOW TO MARK A PROJECT AS CURRENT:
 *   Set `isCurrent: true` on the project. Only one project should be current at a time.
 *   Remove or set `isCurrent: false` on any previously current project.
 */

export interface ProjectCard {
  /** Category label displayed above the title (e.g. "Funding & payment design") */
  tag: string;
  /** Project title (e.g. "Integrated Sexual Health Tariff") */
  title: string;
  /** One or more description paragraphs */
  paragraphs: string[];
  /** Label for the outcome line (e.g. "Outcome", "Decision", "Value") */
  outcomeLabel: string;
  /** Description of the project outcome */
  outcomeText: string;
  /** When true, highlights the card with a teal border to indicate current/active work */
  isCurrent?: boolean;
}

export const projects: ProjectCard[] = [
  {
    tag: "Current \u00B7 complex programme evaluation",
    title: "Equitable access to HIV prevention",
    paragraphs: [
      "Leading a multi-site evaluation of clinic, community, women-facing and digital PrEP pathways. The work brings together patient-level outcomes, pathway attribution, implementation evidence and proportionate value-for-money analysis.",
      "The central challenge is not simply to count activity, but to understand whether different approaches reach underserved populations and move people credibly from access into uptake and continued use.",
    ],
    outcomeLabel: "Decision",
    outcomeText:
      "Which approaches are sufficiently effective, equitable and workable to continue, adapt or scale.",
    isCurrent: true,
  },
  {
    tag: "Funding & payment design",
    title: "Integrated Sexual Health Tariff",
    paragraphs: [
      "Led the development of a pathway-based funding model for integrated sexual health services. The model combined time-driven costing of more than 140 clinical pathways with top-down provider cost analysis and existing national activity data.",
      "I then led road-testing and implementation, including a web-based solution that enabled rapid onboarding without major capital expenditure. The programme continued through the transfer of sexual-health commissioning from the NHS to local authorities.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "More transparent and equitable payment, stronger incentives for integrated and digital delivery, and reported system savings exceeding \u00A350 million.",
  },
  {
    tag: "HIV policy & system review",
    title: "UN AIDS Fast-Track Cities \u2014 London",
    paragraphs: [
      "Led an assets, gaps and opportunities review of London\u2019s route towards international HIV goals. The work combined more than 120 interviews, service-user storytelling, quantitative analysis and health-economic assessment.",
      "It brought together perspectives from people living with HIV, clinicians, commissioners, local authorities, community organisations and national bodies.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "A system-wide evidence base and recommendations for the Mayor of London, NHS England, Public Health England and London Councils.",
  },
  {
    tag: "Cross-government system reform",
    title: "National Sexual Assault Services Review",
    paragraphs: [
      "Co-led national work across NHS England, the Ministry of Justice and the Home Office. We mapped pathways through 43 Sexual Assault Referral Centres and more than 100 voluntary-sector organisations, examining cost drivers, workforce, hand-offs and failure points from forensic response through to the wider justice pathway.",
      "The work translated detailed frontline evidence into a structure senior decision-makers could use to negotiate responsibilities and funding.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "Evidence supporting a clearer cross-government responsibility matrix, new funding arrangements and a more coherent operating model.",
  },
  {
    tag: "National analytical leadership",
    title: "Joint Biosecurity Centre / UKHSA",
    paragraphs: [
      "Following nearly 1,000 hours as a frontline clinical contact tracer, I moved into national analytical leadership during the COVID-19 response. I led a multidisciplinary team of epidemiologists, data scientists, product designers and engineers developing cluster-detection and transmission-analysis products.",
      "The role required constant negotiation between scientific rigour, operational usefulness and the speed of ministerial decision-making.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "Analytical products and evidence designed for both local public-health action and rapid national policy decisions.",
  },
  {
    tag: "Frontline evidence into policy",
    title: "NHS Test and Trace issue analysis",
    paragraphs: [
      "Used direct tracing experience to compile a detailed issue log covering practical failures in the national pathway, data quality, household linkage, timeliness and user experience. A rapid analysis identified more than 13 million excess calls associated with unlinked household records.",
      "The work was escalated to senior programme leadership and became part of the evidence base I later brought into government analytical roles.",
    ],
    outcomeLabel: "Value",
    outcomeText:
      "Converted frontline experience into a structured diagnosis of system and data problems requiring national attention.",
  },
  {
    tag: "Pathway economics",
    title: "Diabetes care, King\u2019s Health Partners",
    paragraphs: [
      "Led a health-economics and strategy review of hospital and community diabetes pathways. The work combined pathway mapping, activity analysis and stakeholder workshops to identify costs hidden by coding problems, fragmented care and poor coordination between providers.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "A clearer view of the true pathway cost and practical options for shifting appropriate care into community settings.",
  },
  {
    tag: "Value for money",
    title: "National Chlamydia Screening Programme",
    paragraphs: [
      "Developed a practical cost and cost-effectiveness tool covering screening and partner notification, alongside value-for-money evidence for national decision-makers and commissioners.",
      "The analysis shifted attention away from the simple volume of tests towards the cost of identifying and managing positive cases.",
    ],
    outcomeLabel: "Outcome",
    outcomeText:
      "Contributed to the case for programme continuation and gave commissioners a more meaningful basis for local decision-making.",
  },
];
