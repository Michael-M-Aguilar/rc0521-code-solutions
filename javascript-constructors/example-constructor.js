function ExampleConstructor() {}
console.log('valueof ExampleConstructor', ExampleConstructor());
console.log('typeof ExampleConstructor', ExampleConstructor());

var ExampleConstructor1 = new ExampleConstructor();
console.log('value ExampleConstructor1', ExampleConstructor1);

console.log('if ExampleConstructor1 is an instance of ExampleConstructor:', ExampleConstructor1 instanceof ExampleConstructor);
