var fextend = function(f, a){
    f.prototype = Object.create(this.prototype);
    for (var k in a) {
        Object.defineProperty(f.prototype, k, Object.getOwnPropertyDescriptor(a, k));
    }
    f.prototype.constructor = f;
    f.extend = extend;
    f.fextend = fextend;
    return f;
}, extend = function(a){
    var f = function(){
        if (this.init){
            this.init.apply(this, arguments);
        }
    };
    return fextend.call(this, f, a);
}, Class = extend.call(Function, {});

module.exports = Class;
