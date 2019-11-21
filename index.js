//First Problem Frequency Counter -validAnagram Problem: 

//1. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is word, name, or phrase
///formed by rearranging the letters of another, such as cinema, formed from iceman. 

//Time Complexity is 0(N) linear 
//Space Complexity is 0(1) constant 

const validAnagram = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false; 
    }
    let anagramCount1 = {}; 
    let anagramCount2 = {}; 
    for(let val of arr1){
        anagramCount1[val] = (anagramCount1[val] || 0) + 1;  
    }
    for(let val of arr2){
        anagramCount2[val] = (anagramCount2[val] ||0) + 1; 
    }
    for(let key in anagramCount1) {
        if(!(key in anagramCount2)) {
            return false;
        }
        if(anagramCount2[key] !== anagramCount1[key]){
            return false;
        }
    }
    return true;    
}


//Second Problem Multiple Pointers - countUniqueValues Problem: 
    //2. Implement a function called countUniqueValues, which accepts a sorted arr, and counts the unique values in the arr. There can
    //be negative numbers in the arr, but it will always be sorted. 


    const countUniqueValues = (arr) => {
        if(arr.length === 0) {
            return 0; 
        }
        let i = 0; 
        for(let j = 1; j < arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j]
            }
        }
        return i+1;
    }
    
//Time complexity O(N) Linear  
//Space complexity O(1) Constant 
    
  ///Recursion Problems -- Power 
    //3.Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
          ///This Func should mimic the functionality of Math.Pow() don't worry about negative bases and exponents. 
    
     // power(2,0) // 1
    // power(2,2) // 4
    // power(2,4) // 16

    const power = (num, exp) => {
        if(exp <= 0) return 1;

        return num * power(num,--exp);  
    }; 
    power((10, 5));
//Time complexity Log(N)   
//Space complexity O(1) Constant 

 
//Recurion Problems -- Factorial 
    //4. Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.
   
    //factorial(1) // 1
    // factorial(2) // 2
    // factorial(4) // 24
    // factorial(7) // 5040

    const factorial = (num) => {
        if(num === 0) return 1; 
        return num * factorial(num - 1);
    };
    factorial(8);


///Recursion Problems -- productOfArray 
    //5. Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
        
    // productOfArray([1,2,3]) // 6
    // productOfArray([1,2,3,10]) // 60

    const productOfArray = (arr) => {
        if (arr.length === 1) {
            return(arr[0]); 
        }else {
            return arr.pop() * productOfArray(arr);
        } 
    };  

    console.log(productOfArray([1,2,3,4,5,6]));


///Recursion Problem -- recursiveRange
    //6. Write a func called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the func.
    const recursiveRange = (num) => {
    if(num === 1) return 1; 
    return num + recursiveRange(--num);  
};

console.log(recursiveRange(8));



///Searching Algorithms///
    //--Linear Search Problem// 
        //1. Write a func called LinearSearch which accepts an arr and val, and returns the index at which the val exists. 
            //If the value does not exist in the arr return -1.   
    
        const linearSearch = (arr, val) => {
            for(let i = 0; i <= arr.length; i++){
                if(arr[i] === val)return i;
            }
            return - 1;
        }
    console.log(linearSearch([5,10,15,20,25],15));
//Time Complexity O(N) Linear
//Space Complexity O(1)Constant 
