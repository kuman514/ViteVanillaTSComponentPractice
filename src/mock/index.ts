import { CheckStatus, ComponentDataType } from '^/types';

export const initComponentData: ComponentDataType[] = [
  {
    id: 1,
    title: 'Touhou Project',
    checkStatus: CheckStatus.NONE,
    children: [
      {
        id: 101,
        title: 'Koishi Komeiji',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 102,
        title: 'Nitori Kawashiro',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 103,
        title: 'Hatate Himekaidou',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 104,
        title: 'Yukari Yakumo',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 105,
        title: 'Sanae Kochiya',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: 'Bemani',
    checkStatus: CheckStatus.NONE,
    children: [
      {
        id: 201,
        title: 'Rasis',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 202,
        title: 'Tsugaru Hishimiya',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 203,
        title: 'Himmel',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: 'Blue Archive',
    checkStatus: CheckStatus.NONE,
    children: [
      {
        id: 301,
        title: 'Hoshino Takanashi',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 302,
        title: 'Yuuka Hayase',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 303,
        title: 'Shiroko Sunaookami',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 304,
        title: 'Aru Rikuhachima',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 305,
        title: 'Hifumi Ajitani',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
      {
        id: 306,
        title: 'Azusa Shirasu',
        checkStatus: CheckStatus.NONE,
        children: [],
      },
    ],
  },
];
