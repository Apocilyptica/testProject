import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      topLeft: "",
      topCenter: "",
      topRight: "",
      centerLeft: "",
      centerCenter: "",
      centerRight: "",
      bottomLeft: "",
      bottomCenter: "",
      bottomRight: "",
      buttonTL: false,
      buttonTC: false,
      buttonTR: false,
      buttonCL: false,
      buttonCC: false,
      buttonCR: false,
      buttonBL: false,
      buttonBC: false,
      buttonBR: false,
      playerTurn: "X",
      playerActual: "X",
      winner: true,
      winnerName: "",
      countWins: false,
      winsX: 0,
      winsO: 0,
    };
  }

  render() {
    const handleTL = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          topLeft: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonTL: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          topLeft: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonTL: true,
        });
      }
    };

    const handleTC = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          topCenter: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonTC: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          topCenter: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonTC: true,
        });
      }
    };

    const handleTR = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          topRight: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonTR: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          topRight: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonTR: true,
        });
      }
    };

    const handleCL = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          centerLeft: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonCL: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          centerLeft: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonCL: true,
        });
      }
    };

    const handleCC = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          centerCenter: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonCC: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          centerCenter: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonCC: true,
        });
      }
    };

    const handleCR = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          centerRight: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonCR: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          centerRight: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonCR: true,
        });
      }
    };

    const handleBL = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          bottomLeft: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonBL: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          bottomLeft: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonBL: true,
        });
      }
    };

    const handleBC = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          bottomCenter: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonBC: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          bottomCenter: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonBC: true,
        });
      }
    };

    const handleBR = () => {
      if (this.state.playerTurn == "X") {
        this.setState({
          bottomRight: "X",
          playerTurn: "O",
          playerActual: "X",
          buttonBR: true,
        });
      }
      if (this.state.playerTurn == "O") {
        this.setState({
          bottomRight: "O",
          playerTurn: "X",
          playerActual: "O",
          buttonBR: true,
        });
      }
    };

    const TL = this.state.topLeft;
    const TC = this.state.topCenter;
    const TR = this.state.topRight;
    const CL = this.state.centerLeft;
    const CC = this.state.centerCenter;
    const CR = this.state.centerRight;
    const BL = this.state.bottomLeft;
    const BC = this.state.bottomCenter;
    const BR = this.state.bottomRight;
    const P = this.state.playerActual;

    // ToDO come up with a way to map the winArray for winner state
    const winArray = [[TL, CC, BR], [TL, CL, BL], [TC, CC, BC], [TR, CR, BR], [TR, CC, BL], [TR, TC, TL], [CR, CC, CL], [BR, BC, BL], [P]];

    if (TL === P && CC === P && BR === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (TL === P && CL === P && BL === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (TC === P && CC === P && BC === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (TR === P && CR === P && BR === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (TR === P && CC === P && BL === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (TR === P && TC === P && TL === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (CR === P && CC === P && CL === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (BR === P && BC === P && BL === P)
      this.setState({
        winner: false,
        countWins: true,
        winnerName: this.state.playerActual,
        playerActual: "",
        buttonTL: true,
        buttonTC: true,
        buttonTR: true,
        buttonCL: true,
        buttonCC: true,
        buttonCR: true,
        buttonBL: true,
        buttonBC: true,
        buttonBR: true,
      });

    if (this.state.countWins === true) {
      if (this.state.winnerName === "X") this.setState({ winsX: this.state.winsX + 1 });
      if (this.state.winnerName === "O") this.setState({ winsO: this.state.winsO + 1 });
      this.setState({ countWins: false });
    }

    const handleReset = () => {
      this.setState({
        topLeft: "",
        topCenter: "",
        topRight: "",
        centerLeft: "",
        centerCenter: "",
        centerRight: "",
        bottomLeft: "",
        bottomCenter: "",
        bottomRight: "",
        buttonTL: false,
        buttonTC: false,
        buttonTR: false,
        buttonCL: false,
        buttonCC: false,
        buttonCR: false,
        buttonBL: false,
        buttonBC: false,
        buttonBR: false,
        playerTurn: "X",
        playerActual: "X",
        winner: true,
        winnerName: "",
      });
    };

    return (
      <div className="d-flex flex-row flex-nowrap justify-content-between align-items-start align-content-stretch">
        <div className="p-2 border">Player X wins: {this.state.winsX}</div>
        <div className="py-5 text-uppercase text-center">
          <h1>Toggle</h1>
          <div className="py-3" hidden={!this.state.winner}>
            Is's your Turn Player {this.state.playerTurn}
          </div>
          <div className="py-3" hidden={this.state.winner}>
            Game Over Player {this.state.playerTurn}
          </div>
          <div>
            <Button
              type="button"
              onClick={handleTL}
              disabled={this.state.buttonTL}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "0px 5px 5px 0px" }}
            >
              {this.state.topLeft}
            </Button>
            <Button
              type="button"
              onClick={handleTC}
              disabled={this.state.buttonTC}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "0px 5px 5px 5px" }}
            >
              {this.state.topCenter}
            </Button>
            <Button
              type="button"
              onClick={handleTR}
              disabled={this.state.buttonTR}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "0px 0px 5px 5px" }}
            >
              {this.state.topRight}
            </Button>
          </div>
          <div>
            <Button
              type="button"
              onClick={handleCL}
              disabled={this.state.buttonCL}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 5px 5px 0px" }}
            >
              {this.state.centerLeft}
            </Button>
            <Button
              type="button"
              onClick={handleCC}
              disabled={this.state.buttonCC}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 5px 5px 5px" }}
            >
              {this.state.centerCenter}
            </Button>
            <Button
              type="button"
              onClick={handleCR}
              disabled={this.state.buttonCR}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 0px 5px 5px" }}
            >
              {this.state.centerRight}
            </Button>
          </div>
          <div>
            <Button
              type="button"
              onClick={handleBL}
              disabled={this.state.buttonBL}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 5px 0px 0px" }}
            >
              {this.state.bottomLeft}
            </Button>
            <Button
              type="button"
              onClick={handleBC}
              disabled={this.state.buttonBC}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 5px 0px 5px" }}
            >
              {this.state.bottomCenter}
            </Button>
            <Button
              type="button"
              onClick={handleBR}
              disabled={this.state.buttonBR}
              variant="primary"
              size="lg"
              className="tic-tac-toe-button"
              style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px 0px 0px 5px" }}
            >
              {this.state.bottomRight}
            </Button>
          </div>
          <div className="py-5">
            <h3>
              <Button type="button" variant="outline-warning" onClick={handleReset}>
                Reset
              </Button>
            </h3>
          </div>
          <div>
            <h1 hidden={this.state.winner}>Player {this.state.winnerName} Wins!!</h1>
          </div>
        </div>
        <div className="p-2 border">Player O Wins: {this.state.winsO}</div>
      </div>
    );
  }
}

export default Toggle;
