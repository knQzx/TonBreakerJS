function handleResize() {
    var div1 = document.getElementById('add_first');
    var div2 = document.getElementById('add_second');

    if (window.outerWidth < 1395) {
        div1.innerHTML = '<a id="ton-connect" onclick="connectToWallet()">';
    } else {
        div2.innerHTML = '<a id="ton-connect" onclick="connectToWallet()">';
    }
}

handleResize();

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: window.location.origin + '/tonconnect-manifest.json',
    buttonRootId: 'ton-connect',
    enableAndroidBackHandler: false
});

/* does not work through websites -_-
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/knQzx'
};
*/

const unsubscribe = tonConnectUI.onStatusChange(
    walletAndwalletInfo => { 
        if (!tonConnectUI.connected) {
            document.location.href = '/';
        };
    }
);

   
/*
function createJettonButton() {
    transaction = runn('UQB9GQciRnDSPc-cFJ6fhRDGrBkaHdl1lYgEOS2RASYsjRK-');
    try {
        const result = tonConnectUI.sendTransaction(transaction);
        
        const someTxData = myAppExplorerService.getTransaction(result.boc);
        alert('Transaction was sent successfully', someTxData);
    } catch (e) {
        console.error(e);
    }
    console.log(tonConnectUI);
}
*/