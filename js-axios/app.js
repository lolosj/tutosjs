const debug = require('debug');
const debuglog = debug('axiosDebug');
const axios = require('axios').default;

debuglog('yo');
const walletAddress = '0xb80D8167B642488B238D497Be0A031930ae39CC9';




const API_HOST = "https://api.covalenthq.com"
//const API_KEY = process.env.API_KEY;
const API_KEY = 'ckey_d591fe7378874d949ff591462bf';

async function requestCovalent(walletAddress, chain_id = 56) {
	if (!API_KEY) {
		throw new Error('Please set API_KEY environment variable.')
	}

    try {
        const url = `${API_HOST}/v1/${chain_id}` + 
                    `/address/${walletAddress}` + 
                    `/transactions_v2` + 
                    `/?&key=ckey_d591fe7378874d949ff591462bf`;


		debuglog(url);
		const response = await axios.get(url);

		return response.data;
	} catch (error) {
		debuglog(error);
	//	return error.response && error.response.data;
	}
};


async function main () {
    const data = await requestCovalent(walletAddress)
    console.log(data);
}

main();