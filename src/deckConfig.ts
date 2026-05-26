import CoPilot from './slides/1.CoPilot';
import Who from './slides/2.Who';
import Why from './slides/3.Why';
import What from './slides/4.What';
import When from './slides/5.When';
import Stack from './slides/6.Stack';
import Investment from './slides/7.Investment';
import Querencia from './slides/8.Querencia';
import Pricing from './slides/9.Pricing';

export const sectionNames = [
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

export const COLS = 9;
export const ROWS = 1;

export const deckGrid: React.ComponentType[][] = [
  [
    CoPilot,
    Who,
    Why,
    What,
    When,
    Stack,
    Investment,
    Querencia,
    Pricing
  ]
];
