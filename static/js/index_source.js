const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: window.location.origin + '/tonconnect-manifest.json',
    buttonRootId: 'ton-connect',
    enableAndroidBackHandler: false
});

/* does not work through websites -_-
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/durov'
};
*/

const unsubscribe = tonConnectUI.onStatusChange(
    walletAndwalletInfo => {
       if (tonConnectUI.connected) {
            document.location.href = '/creating';
       };
    } 
);