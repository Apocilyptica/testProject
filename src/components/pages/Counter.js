import React, { Component } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt, faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      variant: "info",
      upButtonDisabled: false,
      downButtonDisabled: false,
    };
  }

  render() {
    const incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
        variant: "success",
        downButtonDisabled: false,
        upButtonDisabled: false,
      });
      if (this.state.count >= 9)
        this.setState({
          upButtonDisabled: true,
        });
    };

    const decrementCount = () => {
      this.setState({
        count: this.state.count - 1,
        variant: "danger",
        upButtonDisabled: false,
        downButtonDisabled: false,
      });
      if (this.state.count <= -9) {
        this.setState({
          downButtonDisabled: true,
        });
      }
    };

    return (
      <div>
        <h1 className="text-uppercase py-5 text-center">Counter</h1>
        <div className="text-center">
          <Button variant="secondary" size="lg" type="button" onClick={incrementCount} disabled={this.state.upButtonDisabled}>
            Count Up <FontAwesomeIcon icon={faLevelUpAlt} color="green" />
          </Button>
        </div>
        <div className="py-5 text-center mx-5">
          <ProgressBar variant={this.state.variant} now={this.state.count} label={`Count: ${this.state.count}`} max="10" min="-10" />{" "}
        </div>
        <div className="text-center">
          <Button variant="secondary" size="lg" type="button" onClick={decrementCount} disabled={this.state.downButtonDisabled}>
            Count Down <FontAwesomeIcon icon={faLevelDownAlt} color="red" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
