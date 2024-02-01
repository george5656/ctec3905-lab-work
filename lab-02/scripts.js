function greetMe(){
    console.log("Hello!!");
    myTrigger.textContent = "hello"
}
function test(){
    myTrigger.textContent = "random"
}
myTrigger.addEventListener('click',greetMe);
