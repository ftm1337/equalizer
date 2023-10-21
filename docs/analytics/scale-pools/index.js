function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function() {
	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { await basetrip(); }, 3000);
	arf();
}, false);




async function basetrip()
{
	//PRE
	pre_stats();
	//MAIN
	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");notice("<h3>Wallet wasn't detected!</h3>Please make sure that your device and browser have an active Web3 wallet like MetaMask installed and running.<br><br>Visit <a href='https://metamask.io' target='_blank'>metamask.io</a> to install MetaMask wallet.");provider = new ethers.providers.JsonRpcProvider(RPC_URL); await dexstats();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.JsonRpcProvider(RPC_URL);await dexstats();notice("<h3>Wrong network!</h3>Please Switch to Chain #"+CHAINID+"<btr"+ CHAIN_NAME+ "</u> Blockchain.");}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
		else{console.log("Didnt find a connected wallet!");cw();}
		//chkAppr(tokes[1][0])
		gubs();
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		//signer = provider.getSigner()
		await dexstats();
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
	}
	if(Number(window.ethereum.chainId) != null &&(window.ethereum.chainId!=CHAINID))
	{
		await window.ethereum.request({
    		method: "wallet_addEthereumChain",
    		params: [{
        		chainId: "0x"+(CHAINID).toString(16),
        		rpcUrls: [RPC_URL],
        		chainName: CHAIN_NAME,
        		nativeCurrency: {
            		name: CHAIN_GAS,
            		symbol: CHAIN_GAS,
            		decimals: 18
        		},
        		blockExplorerUrls: [EXPLORE]
    		}]
		});
		window.location.reload()
	}
	//DrefreshFarm()
	//arf()
	cw()
	dexstats()
	gubs()
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
	else if(_n>1e1){n_=(_n/1e0).toFixed(3)+""}
	else if(_n>1e0){n_=(_n/1e0).toFixed(5)+""}
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
	console.log("doing the paints");
	gubs();
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	if(window.ethereum.chainId) {(new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],(new ethers.providers.JsonRpcProvider("https://rpc.ftm.tools")))).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="hi, <span style='/*font-family:bold;font-size:1.337em*/'>"+rn[0]+"</span> 👋<br>Connected to "+CHAIN_NAME;}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34)+"<br>Connected to "+CHAIN_NAME;}})}
	$("cw_m").innerHTML="";
	$("connect").style.display="none";
	$("switch").style.display="block";
	//farm_1_f_chappro()
	//arf();
	return(1);
}
function fornum2(n,d) {
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
function fornum5(n,d,p){
	_n=(Number(n)/10**Number(d));
	n_= _n.toLocaleString(undefined,{maximumFractionDigits:p,minimumFractionDigits:p})
	return(n_);
}
function arf(){
	var xfr = setInterval(function() {
		console.log("refreshing farm stats", new Date() );
		try { if( ethers.utils.isAddress(window.ethereum.selectedAddress) ) {gubs();} }
		catch(e) { console.log('hmm..'); }
	}, 15000);
}

async function gubs() {
}

async function pre_stats() {
	provider = new ethers.providers.JsonRpcProvider(RPC_URL);
	await paintF()
}

function notice(c) {
	window.location = "#note";
	$("content1").innerHTML = c;
	console.log(c);
}

async function dexstats() {
	return;
}

function findPoolName(_pa,_id) {
	pfn = "?";
	for (ni=0;ni< GD.length;ni++){/*console.log(ni)*/;if(GD[ni][0]==ethers.utils.getAddress(_pa)){pfn=`<a target="_blank" href="https://basescan.org/address/${_pa}">${GD[ni][1]}</a>`}}
	return pfn=="?" ? `<button onclick='fetchPoolName("${_pa}",${_id})'>Check Name</button>` : pfn;
}


GD = [
  [
    "0xc825c67cA3a80D487C339A6C16bB84f7DCA16012",
    "v-WETH/SCALE"
  ],
  [
    "0xF3F1F5760a614B8146eec5D1c94658720c2425b9",
    "v-WETH/USDbC"
  ],
  [
    "0xde3Cc8cd0C1edE21A530f9B778265f1f28F6fce0",
    "v-WETH/DAI"
  ],
  [
    "0xf7CBeF201dc2BE7489D7fD434E9D3c17af92C7c0",
    "s-DAI/USDbC"
  ],
  [
    "0x7a342c5837fDE9B37dd34c6F86f810b78849d037",
    "v-WETH/TAROT"
  ],
  [
    "0x0345AA92C7cb97e09b7CC0D55E730cD39C09fa43",
    "s-USDC/USDbC"
  ],
  [
    "0x83240b049Fa89b65be714aeD68e5B074df6aAc84",
    "v-WETH/USDC"
  ],
  [
    "0xaB455B598B058f7552347C65195c9795e064794e",
    "v-cbETH/WETH"
  ],
  [
    "0x1174d5ddbE6b827E4f4Cbf400EF5305585dBc9Ff",
    "s-USDbC/axlUSDC"
  ],
  [
    "0x28a6a0C35BA84A7e9Da4b1d03b44d047495fEdF3",
    "v-WETH/axlUSDC"
  ],
  [
    "0x90bA49F182F6a38D500256d4697b81B2053012E3",
    "v-WETH/fBOMB"
  ],
  [
    "0x82461924caA429F4bd16Be57ef47bAb36C4Ad510",
    "v-WETH/DEUS"
  ],
  [
    "0x937d84787CD627A967018F15FdC00e4F3c841246",
    "v-WETH/ITX"
  ],
  [
    "0x3c1fbEA17f39229339dDD5352aC83b37EaC7E085",
    "s-IT/USDbC"
  ],
  [
    "0x298FEB65dC6129a72F981fEf28C25662B8eb7A8d",
    "v-YFX/USDbC"
  ],
  [
    "0x36E05b7AD2F93816068C831415560AE872024F27",
    "v-USDC/PANTHEON"
  ],
  [
    "0xa7802Bbd9a6e38E0E209AA6f43A8ddD4d35c1111",
    "v-SCALE/fBOMB"
  ],
  [
    "0x5F55b7d9c07815736Eb901BC2Fa1963a47ac1ce0",
    "v-axlWBTC/WETH"
  ],
  [
    "0x70FE3f1ba343953d2785310416c63B45D19E7e2E",
    "v-FREN/WETH"
  ],
  [
    "0x155d96E7b76F57eA35FD35F18CFa846B21f3513a",
    "v-USDC/YFX"
  ],
  [
    "0xc54D3698Ff73a58D229860c8C2E137867841c631",
    "v-USDC/TAROT"
  ],
  [
    "0x61a5B8E7dAAd612924e258402027237A39E630Ef",
    "v-WETH/BASIN"
  ],
  [
    "0xCfd4C7282f31C07b6A972a4f99FA06357C9144CC",
    "v-BAI/WETH"
  ],
  [
    "0xD630b2E4981a3a2bE0D7D397EC24741B7b222e98",
    "v-WETH/MOARRR"
  ],
  [
    "0xDa5A39B10FCFCD012c0686f35f49388F88E785ED",
    "v-WETH/NFI"
  ],
  [
    "0x9046D8f6130D6f141Ba54F0A6e9EC0783c78edac",
    "s-WETH/BASED"
  ],
  [
    "0x1948Bd09a8777023d4F15E29880930eD5bA0Daf2",
    "v-SCALE/PANTHEON"
  ],
  [
    "0x3f4F7fF7CAeA820aa87Da12C6E873c5cAde9bC1a",
    "v-IT/WETH"
  ],
  [
    "0xd277A78d0321eFB9845b01CF9Ec5c1FD151a4972",
    "v-IT/cbETH"
  ],
  [
    "0xC8B090548648fD40fD623023434EaF451424d8ef",
    "v-WETH/OVN"
  ],
  [
    "0xF6354383d0FbE31Da4089e23dD00CcDD3c92b6b8",
    "v-WETH/USD+"
  ],
  [
    "0x741292fFC0C40B466baE4AF261C64009198a3aB5",
    "v-WETH/DAI+"
  ],
  [
    "0x4B3953ecB9e5373a0267439d563Eb99A247E2C54",
    "v-cbETH/AKITA V3"
  ],
  [
    "0x942cd46853398F30C051fd4435cdfbb4a092601C",
    "v-fBOMB/YFX"
  ],
  [
    "0x76A0Efd0227644113c21d795dDC27D7a9419695d",
    "v-FREN/fBOMB"
  ],
  [
    "0x7437204fEc1eD3d758d3743EB22adb9137237e19",
    "s-USDC/axlUSDC"
  ],
  [
    "0xe821d033667E55842e1B3342E069C55AD66B006b",
    "s-DAI/axlUSDC"
  ],
  [
    "0x94Fe2DC68a1ABD3053F380E51799E0f52700DB0F",
    "v-WETH/TOSHI"
  ],
  [
    "0x18F2Bf913fc6eFa3123B11523B5b1Ed4c1aeFB16",
    "v-WETH/bSHARE"
  ],
  [
    "0xA63eE2e8344d8a5dD41a6EE06a02F5280D305273",
    "v-WETH/BSHARE"
  ],
  [
    "0x29c4Dfc4357D37D164098FbE0311b22d3e2e6464",
    "v-WETH/BRATE"
  ],
  [
    "0x1D8F2b55785359636f9b8245B394B3a4C5e24397",
    "v-WETH/DIP"
  ],
  [
    "0x26946d91d7820c16d902161A674C7F8f2ba3DF18",
    "s-DOLA/USDC"
  ],
  [
    "0xdd8c2713b5cE39dCa4a4B59C8Af4f5f31bc2Fc66",
    "s-DOLA/USDbC"
  ],
  [
    "0x8084B1b2DDe3B685A0FAB3bBF201f94340d1D768",
    "s-MAI/USDbC"
  ],
  [
    "0x7fC9C6F318505f83fa27D4e221797884E946DB2B",
    "s-USDC/MAI"
  ],
  [
    "0xe9a5452aC188079cE00707C2b1076A1a58e80b18",
    "s-USD+/USDbC"
  ],
  [
    "0xeFe199803ECCDF7F3582f1a30287e6BF762eB4b4",
    "s-USDC/USD+"
  ],
  [
    "0xB9C0d13Ae45dbF95cC6A96400551Fa289393BC2E",
    "v-WETH/TOSHI"
  ],
  [
    "0xfc24111FdfA17aD574965d5947CADD21DFC5D0b0",
    "v-SURV/WETH"
  ]
]



async function fetchPoolName(_pad,_pid) {
	_smb = (await (new ethers.Contract(_pad,["function symbol() public view returns(string)"],provider)).symbol());
	$("pool_id_"+_pid).innerHTML = `<a target="_blank" href="https://basescan.org/address/${_pad}">${_smb}</a>`
}


async function fetchAllPoolNames() {
	F=new ethers.Contract("0xed8db60acc29e14bc867a497d94ca6e3ceb5ec04",["function allPairs(uint) public view returns(address)", "function allPairsLength() public view returns(uint)"],provider);
	LEN=Number(await F.allPairsLength());
	GD2 = [];
	for(i=0;i<LEN;i++) {
		_pa = await F.allPairs(i);
		_sb = (await (new ethers.Contract(_pa,["function symbol() public view returns(string)"],provider)).symbol());
		GD2.push([_pa,_sb]);
	}
	return(GD2);
}

async function distribute(_g) {
	(new ethers.Contract(VOTER,["function distribute(address)"],signer)).distribute(_g);
}

async function pushBribes(_fd, _bdo, _bd) {
	bribesOld = new Array(_fd.length);bribesOld.fill(0);
	bribes = new Array(_fd.length);bribes.fill(0);
	for(let i=0;i<_fd.length;i++) {
		for(let j=0;j<_bd.length;j++) {
			if(_bd[j].address == _fd[i].A[0]) {
				//console.log(i,j,_bd[j].address,_fd[i].A[0])
				bribes[i] = isNaN(_bd[j].gauge.tbvUSD) ? 0 : _bd[j].gauge.tbvUSD;
			}
			if(_bdo[j].address == _fd[i].A[0]) {
				//console.log(i,j,_bd[j].address,_fd[i].A[0])
				bribesOld[i] = isNaN(_bdo[j].gauge.tbvUSD) ? 0 : _bdo[j].gauge.tbvUSD;
			}
		}
	}
	return [bribes,bribesOld];
}
async function paintF() {

	L19=new ethers.Contract("0x8ddd725a8a8666c4166879e45c8704d60df6c60d",[{"inputs": [{"internalType": "address","name": "_v","type": "address"},{"internalType": "address","name": "_f","type": "address"},{"internalType": "address","name": "_e","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "DAO","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "E","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "EPOCH_0","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "F","outputs": [{"internalType": "contract IF","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "M","outputs": [{"internalType": "contract IM","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "V","outputs": [{"internalType": "contract IV","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "VE","outputs": [{"internalType": "contract IVE","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "infoGaugeDistPrice","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_g","type": "address"}],"name": "infoGaugeDists","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "infoListedPoolNums","outputs": [{"components": [{"internalType": "uint256[7]","name": "N","type": "uint256[7]"}],"internalType": "struct Equalens_poolMonitor.SN7[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "infoPoolBase","outputs": [{"components": [{"internalType": "address[4]","name": "A","type": "address[4]"},{"internalType": "bool","name": "B","type": "bool"},{"internalType": "uint256","name": "N","type": "uint256"}],"internalType": "struct Equalens_poolMonitor.SA4BN[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "infoPoolFull","outputs": [{"components": [{"internalType": "address[4]","name": "A","type": "address[4]"},{"internalType": "bool","name": "B","type": "bool"},{"internalType": "uint256[7]","name": "N","type": "uint256[7]"}],"internalType": "struct Equalens_poolMonitor.SP[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "infoPoolNums","outputs": [{"components": [{"internalType": "uint256[7]","name": "N","type": "uint256[7]"}],"internalType": "struct Equalens_poolMonitor.SN7[]","name": "","type": "tuple[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_d","type": "address"}],"name": "setDAO","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_v","type": "address"},{"internalType": "address","name": "_f","type": "address"},{"internalType": "address","name": "_e","type": "address"}],"name": "setVFE","outputs": [],"stateMutability": "nonpayable","type": "function"}],provider);
	TG = new ethers.Contract("0x7a18d1b46baabb2d8260d0f8cfbb2292901c2779",["function p_t_coin_usd(address) public view returns(uint)"],provider);
	birbs=BIRB.data;
	fds = await Promise.all([
		L19.infoPoolFull(),
		TG.p_t_coin_usd("0xc825c67ca3a80d487c339a6c16bb84f7dca16012"),
		birbs,
		//fetch("https://eqapi-main-7cmme.ondigitalocean.app/fantom/pairs"),
		birbs//fetch("https://eqapi-base-vkgqs.ondigitalocean.app/base/pairs")
	]);
	try {tfetch = await fetch("https://eqapi-base-vkgqs.ondigitalocean.app/base/pairs"); console.log(await tfetch.json());}
	catch(e) { console.log("tfetch failed",e)}
	fd = fds[0];
	bdo = fds[2];
	bd = fds[3];
	await pushBribes(fd,bd,bdo);
	PRICE=Number(fds[1])/1e18;
	tv = 0; for(i=0;i<fd.length;i++) { tv+= fd[i].N[1]/1e18 }
	te = 0; for(i=0;i<fd.length;i++) { te+= fd[i].N[3]/1e18 }
	ep_now = Date.now(); ep_now -= ep_now%(86400*7e3)
	ep_gen = 1695859200000;
	ep_num = (ep_now-ep_gen)/(86400*7e3);
	for(i=0;i<fd.length;i++) {
		$("sta").innerHTML += `
			<tr class="pool_details">

				<td id='pool_id_${i}'>${findPoolName(fd[i].A[0],i)}</td>
				<td>${(fd[i].N[0]/1e16).toFixed(6)}%</td>

				<td>${(fd[i].N[1]/1e18).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>${(fd[i].N[1]/1e16/tv).toFixed(6)}%</td>
				<td>cnf. V</td>
				<td>cnf. V %</td>

				<td>${(new Date(fd[i].N[2]*1e3)).toLocaleString()}</td>
				<td>${(fd[i].N[3]/1e18).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>$${(fd[i].N[3]/1e18*PRICE).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>${(fd[i].N[4]/1e18).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>$${(fd[i].N[4]/1e18*PRICE).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>${(new Date(fd[i].N[5]*1e3)).toLocaleString()}</td>
				<td>${(fd[i].N[6]/1e18*86400).toFixed(2)}</td>
				<td>$${(fd[i].N[6]/1e18*86400*PRICE).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
				<td><button onclick='distribute("${fd[i].A[3]}")'>Distribute</button></td>
				<td>${(fd[i].N[1]/1e18/tv*te*0.98).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>$${(fd[i].N[1]/1e18/tv*te*0.98*PRICE).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>${(0*fd[i].N[1]/1e18/tv*te*0.98).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>$${(0*fd[i].N[1]/1e18/tv*te*0.98*PRICE).toLocaleString(undefined,{maximumFractionDigits:0})}</td>


				<td>$${(bribesOld[i]).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>p.b.r</td>
				<td>${( isNaN((fd[i].N[3]/1e18*PRICE) / (bribesOld[i])) ? 0 : ((fd[i].N[3]/1e18*PRICE) / (bribesOld[i])) ).toLocaleString(undefined,{maximumFractionDigits:4})}x</td>
				<td>$${(bribes[i]).toLocaleString(undefined,{maximumFractionDigits:0})}</td>
				<td>${( isNaN((fd[i].N[1]/1e18/tv*te*0.98*PRICE) / (bribes[i])) ? 0 : ((fd[i].N[1]/1e18/tv*te*0.98*PRICE) / (bribes[i])) ).toLocaleString(undefined,{maximumFractionDigits:4})}x</td>
				<td>Min. ROI x</td>
				<td>Max. ROI x</td>

				<td>V. APR %</td>
				<td>Min. VA %</td>
				<td>Max. VA %</td>
			</tr>
		`;
	}
}

function sortit(n,_maintable,_trName,_tdName) {
  var t, r, z, i, x, y, v, b, c = 0;
  t = document.getElementById(_maintable);//.getElementsByTagName("tbody")[0];
  z = true;
  b = "a";
  while (z) {
    z = false;
    r = t.getElementsByClassName(_trName);
    for (i = 0; i < (r.length - 1); i++) {
      v = false;
      x = (r[i].getElementsByTagName(_tdName)[n].textContent).replace(/,| |\.|\$|%|x/g,'');
      if(isFinite(x)){x=Number(x)}else{x=x.toLowerCase()}
      y = (r[i + 1].getElementsByTagName(_tdName)[n].textContent).replace(/,| |\.|\$|%|x/g,'');
      if(isFinite(y)){y=Number(y)}else{y=y.toLowerCase()}
      if (b == "a") {
        if ((x) > (y)) {
          v= true;
          break;
        }
      } else if (b == "d") {
        if ((x) < (y)) {
          v = true;
          break;
        }
      }
    }
    if (v) {
      r[i].parentNode.insertBefore(r[i + 1], r[i]);
      z = true;
      c ++;
    } else {
      if (c == 0 && b == "a") {
        b = "d";
        z = true;
      }
    }
  }
    var t, r, z, i, x, y, v, b, c = 0;
}
