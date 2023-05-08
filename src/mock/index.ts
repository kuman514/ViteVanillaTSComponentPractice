export interface ComponentDataType {
  id: number;
  title: string;
  children: ComponentDataType[];
}

export const componentData: ComponentDataType[] = [
  {
    id: 1,
    title: 'Touhou Project',
    children: [
      {
        id: 101,
        title: 'Koishi Komeiji',
        children: [],
      },
      {
        id: 102,
        title: 'Nitori Kawashiro',
        children: [],
      },
      {
        id: 103,
        title: 'Hatate Himekaidou',
        children: [],
      },
      {
        id: 104,
        title: 'Yukari Yakumo',
        children: [],
      },
      {
        id: 105,
        title: 'Sanae Kochiya',
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: 'Bemani',
    children: [
      {
        id: 201,
        title: 'Rasis',
        children: [],
      },
      {
        id: 202,
        title: 'Tsugaru Hishimiya',
        children: [],
      },
      {
        id: 203,
        title: 'Himmel',
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: 'Blue Archive',
    children: [
      {
        id: 301,
        title: 'Hoshino Takanashi',
        children: [],
      },
      {
        id: 302,
        title: 'Yuuka Hayase',
        children: [],
      },
      {
        id: 303,
        title: 'Shiroko Sunaookami',
        children: [],
      },
      {
        id: 304,
        title: 'Aru Rikuhachima',
        children: [],
      },
      {
        id: 305,
        title: 'Hifumi Ajitani',
        children: [],
      },
      {
        id: 306,
        title: 'Azusa Shirasu',
        children: [],
      },
    ],
  },
];
