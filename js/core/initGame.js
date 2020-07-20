let initPlayer = {
	bananas: new Decimal(6),
	antimatter: new Decimal(0),
	seeds: new Decimal(0),
	pendingseeds: new Decimal(0),
	trees: new Decimal(0),
	lastTick: performance.now()
};
let player = initPlayer;
let time = 25;
let m = 15;
let el = {
	bananaamt: document.getElementById("bananaamt"),
	amamt: document.getElementById("antimatteramt"),	
	seedamt: document.getElementById("seedamt"),
	treeamt: document.getElementById("treeamt"),
	pendingamt: document.getElementById("pendingamt")
};
