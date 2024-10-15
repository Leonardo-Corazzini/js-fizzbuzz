for (let i=0;i < 100;i++){
    let num = i + 1
    let multiplo3 = num % 3
    let multiplo5 = num % 5
    if (multiplo3 ===0 && multiplo5 === 0) {
        console.log('FizzBuzz')
    } else if (multiplo3 === 0){
        console.log('Fizz')
    } else if (multiplo5 === 0){
        console.log('Buzz')
    } else {
        console.log(num)
    }
     
     
    
}
  