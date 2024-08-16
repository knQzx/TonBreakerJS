/*
// import { beginCell, toNano, Address } from '@ton/ton'
global.Buffer = global.Buffer || require('buffer').Buffer
var tonImported = require('@ton/ton');
var tonUiImported = require('@tonconnect/ui');
var tonCryptoImported = require('ton-crypto');


export default async function runn() {
        const client = new TonClient({
                endpoint: 'https://toncenter.com/api/v2/jsonRPC',
        });
        console.log('omg');
        // Create wallet contract
        let workchain = 0; // Usually you need a workchain 0
        let wallet = tonImported.WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
        let contract = client.open(wallet);

        // Get balance
        let balance = await contract.getBalance();

        // Create a transfer
        let seqno = await contract.getSeqno();
        let transfer = await contract.createTransfer({
                seqno,
                messages: [tonImported.internal({
                value: '1.5',
                dest: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
                body: 'Hello world'
                })]
        });
}
*/

global.Buffer = global.Buffer || require('buffer').Buffer
var tonImported = require('@ton/ton');
var tonUiImported = require('@tonconnect/ui');
var tonCryptoImported = require('ton-crypto');

async function runn() {
        // Create Client
        const client = new tonImported.TonClient({
                endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
        });

        // Generate new key
        let mnemonics = await tonCryptoImported.mnemonicNew();
        let keyPair = await tonCryptoImported.mnemonicToPrivateKey(mnemonics);

        // Create wallet contract
        let workchain = 0; // Usually you need a workchain 0
        let wallet = tonImported.WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
        let contract = client.open(wallet);

        // Get balance
        let balance = await contract.getBalance();
        console.log(balance);
        console.log(client);
        // Create a transfer
        let seqno = await contract.getSeqno();
        let transfer = await contract.createTransfer({
        seqno,
        messages: [tonImported.internal({
                value: '1.5',
                dest: 'UQB9GQciRnDSPc-cFJ6fhRDGrBkaHdl1lYgEOS2RASYsjRK-',
                body: 'Hello world'
                })]
        });
}

runn();