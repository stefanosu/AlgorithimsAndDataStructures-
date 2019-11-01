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