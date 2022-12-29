function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{
	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { await basetrip(); }, 3000);
}, false);




async function basetrip()
{
	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");notice("<h3>Wallet wasn't detected!</h3>Please make sure that your device and browser have an active Web3 wallet like MetaMask installed and running.<br><br>Visit <a href='https://metamask.io' target='_blank'>metamask.io</a> to install MetaMask wallet.");provider = new ethers.providers.JsonRpcProvider(RPC_URL); await dexstats();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);await dexstats();notice("<h3>Wrong network!</h3>Please Switch to Chain #"+CHAINID+"<btr"+ CHAIN_NAME+ "</u> Blockchain.");}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
		else{console.log("Didnt find a connected wallet!");cw();}
		//chkAppr(tokes[1][0])
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		signer = provider.getSigner()
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
	}
	if(Number(window.ethereum.chainId) != null &&(window.ethereum.chainId!=CHAINID))
	{
		await window.ethereum.request({
    		method: "wallet_addEthereumChain",
    		params: [{
        		chainId: "0x"+(CHAINID).toString(16),
        		rpcUrls: [RPC_URL],
        		chainName: RPC_URL.split(".")[1],
        		nativeCurrency: {
            		name: RPC_URL.split(".")[1],
            		symbol: (RPC_URL.split(".")[1]).toUpperCase(),
            		decimals: 18
        		},
        		blockExplorerUrls: [EXPLORE.split("/address")[0]]
    		}]
		});
		window.location.reload
	}
	//DrefreshFarm()
	//arf()
	cw()
	dexstats()
}



/*
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Qt."}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Qd."}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Tn."}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Bn."}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Mn."}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Th."}
	else if(_n>0){n_=(_n/1e0).toFixed(5)+""}
	return(n_);
}
*/
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(3)+"Qt"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(3)+"Qd"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(3)+"T"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(3)+"B"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(3)+"M"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(3)+"K"}
	else if(_n>1e1){n_=(_n/1e0).toFixed(5)+""}
	else if(_n>0.0){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}

async function cw()
{
	let cs = await cw2(); cs?console.log("Good to Transact"):cw2();
	cw2();
}
async function cw2()
{
	if(!(window.ethereum)){$("cw_m").innerHTML="Metamask not detected! Trying a refresh";console.log("Metamask not found!");window.location.reload();return(0)}
	if(!(Number(window.ethereum.chainId)==CHAINID)){$("cw_m").innerHTML="Wrong network detected! Please switch to chain ID", CHAINID, "and refresh this page.";return(0)}
	if(typeof provider == "undefined"){$("cw_m").innerHTML="Provider not detected! Trying a refresh";console.log("Provider not found!");window.location.reload();return(0)}
	/*
	if(!
		(isFinite(Number(accounts[0])))
		|| (isFinite(Number(window.ethereum.selectedAddress)))
	){console.log("NAAAAAAAAAAAAAAAAA");window.location.reload();}
	*/

	//004
	window.ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(r=>{console.log("004: Success:",r);})	//re-curse to end curse, maybe..
	.catch((error) => {	console.error("004 - Failure", r, error); });


	//005
	const accounts = await window.ethereum.request({ method: 'eth_accounts' });
	if(Number(accounts[0])>0){console.log("005: Success - ", accounts)}
	else{console.log("005: Failure", accounts)}


	/*006
	const en6 = await window.ethereum.enable()
	if(Number(en6[0]) > 0){console.log("006 - Success",en6)}
	else{console.log("006 - Failure", en6)}
	*/


	/*003
	try {
      console.log("attempting cw()")
      const addresses = await provider.request({ method: "eth_requestAccounts" });
      console.log("addresses:",addresses)
    } catch (e) {
      console.log("error in request", e);
      window.location.reload(true);
    }
    */

    //002
    //try{await provider.send("eth_requestAccounts", []);console.log("CWE:",e);}//await window.ethereum.enable();
	//catch(e){console.log("CWE:",e);window.location.reload(true)}
	console.log("doing the paints")
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	if(window.ethereum.chainId==250) (new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],provider)).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="hi, <span style='/*font-family:bold;font-size:1.337em*/'>"+rn[0]+"</span> 👋"}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);}})
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	//farm_1_f_chappro()
	gubs();
	return(1);
}
function fornum2(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Quintillion"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Quadrillion"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Trillion"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Billion"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Million"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Thousand"}
	else if(_n>1){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}

VEABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"locktime","type":"uint256"},{"indexed":false,"internalType":"enum VotingEscrow.DepositType","name":"deposit_type","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"ts","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prevSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"supply","type":"uint256"}],"name":"Supply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ts","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DELEGATES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"abstain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"artProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"attach","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"attachments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"balanceOfAtNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"balanceOfNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_t","type":"uint256"}],"name":"balanceOfNFTAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"block_number","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"}],"name":"create_lock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"create_lock_for","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"deposit_for","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"detach","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastVotesIndex","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"get_last_user_slope","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"increase_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"increase_amount_for","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"}],"name":"increase_unlock_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"address","name":"art_proxy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"locked","outputs":[{"internalType":"int128","name":"amount","type":"int128"},{"internalType":"uint256","name":"end","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"locked__end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"merge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownership_change","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"point_history","outputs":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setArtProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_team","type":"address"}],"name":"setTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"slope_changes","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"team","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenIndex","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"t","type":"uint256"}],"name":"totalSupplyAtT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_point_epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_point_history","outputs":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_idx","type":"uint256"}],"name":"user_point_history__ts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"voted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"voting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

VMABI = [{"inputs": [{"internalType": "address","name": "_ot","type": "address"},{"internalType": "uint256","name": "_op","type": "uint256"},{"internalType": "address","name": "_ve","type": "address"},{"internalType": "address","name": "_tg","type": "address"},{"internalType": "bytes","name": "_fb","type": "bytes"},{"internalType": "bytes","name": "_fo","type": "bytes"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "seller","type": "address"},{"indexed": true,"internalType": "address","name": "token","type": "address"},{"indexed": false,"internalType": "uint256","name": "id","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "paid","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "locked","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "wks","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "wen","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "tv","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "tradenum","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "price","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "tokensPaid_offerToken","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "tradesCounter_offerToken","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "volumes_offerToken","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "basePriceUSD","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "offerTokenPriceUSD","type": "uint256"}],"name": "Sale","type": "event"},{"inputs": [],"name": "TvlGuru","outputs": [{"internalType": "contract ITVL","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "TvlPriceFeed","outputs": [{"internalType": "bytes","name": "","type": "bytes"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "baseToken","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "baseTokenPriceInUSD","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"internalType": "uint256[]","name": "_amounts","type": "uint256[]"},{"internalType": "bytes[]","name": "_datas","type": "bytes[]"}],"name": "customCall","outputs": [{"internalType": "bytes[]","name": "retdata","type": "bytes[]"}],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "dao","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "doMerge","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "v","type": "uint256"}],"name": "getQuote","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "v","type": "uint256"}],"name": "getQuoted","outputs": [{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "a","type": "uint256"},{"internalType": "uint256","name": "w","type": "uint256"}],"name": "getRawQuote","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "pure","type": "function"},{"inputs": [],"name": "homeID","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256[]","name": "f","type": "uint256[]"},{"internalType": "uint256","name": "t","type": "uint256"}],"name": "multiMerge","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "v","type": "uint256"}],"name": "offer","outputs": [{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "offerPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "offerToken","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "offerTokenPriceInUSD","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "address","name": "","type": "address"},{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "bytes","name": "","type": "bytes"}],"name": "onERC721Received","outputs": [{"internalType": "bytes4","name": "","type": "bytes4"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "tokenAddress","type": "address"},{"internalType": "uint256","name": "tokens","type": "uint256"}],"name": "rescue","outputs": [{"internalType": "bool","name": "success","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "veid","type": "uint256"}],"name": "sell","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_d","type": "address"}],"name": "setDao","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bool","name": "b","type": "bool"}],"name": "setDoMerge","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "id","type": "uint256"}],"name": "setHomeID","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "t","type": "address"},{"internalType": "uint256","name": "p","type": "uint256"}],"name": "setOffer","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_t","type": "address"},{"internalType": "bytes","name": "_d","type": "bytes"}],"name": "setTvlFeed","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_tg","type": "address"}],"name": "setTvlGuru","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "tokensPaid","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalTrades","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalVolume","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "tradesCounter","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "veToken","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "volumes","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"}]

async function gubs() {
	veq = new ethers.Contract(VENFT, VEABI, provider);
	bal = await veq.balanceOf(window.ethereum.selectedAddress);
	if (bal == 0) $("nft-bal").innerHTML = "No NFTs owned!";
	else {
	  $("nft-bal").innerHTML = "Balance: "+bal+" veNFT";
	  nid=[];
	  for(i=0;i<bal;i++) {
	  	nid[i]=veq.tokenOfOwnerByIndex(window.ethereum.selectedAddress,i);
	  }
	  nids = await Promise.all(nid);
	  balid = [];
	  for(i=0;i<bal;i++) {
	  	balid[i]=veq.locked(Number(nids[i]));
	  }
	  balids = await Promise.all(balid);
	  $("nft-sel").innerHTML = '<option value="" selected>Choose a NFT</option>';
	  for(i=0;i<bal;i++) {
	  	$("nft-sel").innerHTML += `
	  	  <option value='${nids[i]}'>#${nids[i]} : ${fornum(Number(balids[i][0]),18)} </option>
	  	`
	  }
	}

}

async function quote() {
	_id = $("nft-sel").value;
	vm=new ethers.Contract(VENAMM,VMABI,provider);
	_q = await vm.offer(_id);
	$("nft-amt").innerHTML = fornum(_q[1],18) + " " + BASENAME;
	$("nft-tl").innerHTML = Number(_q[2]) + " Weeks";
	$("nft-offer").innerHTML = fornum(_q[0],18) + " " + TOKENNAME;
	$("claim-offer").innerHTML = "Claim "+ fornum(_q[0],18) + " " + TOKENNAME;
}

async function sell() {
	_id = $("nft-sel").value;
	veq = new ethers.Contract(VENFT, VEABI, signer);
	vm = new ethers.Contract(VENAMM,VMABI,signer);
	al = await veq.isApprovedOrOwner(VENAMM,_id);
	if(al==false) {
		notice(`
			<h3>Approval required</h3>
			VeNAMM requires your approval to complete this trade.<br><br>
			<h4><u><i>Please Confirm this transaction in your wallet!</i></u></h4>
		`);
		let _tr = await veq.approve(VENAMM,_id);
		console.log(_tr)
		notice(`
			<h3>Submitting Approval Transction!</h3>
			<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
		`);
		_tw = await _tr.wait()
		console.log(_tw)
		notice(`
			<h3>Approval Completed!</h3>
			<br><br>
			<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
			<br><br>
			Please confirm the Trade at your wallet provider now.
		`)
	}
	_q = await vm.offer(_id);
	notice(`
		<h3>Order Summary</h3>
		<b>Sale of Equalizer veNFT:</b><br>

		<img style='height:20px;position:relative;top:4px' src="${BASELOGO}"> NFT Token ID: <u>#<b>${_id}</b></u><br>
		<img style='height:20px;position:relative;top:4px' src="https://equalizer.exchange/assets/logo/EQUAL.png"> Amount Locked: <u>${fornum(_q[1],18)} ${BASENAME}</u><br>
		<img style='height:20px;position:relative;top:4px' src="img/lock.svg">Time to Unlock: <u>${Number(_q[2])} Weeks</u> from now<br><br>
		<b>Expected to Buy:</b><br>
		<img style='height:20px;position:relative;top:4px' src="https://ftm.guru/icons/ftm.svg"> <u>${fornum(_q[0],18)} ${TOKENNAME}</u><br><br><br><br>
		<h4><u><i>Please Confirm this transaction in your wallet!</i></u></h4>
	`)
	let _tr = await vm.sell(_id);
	console.log(_tr)
	notice(`
		<h3>Order Submitted!</h3>
		<br><h4>Buying ${TOKENNAME}</h4>
		<img style='height:20px;position:relative;top:4px' src="https://ftm.guru/icons/ftm.svg"> <u>${fornum(_q[0],18)} ${TOKENNAME}</u><br>
		<br><h4>Selling ve${BASENAME} NFT</h4>
		<img style='height:20px;position:relative;top:4px' src="https://equalizer.exchange/assets/logo/EQUAL.png"> <u>veNFT #<b>${_id}</b></u>,<br>Containing <u>${fornum(_q[1],18)} ${BASENAME}</u>,<br>Locked for <u>${Number(_q[2])} weeks</u>.<br><br>
		<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
	`)
	_tw = await _tr.wait()
	console.log(_tw)
	notice(`
		<h3>Order Completed!</h3>
		Bought <img style='height:20px;position:relative;top:4px' src="https://ftm.guru/icons/ftm.svg"> <u>${fornum(_q[0],18)} ${TOKENNAME}</u> for <img style='height:20px;position:relative;top:4px' src="https://equalizer.exchange/assets/logo/EQUAL.png"> <u>veNFT #<b>${_id}</b></u>.
		<br><br>
		<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
	`)
	gubs()
}

function notice(c) {
	window.location = "#note"
	$("content1").innerHTML = c
}

async function dexstats() {
	vm = new ethers.Contract(VENAMM,VMABI,provider);
	_b = (new ethers.Contract(TOKEN, VEABI, provider)).balanceOf(VENAMM);
	/*_c = vm.tradesCounter(TOKEN);*/
	_p = vm.tokensPaid(TOKEN);
	_v = vm.totalVolume();
	_t = vm.totalTrades();
	Promise.all([_b, _p, _v, _t])
	.then(rp=>{
		$("stats").innerHTML = `
    		Available Liquidity: ${(fornum(rp[0],18)) + " " + TOKENNAME}
    		<br>Total Converted: ${Number(rp[3])} veNFTs
    		<br>Total Volume: ${(fornum(rp[2],18)) + " " + BASENAME}
    		<br>Total Payouts: ${(fornum(rp[1],18)) + " " + TOKENNAME}
		`
	});
}