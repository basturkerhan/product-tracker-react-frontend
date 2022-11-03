export const PTRACKER_ABI =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "uid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "manufacturer",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "origin",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productName",
        "type": "string"
      }
    ],
    "name": "AddProduct",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "newProductId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifySubProductId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "status",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "date",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "subProductName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "parentProductName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "requestor",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "confirmer",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifyId",
        "type": "uint256"
      }
    ],
    "name": "VerifyProduct",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_productName",
        "type": "string"
      }
    ],
    "name": "addNewProduct",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newProductId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_childProductId",
        "type": "uint256"
      }
    ],
    "name": "addSubProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_firmOwner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_firmName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_firmLocation",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "_isProducerOrShipper",
        "type": "bool"
      }
    ],
    "name": "createFirmAndOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ownerAddress",
        "type": "address"
      }
    ],
    "name": "getFirmById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "firmName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "firmLocation",
            "type": "string"
          },
          {
            "internalType": "enum Roles",
            "name": "role",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "firmAddress",
            "type": "address"
          }
        ],
        "internalType": "struct Firm",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "firmOwner",
        "type": "address"
      }
    ],
    "name": "getFirmProducts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "uid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastOrigin",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "manufacturerId",
            "type": "address"
          }
        ],
        "internalType": "struct Product[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "firmOwner",
        "type": "address"
      }
    ],
    "name": "getFirmVerifies",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "uid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "verifySubProduct",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "verifyStatus",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "verifyDate",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "verifyAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "verifyParentProduct",
            "type": "uint256"
          }
        ],
        "internalType": "struct Verify[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_uid",
        "type": "uint256"
      }
    ],
    "name": "getProductById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "uid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastOrigin",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "manufacturerId",
            "type": "address"
          }
        ],
        "internalType": "struct Product",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRole",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "verifyCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_verifyId",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "_status",
        "type": "uint32"
      }
    ],
    "name": "verifySubProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];