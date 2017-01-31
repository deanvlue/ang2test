class Greeter{
  saySomething(message: string='whats up'){
    return message + ' blah';
  }
}

var greeter = new Greeter();
greeter.saySomething('hola');

//lesson 5 of 26