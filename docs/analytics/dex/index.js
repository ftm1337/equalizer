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


function ranger(b,d) {
	rd = []
	for(i=0;i<d.length;i++) {
		td0 = d[i][0] - b[i][0];
		tdp = i<d.length-1 ? d[i][0] - b[i+1][0] : 1;
		tdm = i>0 ? d[i][0] - b[i-1][0] : 0 ;
		if( d[i][0]<1673038000000 ) {"discard older than equalizer"}
		else if( td0 < 43200000 && td0 > -43200000 ) {
			rd.push( [ Math.min( d[i][0] , b[i][0] ) , d[i][1] * b[i][1] ] )
		}
		else if( (tdp < 43200000) && (tdp > -43200000) ) {
			rd.push( [ Math.min( d[i][0] , b[i+1][0] ) , d[i][1] * b[i+1][1] ] )
		}
		else if ( i>0 && (tdm < 43200000) && (tdm > -43200000) ) {
			rd.push( [ Math.min( d[i][0] , b[i-1][0] ) ,  d[i][1] * b[i-1][1] ] )
		}
	}
	return rd;
}

async function getvol(en) {
	cgvcgv = [];
	await fetch("https://api.coingecko.com/api/v3/exchanges/"+en+"/volume_chart?days=1000").then((response) => response.json()).then((data) => cgvcgv = (data));
	for(i=0;i<cgvcgv.length;i++){cgvcgv[i][1]=Number(cgvcgv[i][1]);}
	cgvcgv.reverse();
	return cgvcgv
}


async function paint25() {
	cd_s = [[],[],[]]		//s in c/o/d
	cd_s2 = [[],[],[]]		//s in n/g/e
	cd_v = [[],[],[]]		//s of o/n/v
	cd_lr = [[],[],[]]		//./lqr/.
	cd_p = [[],[],[]]		//p/./.
	cd_lq = [[],[],[]]		//./lq/.
	cd_lqmc = [[],[],[]]	//lq/mc/.
	cd_lqmcr = [[],[],[]]	//./lqmc/.
	cd_mc = [[],[],[]]		//c/o/l


	p_btc = [];
	await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1000&interval=daily").then((response) => response.json()).then((data) => p_btc = (data).prices);
	for(i=0;i<p_btc.length;i++){p_btc[i][1]=Number(p_btc[i][1]);}
	p_btc.reverse();

	v_eq=ranger(p_btc,await getvol("equalizer"));
	v_velo=ranger(p_btc,await getvol("velodrome"));
	v_soleth=ranger(p_btc,await getvol("solidly-ethereum/"));

	paint("ch_v_velo_eq_sol", [ v_soleth, v_eq, v_velo], "Daily DEX Volumes (in USD)", ["Solidly", "Equalizer", "Velodrome"], [1,0,1], 1, [{t:'origin',a:'rgba(127, 127, 127,0.5)'},{t:'origin',a:'rgba(0, 255, 255,0.5)'},{t:'origin',a:'rgba(255, 255, 0,0.25)'}])

	v_boo=ranger(p_btc,await getvol("spookyswap"));
	v_bx=ranger(p_btc,await getvol("beethovenx"));

	paint("ch_v_bx_eq_boo", [ v_bx, v_eq, v_boo], "Daily DEX Volumes (in USD)", ["Beethoven-x", "Equalizer", "SpookySwap"], [1,0,1], 1, [{t:'origin',a:'rgba(127, 127, 127,0.5)'},{t:'origin',a:'rgba(0, 255, 255,0.5)'},{t:'origin',a:'rgba(255, 255, 0,0.25)'}])


/*
	$("es_mp").innerHTML = "$ " + (cd_p[1][cd_p[1].length-1][1]).toLocaleString();
	$("es_cmc").innerHTML = "$ " + Math.floor(cd_mc[2][cd_mc[2].length-1][1]).toLocaleString();
	$("es_lr").innerHTML = (cd_lr[1][cd_lr[1].length-1][1]).toLocaleString() + " %";

	$("cde_s_c").innerHTML = Math.floor(cd_s[0][cd_s[0].length-1][1]).toLocaleString() + " EQUAL";
	$("cde_s_o").innerHTML = Math.floor(cd_s[1][cd_s[1].length-1][1]).toLocaleString() + " EQUAL";
	$("cde_s_d").innerHTML = Math.floor(cd_s[2][cd_s[2].length-1][1]).toLocaleString() + " EQUAL";
*/

}