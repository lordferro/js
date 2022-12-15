let sms = "Hello";

let smsEnd;
if (5 > 1) {
    smsEnd = ", Vas";
}
else {
    smsEnd = ", Olya";
}

//Тернарный оператор:


 let smsEnd = 5 > 1 ? ", Vas" : ", Olya";

 sms += smsEnd;
 console.log(sms);