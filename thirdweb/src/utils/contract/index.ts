export const contractAddress = '0x63b634Bc5Ca5Aa03fD60292F68D593bEF6f20472';
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
    inputs: [
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
            internalType: 'bool',
            name: 'isExists',
            type: 'bool',
          },
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
            name: 'user',
            type: 'tuple',
          },
        ],
        internalType: 'struct Manager.checkUser',
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
