import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CELL_WIDTH, NUMBER_COLORS } from "../constants";

const CellBase = ({ className, text }) => (
  <div className={className}>{text}</div>
);

const Cell = styled(CellBase)`
  width: ${CELL_WIDTH}px;
  height: ${CELL_WIDTH}px;
  line-height: ${CELL_WIDTH}px;
  display: inline-block;
  position: relative;
  background: #c0c0c0;
  border: solid #808080;
  border-width: 0 1px 1px 0;
  overflow: hidden;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  text-align: center;
  ${({ text }) =>
    typeof text === "number" && `color: ${NUMBER_COLORS[text - 1]}`}};

  &:after {
    /* content: ""; */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #c0c0c0;
    border: 2px outset #ececec;
  }
`;

Cell.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Cell;
