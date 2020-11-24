var name= 'James';//Global variable
function add (num1, num2){
    // var result = num1 + num2;
    // window.result = num1 + num2;
    result = num1 + num2;
    // console.log('Result inside:', result);
    console.log('Name inside:', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
// console.log('Result outside:', result);//error
// console.log('Name outside:', name);
var sum = add (13, 21);
console.log(sum);
console.log('Result outside', result);//no error