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
      'Vice President, Goldman Sachs; Associate Director, WestLB Panmure, leading an international equity-research team; Senior Strategy Consultant, Cap Gemini Ernst & Young.',
  },
  {
    yearRange: '2009–present',
    role: 'Founder & Director, Pathway Analytics',
    organisation:
      'Built and led an independent consultancy delivering national funding reform, system reviews, service redesign and public-value analysis across government and healthcare.',
  },
  {
    yearRange: '2020–2022',
    role: 'COVID-19 public health response',
    organisation:
      'Moved from frontline tracing into leadership of a multidisciplinary public-health analytics team, supporting local action and cross-government policy decisions.',
  },
  {
    yearRange: '2023–2024',
    role: 'Parliamentary Candidate',
    organisation:
      'Built a general-election campaign from scratch in six weeks, recruited and led volunteers, raised more than £7,000 in grassroots funding and secured 9,533 votes.',
  },
  {
    yearRange: 'Now',
    role: 'Board, Executive & Public Leadership',
    organisation:
      'Strategy, programme leadership, policy, advocacy and system reform for public bodies, funders, boards and mission-led organisations.',
    isNow: true,
  },
];
