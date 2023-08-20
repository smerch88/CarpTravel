const titles = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

interface Slide {
  id: number;
  bg: string;
  image: string;
  quote: string;
  title: string;
  titles: string[];
  text: string;
}

export const slides: Slide[] = [
  {
    id: 11,
    bg: '/slides/bg1.png',
    image: '/slides/1.png',
    quote: 'Feel the adrenaline rush',
    title: 'ATVs Traveling',
    titles: titles,
    text: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    id: 12,
    bg: '/slides/bg2.png',
    image: '/slides/2.png',
    quote: 'Destroy your limitations',
    title: 'Rock climbing',
    titles: titles,
    text: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    id: 13,
    bg: '/slides/bg3.png',
    image: '/slides/3.png',
    quote: 'Get Inspired',
    title: 'Hot air ballooning',
    titles: titles,
    text: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    id: 14,
    bg: '/slides/bg4.png',
    image: '/slides/4.png',
    quote: 'Overcome your fears',
    title: 'Skydiving',
    titles: titles,
    text: `Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.`,
  },
  {
    id: 15,
    bg: '/slides/bg5.png',
    image: '/slides/5.png',
    quote: 'Trust the flow',
    title: 'Rafting',
    titles: titles,
    text: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];
