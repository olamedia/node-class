# node-class
Yet another class-extend

## Basic usage
```
var MyClass = Class.extend({
  init: function(){
    // constructor
  }
});

var MyClass2 = MyClass.extend({
  init: function(){
    // Well, any parent method can be called like that, no magic, just vanilla and speed
    MyClass.prototype.init.call(this, ...);
    MyClass.prototype.init.apply(this, [...]);
    // constructor
  }
});
```

## Advanced usage
```
var MyClass = Class.fextend(function MyClass(){
  // constructor
}, {});
```
