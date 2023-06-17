// Given an array of integers A of size N and an integer B.

// The College library has N books. The ith book has A[i] number of pages.

// You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.

// NOTE: Return -1 if a valid assignment is not possible.

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       books
   };
function books(A,B){
    if((B<1)||(A<1)||(B>A.length)){
        return -1;
    }
    else if(B===1){
        return A.reduce((sum,v)=>sum+=v,0);
    }
    else if(B===A.length){
        return A.sort((a,b)=>b-a)[0];
    }
    else{
        let leftB = Math.floor(B/2);
        let rightB = B-leftB;
        let left=0;
        let right = A.length-1;
        let mid = Math.floor((left+right)/2);
        let cur = A[mid];
        while((left<right)&& (mid>=leftB) && ((A.length-mid)>=rightB)){
            let leftPage = A.slice(0,mid).reduce((sum,v)=>sum+=v,0);
            let rightPage = A.slice(mid+1).reduce((sum,v)=>sum+=v,0);
            if((leftPage<rightPage && (leftPage+cur)>rightPage)||(rightPage<leftPage&&(rightPage+cur)>leftPage)){
                break;
            }
            if(leftPage>rightPage){
                right = mid;
                }
            else if(rightPage>leftPage){
                left = mid;
            }
            else{
                break;
            }
            mid = Math.floor((left+right)/2);
        }
        let leftMax = books(A.slice(0,mid),leftB);
        let rightMax = books(A.slice(mid),rightB);
        return Math.max(leftMax,rightMax);
    }
}   
let A = [100,200,50,30,60,70];
console.log(books(A,3));