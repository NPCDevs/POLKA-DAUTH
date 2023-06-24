export const contractAddress = '0x827C0c0a3D47260ba6984ee05d70227a81c79aE7';
export const contractAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'profileAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        indexed: false,
        internalType: 'struct Manager.ProfileCreatedResponse',
        name: 'profileCreatedResponse',
        type: 'tuple',
      },
    ],
    name: 'ProfileCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct Manager.ProfileUpdatedResponse',
        name: 'profileUpdatedResponse',
        type: 'tuple',
      },
    ],
    name: 'ProfileUpdate',
    type: 'event',
  },
  {
    inputs: [],
    name: 'createProfile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_profile',
        type: 'address',
      },
    ],
    name: 'getUser',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'FirstName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'LastName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'Email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'PasswordHash',
            type: 'string',
          },
        ],
        internalType: 'struct User.UserDefails',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'i_owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalFees',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_profile',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'firstName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'lastName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'passwordHash',
        type: 'string',
      },
    ],
    name: 'updateUserProfile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'users',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
