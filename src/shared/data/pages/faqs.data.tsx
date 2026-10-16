import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently asked questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        Everything about ordering, delivery, brewing and wholesale in one place.
      </span>{' '}
      Cannot find your answer? Email us and we will reply within a working day.
    </>
  ),
  tagline: 'Help',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find your answer',
    subtitle: 'Choose a topic below.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'Ordering', href: '/tab1' },
      items: [
        {
          title: 'How do I start a subscription?',
          description: 'Pick a plan on the pricing page, choose your roast and grind, and check out. Your first roast is the next Tuesday or Friday.',
        },
        {
          title: 'Can I skip, pause or cancel?',
          description: 'Yes, any time from your account. Skip a delivery, pause for up to three months, or cancel with no fee, up to 48 hours before your next roast.',
        },
        {
          title: 'Do you offer gift subscriptions?',
          description: 'Yes. Choose 3, 6 or 12 months at checkout and we will send a card with the first bag. No auto-renewal.',
        },
        {
          title: 'Which payment methods do you accept?',
          description: 'Visa, Mastercard, American Express, Apple Pay and Google Pay. Office plans can be invoiced.',
        },
      ],
    },
    {
      link: { label: 'Delivery', href: '/tab2' },
      items: [
        {
          title: 'How fast is delivery?',
          description: 'Orders are roasted Tuesday and Friday and posted the same day by Royal Mail Tracked 24. Most reach you within two days.',
        },
        {
          title: 'Do you deliver outside the UK?',
          description: 'Not yet. We are working on EU shipping and will announce it by email.',
        },
        {
          title: 'What if my parcel does not arrive?',
          description: 'Write to hello@saltmarshcoffee.example with your order number and we will send a replacement straight away.',
        },
      ],
    },
    {
      link: { label: 'Brewing', href: '/tab3' },
      items: [
        {
          title: 'What grind should I choose?',
          description: 'Filter for V60, Chemex and batch brew; espresso for machines; cafetière for French press. Unsure? Choose whole bean.',
        },
        {
          title: 'How should I store the beans?',
          description: 'Keep them in the bag, sealed, somewhere cool and dark. Use within four to six weeks of the roast date.',
        },
        {
          title: 'Do you have brew guides?',
          description: 'Every bag has a QR code linking to a guide for that coffee, with ratios and timings.',
        },
      ],
    },
    {
      link: { label: 'Wholesale', href: '/tab4' },
      items: [
        {
          title: 'Do you supply cafés and offices?',
          description: 'Yes, from 5 kg a month. Email wholesale@saltmarshcoffee.example for a price list and a free tasting box.',
        },
        {
          title: 'Do you offer machine and barista training?',
          description: 'We run a free two-hour dial-in and training session for every new café account in the Bristol area.',
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  title: 'Still have a question?',
  subtitle: 'Our team is in the roastery from 8 am to 5 pm on weekdays.',
  callToAction: { text: 'Contact us', href: '/contact' },
  items: [
    { title: 'Email', description: 'hello@saltmarshcoffee.example', href: 'mailto:hello@saltmarshcoffee.example' },
    { title: 'Phone', description: '+44 117 496 0142', href: 'tel:+441174960142' },
  ],
};
