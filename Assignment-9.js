function area(){
    const input1=document.getElementById("input1");
    const input2=document.getElementById("input2");
    const result=document.getElementById("button");
    const perimeter=2(parseInt(input1.value)+parseInt(input2.value));

}
function clearInput(){
    const input1=document.getElementById("input1");
    const input2=document.getElementById("input2");
    const result=document.getElementById("button");

    input1.value="";
    input2.value="";
    result.innerText="";
}