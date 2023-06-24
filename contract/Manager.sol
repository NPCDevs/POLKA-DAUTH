pragma solidity ^0.8.16;

import "./User.sol";


contract Manager {
    address public immutable i_owner;
    uint256 public totalFees;
    mapping(address => address) public users;

    struct ProfileCreatedResponse {
        address profileAddress;
        address owner;
    }

    struct ProfileUpdatedResponse {
        bool success;
    }

    event ProfileCreated(ProfileCreatedResponse profileCreatedResponse);
    event ProfileUpdate(ProfileUpdatedResponse profileUpdatedResponse);

    constructor() {
        i_owner = msg.sender;
    }

    function createProfile(
        string memory firstName, 
        string memory lastName, 
        string memory email,
        string memory passwordHash) public {
        User newProfile = new User(msg.sender, firstName, lastName, email, passwordHash);
        users[msg.sender] = address(newProfile);

        emit ProfileCreated(
            ProfileCreatedResponse(address(newProfile), msg.sender)
        );
    }

    struct checkUser {
        bool isExists;
        User.UserDefails user;
    }

    function updateUserProfile(
        address _profile,
        string memory firstName, 
        string memory lastName, 
        string memory email,
        string memory passwordHash) public {

        address profileAddress = users[_profile];
        User user = User(profileAddress);
        bool updated = user.updateUserDetails(firstName, lastName, email, passwordHash);

        emit ProfileUpdate(
            ProfileUpdatedResponse(updated)
        );
    }
   

    function getUser(
        address _profile
    ) public view returns (checkUser memory) {

        address profileAddress = users[_profile];
        User user = User(profileAddress);
        //require(profileAddress != address(0), "User not found");
        if(profileAddress != address(0))
        {
            return checkUser(true, user.getUserDetails(msg.sender));
        }
        else
        {
            return checkUser(false, User.UserDefails("", "", "", ""));
        }
        
    }


    modifier onlyOwner() {
        require(
            msg.sender == i_owner,
            "Manager: Only owner can call this function."
        );
        _;
    }

}
