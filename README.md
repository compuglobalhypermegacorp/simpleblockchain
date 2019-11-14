# simpleblockchain
My little simple blockchain in Javascript with proof of work.  Mr. Whiskers' junior intern's simple blockchain in Javascript with proof of work.

Instructions to install, updated the difficulty, and print the chain below. Enjoy.

```
git clone https://github.com/compuglobalhypermegacorp/simpleblockchain
cd simpleblockchain
npm install
npm main.js

# if you want to change difficulty edit line 69
# nvmiToken.difficulty = 4;
# corresponds to leading zeros in the SHA-256 hash

Difficulty: 4
Mining block 1...
Block mined: 000071c351069df2402c884c887ceb7f582448e69bc37264046896dfc13e4fa7

Time cost: 337.66369700431824 milliseconds.

Mining block 2...
Block mined: 000053e9b7240a45302e3a918fa1318f1e7e73d72037077ef50e2cb1b8f51682

Time cost: 471.9819730222225 milliseconds.

Mining block 3...
Block mined: 000070fd488cfdbdffbb639a3a256fcf9fc75923fabfd82700f4a4b8ea76e046

Time cost: 137.68802401423454 milliseconds.

{
    "chain": [
        {
            "index": 0,
            "timestamp": "8/8/2019",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "eb2ccc076ddb63c82a5ff0575b6ca34a6e72075056ea058c3e8d584d5e1ea909",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "9/1/2019",
            "data": {
                "amount": 50
            },
            "previousHash": "eb2ccc076ddb63c82a5ff0575b6ca34a6e72075056ea058c3e8d584d5e1ea909",
            "hash": "000071c351069df2402c884c887ceb7f582448e69bc37264046896dfc13e4fa7",
            "nonce": 34254
        },
        {
            "index": 2,
            "timestamp": "9/2/2019",
            "data": {
                "amount": 100
            },
            "previousHash": "000071c351069df2402c884c887ceb7f582448e69bc37264046896dfc13e4fa7",
            "hash": "000053e9b7240a45302e3a918fa1318f1e7e73d72037077ef50e2cb1b8f51682",
            "nonce": 53721
        },
        {
            "index": 3,
            "timestamp": "9/3/2019",
            "data": {
                "amount": 200
            },
            "previousHash": "000053e9b7240a45302e3a918fa1318f1e7e73d72037077ef50e2cb1b8f51682",
            "hash": "000070fd488cfdbdffbb639a3a256fcf9fc75923fabfd82700f4a4b8ea76e046",
            "nonce": 15920
        }
    ],
    "difficulty": 4
}
Unmolested Blockchain? true
```
# todo
- [ ] Implement transaction lists in each block
- [ ] Ask user to specify block size/time, which increases difficulty
- [ ] Compute hypothetical time to remine the whole blockchain
- [ ] Public and private key pair for transactions and computing of each balance
- [ ] Angular UX to play with the blockchain
- [ ] Invent a new consensus mechanism using Proof of Meow™
