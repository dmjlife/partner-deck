import Intro from './slides/0.Intro';
import CoPilot from './slides/1.CoPilot';
import CoPilotDetail from './slides/1.2.CoPilot';
import Who from './slides/2.Who';
import WhoDetail from './slides/2.2.Who';
import Why from './slides/3.Why';
import WhyDetail from './slides/3.2.Why';
import What from './slides/4.What';
import WhatDetail from './slides/4.2.What';
import When from './slides/5.When';
import WhenDetail from './slides/5.2.When';
import Stack from './slides/6.Stack';
import StackDetail from './slides/6.2.Stack';
import Investment from './slides/7.Investment';
import InvestmentDetail from './slides/7.2.Investment';
import Querencia from './slides/8.Querencia';
import QuerenciaDetail from './slides/8.2.Querencia';
import Pricing from './slides/9.Pricing';

export const sectionNames = [
  'Intro',
  'Co-Pilot',
  'Who',
  'Why',
  'What',
  'When',
  'Stack',
  'Investment',
  'Querencia',
  'Pricing'
];

export const COLS = 10;
export const ROWS = 2;

export const deckGrid: (React.ComponentType | null)[][] = [
  [
    Intro,
    CoPilot,
    Who,
    Why,
    What,
    When,
    Stack,
    Investment,
    Querencia,
    Pricing
  ],
  [
    null,
    CoPilotDetail,
    WhoDetail,
    WhyDetail,
    WhatDetail,
    WhenDetail,
    StackDetail,
    InvestmentDetail,
    QuerenciaDetail,
    null
  ]
];
