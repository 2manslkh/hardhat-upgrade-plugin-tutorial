// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ILogic.sol';

contract LogicTwo is ILogic {
    function getLogicNumber() public pure override returns (int8 logicNumber) {
        return 2;
    }
}