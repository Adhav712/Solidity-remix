// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.5.16;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Hashnotes {

    // uint number;

    // /**
    //  * @dev Store value in variable
    //  * @param num value to store
    //  */
    // function store(uint num) public {
    //     number = num;
    // }

    // /**
    //  * @dev Return value 
    //  * @return value of 'number'
    //  */
    // function retrieve() public view returns (uint){
    //     return number;
    // }


    string input = "Welcome to Hashnotes";
    string input2;
    address public owner;
    string public message;

    constructor(string memory _message )public{
        owner = msg.sender;
        message = _message;
    }

    function set(string memory x) public payable{
        require(msg.sender == owner);
        input2 = x;
    }

    function get() public view returns(string memory,string memory){
        return (input,input2);
    }
}