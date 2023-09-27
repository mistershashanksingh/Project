console.log("Let's do something with array on javaScript ")

var kawasaki = new Array("z900", "zx6r", "zx10r", "zh2", "h2", "h2r");

console.log("Here my array list : " + kawasaki);
console.log("Here my array list : " + kawasaki[3]);
console.log("Here my array list : " + kawasaki[5]);

// print my array list using loop;

for (bike in kawasaki)
{
    console.log("What I store in my array list "+ bike+ " : " + kawasaki[bike]);
}