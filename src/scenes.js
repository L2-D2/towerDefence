Crafty.scene('Game', {
	// A 2D array to keep track of all occupied tiles
	this.occupied = new Array(Game.map_grid.width);
	for (var i = 0; i < Game.map_grid.width; i++) {
		this.occupied[i] = new Array(Game.map_grid.height);
		for (var y = 0; y < Game.map_grid.height; y++) {
			this.occupied[i][y] = false;
		}
	}
	
// Place a tree at every edge square on our grid of 16x16 tiles
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

			if (at_edge) {
				// Place a tree entity at the current tile
				Crafty.e('Tree').at(x, y)
				this.occupied[x][y] = true;
			}
		}
	}

// Define a Path
	this.path = [
		[0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,1,0,0,0,0,1,1],
		[0,0,0,0,1,0,0,0,0,1,0],
		[0,0,0,0,1,1,1,1,0,1,0],
		[0,0,0,0,0,0,0,1,1,1,0],
		[0,0,0,0,0,0,0,0,0,0,0]];
