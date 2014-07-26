Snake.SEGMENT_SIZE = 15;
Snake.SEGMENT_BUFFER = 2;

function Snake(ex, why) {
    this.x = ex;
    this.y = why;
    this.direction = 0;

    this.head = new Head(0, 0);
    this.segments = {};
}

Snake.prototype.update = function() {
    this.head.update();
    this.eachSegment(function (segment) {
         this.segment.update();
    });
}

Snake.prototype.render = function(context) {
    this.head.render(context);
    this.eachSegment(function (segment) {
        this.segment.render(context);
    });
}

Snake.prototype.eachSegment = function(callback) {
    for (var s in this.segments) {
       callback(s);
    }
}

Snake.prototype.getDirectionVector = function() {

}