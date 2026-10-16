import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps, HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Say hello',
  subtitle: 'Questions about an order, wholesale or brewing? Drop us a line, or come and see the roaster.',
  tagline: 'Contact',
};

// Contact2 data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: 'Fill in the form and we will reply within one working day.',
  },
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
      { type: 'text', label: 'First name', name: 'name', autocomplete: 'off', placeholder: 'First name' },
      { type: 'text', label: 'Last name', name: 'lastName', autocomplete: 'off', placeholder: 'Last name' },
      { type: 'email', label: 'Email', name: 'email', autocomplete: 'on', placeholder: 'you@example.com' },
    ],
    radioBtns: {
      label: 'What is this about?',
      radios: [{ label: 'My order' }, { label: 'Wholesale' }, { label: 'Something else' }],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [{ label: 'Send me a fortnightly email about new coffees', value: '' }],
    btn: { title: 'Send message', type: 'submit' },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Quick help',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'Read our frequently asked questions',
      icon: IconHelp,
      callToAction: { text: 'Go to FAQs', href: '/faqs' },
    },
    {
      title: 'Email the team',
      description: 'Replies within one working day',
      icon: IconMessages,
      callToAction: { text: 'Write to us', href: 'mailto:hello@saltmarshcoffee.example' },
    },
    {
      title: 'Wholesale',
      description: 'Supplying a café or office',
      icon: IconHeadset,
      callToAction: { text: 'Request price list', href: 'mailto:wholesale@saltmarshcoffee.example' },
    },
  ],
};
