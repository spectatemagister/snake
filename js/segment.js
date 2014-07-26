function Segment(ex, why) {
    this.x = ex;
    this.y = why;
}

Segment.prototype.update = function() {

}

Segment.prototype.render = function(context) {
    var ss = Snake.SEGMENT_SIZE;
    var sb = Snake.SEGMENT_BUFFER;
    context.fillStyle = "#00CC00";
    context.fillRect(this.x + sb, this.y + sb, ss - sb, ss - sb);
}