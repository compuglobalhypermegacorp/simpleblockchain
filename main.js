const SHA256 = require('crypto-js/sha256');
const {
    PerformanceObserver,
    performance
} = require('perf_hooks');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) != Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block mined: ' + this.hash + '\n');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0, "8/8/2019", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        // newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let nvmiToken = new Blockchain();
nvmiToken.difficulty = 5;
console.log('Difficulty: ' + nvmiToken.difficulty);

console.log('Mining block 1...');
var t0 = performance.now();
nvmiToken.addBlock(new Block(1, "9/1/2019", {
    amount: 50
}));
var t1 = performance.now();
console.log('Time cost: ' + (t1 - t0) + ' milliseconds.\n');

var t0 = performance.now();
console.log('Mining block 2...');
nvmiToken.addBlock(new Block(2, "9/2/2019", {
    amount: 100
}));
var t1 = performance.now();
console.log('Time cost: ' + (t1 - t0) + ' milliseconds.\n');

var t0 = performance.now();
console.log('Mining block 3...');
nvmiToken.addBlock(new Block(3, "9/3/2019", {
    amount: 200
}));
var t1 = performance.now();
console.log('Time cost: ' + (t1 - t0) + ' milliseconds.\n');

console.log(JSON.stringify(nvmiToken, null, 4));
console.log('Unmolested Blockchain? ' + nvmiToken.isChainValid());

/**
 * Test invalidating chain
 */
/*
nvmiToken.chain[2].data = {
    amount: 500
};
nvmiToken.chain[2].hash - nvmiToken.chain[2].calculateHash();
console.log('Unmolested Blockchain? ' + nvmiToken.isChainValid());
*/