// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Paychain{
// owner of smart contract
   address public owner;

   constructor(){
         owner = msg.sender;
         //called on once
         //check - deployer of smart contract
}
// create Struct and Mapping for request, transaction and name
struct request {
    address requestor;
    uint256 amount;
    string message;
    string name;
}
struct sendRecieve {
    string action;
    uint256 amount;
    string message;
    address otherPartyAddress;
    string otherParttName;
}
struct userName{
    string name;
    bool hasName;
}
mapping(address => userName) names;
mapping(address => request[]) requests;
mapping(address => sendRecieve[]) history;

//add a name to wallet address
function addName(string memory _name) public {
    //function in solidity
    userName storage newUserName = names[msg.sender];
    newUserName.name = _name;
    newUserName.hasName = true;
}

}