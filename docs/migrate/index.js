function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{
	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { await basetrip(); arf(); dexstats(); }, 3000);
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
	if(window.ethereum.chainId==250) (new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],provider)).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="<span style='/*font-family:bold;font-size:1.337em*/'>"+rn[0]+"</span>"}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);}})
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

function arf() {
	var xfr = setInterval(function() {
		//console.log("refreshing farm stats", Date.now());
		//gubs()
		//DrefreshFarm()
	},
	1000);
}



function notice(c) {
	window.location = "#note"
	$("content1").innerHTML = c
}

L1ABI = [{"inputs": [{"internalType": "address","name": "user","type": "address"}],"name": "balances","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "names","outputs": [{"internalType": "string[]","name": "","type": "string[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "v1","outputs": [{"internalType": "contract I","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "v2","outputs": [{"internalType": "contract I","name": "","type": "address"}],"stateMutability": "view","type": "function"}];

POOLS = [["WFTM","BTC"],["WFTM","TAROT"],["USDC","WFTM"],["WFTM","BNB"],["USDC","ETH"],["WFTM","MIM"],["WFTM","DAI"],["USDC","FRAX"],["BTC","ETH"],["WFTM","EQUAL"],["USDC","DAI"],["OATH","WFTM"],["WFTM","ETH"],["WFTM","LINK"],["WFTM","DEUS"],["fUSDT","WFTM"],["WFTM","AVAX"],["WFTM","ELITE"],["WFTM","BOO"],["WFTM","BIFI"],["ETH","ELITE"],["WFTM","SCARAB"],["SCARAB","ELITE"],["USDC","FRAX"],["SCARAB","GSCARAB"],["WFTM","GSCARAB"],["GSCARAB","ELITE"],["WFTM","TOMB"],["GSCARAB","FRAX"],["DEI","DEUS"],["MIM","FRAX"],["USDC","MIM"],["WFTM","wBOMB"],["WFTM","WPGUNK"],["WFTM","BEETS"],["WFTM","EQUAL"],["FBA","WFTM"],["EQUAL","DEUS"],["USDC","BEETS"],["EQUAL","FXS"],["FXS","FRAX"],["BOO","BEETS"],["ETH","wBOMB"],["TOMB","wBOMB"],["USDC","wBOMB"],["USDC","fUSDT"],["WFTM","DEI"],["MMY","USDC"],["WFTM","fBOMB"],["ETH","SHRAP"],["USDC","fBOMB"],["LQDR","WFTM"],["MMY","WFTM"],["EQUAL","fBOMB"],["USDC","WPGUNK"],["fBOMB","BEETS"],["fBOMB","DAI"],["BTC","SHRAP"],["USDC","WFTM"],["TOMB","LIF3"],["EQUAL","SHRAP"],["WFTM","SPIRIT"],["USDC","SPIRIT"],["USDC","ELITE"],["USDC","BTC"],["WFTM","DAI"],["WFTM","RAVE"],["RAVE","DEUS"],["RAVE","ELITE"],["WFTM","FUSD"],["USDC","FUSD"],["DAI","FUSD"],["USDC","FUSD"],["WFTM","MAGIK"],["MCLB","fBOMB"],["EQUAL","BIFI"],["USDC","MIGHT"],["sFS","FS"],["WFTM","MPX"],["USDC","FS"],["USDC","RING"],["WFTM","RING"],["ANKR","WFTM"],["WFTM","RAVE"],["USDC","RING"],["WFTM","BRUSH"],["WFTM","MPX"],["WFTM","WIGO"],["UNIDX","WFTM"],["USDC","TREEB"],["fUSDT","DAI"],["USDC","EQUAL"],["USDC","TUSD"],["MMY","WFTM"],["fUSDT","DAI"],["EQUAL","ELITE"],["fUSDT","WFTM"],["UNIDX","WFTM"],["EQUAL","CONK"],["WFTM","CONK"],["USDC","FXS"],["ANKR","ankrFTM"],["WFTM","FXS"],["fBOMB","CONK"],["USDC","fUSDT"],["CONK","BEETS"],["USDC","CONK"],["WFTM","FGHST"],["ANKR","WFTM"],["WFTM","COMB"],["WFTM","SKULL"],["WFTM","CHILL"],["WFTM","SKULL"],["fUSDT","EQUAL"],["EQUAL","TUSD"],["EQUAL","DAI"],["EQUAL","MIM"],["EQUAL","FRAX"],["EQUAL","FUSD"],["BTC","EQUAL"],["TUSD","FRAX"],["MAGIK","CONK"],["EQUAL","SKULL"],["WFTM","SLM"],["SHRAP","BEETS"],["OATH","SHRAP"],["fUSDT","TUSD"],["TUSD","FUSD"]];

GAUGES = [["0xDA3E21477F872F30794551D908DE244b8839F723","0xcDd56e66d7bd326b55cC23bA49f53262D7382555"],["0xD3c3E365d84Fc4e7e66244E00e5E2271176FF61E","0x693b0515091C30564725753C832a05Ed22EdF1Bd"],["0x7547d05dFf1DA6B4A2eBB3f0833aFE3C62ABD9a1","0x5E689D7fB26FfC4BD615c98C8517A18ef1f5e68d"],["0x7552BFa10037356A2De0379a2EF8d4CC480B8E00","0xcadfC5b5408B7863DbA5d3d81f1e35fFf07F264B"],["0x515d84c494454835443B303a914a341e80f67278","0x7D8f38845C74ee380fA20A950cBED4ed9194C0be"],["0x456178EFb6A8898b039599985811146e18355F1f","0x46109BFFa323d8872f58734fe22aFd370B5EFF34"],["0x0f03efdce7A8cE08c238b1a0B5425Fb63Bd44b38","0xD2a3830F6e456aDa65F5816378992E84C86aAa0a"],["0xb3D5b1d35d662d8E84fdECb70BcE9FA1B6210187","0x239bfb3E8b83453b9f83fc5CEBf1984e543Fb46C"],["0x97426Aa7A2A9A1D9E02E76Afaa4be7518BE064EE","0x41C681DFCBb6b736272Eb0adD029d926C21745ef"],["0x3d6c56f6855b7Cc746fb80848755B0a9c3770122","0xd1eE0dC8aE761A0900ECd3B629dFA6C3cEE99eEd"],["0x6eB4Eb157C3e6f0576b8ba3C88e8C5D2e6E81D17","0xA9938183EF16C7524ec26fCd6860b27BF8eB3Ab5"],["0x558DCA97c224851Cf428cbF244bEC0b897642efC","0xa48D9584B9332c6A040f81443CD6BAf23893B8E8"],["0xE3bD349BDb8203C15426b2d273f57568E658F843","0x47e901fD66aD41173AEc8896201260B45DcEe682"],["0x9B696b6B0F1DEE0B1af1d6bc927c15e27597f556","0x5FBbB1eBaD898d9e2E534C89Ac0919c82A786025"],["0xFfE9C27F0a12dABe5c5Bd46D144a5c0140725566","0x813f36c3847f3798d57ec1fC72b5F67E9fDCF4bE"],["0x783A3Fb9F88dF5A89fB3a5e595254Fa8f7b97b48","0x1057B34397B938364AB478fA93d74a7615C3Ae05"],["0xF77235B283fC72514f2bb260717F981B8E7474Ed","0x836b6F9f1604aD06290655e56CCf96a8fF48f931"],["0x9B99bBE1EBd7415DBC859e35161a451698c5D331","0x046352e3370564323Bd0Fb3dfAc1Bb80179De1Fb"],["0xf1c6038C498C7f550d78720421d4E24Fe3C63Eb2","0x445d1481b9e31E2005673BD7C5F02077d02f72C4"],["0x0b4b1e0325a7150468f724BCa3de2Deb92519846","0x1821Aa4C624F646d0826Fb9823E20ff63132BE4f"],["0x8D2C044817F500404CD528B7A0cfbD4679f699bB","0xe2cCf4E40F360C80D530861C7F025432933558A0"],["0xA167799D965F08f190fC1DFc48d265336a10C963","0x750a5eb478f02F1513F17B02A17b7ec25f20481E"],["0xa404F4D5eaC7FBE88fCC7E6f7040a922df47De12","0x5b4551F640F573D976357cF784f80AbA832D58A6"],["0x37Ed3Cb668Bb94116A8F56c58766c6780EDcb6E5","0x6244D97b06fD1C3cA02C9CadBf224106111C11bf"],["0x1a82a09C12de27d13364fe3e25Fc751e80139Eb9","0xC82e35feD4D2C9bc88a02F74559B4F6afb92D871"],["0xfEA05C63625E6881bA55758Bc482B8feB2428998","0x7627f37EDCEe79Fb06978277B3269B68E4F79f92"],["0xaEE6278c7F484cA9Bf4a7b6262fb450b5929658D","0xE76b5387ad0A8E9E59D333C5b92cb9dbC018238e"],["0x2294504776aCFACF8Fbcbcb215793cA40F34D13A","0xc8e7cf3b0Ff25070D65ea77C65c097ab4194536D"],["0x7b9Aff497598E21fd4B13C77202dd922c0F2cFDe","0x99da3260ef117f61F1E135aC66c5D18C5ea0D7b6"],["0xfBFC759682bB8e7b8ABAb41261ab7Bf395C4fEF7","0x7954B77c58f5e811f9BC84EaC4871c16eadDA7B4"],["0x7C2712D17B4e28e34fABDB75278C83D34eBdC7aC","0x2d9cC16555808Af5eF9c1BAa61094FB4E2F1C162"],["0x4d26D7A17b9c10613eAA049632aaDc8889EAb2E7","0x243E368cCDb230D38E58229077a1F0E9cd9643d0"],["0x674f7e6411B19C83cC28356FB32B094805208d53","0x5D41dc933aEc07DC9E34a833f9c9da960711cB8B"],["0xAB2776f19Ba984620De28486cFBDb2DA63e26400","0xF2F0CA84dd2Cad045992F50A38fF362978aEd94C"],["0x33345e59e6221B5C082E1C17e830Fb3AD1103e2A","0x6627f02e87FF7961CFd978d8A373De07E95e9835"],["0x846267990B6398bef102F6FFa858dAD603048ab3","0x635C9e2A89D1bB996C4CB0ca014d9471fA69BCCc"],["0xc3EFf0ba7E39b79b65Af2f07aaA40c79D0Fc3427","0xD1790f4C283861808f03570632F1099f208c93CF"],["0x788EDb6a782e15f32444a86C0AeAfFCe5348A635","0xC7CaB7908784D1267Be687aC58f233A5c247bf1D"],["0x6B8261Fd849E92aBdba217de24b301E20F5b20ce","0x0D8E43bb4CB3fC178F661461CD13800B72f18F2E"],["0x11E32758c32C3089a1e8653705e5C1618757Fb1D","0xA9296EdA4579e3BC523BF110a7aE31687A811637"],["0x312ea55de23E3aBa3296f1B3F97C182C63b1916d","0x6B49e49047A1Ae2bc37Ce8c35dd29d148e21dDB5"],["0x357C065Aa5140DF963459DAA4afF919a3A81170b","0x752e2f8bc46CF296755452392735662f33380874"],["0x7dED20C00c13D65f5EDcFB716659f8097BcBC35b","0xB4458237De46c5C8147Da15baE723D7Fe8685Ad8"],["0xa020d985dbd4d237038738a226F2A3730e3b4d2A","0xEC28238fe4fF57e667C1D78d04f942456fDeCec1"],["0xE81b869CD412955a1817859aD654A3E443482d58","0x6690e59a687bb5F516818f4270bcDFA8eDCf3bD0"],["0x0995F3932B4Aca1ED18eE08D4B0DCf5f74B3c5D3","0x13b082dcc13642e2f326645A0d61e7f5094fACe2"],["0xf686909031e6831f96B5a11bF3b83A584C7Ae421","0x1938FFc0874Dc997e31C0ae39F994Ff40D5Cbfc5"],["0xC64d38E7fcB4896A466368f100d57AD427fE955d","0x561a2115f12A2cc88152361F0B207Be0D8b3C3f0"],["0x5EB26b5206C2948E115deD46462D22bDf5d0547f","0x8cc90EDFAEeBf5545200a5a49DC03f70AC337e88"],["0xc078b427f74879aA89d44B8b22e64D0f6001c992","0xA6f15c7591f32C6193f77E1B5eAc6505BCE3A017"],["0x940d4CD69ff009aCD8af4754e503Fc10Fbc96B13","0x3B0Da7324524aDE72193b64204b3D909EfA6e133"],["0x0272A69b9f7D12489E0E0C756cD645E538A00DDE","0xB0f9069BABb65F104acDBf9e1FC521F3f1870d5a"],["0xDc935Ffe9f9C972B7b304E0b7E61Eb774037E394","0x8253E56547B173f528269B3C4d5bbFff7AA39424"],["0xB02A933c8Fa52cDfdc86b46c7180Ef025f9DFef4","0xde571D5E203C437e472fAce161E82b606Cb2d15B"],["0x476da2b76eaEea37292e1bd1Bbe66637Aa549D4c","0x14fA7355f04fBc9f78848F1ED6A9182cB8FD6B91"],["0xfCbaa0065C2Cf4F184FD132CC31C2Deb09C5874a","0xA5c4C3309978A7AF4616c4cdEF2C246FebFf06f7"],["0x21D2f7654857Fa3A0aD47e9330D78003dce49967","0x4C011021a3Cd33A1d72ae758d92B2F40C2f056Fe"],["0x542A4fF9c41206C78301760280f8179Fe337d48E","0x5Bb9714C3113349868d1737F026BD6B6bf8106f6"],["0x503BA2DdA445422D9d436DbE1bA6f0Ee4170aF1D","0xED83F65Ffc514B18f48af47bA54826F5A4748d04"],["0xDB376032d14A9189010F18fe0E484783b7225B78","0x1b11c7EB8471AF1a4E2430F0547Ae370F8344967"],["0xdABB8f8A9E4d9119bb137cA80F4caA0fa38D73d0","0x7CBA9CD635665e9C69FC03Ea73b06C56144F1A77"],["0x2a3C7b75B0D753E63765C04dA98fB187D144fD37","0xea1B6e5EEbbE48558dF629e5d05071E6691696DE"],["0xC922c064674d7ac9DD80414Ea50e17bf69f68a25","0x626eaB7732a26B511293F6Ba9481722BCA792434"],["0x1B24f7F8e6E4440642888BbF7d95f6680f07bA3D","0xA820EB98171E6C99AFf58D7750831290B6Fdde61"],["0x3733855070d7d4383B5791727C2a746D2bbe1b40","0x37D461C599247B0aa21414d73B89CB103cacC7C3"],["0xd5B40DB8A0254ba822f2B9b7192DdaC5D7c693cb","0x6714660df39DEFb32EC0Ab2db3010be7D35D5Df5"],["0xe117a5f40A5D28d3b2F103301C629617bfBA5F61","0xF126A02EFd6e3bC5879fDdBa4A0f20742bbC3Da5"],["0x0F8F138a93B7d06865842431b1BDD06B8C9Cb341","0x2a24e812bb295A3ddAB7F65Fce22C52b8676F43B"],["0x2fF970bfCDD87D31a018a0A90f940a688bdE9c61","0xD8C1A50D7b262C0AF84711E1442ECEC889F2f417"],["0xD65B7f0E8E62409Bf56863013Fb2E505b54E648a","0x6bfc21103d1bEE90213764Ca0Ab3be2C2eFbFAA7"],["0x9a4cc63a54B4eDec89931090614D0a36F8EECE9f","0x3AbD7137971181443B157cC6e230dF4EfaAFE6f6"],["0x02a759Afe0e6ee18fA49E6505356A712D9dc0d82","0x5861Fe0977D5fF74dD421B42798F70413010e0c7"],["0x049A88Fca9Df202Be72a9e8AE3CD62D685920fb2","0x99CbB159450794379A2291da46E441aD60920543"],["0x7e46D5F4Add361bb52b5a933b0e004E924170ba0","0x4c78Ed317b365BBC136058E42bB986197A49ae2E"],["0x68ca64CABbB3d40dBB0de37101A8C0b701f66fD6","0xCf220317513475EfDA09B2fa7f0fcaAEf794440A"],["0x5C912e84097CC5d9dE842bbF7B3DEf477fB578a0","0xE44A3Fa7Aa21f966A21dF6CF5A685b87240C3c2d"],["0x476606b47dDA7131268A25F144e6F5F529C2d918","0xa2FDCA5E967D929e39143Dc82eDDd393f4366436"],["0x0147C95eB09280efE45f5CF80789dEb338b544bA","0x7e77C4e674d2F84898abCBc45872d7f4F903511C"],["0xdE26e98d868FE02fFfb6DF26E638995124d3Ca13","0x7778a0B4688321c4E705d4e9F1A072f6F1579Bf8"],["0xDA7feCcD5832D0447F14ecEc3b8957Bc3D3A0d05","0xD22083000dB1A42F5bd67e61E11Eb08f513AdfcC"],["0x8418BAb773ABF430907b39B7dB6A6F8318A9210e","0x0827eC8c1ddB3dB4dfe9f4C2c01101A5c893E993"],["0x6B4029Ba8e81a76EE73C3BdA2e9Fe5B78B14a626","0xC8a037b003D0FBa1Ff2B7a387125b8641C5Cb00c"],["0x60db1fBA7321897fcc85f7a5960952a9944D870b","0xE984abAf18bA6A74C8c4218e23FDA7207345BcAC"],["0x910A9B84604128615EF46baDA6710c7710772425","0x023F73f29f2134Aa4510DD1BF7646F00239Da9A2"],["0xe43Ba9FCd5B39f7800a5D910E6316be496Bb2A56","0x2431e19923d587c9B4b29512ac97615263a26270"],["0xC0893292663E7F78Bff8A84a65bb00214eadA246","0xba37Ea27e842528841c755084c9F03a9Ad41DD0f"],["0xa049fFA7c19B421874651F071aBCf072313D4623","0x78D3Da7f159f68586328476E37D9186b543ae253"],["0x38076D8E285A0A15ddb46D4a5FD9e1b440aE43EB","0x66a936F37C541614edBAEE69ae028dC192922a4F"],["0xC57EaA4bCDB9a81BB363A90531fB4b086A0ecdD6","0x03c74392C3c10b03233db67bEBe7276F36BBA6f1"],["0x2f951ebC628546aC0F573e403b072f21b3Bb24Fe","0x54d59b326b9ABbB702cd0F5481c9aE118A0F0050"],["0xEAc2E3793375b03303208256157444b886C6e4d4","0x9d908543e74c80aAb5E7986Fe1Be4F4143db5b5b"],["0x76fa7935a5AFEf7fefF1C88bA858808133058908","0x804883c01104F91BEB9588Ea78514439Ec903356"],["0xCDd8bA3F1316d09ad190e29e64DA48798C453871","0x4A36dCC2763F8C85265b0384ef9c8a1d7B9d1B56"],["0xE6F633A0FFAd997e8E3b4f098e4574D353BfBAe1","0x3A157Ac9e721D657fB3CeCE431c8A979E5F92b70"],["0xe00D5e6535fb48E83C8cabe602242Cc1Bd253cEA","0xf7c36B446050498807F5631dFbf3661882aA3810"],["0xCC66d9D09C420E26AeEa605534DbE94c5Cdc93b7","0x5EeFeCB9Dbdb26AB5Ac5273aAc75D54504D5f83A"],["0x9d67D0558e7aBA7bd01d83Ac1A047c7b30B33Fd9","0x0e98AB1F2DF7c6dcD03cdD6F8bb5Ed55120a49bB"],["0xaB1f0FFE3f947D7dC2fdFB8511E7FBd26EcB2B45","0x30d1581FEbE40bD6A13469eA018AD1e39e4AA5dF"],["0x8ED258c11B73BB4C6F429d0e867Fa3651914D86E","0x60a0288810297d51c67Be6f4246695D4E5c5E14E"],["0x4855C81908e60F33Fc60540D2894Cc11143BCb13","0x6987f4e21f038D14b10f7b3FD9dB1ca2DE918465"],["0x57c77Ba53BBA21Fac170568d7C35166D8a625143","0x28c29F8B1326d1dA2cBBcED36974ab3D64EB17ED"],["0xDBEeEBb365eb4Bdc791870E200cc9B4E16cBf3aF","0xa60A984a121f2516e161F38c3111842d1dbd97BF"],["0x5a3134171Aa7c37535363ccB36eA4C8A9Ae00741","0xDEF5195606fE582670c527cA091f36c71f13dcF3"],["0xFa179405c10CC2ac141d7d0aeE6bBd04C1D49387","0xE60D1e66902f381000C9EF1d6EF384e2EF738943"],["0x67D1724E93C1fadc99f063d319D984DE44f7e192","0x857E1ce6dFd68ba26c93e914085433Cf0eE1716f"],["0x2b77a91b0C876a7641ED7B64EB80BC316F48363E","0x1F9e20fe2ecc3eE9185282975Be250785d26Ee70"],["0x22512C4eBDf8F02E2fDE485463AAA7f46Aa26c1D","0xD2aaF099434af6fbA0ec6A710134cd238F751fAB"],["0x69b4d3893882ee4068301470efDA30F14a56AeD0","0x9585642B3C6133E4a22c140631fB3e4F13D6F1c9"],["0x9EbdC97603F989EEe2744c786658Ca8699b17134","0x634b44589a12Cbc82267836F007982c0da9754BC"],["0x628e61164d16E08812B3a1421B4a0Be734EC4842","0x9217dE2eCd118d4d8F02C2FB30baBd8bE339903a"],["0x8daFfE224Af377aA1B8B0d9B8b419606306D10BF","0x953e77336b2Acf5AAdf29E5f35a6cd831a141A30"],["0x11a0779eA92176298b7A2760AE29fC9Ce1aD47b4","0xe1fD1a85f60853B6D2bc760D64A73A9880E303c5"],["0x2c6bDb1b22A3bc17e5fE5761097471F4B877f8aD","0x56638eF659E4962e5d0d465b0ecfCcD8c5531921"],["0xE0EeDd62F988e6e08200843320a8A174673Bc58E","0x1a3A69a795451efb22Dd0b90c42c6C2fB216140d"],["0x02914e2bE577c428B1AdfDeb51069aF057E881e4","0xc2749b3dFe9b0dA3B054a4825ed787AaF4F7450c"],["0x4B19c45492b713C42C6ADD9bD17BA6895DAE060E","0x5BC6AB7f19a4Ca2BBC1305A6eE9823441447EEfD"],["0x5236d432f885680331D50EFCA06f43076b904ffc","0x6A313775974b416DFD7b425c8B55e4784db72D2E"],["0xa4F38d2C1600fEeBB3c1b15899Efb3EA9690D001","0x4c0E83c8D16CC25499a449F75dAB59B8F9734BCc"],["0x2a7721bbbBE2090cafC66785f7D11A574e079378","0xbC955d929D746F24C58E3F1ac4bDDC9ec009f039"],["0x34d0F983B2F10f1105dDC1Cbd9286f594A5Ea35b","0xe2FAFd4eE2ffdFdd223672C1B8617B6Ebe1383ff"],["0x8a94555370ffa2e795A598BAd21d679Da2fBa4A3","0xAa7739afEd03f091faA105bDED10128013BFe9E1"],["0xc24C1F0abf32C413eFA27D6d58510085186987BB","0xF1450Be37Ba97Ce0b4127c50B009f1aa4730C8F4"],["0x3C4559E3Ba4966e372Be33F10Babd31f20796856","0xB1c45957eE879459670327Ba9d8D892858bb6Fc8"],["0xB9adC8193F48943A7F4F50921F414991473f73c5","0xF05D8180C5b143436A3AE17Caf4FD05223572ECB"],["0xc7eAcC38EF5B293FfF8261bFB4ea2C02a72bc563","0x42b6aa9Ff7FB9c1A70467aeC8C7BbB53A335c96E"],["0xd3110036BA512005446fd725b9e59A3fa76de11E","0xC842F6C33B5Cdd7C146D88Fe689348Abc6999f81"],["0x80568993E98051f34d39f93f814Ade6092e1B8DF","0xB2d968cE9bc2c449975d772953B51A9e5F326b3b"],["0x4aa1A3Ebe25c80b0c509bb5dd82aC8a7B2344c91","0x8Be06359938C5ea92314E0323a5e9AB4cc4d0F19"]];


async function gubs() {
	l1 = new ethers.Contract("0x8dbb47126738db879631f6e502d475aae7c8b1ff",L1ABI,signer);
	bals = await l1.balances(window.ethereum.selectedAddress);
	paint(bals);
}

async function dexstats() {
}

async function paint(b) {
	for(i=0;i<b.length/3;i++) {
		let v1 = Number(b[i*3+0]);
		if(v1>1) {
			$("mainstage").innerHTML += `
				<tr>
					<td>
						<img src="https://equalizer.exchange/assets/logo/${POOLS[i][1]}.png"/>
						<img src="https://equalizer.exchange/assets/logo/${POOLS[i][1]}.png"/>
					</td>
					<td>
						${ v1 > 1e18 ? (v1/1e18).toLocaleString() : (v1/1e18).toFixed(18) }
					</td>
					<td>
						<button class="submit equal-gradient" onclick="mi(i)"><span>Migrate to v2</span></button>
					</td>
				</tr>
			`
		}
	}
}