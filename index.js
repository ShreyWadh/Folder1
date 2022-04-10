//Just an alert
alert("Welcome to Stock Market❤❤");
//Asking a user to enter the name and storing the username in variable named 'name'
var name=prompt("What is your Name?");
//pick the first character of the name
var firstcharacter=name.slice(0,1);
//Capitalize the first character
var capfirst=firstcharacter.toUpperCase();

//pick the rest characters from the variable name
var restofcharacters=name.slice(1,name.length);
var lowercase=restofcharacters.toLowerCase();
var finalname=capfirst + lowercase;


alert("Hello, " + finalname);
