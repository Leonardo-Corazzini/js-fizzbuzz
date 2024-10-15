for (let i=0;i < 100;i++){
    let num = i + 1
    num = num % 3 ===0 && num % 5 === 0? 'FizzBuzz'
            : num % 3 === 0? 'Fizz'
            : num % 5 === 0? 'Buzz' 
            : num ;
    console.log(num)
     
     
    
}