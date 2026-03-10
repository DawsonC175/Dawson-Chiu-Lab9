var grade1 = document.getElementById("sub1").value;
var grade2 = document.getElementById("sub2").value;
var grade3 = document.getElementById("sub3").value;

var button = document.getElementById("calculate");

average = Number(average);
var finalgrade;

button.addEventListener ("click", function(){

    grade1 = parseInt(grade1);
    grade2 = parseInt(grade2);
    grade3 = parseInt(grade3);

    var average = (grade1 + grade2 + grade3)/3;

    if (average>=90){
        finalgrade = "A";
    } else if (average >= 80) {
        finalgrade = "B";
    } else if (average >= 70) {
        finalgrade = "C";
    } else if (average >= 60) {
        finalgrade = "D";
    } else if (average < 60) {
        finalgrade = "F";
    }  

    console.log(average);
    document.getElementById("average").innerHTML = average;
    document.getElementById("grade").innerHTML = finalgrade;

});