function toSci(num, places, placesafter1000) {
	if (places == undefined) places = 0;
	if (placesafter1000 == undefined) placesafter1000 = 2;
	num = new Decimal(num);
	return (num.e < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
}
function updateUI() {
	el.bananaamt.innerText = `you have ${toSci(player.bananas)} bananas`;
	el.seedamt.innerText = `you have ${toSci(player.seeds.floor())} banana seeds`;
	el.amamt.innerText = `you have ${toSci(player.antimatter, 5)} antimatter`;
	el.treeamt.innerText = `you have ${toSci(player.trees)} banana trees`;
	el.pendingamt.innerText = `you have ${toSci(player.pendingseeds)} seeds waiting to grow into trees`;
	if (performance.now()-player.lastTick > m*1000) {
		player.bananas = player.bananas.add(player.trees);
		player.lastTick = performance.now();
	}
}
setInterval(updateUI, 50);