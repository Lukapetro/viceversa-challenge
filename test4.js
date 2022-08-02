//Re-write test2.js class in order to resolve any issues, and comment everything in order to let VSCode help you suggesting the code and its meaning

class MyClass {
  constructor(firstName, lastName) {
    // we need to pass firsname to get the full name
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class MyClass2 {
  static getFullName(entity) {
    return entity.getFullName();
  }
}

var first = new MyClass(); //Which is the result here: MyClass.getFullName is not a function
first.getFullName() //Which is the result here: undefined undefined

var me = new MyClass("Michael", "Sogos");
me.getFullName(); //Which is the result here: Michael Sogos

var you = new MyClass("Mario", "Rossi");
you.getFullName(); //Which is the result here: Mario Rossi

MyClass2.getFullName(me); //Which is the result here: Michael Sogos

MyClass2.getFullName(you); //Which is the result here: Mario Rossi
