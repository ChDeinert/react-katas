import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ children }) => (
  <div className="comments__list-area">
    {children}
  </div>
);

export default CommentList;
