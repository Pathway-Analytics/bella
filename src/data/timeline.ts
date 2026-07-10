/**
 * Timeline stations data for "The Route" section.
 *
 * To add a new station: append an object to the `stations` array below.
 * To mark a station as current: set `isNow: true` (only one station should be current).
 * To edit: update the relevant fields directly.
 */

export interface TimelineStation {
  yearRange: string;
  role: string;
  organisation: string;
  isNow?: boolean;
}

export const stations: TimelineStation[] = [
  {
    yearRange: '1995–2009',
    role: 'Investment Banking & Strategy Consulting',
    organisation:
      'Hambros Bank, WestLB Panmure, Cap Gemini Ernst & Young, independent consulting and Goldman Sachs. Financial modelling, company analysis, pricing, transformation and high-pressure delivery.',
  },
  {
    yearRange: '2009–present',
    role: 'Founder, Pathway Analytics',
    organisation:
      'Health economics, funding models, patient pathways and evaluation for NHS, government, local authority and voluntary-sector clients.',
  },
  {
    yearRange: '2009–2016',
    role: 'National funding & service reform',
    organisation:
      'Integrated Sexual Health Tariff, sexual-assault services, diabetes pathways, HIV commissioning and national screening economics.',
  },
  {
    yearRange: '2017–2019',
    role: 'London HIV system review',
    organisation:
      'Led the Fast-Track Cities assets, gaps and opportunities review for the Mayor of London and health-system partners.',
  },
  {
    yearRange: '2020–2022',
    role: 'National COVID-19 response',
    organisation:
      'Frontline contact tracing followed by Head of Epidemiology and analytical product leadership within the Joint Biosecurity Centre / UKHSA.',
  },
  {
    yearRange: '2024–present',
    role: 'Independent advisory & public leadership',
    organisation:
      'Complex evaluation, health equity, strategic programme review, civic leadership and public advocacy.',
    isNow: true,
  },
];
