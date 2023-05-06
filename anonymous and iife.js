// a.PRINT ODD NUMBERS IN Array
var array=[1,2,3,4,5];
let odd=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };
odd(array)

//  IMMEDIATELY INVOKED FUNCTION Expression(IIFE)
 var array=[1,2,3,4,5];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array)




// b.Convert all the strings to title caps in a string array
// anonymous : 
var str="hello how are you"
let capit=function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return console.log(str.join(' '));
}
capit(str)

// IIFE :
var str="hello how are you";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return console.log(str.join(' '));
})(str);



// c.Sum of all numbers in an array
// Anonymous:
var a=[1,2,3,4,5];
var sum=0;
let add=function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return console.log(sum);
}
add(a);

// IIFE :
var a=[1,2,3,4,5];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return console.log(sum);
})(a);

// d.Return all the prime numbers in an array
// Anonymous Function:
                 

let n=21;
let prime=function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
prime(n);

// IIFE :
let n=21;
(function (prime)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);

// e.Return all the palindromes in an array
// anonymous
let input = [11,12,22,24,mom,moon,dead,deed]
let palindrome = function(input) {
    let i=0;
    let ans="";
    while(i<input.length) {
      let temp="";
      temp=temp+input[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+input[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return ans;
    }
    else
    {
        return 'No Palindrome found'
    }
}
console.log(palindrome(input));


// IIFE
let input = [11,12,22,24,'mom','dead','deed'];
(function(input) {
    let i=0;
    let ans="";
    while(i<input.length) {
      let temp="";
      temp=temp+input[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+input[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return console.log(ans);
    }
    else
    {
        return console.log('No Palindrome found')
    }
})(input)
    
// f.Return median of two sorted arrays of the same size.
// Anonymous:
function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
};

// IIFE:
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});


// g.Remove duplicates from an array

// anonymous :
var array=[1,1,2,3,4,5];
function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 (array);

//  IIFE :
 var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);

// h.Rotate an array by k times
// anonymous :
function (a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
   
}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
(Array, N, K);

// IIFE :
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
})
(Array, N, K);