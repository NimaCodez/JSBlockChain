const sha256 = require("sha256");

class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
    }

    CreateNewBlock(nonce, PreviousBlockHash, Hash) {
        const NewBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: Hash,
            previousBlockHash: PreviousBlockHash
        }
        this.pendingTransactions = [];
        this.chain.push(NewBlock);
        return NewBlock;
    }

    GetLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    CreateNewTransaction (amount, sender, recipient) {
        const NewTransaction = {
            amount,
            sender,
            recipient
        }
        this.pendingTransactions.push(NewTransaction)
        return this.GetLastBlock()['index'] + 1;
    }

    HashBlock (previousBlockHash, currentBlockData, nonce) {
        const DataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = sha256(DataAsString);
        return hash;
    }

    ProofOfWork(previousBlockHash, currentBlockData) {
        let nonce = 0;
        let hash = this.HashBlock(previousBlockHash, currentBlockData, nonce)
        while (hash.substring(0, 5) !== '00000') {
            nonce++;
            hash = this.HashBlock(previousBlockHash, currentBlockData, nonce)
        }

        return nonce;
    }

}

module.exports = Blockchain;
