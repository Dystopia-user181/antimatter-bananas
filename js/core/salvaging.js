function salvage() {
	if (player.bananas.lt(1)) return;
	player.bananas = player.bananas.sub(1);
	player.antimatter = player.antimatter.add(0.00001);
	player.seeds = player.seeds.add(Math.round(Math.random()*2));
}
function plant() {
	if (player.seeds.lt(1)) return;
	player.seeds = player.seeds.sub(1);
	player.pendingseeds = player.pendingseeds.add(1);
}
function destroy() {
	if (player.trees.lt(1)) return;
	player.trees = player.trees.sub(1);
	player.bananas = player.bananas.add(Math.round(Math.random()*5));
}
function salvageDozen() {
	if (player.bananas.lt(12)) return;
	player.bananas = player.bananas.sub(12);
	player.antimatter = player.antimatter.add(0.00012);
	player.seeds = player.seeds.add((Math.round(Math.random()*12)+6));
}
setInterval(() => {
	if (player.pendingseeds.gte(1)) {
		var tosub = player.pendingseeds.pow(0.5).ceil().max(8).min(player.pendingseeds);
		player.pendingseeds = player.pendingseeds.sub(tosub);
		player.trees = player.trees.add(tosub);
	}
}, m*1000);
