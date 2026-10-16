import { ComparisonProps, FAQsProps, HeroProps, PricingProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'Simple coffee subscriptions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        Pick a plan, choose how you brew, and we roast and post it fresh. Free UK delivery on every plan.
      </span>{' '}
      Skip, pause or cancel whenever you like.
    </>
  ),
  tagline: 'Plans & prices',
};

// Pricing data on Pricing page *******************
export const pricingPricing: PricingProps = {
  id: 'pricing-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pick your plan',
    subtitle: 'No contracts. Change plan or pause from your account at any time.',
  },
  prices: [
    {
      title: 'sampler',
      price: 9,
      period: 'per month',
      items: [
        { description: 'Three 100 g bags' },
        { description: 'Light, medium and dark roast' },
        { description: 'Tasting notes on each bag' },
        { description: 'Free UK delivery' },
      ],
      callToAction: { text: 'Start sampler', href: '/contact' },
      hasRibbon: false,
    },
    {
      title: 'monthly filter',
      price: 14,
      period: 'per month',
      items: [
        { description: 'One 250 g bag every month' },
        { description: 'Our current single origin' },
        { description: 'Whole bean or ground to order' },
        { description: 'Free UK delivery' },
      ],
      callToAction: { text: 'Start subscription', href: '/contact' },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'office',
      price: 48,
      period: 'per month',
      items: [
        { description: 'Two 1 kg bags every month' },
        { description: 'Filter or espresso blend' },
        { description: 'Dedicated account manager' },
        { description: 'Invoice billing' },
      ],
      callToAction: { text: 'Talk to us', href: '/contact' },
      hasRibbon: false,
    },
  ],
};

// Comparison data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's in each plan?",
    subtitle: 'A side-by-side look at the three plans.',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        { title: 'Coffee per month' },
        { title: 'Roast choice' },
        { title: 'Price' },
        { title: 'Tasting notes' },
        { title: 'Invoice billing' },
        { title: 'Free UK delivery' },
      ],
    },
    {
      title: 'sampler',
      items: [
        { title: '3 × 100 g' },
        { title: 'Light, medium, dark' },
        { title: '£9' },
        { title: true },
        { title: false },
        { title: true },
      ],
      callToAction: { text: 'Choose', href: '/contact' },
    },
    {
      title: 'monthly filter',
      items: [
        { title: '1 × 250 g' },
        { title: 'Current single origin' },
        { title: '£14' },
        { title: true },
        { title: false },
        { title: true },
      ],
      callToAction: { text: 'Choose', href: '/contact' },
    },
    {
      title: 'office',
      items: [
        { title: '2 × 1 kg' },
        { title: 'Filter or espresso' },
        { title: '£48' },
        { title: true },
        { title: true },
        { title: true },
      ],
      callToAction: { text: 'Choose', href: '/contact' },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing questions',
    subtitle: 'Still deciding? These might help.',
  },
  items: [
    {
      title: 'Which plan is right for me?',
      description:
        'New to specialty coffee? Start with the Sampler. Brewing every day at home? Monthly filter. Feeding a team? Office.',
    },
    {
      title: 'How do I pay?',
      description: 'By card, charged on the day we roast. Office plans can be invoiced monthly with 14-day terms.',
    },
    {
      title: 'Can I change plan later?',
      description: 'Yes, up or down, from your account page. The change applies from your next roast.',
    },
    {
      title: 'Is there a delivery charge?',
      description: 'No. UK delivery is free on every subscription. One-off orders under £30 ship for £3.20.',
    },
    {
      title: 'What if I do not like a coffee?',
      description: 'Tell us within 14 days and we will send a replacement bag of something different, free.',
    },
  ],
};
