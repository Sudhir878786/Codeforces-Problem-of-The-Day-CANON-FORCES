const newProblemButton = document.querySelector("button"),
problemStatement = document.querySelector(".problem-statement p");
function getNewProblem(){
    newProblemButton.classList.add("dwell");
    newProblemButton.innerText = "loading..";

       console.log("Getting new Problem...");
       let CodeForcesUrl = `https://codeforces.com/problemset/problem/1527/B1`;
    window.open(CodeForcesUrl, "_blank");
       // fetch("https://codeforces.com/api/probelmset.probelms?tags=implementation").then(newProblem => newProblem.json()).then(generatedNewProblem =>{
        // console.log(generatedNewProblem);


        //newProblemButton.innerText = "New Problem";
        

    //})
    newProblemButton.classList.remove("dwell");


       
}
function enterIntoTheProblem(){
    problemStatement.classList.add("dwell");
    problemStatement.innerText = "Taking you to CodeForces..";
    console.log("Entering into CodeForces...");
    problemStatement.classList.remove("dwell");
}



newProblemButton.addEventListener("click", getNewProblem);
//newProblemButton.addEventListener("click", getNewProblem);
// problemStatement.addEventListener("click", enterIntoTheProblem);
