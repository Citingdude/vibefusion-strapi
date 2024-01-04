import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
    icon: 'bacon';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.Enumeration<['internal', 'external', 'hash']>;
    url: Attribute.String;
    color: Attribute.Enumeration<['purple', 'white', 'transparent']>;
  };
}

export interface GlobalFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Question'>;
    answer: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Answer'>;
  };
}

export interface GlobalStep extends Schema.Component {
  collectionName: 'components_global_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Step title'>;
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Step body'>;
  };
}

export interface HomepageCta extends Schema.Component {
  collectionName: 'components_homepage_ctas';
  info: {
    displayName: 'cta';
    icon: 'ad';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    body: Attribute.RichText;
    button: Attribute.Component<'buttons.button'>;
  };
}

export interface HomepageHero extends Schema.Component {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    icon: 'trophy';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    primary_button: Attribute.Component<'buttons.button'>;
    secondary_button: Attribute.Component<'buttons.button'>;
  };
}

export interface HomepageServices extends Schema.Component {
  collectionName: 'components_homepage_services';
  info: {
    displayName: 'services';
    icon: 'archway';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Title'>;
    color: Attribute.Enumeration<['light', 'dark']>;
    icon: Attribute.Enumeration<['webdesign', 'webshop', 'branding']>;
    button: Attribute.Component<'buttons.button'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface WebdesignBenefit extends Schema.Component {
  collectionName: 'components_webdesign_benefits';
  info: {
    displayName: 'benefit';
    icon: 'ambulance';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['rocket', 'target', 'eyeglass', 'brush', 'phone']
    >;
    title: Attribute.String;
    body: Attribute.RichText;
    button: Attribute.Component<'buttons.button'>;
  };
}

export interface WebdesignFaq extends Schema.Component {
  collectionName: 'components_webdesign_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'global.faq', true>;
    title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Title'>;
  };
}

export interface WebdesignHero extends Schema.Component {
  collectionName: 'components_webdesign_heroes';
  info: {
    displayName: 'hero';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Title'>;
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Body text'>;
    buttons: Attribute.Component<'buttons.button', true> &
      Attribute.SetMinMax<{
        max: 2;
      }>;
  };
}

export interface WebdesignProcess extends Schema.Component {
  collectionName: 'components_webdesign_processes';
  info: {
    displayName: 'Process';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Title'>;
    steps: Attribute.Component<'global.step', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 5;
      }>;
  };
}

export interface WebdesignWhy extends Schema.Component {
  collectionName: 'components_webdesign_whies';
  info: {
    displayName: 'why';
    icon: 'ankh';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'webdesign.benefit', true> &
      Attribute.SetMinMax<{
        max: 6;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.button': ButtonsButton;
      'global.faq': GlobalFaq;
      'global.step': GlobalStep;
      'homepage.cta': HomepageCta;
      'homepage.hero': HomepageHero;
      'homepage.services': HomepageServices;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'webdesign.benefit': WebdesignBenefit;
      'webdesign.faq': WebdesignFaq;
      'webdesign.hero': WebdesignHero;
      'webdesign.process': WebdesignProcess;
      'webdesign.why': WebdesignWhy;
    }
  }
}
