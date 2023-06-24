// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract User {
    address public immutable i_owner;
    address public immutable i_contract;
    UserDefails private userDetails;
    uint256 public balance;


    struct UserDefails {
        string FirstName;
        string LastName;
        string Email;
        string PasswordHash;
    }

    constructor(address _owner) {
        i_owner = _owner;
        i_contract = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == i_owner || msg.sender == i_contract,
            "Profile: Only owner can call this function."
        );
        _;
    }

    function getUserDetails(address userAddress) public view returns (UserDefails memory) {
        require(userAddress == i_owner, "Only owner can call this function");
        return userDetails;
    }

    function updateUserDetails(
        string memory firstName, 
        string memory lastName, 
        string memory email,
        string memory passwordHash) public returns(bool) {

        userDetails.FirstName = firstName;
        userDetails.LastName = lastName;
        userDetails.Email = email;
        userDetails.PasswordHash = passwordHash;

        return true;
    }

    function getHash(address userAddress) public view returns(string memory){
        require(userAddress == i_owner, "Only owner can call this function");
        return userDetails.PasswordHash;
    }
}
