import inquirer from "inquirer";
const answers:{
    numberOne:number,
    numberTwo:number,
    operator:string,

}=await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message:"please enter your first number:"
    },
    {
        type:"number",
        name:"numberTwo",
        message:"please enter second your number:"
    },
    {
        type:"list",
        name:"operator",
        choices:["+","-","*","/"],
        message: "Select operator: "
    },

]);
const {numberOne , numberTwo , operator } = answers;
if(numberOne && numberTwo && operator){
    let result :number = 0 ;
    if(operator ==="+"){
        result= numberOne + numberTwo
    }else if( operator ==="-"){
        result= numberOne - numberTwo
    }if(operator ==="*"){
        result= numberOne * numberTwo
    } if( operator ==="/"){
        result= numberOne / numberTwo
    }

        console.log("your result is : ", result)
    
}
else{ 
    console.log("kindly enter correct value")
}