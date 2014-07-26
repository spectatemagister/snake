function Game() {
    this.snake = new Snake(0, 0);
    this.inputManager = new InputManager();
}

Game.prototype.update = function() {
    this.snake.update();
}

Game.prototype.render = function(context) {
    this.snake.render(context);
}