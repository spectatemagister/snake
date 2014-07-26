function Head(ex, why) {
    this.x = ex;
    this.y = why;
}

Head.prototype.update = function() {

}

Head.prototype.render = function(context) {
    var ss = Snake.SEGMENT_SIZE;
    var sb = Snake.SEGMENT_BUFFER;
    context.fillStyle = "#CC0000";
    context.fillRect(this.x + sb, this.y + sb, ss - sb, ss - sb);
}