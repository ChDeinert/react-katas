import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
  <form className="comments__form-wrapper" onSubmit={props.submit}>
    <div className="comments__form-row">
      <label className="comments__form-label">
        Name
        <input type="text" name="name" className="comments__form-input" />
      </label>
    </div>
    <div className="comments__form-row">
      <label className="comments__form-label">
        Mail
        <input type="text" name="mail" className="comments__form-input" />
      </label>
    </div>
    <div className="comments__form-row">
      <label className="comments__form-label">
        Content
        <textarea name="content" className="comments__form-textarea" />
      </label>
    </div>
    <div className="comments__form-row">
      <input
        type="submit"
        className="comments__form-button comments__form-button--submit"
        value="Submit"
      />
      <button
        className="comments__form-button comments__form-button--cancel"
        onClick={props.cancel}
      >
        Cancel
      </button>
    </div>
  </form>
);

CommentForm.propTypes = {
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default CommentForm;
