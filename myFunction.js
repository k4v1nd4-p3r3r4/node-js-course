const math = (number1,number2,number3,number4)=>{
    let a = number1+number2*2;
    if(number3){
        a+=number3-5
    }else if(number4){
        a*number4
    }

    return a;
}

console.log(math(2,3,5,5));

// console.log(math(5,5));

export default math;