import {
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconLeaf,
  IconMapPin,
  IconPhoneCall,
  IconRecycle,
  IconScale,
  IconSeeding,
  IconUsers,
} from '@tabler/icons-react';
import { ContactProps, FeaturesProps, HeroProps, StatsProps, StepsProps } from '~/shared/types';
import heroImg from '~/assets/images/coffee-hero.svg';
import boxImg from '~/assets/images/coffee-box.svg';

// Hero data on About page *******************
export const hero2About: HeroProps = {
  title: 'A small roastery on the Bristol quayside',
  subtitle:
    'Saltmarsh started in 2019 with a second-hand 5 kg roaster and a belief that great coffee should be fresh, fairly bought and easy to get. Seven people and two roasters later, we still roast every batch ourselves.',
  tagline: 'About us',
  callToAction: { text: 'See our coffee', href: '/pricing' },
  callToAction2: { text: 'Contact us', href: '/contact' },
  image: { src: heroImg, alt: 'Fresh roasted coffee beans and a cup of coffee' },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    { title: 2019, description: 'Roasting since' },
    { title: 14, description: 'Partner farms' },
    { title: 2400, description: 'Subscribers' },
    { title: 7, description: 'People on the team' },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'What we care about',
    subtitle:
      'Three promises that shape how we buy, roast and ship every bag of coffee.',
    tagline: 'Our values',
  },
  items: [
    {
      title: 'Fair, traceable buying',
      description:
        'We buy from named farms and washing stations, pay well above Fairtrade minimums, and print the price on every bag.',
      icon: IconScale,
    },
    {
      title: 'Roasted to be tasted',
      description:
        'Light to medium roasts that keep the character of the origin, in small batches we cup and log every time.',
      icon: IconFlame,
    },
    {
      title: 'Gentle on the planet',
      description:
        'Compostable bags, recycled boxes and a bike courier for central Bristol. Send us your empty boxes and we reuse them.',
      icon: IconRecycle,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: false,
  isReversed: true,
  isImageDisplayed: true,
  image: { src: boxImg, alt: 'A Saltmarsh delivery box' },
  header: { title: 'Our story so far' },
  items: [
    {
      title: '2019: the first roast',
      description: 'A 5 kg roaster in a shared unit and a stall at the Sunday market.',
      icon: IconSeeding,
    },
    {
      title: '2021: the quayside roastery',
      description: 'We moved into 14 Quay Street, added a second roaster and started the subscription.',
      icon: IconUsers,
    },
    {
      title: '2024: direct partnerships',
      description: 'We began buying directly from farms in Ethiopia, Colombia and Guatemala.',
      icon: IconHeartHandshake,
    },
    { title: 'Today: 2,400 subscribers' },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Where our coffee comes from',
    subtitle: 'A few of the farms and co-operatives we buy from.',
    tagline: 'Sourcing',
  },
  columns: 3,
  items: [
    {
      title: 'Guji, Ethiopia',
      description: 'Washed lots from smallholders at 2,000 m. Floral, blueberry, tea-like.',
      icon: IconLeaf,
    },
    {
      title: 'Huila, Colombia',
      description: 'Sweet, balanced coffees from a women-led co-operative. Caramel and red apple.',
      icon: IconLeaf,
    },
    {
      title: 'Antigua, Guatemala',
      description: 'Chocolate and toasted hazelnut from volcanic soil, a staple of our espresso blend.',
      icon: IconLeaf,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: false,
  header: {
    title: 'Visit the roastery',
    subtitle: 'Come and watch a roast on a Tuesday or Friday morning.',
    tagline: 'Contact',
  },
  content: 'The shop is open six days a week. Say hello, taste something new and take a bag home.',
  items: [
    { title: 'Roastery & shop', description: ['14 Quay Street', 'Bristol BS1 4ST, UK'], icon: IconMapPin },
    { title: 'Contact', description: ['Phone: +44 117 496 0142', 'Email: hello@saltmarshcoffee.example'], icon: IconPhoneCall },
    { title: 'Opening hours', description: ['Monday - Friday: 08:00 - 17:00', 'Saturday: 09:00 - 14:00'], icon: IconClock },
  ],
  form: {
    title: 'Send us a message',
    inputs: [
      { type: 'text', name: 'name', autocomplete: 'off', placeholder: 'Your name' },
      { type: 'email', name: 'email', autocomplete: 'on', placeholder: 'Your email address' },
    ],
    textarea: { cols: 30, rows: 5, name: 'textarea', placeholder: 'How can we help?' },
    btn: { title: 'Send message', type: 'submit' },
  },
};
