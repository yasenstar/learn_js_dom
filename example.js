var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;

alert(lennon.year);

var beatles = {};
beatles.vacalist = lennon;

alert(beatles.vacalist.name);
alert(beatles.vacalist.year);
alert(beatles.vacalist.living);