let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.geem.io/api/',
	mainnetExplorerUrl: "http://geemexplorer.com/",
	mainnetExplorerUrlHash: "http://geemexplorer.com/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "http://geemexplorer.com/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "http://testnet.geem.io/",
	testnetExplorerUrlHash: "http://testnet.geem.io/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "http://testnet.geem.io/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 8,
    coinDisplayUnitPlaces: 4,
	txMinConfirms: 10,         
	txCoinbaseMinConfirms: 10,
	addressPrefix: 90,
	integratedAddressPrefix: 91,
	addressPrefixTestnet: 90,
	integratedAddressPrefixTestnet: 91,
	subAddressPrefix: 92,
	subAddressPrefixTestnet: 92,
	coinFee: new JSBigInt('100000'),
	feePerKB: new JSBigInt('100000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('100000000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'GEEM',
	openAliasPrefix: "geem",
	coinName: 'Geem',
	coinUriPrefix: 'geem:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};
