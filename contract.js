// import { beginCell, toNano, Address } from '@ton/ton'
global.Buffer = global.Buffer || require('buffer').Buffer;
var tonImported = require('@ton/ton');
var tonUiImported = require('@tonconnect/ui');
var tonCryptoImported = require('ton-crypto');

export default function runn(AddressAuthor) {
    /* 
    Here should be the proper body instance, so now I am trying to do it 
    const body = tonImported.beginCell()
        .storeUint(0xf8f8f8f8, 32) // Например, код операции создания jetton
        .storeAddress(tonImported.Address.parse(trans)) // Адрес создателя jetton
        .storeString('Bfhjk') // Имя jetton
        .storeString('BHY') // Символ jetton
        .storeCoins(tonImported.toNano(124444)) // Общее количество jetton (в нанос)
        .storeUint(0, 8) // Количество десятичных знаков
        .endCell();

    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 360,
        messages: [
            {
                address: trans, 
                amount: tonImported.toNano(0.05).toString(), 
                payload: body.toBoc().toString("base64") 
            }
        ]
    };

    Just send trans to send money to the author of the project lol -_-
    */

    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: AddressAuthor,
                amount: "20000000"
            }
        ]
    }

    return transaction; 
}