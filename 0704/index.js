var obj = {
    foo: function () {console.log(this.bar);},
    bar: 1
};
var bar = 2;
var foo = obj.foo;

obj.foo();
foo();