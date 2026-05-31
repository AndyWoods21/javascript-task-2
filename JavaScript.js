const form = document.getElementById("formForGrading");
const name = document.getElementById("name");
const mark = document.getElementById("mark");
const outcomes = document.getElementById("outcomes");
const resultList = document.getElementById("resultList");

form.addEventListener("submit", function (action) {
    action.preventDefault();

    const nameValue = name.value;
    const markValue = parseFloat(mark.value);

    let grade, outcome;
    if (markValue >= 80) {

        grade ="Distinction";
        outcome="Pass";
    } else if (markValue >= 65) {
        grade = "Merit";

        outcome = "Pass";
    } else if (markValue >= 50) {
        grade = "Pass";
        outcome = "Pass";

    } else 
    {
        grade = "Fail";
        outcome = "Fail";
    }

    outcomes.textContent = `Name: ${nameValue}, Mark Range: ${markValue}, Result: ${grade}, Outcome: ${outcome}`;

    const li = document.createElement("li");
    li.textContent= `${nameValue} - ${markValue} - ${grade} - ${outcome}`;

    resultList.appendChild(item);


    name.value = "";
    mark.value = "";




});