import React from 'react';

import PropTypes from 'prop-types';

import { ErrorBoundaryModal } from '../Modals';

import { Bugsnag } from 'utils/BugSnag';
import { AppError } from 'utils/Errors';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentError: null,
      modalState: false,
      execFunc: null,
    };
    this.setModalState = this.setModalState.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.reloadApp = this.reloadApp.bind(this);
  }

  setModalState(state) {
    this.setState({
      ...this.state,
      modalState: state,
    });
  }

  closeModal() {
    this.setModalState(false);
    this.reloadApp();
  }

  reloadApp() {
    window.location.reload();
  }

  componentDidCatch(error, info) {
    Bugsnag.notify(
      new AppError({
        message: error.message,
        name: this.props.name,
        meta: {
          stackTrace: info,
        },
      })
    );
    this.setState({
      currentError: error,
      modalState: true,
      execFunc: error.execFunc,
    });
    this.props.onError && this.props.onError();
  }

  render() {
    if (this.state.currentError) {
      return (
        <ErrorBoundaryModal
          modalState={this.state.modalState}
          modalClose={this.closeModal}
        />
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  name: PropTypes.string.isRequired,
  onModalClose: PropTypes.func,
  onError: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  debugMode: false,
};
