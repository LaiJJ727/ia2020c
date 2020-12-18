var i=10;

if(i===10){
    console.log("i is more than 10");
} else if(i=="10"){
    console.log("1 is equal to string ten");
}
else{
   console.log("i is less than 10");
}

for(var i=0; i<3; i++){
    console.log(i);
}

for(var y=5; y>0; y--){
    console.log("y is ="+ y);
}
for(var i=0; i<100; i+=5){
    console.log(i);
}
var w=0;
for(var x=0; x<=5; x++){
     w=w+x;
    console.log("x="+w);
}
//exercise 1
function addvalue(a,b){
    console.log(a+b);
}
addvalue(2,4);

//exercise2

function calculatePuppyAge(age,sex){
    var puppyAge = 7*age;
    console.log("Your doggie age is"+ puppyAge+"compare to human")
}

calculatePuppyAge(10,",female");
calculatePuppyAge(2,",male");

//exercise3
function minusvalue(a,b){
    console.log(a-b);
}
minusvalue(9,2);

//exercise4
