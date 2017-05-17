import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const PriceCard = ({
  title,
  info,
  amount,
  currency,
  period,
  features,
  action,
}) => (
  <div className="price-card">
    <h2 className="price-card__title">{title}</h2>

    <hr className="price-card__divider" />

    <div className="price-card__price">
      <span className="price-card__amount">{amount}</span>
      {currency
        ? <span className="price-card__currency">{currency}</span>
        : null}
      <span className="price-card__period">{period}</span>
    </div>

    {info ? <p className="price-card__info">{info}</p> : null}

    <hr className="price-card__divider" />

    {features.length > 0
      ? <ul className="price-card__features">
          {features.map(feature => (
            <li className="price-card__feature" key={shortid.generate()}>
              {feature}
            </li>
          ))}
        </ul>
      : null}

    <div className="price-card__action-wrapper">
      <button className="price-card__action" onClick={action}>Get this!</button>
    </div>
  </div>
);

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string,
  period: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.func.isRequired,
};

PriceCard.defaultProps = {
  features: [],
};

export default PriceCard;
