function check()
{
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var x = document.getElementById("n1").value;
var y = document.getElementById("n2").value;
var z = document.getElementById("n3").value;

if(male.checked)
{
var m = document.getElementById("male").value;
document.getElementById("re4").innerHTML = "Gender:Male"
}
else if(female.checked)
{
var f = document.getElementById("female").value;
document.getElementById("re4").innerHTML = "Gender:Female"
}
else
{
	""
}
 var sum = Number(x)+Number(y)+Number(z);
 document.getElementById("re1").innerHTML = "Sum is:"+sum;
document.getElementById("re2").innerHTML = "Name:"+name;
document.getElementById("re3").innerHTML = "Age:"+age;

}