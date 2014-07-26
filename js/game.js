function Game() {
    this.snake = new Snake(0, 0);
    this.inputManager = new InputManager();
}

Game.prototype.update = function() {
    this.snake.update();

    console.log("keys? " + this.inputManager.isKeyDown(InputManager.SPACE));
}

Game.prototype.render = function(context) {
    //render background
    var w = window.innerWidth;
    var h = window.innerHeight;
    context.fillStyle = "#3399FF";
    context.fillRect(0, 0, w, h);

    this.snake.render(context);
}