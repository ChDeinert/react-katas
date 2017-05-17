import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import PricingSection from './';
import '../style.sass';

import PriceCard from '../priceCard';

storiesOf('PricingSection', module)
  .add('One Cards', () => (
    <PricingSection>
      <PriceCard
        title="Standard"
        amount="10,-"
        currency="€"
        period="Month"
        features={['Access', 'Basic Features']}
        action={action('Standard')}
      />
    </PricingSection>
  ))
  .add('Two Cards', () => (
    <PricingSection>
      <PriceCard
        title="Standard"
        amount="10,-"
        currency="€"
        period="Month"
        features={['Access', 'Basic Features']}
        action={action('Standard')}
      />
      <PriceCard
        title="Pro"
        info="Enjoy the feel of going Pro. With additional Features!"
        amount="100,-"
        currency="€"
        period="Month"
        features={[
          'All Standard features',
          'Additional Features',
          'Feel more awesome',
        ]}
        action={action('Pro')}
      />
    </PricingSection>
  ))
  .add('Three Cards', () => (
    <PricingSection>
      <PriceCard
        title="Open Source"
        info="This is Free forever! So enjoy it and don't think you have to pay anything"
        amount="Free"
        period="Forever"
        features={['Open Source', 'MIT License', 'And more']}
        action={action('Click')}
      />
      <PriceCard
        title="Pro"
        info="Enjoy the feel of going Pro. With additional Features!"
        amount="100,-"
        currency="€"
        period="Month"
        features={[
          'All Standard features',
          'Additional Features',
          'Feel more awesome',
        ]}
        action={action('Pro')}
      />
      <PriceCard
        title="Standard"
        amount="10,-"
        currency="€"
        period="Month"
        features={['Access', 'Basic Features']}
        action={action('Standard')}
      />
    </PricingSection>
  ));
