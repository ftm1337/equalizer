function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{
	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { await basetrip(); arf(); /*dexstats();*/ }, 0.1337);

}, false);




async function basetrip()
{
	provider = new ethers.providers.JsonRpcProvider(RPC_URL);
	//dexstats()
	//paintcharts()
	paint25();
	arf();

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
ESABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EQUAL","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTER","outputs":[{"internalType":"contract IVoter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_e","type":"address"}],"name":"addExcluded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_o","type":"address"},{"internalType":"address","name":"_s","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_o","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingMarketCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"dilutedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"excluded","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fdv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inExcluded","outputs":[{"internalType":"uint256","name":"_t","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inGauges","outputs":[{"internalType":"uint256","name":"_t","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedMarketCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"outstandingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"pullExcluded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"tGURU","outputs":[{"internalType":"contract ItGURU","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"veNFT","outputs":[{"internalType":"contract IveNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

function notice(c) {
	window.location = "#note"
	$("content1").innerHTML = c
}

SBLOCK = 52500821;


Chart.defaults.color="#fff";
function paint(el,da,na,la,hi,ld,fi) {

	new Chart(el, {
		type: "line",
		data: {
			datasets: [
				{
    				data: da[0],
					label: la[0],
					backgroundColor: 'rgb(255, 255, 255)',
					borderColor: 'rgb(200, 200, 200)',
					hidden: hi[0],
					fill: {
						target: fi[0].t,
						above: fi[0].a
					}
				},
				{
    				data: da[1],
					label: la[1],
					backgroundColor: 'rgb(0, 255, 255)',
					borderColor: 'rgb(20, 200, 200)',
					hidden: hi[1],
					fill: {
						target: fi[1].t,
						above: fi[1].a
					}
				},
				{
    				data: da[2],
					label: la[2],
					backgroundColor: 'gold',
					borderColor: 'goldenrod',
					hidden: hi[2],
					fill: {
						target: fi[2].t,
						above: fi[2].a
					}
				}
			]
		},
		options: {
    		scales: {
        		x: {
            		type: 'time',
                	time: {
                		unit: 'day'
                	}
        		},
        		y: {
        			grid: {
        				color: "rgba(255,255,255,0.1)"
        			},
        			//type: 'logarithmic',
        			//min: 0.007
        		}
    		},
    		interaction: {
      			intersect: false
    		},
    		plugins: {
				title: {
    				display: true,
    				text: na,
    				padding: {
        				top: 10,
        				bottom: 30
    				},
    				font: {
    					size:20
    				}
    			},
    			legend :{
    				display: ld,
    			},
    			tooltip: {
                	callbacks: {
                    	label: function(context) {
                        	let label = context.dataset.label || '';

                        	if (label) {
                            	label += ': ';
                        	}
                        	if (context.parsed.y !== null) {
                            	label += fornum(context.parsed.y,0);
                        	}
                        	return label;
                    	}
                    }
                }
            },
			animations: {
				tension: {
					duration: 10000,
					easing: 'linear',
					from: 1,
					to: 0,
					loop: false
				}
    		}
    	}
	});

}

async function paint25() {
	bbh = SBLOCK;
	cbh = await provider.getBlockNumber()
	TBH = [];
	imax = 47;
	step = Math.floor((cbh-bbh)/imax)
	if(step< 2e3) {
		step = 1e3;
		imax = Math.floor((cbh-bbh)/step)
	}
	for(i=0;i<= imax; i++) { TBH.push(bbh+i*step) }
	if(TBH[TBH.length-1]<cbh){TBH.push(cbh)}
	pp = [];
	ES = new ethers.Contract(E_S,ESABI,provider);
	for(i=0;i< TBH.length; i++) {
		pp[i] = ES.info({blockTag:TBH[i]})
	}
	RPP = await Promise.all(pp);
	/*	return
		_info[0] = block.timestamp;
		_info[1] = price();
		_info[2] = circulatingSupply();
		_info[3] = outstandingSupply();
		_info[4] = dilutedSupply();
		_info[5] = inNFT();
		_info[6] = inGauges();
		_info[7] = inExcluded();
		_info[8] = veNFT.totalSupply();
		_info[9] = lockRatio();
		_info[10] = liquidity();
		_info[11] = circulatingMarketCap();
		_info[12] = marketCap();
		_info[13] = fdv();
		_info[14] = lockedMarketCap();
	*/
	cd_s = [[],[],[]]		//s in c/o/d
	cd_s2 = [[],[],[]]		//s in n/g/e
	cd_v = [[],[],[]]		//s of o/n/v
	cd_lr = [[],[],[]]		//./lqr/.
	cd_p = [[],[],[]]		//p/./.
	cd_lq = [[],[],[]]		//./lq/.
	cd_lqmc = [[],[],[]]	//lq/mc/.
	cd_lqmcr = [[],[],[]]	//./lqmc/.
	cd_mc = [[],[],[]]		//c/o/l

	for(i=0;i< TBH.length; i++) {

		cd_s[0].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][2])/1e18 ] )	//s.cir
		cd_s[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][3])/1e18 ] )	//s.out
		cd_s[2].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][4])/1e18 ] )	//s.dil

		cd_s2[0].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][5])/1e18 ] )	//s.nft
		cd_s2[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][6])/1e18 ] )	//s.gau
		cd_s2[2].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][7])/1e18 ] )	//s.exc

		cd_v[0].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][8])/1e18 ] )	//s.vee
		cd_v[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][5])/1e18 ] )	//s.nft
		cd_v[2].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][3])/1e18 ] )	//s.out

		cd_p[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][1])/1e18 ] )	//price

		cd_lr[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][9])/1e18 * 100 ] )//s.lqmcr

		cd_lqmc[0].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][10])/Number(RPP[i][1]) ] )	//s.eqlq
		cd_lqmc[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][10])/1e18 ] )	//s.lq
		cd_lqmc[2].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][11])/1e18 ] )	//s.mc

		cd_lqmcr[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][10])/Number(RPP[i][11]) * 100 ] )	//s.lr

		cd_mc[0].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][12])/1e18 ] )	//s.out
		cd_mc[1].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][14])/1e18 ] )	//s.loc
		cd_mc[2].push( [ Number(RPP[i][0])*1e3, Number(RPP[i][11])/1e18 ] )	//s.cir


	}

	paint("ch_s", cd_s, "Supply Classification", ["Circulating", "Outstanding", "Diluted"], [0,0,1], 1, [{t:'origin',a:'rgba(255, 255, 255,1)'},{t:'origin',a:'rgba(0, 255, 255,0.5)'},{t:'origin',a:'rgba(255, 255, 0, 1)'}])
	paint("ch_s2", cd_s2, "Non-circulating Supply", ["Locked in veNFTs", "Unclaimed Gauge Rewards", "Other Excluded Supply"], [0,0,1], 1, [{t:'origin',a:'rgba(127, 127, 127,0.5)'},{t:'origin',a:'rgba(0, 255, 255,1)'},false])
	paint("ch_v", cd_v, "Vote Escrowed Supply", [ "veEQUAL Voting Power", "Locked EQUAL", "Total EQUAL"], [0,0,0], 1,  [{t:'origin',a:'rgba(255, 255, 255,0.5)'},{t:'origin',a:'rgba(0, 255, 255,0.5)'},{t:'origin',a:'rgba(255, 223, 0, 0.1)'}])
	paint("ch_lr", cd_lr, "Locked Supply of EQUAL (in %)", ["", "", ""], [1,0,1], 0, [false,{t:'origin',a:'rgba(0, 255, 255,0.5)'},false])
	paint("ch_p", cd_p, "Price of EQUAL in USD ($)", ["", "", ""], [1,0,1], 0, [false,{t:'origin',a:'rgba(255, 255, 255, 0.5)'},false])
	paint("ch_lqmc", cd_lqmc, "Day-Trading Vitals", ["SCALE pooled", "Pool2 Liquidity", "Circ. Mkt. Cap."], [0,0,0], 1, [ {t:'origin',a:'rgba(255, 255, 255, 0.25)'}, {t:'origin',a:'rgba(0, 255, 255, 0.25)'},{t:'origin',a:'rgba(255, 255, 0.25)'}])
	paint("ch_lqmcr", cd_lqmcr, "Pool2 Liquidity to Mkt.Cap Ratio (in %)", ["", "", ""], [1,0,1], 0, [false,{t:'origin',a:'rgba(0, 255, 255,0.5)'},false])
	paint("ch_mc", cd_mc, "Market Capitalization in USD ($)", ["Total Issued", "Locked", "Circulating"], [0,0,0], 1, [false,false,false])


	$("es_mp").innerHTML = "$ " + (cd_p[1][cd_p[1].length-1][1]).toLocaleString();
	$("es_cmc").innerHTML = "$ " + Math.floor(cd_mc[2][cd_mc[2].length-1][1]).toLocaleString();
	$("es_lr").innerHTML = (cd_lr[1][cd_lr[1].length-1][1]).toLocaleString() + " %";

	$("cde_s_c").innerHTML = Math.floor(cd_s[0][cd_s[0].length-1][1]).toLocaleString() + " EQUAL";
	$("cde_s_o").innerHTML = Math.floor(cd_s[1][cd_s[1].length-1][1]).toLocaleString() + " EQUAL";
	$("cde_s_d").innerHTML = Math.floor(cd_s[2][cd_s[2].length-1][1]).toLocaleString() + " EQUAL";
}

async function settings() {
	notice(`
		<div align="center">
			<b><img style="vertical-align: middle;"src="https://raw.githubusercontent.com/twitter/twemoji/54df6a1340154c4f5bad09c85de8b720c5373c03/assets/svg/2699.svg" width="16px"> User Settings</b>
			<hr><br>
			<b>Current RPC:</b> ${provider.connection.url}
			<br><br>
			Enter a New Custom RPC URL below
			<br><br>
			<input id="custom-rpc" placeholder="https://rpc.ankr.com/fantom" style="color:#000;"/>
			<br><br>
			<button onclick="switch_rpc()" style="color:#000;">Switch RPC</button>
			<br><br>
		</div>
	`);
}

async function switch_rpc() {
	temprov = new ethers.providers.JsonRpcProvider($("custom-rpc").value);
	notice(`
		<div align="center">
			<b><img style="vertical-align: middle;"src="https://raw.githubusercontent.com/twitter/twemoji/54df6a1340154c4f5bad09c85de8b720c5373c03/assets/svg/2699.svg" width="16px"> User Settings</b>
			<hr><br>
			Detecting Network from the RPC URL you shared . . .
		</div>
	`);
	tempn={}
	try {tempn = await provider.detectNetwork(); }
	catch(e) {
		notice(`
			<div align="center">
				<b><img style="vertical-align: middle;"src="https://raw.githubusercontent.com/twitter/twemoji/54df6a1340154c4f5bad09c85de8b720c5373c03/assets/svg/2699.svg" width="16px"> User Settings</b>
				<hr><br>
				We were unable to access Fantom Network (#250) from the RPC URL you shared . . .
			</div>
		`);
		return;
	}
	if(tempn.chainId != 250 ) {

		notice(`
			<div align="center">
				<b><img style="vertical-align: middle;"src="https://raw.githubusercontent.com/twitter/twemoji/54df6a1340154c4f5bad09c85de8b720c5373c03/assets/svg/2699.svg" width="16px"> User Settings</b>
				<hr><br>
				We were unable to access Fantom Network (#250) from the RPC URL (#${tempn.chainId==null?"?":tempn.chainId}) you shared . . .
			</div>
		`);
		return;
	}
	else if(tempn.chainId == 250) {
		notice(`
			<div align="center">
				<b><img style="vertical-align: middle;"src="https://raw.githubusercontent.com/twitter/twemoji/54df6a1340154c4f5bad09c85de8b720c5373c03/assets/svg/2699.svg" width="16px"> User Settings</b>
				<hr><br>
				Connected Successfully to Fantom Network (#250) from the RPC URL you shared!
				<br><br>
				<b>Old RPC:</b> ${provider.connection.url}
				<br>
				<b>New RPC:</b> ${temprov.connection.url}
			</div>
		`);

		provider = temprov;
		try {
			paintNewCharts();
		} catch(e) {
			notice(`hmm.. something went wrong.. please re-switch RPC!`)
		}
	}
}

async function paintNewCharts() {
	try {
		await destroyOldCharts();
		await paint25();
		notice(`Updated Data Successfully!<br><br>Please close this notification :)`)
	} catch(e) {
		notice(`hmm.. something went wrong..<br><br> <button onclick="paintNewCharts()">Retry?</button>`)
	}
}
async function destroyOldCharts() {
/*

		<br><br><br><br><canvas id="ch_s" style="width:80%;height:50vh;max-height:500px"></canvas>

		<br><br><br><br><canvas id="ch_s2" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_v" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_lr" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_p" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_lqmc" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_lqmcr" style="width:80%;height:50vh;max-height:500px"></canvas>
		<br><br><br><br><canvas id="ch_mc" style="width:80%;height:50vh;max-height:500px"></canvas>
*/
	ol_chart = Chart.getChart("ch_s");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_s2");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_v");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_lr");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_p");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_lqmc");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_lqmcr");if (ol_chart != undefined) { ol_chart.destroy(); }
	ol_chart = Chart.getChart("ch_mc");if (ol_chart != undefined) { ol_chart.destroy(); }
}