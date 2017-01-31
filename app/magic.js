var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' blah';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hola');
//lesson 5 of 26 
//# sourceMappingURL=magic.js.map