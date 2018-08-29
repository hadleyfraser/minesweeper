import React from "react";
import styled from "styled-components";
import { CELL_WIDTH } from "../constants";
import Cell from "../Cell";
import { generateBoard } from "./index.helper";

const Row = styled.div`
  height: ${CELL_WIDTH}px;
`;

class GameBoardBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameboard: generateBoard()
    };
  }

  render() {
    const { className } = this.props;
    const { gameboard } = this.state;

    return (
      <div className={className}>
        {gameboard.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell key={`${rowIndex}${colIndex}`} text={cell} />
            ))}
          </Row>
        ))}
      </div>
    );
  }
}

const GameBoard = styled(GameBoardBase)`
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
`;

export default GameBoard;
