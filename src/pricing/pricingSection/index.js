import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const PricingSection = ({ children }) => (
  <section className="pricing">
    {children}
  </section>
);

export default PricingSection;
