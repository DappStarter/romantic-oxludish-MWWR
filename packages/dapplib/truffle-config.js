require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember upper hockey private bottom transfer'; 
let testAccounts = [
"0x94c0b7ecf6dc9bfdcbc17aaee94ce0424925e8b772160af7faea56ba2a639484",
"0x93e6b6f2f9c7a715b3f086549dc91bbe43a77bf5de1440854555b7e51fcd65a4",
"0xc9f97f7932578256b8c7867fe2e8ca9cf71346a8a298cd20fbaef54136358509",
"0x70da23b6bf59062d0f932be6830821b3759c916df3133ac1dac745908037b75d",
"0x34d9fd8aae09e61292477ae7cd46b3119be6210a9a581f35a9be4a48d4662041",
"0x08037c9e191ee2eb41bf7baac56a29dbf0ae9e0890c93a23c0f42f4c103bbd4c",
"0x3ef8b0bb6da87915e6f4230d1d964213c0be59dd6173a06d828c1484262359ae",
"0x28f09f0c97ded8f07a37ed738b05888cbced7f5bd140121c31f1555dfbc27474",
"0x16f2179828c83b3f61862d45a5c3cf83f99aa80397d38f9a46b5b396b14f6d78",
"0xeafab72d7ec1191dfc336fb3a6e80e37e12abd1e304cadf1f8df43d552118062"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

