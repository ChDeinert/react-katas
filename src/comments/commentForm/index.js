import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = () => (
  <div className="comments__form-wrapper">
    <div className="comments__form-row">
      <label className="comments__form-label">
        Name
        <input type="text" className="comments__form-input" />
      </label>
    </div>
    <div className="comments__form-row">
      <label className="comments__form-label">
        Mail
        <input type="text" className="comments__form-input" />
      </label>
    </div>
    <div className="comments__form-row">
      <label className="comments__form-label">
        Content
        <textarea className="comments__form-textarea" />
      </label>
    </div>
    <div className="comments__form-row">
      <button className="comments__form-button comments__form-button--submit">
        Submit
      </button>
      <button className="comments__form-button comments__form-button--cancel">
        Cancel
      </button>
    </div>
  </div>
);

CommentForm.propTypes = {};

export default CommentForm;
