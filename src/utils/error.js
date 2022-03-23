import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.log(errorInfo.componentStack);
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      if (React.isValidElement(this.props.fallback)) {
        return this.props.fallback;
      }

      return /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            color: "red",
          },
        },
        this.state.error.toString()
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
