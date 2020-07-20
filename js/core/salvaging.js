function salvage(no=1) {
	no = new Decimal(no);
	if (player.bananas.lt(no)) return;
	player.bananas = player.bananas.sub(no);
	player.antimatter = player.antimatter.add(no.mul(0.00001));
	player.seeds = player.seeds.add(no.mul(Math.random()).round().add(no));
}
function plant(no=1) {
	no = new Decimal(no);
	if (player.seeds.lt(no)) return;
	player.seeds = player.seeds.sub(no);
	player.pendingseeds = player.pendingseeds.add(no);
}
function destroy() {
	if (player.trees.lt(1)) return;
	player.trees = player.trees.sub(1);
	player.bananas = player.bananas.add(Math.round(Math.random()*5));
}
setInterval(() => {
	if (player.pendingseeds.gte(1)) {
		var tosub = player.pendingseeds.pow(0.5).ceil().max(8).min(player.pendingseeds);
		player.pendingseeds = player.pendingseeds.sub(tosub);
		player.trees = player.trees.add(tosub);
	}
}, m*1000);
