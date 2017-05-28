import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CommentList from './commentList';
import Comment from './comment';
import CommentForm from './commentForm';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: props.commentList.length > 0 ? false : true,
      commentList: props.commentList,
    };
    this.submitForm = this.submitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  render() {
    const { showForm, commentList } = this.state;
    const comments = commentList.map(currentComment => (
      <Comment commentItem={currentComment} key={shortid.generate()} />
    ));

    return (
      <section>
        {showForm
          ? <CommentForm submit={this.submitForm} cancel={this.cancelForm} />
          : <div className="comments__form-wrapper">
              <button
                className="comments__form-button"
                onClick={() => this.setState({ showForm: true })}
              >
                Add Comment
              </button>
            </div>}
        <CommentList>
          {comments}
        </CommentList>
      </section>
    );
  }

  submitForm(event) {
    event.preventDefault();

    const newComment = {
      name: event.target.name.value,
      mail: event.target.mail.value,
      content: event.target.mail.value,
    };
    const newCommentList = this.state.commentList;
    newCommentList.push(newComment);
    this.setState({
      commentList: newCommentList,
      showForm: false,
    });
  }

  cancelForm() {
    this.setState({
      showForm: false,
    });
  }
}

Comments.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
Comments.defaultProps = {
  commentList: [],
};

export default Comments;
