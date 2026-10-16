import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';

import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Features4 from '~/components/widgets/Features4';
import Steps from '~/components/widgets/Steps';
import Features from '~/components/widgets/Features';
import Contact from '~/components/widgets/Contact';
import {
  contactAbout,
  featuresAbout,
  featuresFourAbout,
  hero2About,
  statsAbout,
  stepsAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = buildMetadata({
  title: 'About us',
  description: 'Learn more about Saltmarsh Coffee and the team behind it.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features4 {...featuresFourAbout} />
      <Steps {...stepsAbout} />
      <Features {...featuresAbout} />
      <Contact {...contactAbout} />
    </>
  );
}
