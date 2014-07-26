var mouse;
var keysPressed;

function InputManager() {
    mouse = {x: 0, y: 0};
    keysPressed = {};

    document.addEventListener('mousemove', InputManager.prototype.updateMouse, false);
}

InputManager.prototype.updateMouse = function(e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}

InputManager.prototype.getMouseX = function() {
    return mouse.x;
}

InputManager.prototype.getMouseY = function() {
    return mouse.y;
}