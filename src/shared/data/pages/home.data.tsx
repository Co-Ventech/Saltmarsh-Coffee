import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconClock,
  IconCoffee,
  IconDownload,
  IconFlame,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconPackage,
  IconPhoneCall,
  IconPlayerPause,
  IconRecycle,
  IconTruckDelivery,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/coffee-hero.svg';
import coffeeBagImg from '~/assets/images/coffee-bag.svg';
import coffeePourOverImg from '~/assets/images/coffee-pour-over.svg';
import coffeeBoxImg from '~/assets/images/coffee-box.svg';
import avatar1 from '~/assets/images/avatar-1.svg';
import avatar2 from '~/assets/images/avatar-2.svg';
import avatar3 from '~/assets/images/avatar-3.svg';
import avatar4 from '~/assets/images/avatar-4.svg';
import avatar5 from '~/assets/images/avatar-5.svg';
import avatar6 from '~/assets/images/avatar-6.svg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Coffee roasted <span className="sm:whitespace-nowrap">on Tuesday,</span> at your door by Thursday
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Saltmarsh Coffee
        </span>{' '}
        is a small roastery on the Bristol quayside.{' '}
      </span>
      We roast single-origin beans in 12 kg batches, twice a week, and post them the same day. Subscribe, pause or
      skip any time.
    </>
  ),
  callToAction: {
    text: 'Start a subscription',
    href: '/pricing',
    icon: IconDownload,
  },
  callToAction2: {
    text: "See this week's roast",
    href: '/services',
  },
  image: {
    src: heroImg,
    alt: 'Fresh roasted coffee beans cooling in the Saltmarsh roastery',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Why people stay with <span className="whitespace-nowrap">Saltmarsh Coffee</span>
      </>
    ),
    subtitle: 'Small batches, honest sourcing and a delivery that actually arrives when we said it would.',
    tagline: 'Why Saltmarsh',
  },
  items: [
    {
      title: 'Roasted to order',
      description: 'We roast every Tuesday and Friday in 12 kg batches. Your bag is packed the same day, never off a shelf.',
      icon: IconFlame,
    },
    {
      title: 'Traceable single origins',
      description: 'Every coffee comes from a named farm or washing station, bought at a fair price we publish on the bag.',
      icon: IconLeaf,
    },
    {
      title: 'Posted the same day',
      description: 'Roasted Tuesday, on your doormat by Thursday across the UK. Free delivery on subscriptions.',
      icon: IconTruckDelivery,
    },
    {
      title: 'Skip or pause any time',
      description: 'Going away for two weeks? Skip a delivery or pause in two clicks. No emails, no guilt.',
      icon: IconPlayerPause,
    },
    {
      title: 'Plastic-free packaging',
      description: 'Compostable bags and recycled cardboard boxes. Send the empty bags back and we reuse the boxes.',
      icon: IconRecycle,
    },
    {
      title: 'Brew guides included',
      description: 'Every bag has a QR code with grind size, ratio and timings for filter, espresso and AeroPress.',
      icon: IconCoffee,
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'This week on the roaster',
    subtitle: 'Ethiopia Guji, washed. Blueberry, jasmine and honey.',
    tagline: 'Current release',
  },
  content:
    'A bright, tea-like coffee from smallholders around the Guji zone. We roast it light to keep the floral notes, so it shines as a filter or a gentle espresso.',
  items: [
    {
      title: 'Taste',
      description: 'Blueberry jam, jasmine and a honey sweetness that lingers.',
    },
    {
      title: 'Origin',
      description: 'Washed process, grown at 2,000 m by smallholder farmers near Guji.',
    },
    {
      title: 'Best brewed as',
      description: 'V60 or Kalita at 1:16, water at 94°C, about three minutes.',
    },
  ],
  image: {
    src: coffeeBagImg,
    alt: 'A bag of Saltmarsh Ethiopia Guji coffee',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Not sure where to start? Our Sampler sends three small bags a month so you can find what you like, then switch to a full-size subscription whenever you are ready.',
  items: [
    { title: 'Three 100 g bags every month' },
    { title: 'A light, a medium and a dark roast' },
    { title: 'Tasting notes on every bag' },
    { title: 'Cancel or switch plans any time' },
    { title: 'Free UK delivery' },
    { title: 'Brew guide for each coffee' },
  ],
  image: {
    src: coffeePourOverImg,
    alt: 'A pour-over brewer filling a glass server',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: coffeeBoxImg,
    alt: 'A Saltmarsh delivery box',
  },
  header: {
    title: 'From roaster to doorstep in three steps',
  },
  items: [
    {
      title: 'Pick your coffee',
      description: 'Choose a plan and a roast style. Filter, espresso or surprise me.',
      icon: IconCoffee,
    },
    {
      title: 'We roast and post',
      description: 'Your beans are roasted on Tuesday or Friday and posted the same day.',
      icon: IconPackage,
    },
    {
      title: 'Brew and enjoy',
      description: 'Open the box, follow the brew guide and taste coffee at its freshest.',
      icon: IconTruckDelivery,
    },
    {
      title: 'Fresh at your door',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say',
    subtitle: 'Sample reviews for this demo site.',
  },
  testimonials: [
    {
      name: 'Tayla K.',
      job: 'Subscriber since 2024',
      testimonial:
        'The Guji was the best filter coffee I have had at home. Roasted Tuesday, here Thursday, and it tastes like it.',
      image: { src: avatar1, alt: 'Tayla K.' },
      href: '/',
    },
    {
      name: 'Silver J.',
      job: 'Café owner, Clifton',
      testimonial:
        'We switched our house espresso to Saltmarsh last spring. Consistent, fairly priced, and the team answers messages in minutes.',
      image: { src: avatar2, alt: 'Silver J.' },
      href: '/',
    },
    {
      name: 'Kelsey A.',
      job: 'Home brewer',
      testimonial:
        'The brew guides on the bag took my V60 from bitter to brilliant. The sampler was a great way to find my favourite.',
      image: { src: avatar3, alt: 'Kelsey A.' },
      href: '/',
    },
    {
      name: 'Sarah J.',
      job: 'Office manager',
      testimonial: 'Our office subscription arrives like clockwork and pausing over Christmas took ten seconds.',
      image: { src: avatar4, alt: 'Sarah J.' },
      href: '/',
    },
    {
      name: 'Keith Y.',
      job: 'Freelance designer',
      testimonial:
        'I love knowing the farm and the roast date on every bag. Packaging is plastic-free and the boxes get reused.',
      image: { src: avatar5, alt: 'Keith Y.' },
      href: '/',
    },
    {
      name: 'Lisa G.',
      job: 'Teacher',
      testimonial: 'Great value for coffee this good, and delivery has never been late. Highly recommended.',
      image: { src: avatar6, alt: 'Lisa G.' },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently asked questions',
    subtitle: 'Everything about ordering, delivery and brewing. Can not find it? Email us.',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'How fresh is the coffee?',
      description:
        'We roast every Tuesday and Friday and post the same day, so most bags reach you within two days of roasting.',
    },
    {
      title: 'Do you grind the beans?',
      description:
        'Yes. Choose whole bean, filter, espresso or cafetière grind at checkout, and we grind just before packing.',
    },
    {
      title: 'Can I skip, pause or cancel?',
      description:
        'Any time from your account page. Skip a delivery, pause for a month or cancel with no fee, up to 48 hours before your next roast.',
    },
    {
      title: 'How much is delivery?',
      description: 'Free on all subscriptions across the UK. One-off orders under £30 ship for £3.20.',
    },
    {
      title: 'Do you sell wholesale to cafés?',
      description:
        'Yes. We supply cafés and offices in Bristol and beyond from 5 kg a month. Email wholesale@saltmarshcoffee.example for a price list and a free tasting box.',
    },
    {
      title: 'How should I store the beans?',
      description:
        'Keep them in the bag, sealed, somewhere cool and dark. Use within four to six weeks of the roast date for the best flavour.',
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Pick your subscription',
    subtitle: 'Free UK delivery, no contract. Skip, pause or cancel any time.',
  },
  prices: [
    {
      title: 'sampler',
      price: 9,
      period: 'per month',
      items: [
        { description: 'Three 100 g bags' },
        { description: 'Light, medium and dark' },
        { description: 'Tasting notes on each bag' },
        { description: 'Free UK delivery' },
      ],
      callToAction: {
        text: 'Start sampler',
        href: '/contact',
      },
      hasRibbon: false,
    },
    {
      title: 'weekly filter',
      price: 14,
      period: 'per month',
      items: [
        { description: 'One 250 g bag every month' },
        { description: 'Our current single origin' },
        { description: 'Any grind you like' },
        { description: 'Free UK delivery' },
      ],
      callToAction: {
        text: 'Start subscription',
        href: '/contact',
      },
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
      callToAction: {
        text: 'Talk to us',
        href: '/contact',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in touch',
    subtitle: 'Questions about an order, wholesale or brewing? We reply within a working day.',
    tagline: 'Contact',
  },
  content: 'Visit the roastery on the Bristol quayside, or send us a message and we will get back to you.',
  items: [
    {
      title: 'Roastery & shop',
      description: ['14 Quay Street', 'Bristol BS1 4ST, UK'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Phone: +44 117 496 0142', 'Email: hello@saltmarshcoffee.example'],
      icon: IconPhoneCall,
    },
    {
      title: 'Opening hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday: 09:00 - 14:00'],
      icon: IconClock,
    },
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

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Fresh coffee, every fortnight',
  subtitle: 'Join 2,400 subscribers. Roasted on Tuesday, at your door by Thursday.',
  callToAction: {
    text: 'Start a subscription',
    href: '/pricing',
    icon: IconCoffee,
  },
  items: [
    {
      title: 'Browse subscriptions',
      description: 'Sampler, filter or office plans from £9 a month.',
      href: '/pricing',
    },
    {
      title: 'Our story',
      description: 'How a Bristol quayside roastery got started.',
      href: '/about',
    },
    {
      title: 'Get roast news',
      description: 'New releases and brewing tips, once a fortnight.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Join',
          type: 'submit',
        },
      },
    },
  ],
};
