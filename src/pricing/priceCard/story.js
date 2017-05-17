import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PriceCard from './';
import '../style.sass';

storiesOf('PriceCard', module)
  .add('Standard', () => (
    <PriceCard
      title="Standard"
      amount="10,-"
      currency="€"
      period="Month"
      action={action('Click')}
    />
  ))
  .add('Pro', () => (
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
      action={action('Click')}
    />
  ))
  .add('OSS', () => (
    <PriceCard
      title="Open Source"
      info="This is Free forever! So enjoy it and don't think you have to pay anything"
      amount="Free"
      period="Forever"
      features={['Open Source', 'MIT License', 'And more']}
      action={action('Click')}
    />
  ));
