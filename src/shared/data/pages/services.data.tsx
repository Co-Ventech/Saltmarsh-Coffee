import {
  IconBuildingStore,
  IconCoffee,
  IconGift,
  IconSchool,
  IconTruckDelivery,
  IconUsers,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';
import heroImg from '~/assets/images/coffee-pour-over.svg';
import bagImg from '~/assets/images/coffee-bag.svg';
import boxImg from '~/assets/images/coffee-box.svg';
import avatar2 from '~/assets/images/avatar-2.svg';
import avatar4 from '~/assets/images/avatar-4.svg';
import avatar5 from '~/assets/images/avatar-5.svg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Coffee for homes, cafés and offices',
  subtitle: (
    <>
      <span className="hidden md:inline">
        Whether you brew one cup a day or pull two hundred, we roast to order and deliver on a schedule that suits
        you.
      </span>{' '}
      Subscriptions, wholesale, gifts and training.
    </>
  ),
  tagline: 'What we do',
  callToAction: { text: 'See subscriptions', href: '/pricing' },
  callToAction2: { text: 'Wholesale enquiry', href: '/contact' },
  image: { src: heroImg, alt: 'A pour-over brewer filling a glass server' },
};

// Features2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'features-two-on-services',
  hasBackground: false,
  header: {
    title: 'Ways to enjoy Saltmarsh',
    subtitle: 'Pick the one that fits your routine.',
  },
  columns: 3,
  items: [
    {
      title: 'Home subscriptions',
      description: 'Fresh coffee on your doorstep every month, roasted to your taste.',
      icon: IconCoffee,
    },
    {
      title: 'Wholesale for cafés',
      description: 'Consistent espresso and filter coffee from 5 kg a month, with free dial-in.',
      icon: IconBuildingStore,
    },
    {
      title: 'Office coffee',
      description: 'Bulk bags, a tidy monthly invoice and a free tasting for your team.',
      icon: IconUsers,
    },
    {
      title: 'Gift subscriptions',
      description: 'Three, six or twelve months with a handwritten card. No auto-renewal.',
      icon: IconGift,
    },
    {
      title: 'Barista training',
      description: 'Two-hour sessions on dialling in, milk and cleaning, for new wholesale accounts.',
      icon: IconSchool,
    },
    {
      title: 'Free UK delivery',
      description: 'Roasted Tuesday and Friday and posted the same day on every subscription.',
      icon: IconTruckDelivery,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'content-one-on-services',
  hasBackground: true,
  header: {
    title: 'Wholesale for cafés',
    subtitle: 'Consistent coffee and real support.',
    tagline: 'For businesses',
  },
  content:
    'We supply cafés across Bristol and the South West with house espresso and a rotating single origin. Every account gets a named contact, a dial-in visit and a free tasting box before you commit.',
  items: [
    { title: 'Espresso and filter, from 5 kg a month', description: 'Pay only for what you use. Change volumes with 48 hours notice.' },
    { title: 'Dial-in and training included', description: 'We set up your grinder and train your team on your own machine.' },
    { title: 'Reliable delivery', description: 'Weekly drops by our own van in Bristol, tracked courier everywhere else.' },
  ],
  image: { src: bagImg, alt: 'A bag of Saltmarsh wholesale coffee' },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'content-two-on-services',
  hasBackground: true,
  content:
    'Not sure which roast you like? Try the Sampler, three small bags with tasting notes, then move to a full-size subscription when you have found a favourite.',
  items: [
    { title: 'Light, medium and dark roast' },
    { title: 'Brew guide on every bag' },
    { title: 'Free UK delivery' },
    { title: 'Skip, pause or cancel any time' },
  ],
  image: { src: boxImg, alt: 'A Saltmarsh delivery box' },
  isReversed: true,
  isAfterContent: true,
};

// Features4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'features-four-on-services',
  hasBackground: false,
  header: {
    title: 'What you get with every order',
    subtitle: 'The same standards for a 100 g sampler and a 20 kg café order.',
  },
  items: [
    { title: 'Roasted to order', description: 'Never roasted ahead and left on a shelf.' },
    { title: 'Named origin', description: 'Farm, altitude and process on every bag.' },
    { title: 'Sealed for freshness', description: 'One-way valve bags that keep aroma in and air out.' },
    { title: 'Brew guidance', description: 'Ratios, grind size and timings for each coffee.' },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-services',
  hasBackground: true,
  header: {
    title: 'What our customers say',
    subtitle: 'Sample reviews for this demo site.',
  },
  testimonials: [
    {
      name: 'Silver J.',
      job: 'Café owner, Clifton',
      testimonial: 'Consistent espresso, fair pricing and a team that picks up the phone. Our regulars noticed the difference within a week.',
      image: { src: avatar2, alt: 'Silver J.' },
      href: '/',
    },
    {
      name: 'Sarah J.',
      job: 'Office manager',
      testimonial: 'The office plan arrives like clockwork and the monthly invoice makes finance happy.',
      image: { src: avatar4, alt: 'Sarah J.' },
      href: '/',
    },
    {
      name: 'Keith Y.',
      job: 'Home brewer',
      testimonial: 'The training session taught me more about dialling in than a year of YouTube.',
      image: { src: avatar5, alt: 'Keith Y.' },
      href: '/',
    },
  ],
};

// FAQs data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: false,
  header: {
    title: 'Common questions',
    subtitle: 'Quick answers about our services.',
  },
  items: [
    {
      title: 'What is the minimum wholesale order?',
      description: 'Five kilograms a month. You can mix espresso and filter coffees.',
    },
    {
      title: 'Do you lend or sell equipment?',
      description: 'We do not sell machines, but we can recommend suppliers and set up your grinder when we dial in.',
    },
    {
      title: 'How far do you deliver wholesale orders?',
      description: 'By our own van across Bristol and Bath, and by tracked courier to the rest of the UK.',
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  title: 'Taste before you commit',
  subtitle: 'Request a free tasting box for your café or office, or start a home subscription today.',
  callToAction: { text: 'Request a tasting box', href: '/contact' },
  items: [
    { title: 'Home subscriptions', description: 'From £9 a month', href: '/pricing' },
    { title: 'Wholesale price list', description: 'Email us for current prices', href: 'mailto:wholesale@saltmarshcoffee.example' },
  ],
};
