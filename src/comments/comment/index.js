import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ commentItem }) => (
  <div className="comments__item">
    <div className="comments__item-head">
      <span className="comments__item-head__name">
        {commentItem.name}
      </span>
      <span className="comments__item-head__mail">
        {commentItem.mail}
      </span>
    </div>
    <p className="comments__item-content">
      {commentItem.content}
    </p>
  </div>
);

Comment.propTypes = {
  commentItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
