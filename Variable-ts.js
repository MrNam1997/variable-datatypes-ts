var VariableTs = /** @class */ (function () {
    function VariableTs(num) {
        this.num = num;
    }
    VariableTs.prototype.show = function () {
        return 'Hello, ' + this.num;
    };
    return VariableTs;
}());
var variable = new VariableTs(6);
console.log(variable.show());
