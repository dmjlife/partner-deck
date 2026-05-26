import CoPilotVideo from './slides/CoPilotVideo';
import CoPilotText from './slides/CoPilotText';
import WhoVideo from './slides/WhoVideo';
import WhoText from './slides/WhoText';
import WhyVideo from './slides/WhyVideo';
import WhyText from './slides/WhyText';
import WhatVideo from './slides/WhatVideo';
import WhatText from './slides/WhatText';
import WhenVideo from './slides/WhenVideo';
import WhenText from './slides/WhenText';
import StackVideo from './slides/StackVideo';
import StackText from './slides/StackText';
import InvestmentVideo from './slides/InvestmentVideo';
import InvestmentText from './slides/InvestmentText';
import QuerenciaVideo from './slides/QuerenciaVideo';
import QuerenciaText from './slides/QuerenciaText';

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
export const ROWS = 2;

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
  ],
  [
    CoPilotText,
    WhoText,
    WhyText,
    WhatText,
    WhenText,
    StackText,
    InvestmentText,
    QuerenciaText
  ]
];
