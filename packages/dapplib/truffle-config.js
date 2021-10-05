require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note noise exchange inner kiwi equal gaze'; 
let testAccounts = [
"0x01a42748600198c31ff33dc4d4db43e496d13ec9d43d901a2f970fce8436f028",
"0x030a76c334e802698a89d26af70985e72a410715575cd9782dc91154fddf8812",
"0x0c103c9c6596e720eee6bf6a4e5a4358871b9e463e7862e42365a2e4d8894867",
"0x46c9ae51b4dbec6e214108a6dc9b1e5dd5a018b05b3b2a1fe6feca4c0481eb84",
"0xc433307c0aade9cf140f92f5aa8cd8d0c4c57ff6f64a1000b6f00085bf3f75a0",
"0xc779b7638ae648977c103c2dd6e2f9ce04cc8b7baeebef8c68adf91bff21c787",
"0x64baecdbaedc8b1f80ed9c874c3d27bcad093dac733dd66f7616963ed0a02ef6",
"0x54995ee9f448ae469e9d79c7ce2349c254eefac96494375bdbfab82c42229223",
"0x1c003400d7ce2805bf5bdcfaa5c81c22747648b683ba20aeb351a0eedc1898f6",
"0x3d83939cd1bc02968ccb8458b5b554123d8829b4991f87fedb1d79d15e36a79e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


