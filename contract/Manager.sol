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

    function createProfile() public {
        User newProfile = new User(msg.sender);
        users[msg.sender] = address(newProfile);

        emit ProfileCreated(
            ProfileCreatedResponse(address(newProfile), msg.sender)
        );
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
    ) public view returns (User.UserDefails memory) {

        address profileAddress = users[_profile];
        User user = User(profileAddress);
        return user.getUserDetails(msg.sender);
    }


    modifier onlyOwner() {
        require(
            msg.sender == i_owner,
            "Manager: Only owner can call this function."
        );
        _;
    }

}
