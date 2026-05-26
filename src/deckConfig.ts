import CoPilotVideo from './slides/CoPilotVideo';
import WhoVideo from './slides/WhoVideo';
import WhyVideo from './slides/WhyVideo';
import WhatVideo from './slides/WhatVideo';
import WhenVideo from './slides/WhenVideo';
import StackVideo from './slides/StackVideo';
import InvestmentVideo from './slides/InvestmentVideo';
import QuerenciaVideo from './slides/QuerenciaVideo';

export const sectionNames = [
  'Co-Pilot',
  'Who',
  'Why',
  'What',
  'When',
  'Stack',
  'Investment',
  'Querencia'
];

export const COLS = 8;
export const ROWS = 1;

export const deckGrid: React.ComponentType[][] = [
  [
    CoPilotVideo,
    WhoVideo,
    WhyVideo,
    WhatVideo,
    WhenVideo,
    StackVideo,
    InvestmentVideo,
    QuerenciaVideo
  ]
];
