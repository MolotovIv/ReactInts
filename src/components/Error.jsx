import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    const { children } = this.props;
    if (hasError) {
      return null;
    }

    return children;
  }
}
export default ErrorBoundary;
