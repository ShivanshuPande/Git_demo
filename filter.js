//fitler , maps and arrow 
//need to work more harder 
// need to get the internship in this summer and have to make it 



// maps given an array , give me back an array in which every value is multipled by 2 
    
// [ 1, 2,3 ,4, 5,6, 7, 8, 9, 10]
// maps 

const arr1 = [1,2,3,4,5];

// function square(a){
//     return a * a;
// }
// const ans = arr1.map(square);
// console.log(ans);

// filter

function isEven (n){
    if ( n %  2 == 0 ){
        return true ;
    }
    else {
        return false;
    }
}


const ans = arr1.filter(isEven);
console.log(ans);

//function of the string class

// name.startsWith("h") is used to find the first letter of the string 



