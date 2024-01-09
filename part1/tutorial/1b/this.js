const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name + ' and I am ' + this.age + ' years old')
  },
  doAddition: function(a, b) {
	  console.log(a+b)
  }
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

arto.growOlder = function() {
	this.age += 1
}

arto.growOlder()
arto.greet()  // "hello, my name is Arto Hellas" gets printed

arto.doAddition(1, 4)

const refAdd = arto.doAddition

refAdd(1,4)
