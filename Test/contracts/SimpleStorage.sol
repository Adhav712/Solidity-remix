// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.5.16;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract SimpleStorage {

    uint number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint){
        return number;
    }
}