function area(){
    const input1=document.getElementById("input1");
    const input2=document.getElementById("input2");
    const solution=document.getElementById("solution");
    let length=parseInt(input1.value);
    let width=parseInt(input2.value);
    const perimeter=2 *(length+width);

    if(isNaN(length)||isNaN(width)){
        solution.innerText = "Please enter valid numbers.";
        return;
    }

    solution.innerText=`perimeter is ${perimeter}`;

}
function clearInput(){
    const input1=document.getElementById("input1");
    const input2=document.getElementById("input2");
    const solution=document.getElementById("solution");

    input1.value="";
    input2.value="";
    solution.innerText="";
}