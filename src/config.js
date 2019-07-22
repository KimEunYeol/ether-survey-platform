const config = {
	contract: {
		manager: {
			abi: [
				{
					"constant": true,
					"inputs": [],
					"name": "getSurveys",
					"outputs": [
						{
							"name": "",
							"type": "address[]"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_title",
							"type": "bytes32"
						},
						{
							"name": "_reward",
							"type": "uint256"
						}
					],
					"name": "createSurvey",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_survey",
							"type": "address"
						}
					],
					"name": "getTitle",
					"outputs": [
						{
							"name": "",
							"type": "bytes32"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "",
							"type": "address"
						}
					],
					"name": "Created",
					"type": "event"
				}
			],
			addr: '0x220e63753296a96ea41cab518f1626cc23a73d3c'
		},
		survey: {
			abi: [
				{
					"constant": false,
					"inputs": [
						{
							"name": "_response",
							"type": "bytes32[]"
						}
					],
					"name": "participate",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "getBalance",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_addr",
							"type": "address"
						}
					],
					"name": "getLog",
					"outputs": [
						{
							"name": "",
							"type": "bytes32[]"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_question",
							"type": "bytes32"
						}
					],
					"name": "getQuestion",
					"outputs": [
						{
							"name": "",
							"type": "bytes32[]"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_question",
							"type": "bytes32"
						},
						{
							"name": "_answer",
							"type": "bytes32"
						}
					],
					"name": "getCount",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_question",
							"type": "bytes32"
						},
						{
							"name": "_answers",
							"type": "bytes32[]"
						}
					],
					"name": "addQuestion",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "getQuestions",
					"outputs": [
						{
							"name": "",
							"type": "bytes32[]"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"name": "_title",
							"type": "bytes32"
						},
						{
							"name": "_reward",
							"type": "uint256"
						}
					],
					"payable": true,
					"stateMutability": "payable",
					"type": "constructor"
				}
			]
		}
	}
}

export default config
