// A.Print odd numbers in an array
// Arrow Function :
var y=[1,2,3,4,5]
var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));


// B.Convert all the strings to title caps in a string array
// USING ARROW FUNCTION:
var str="hello how are you";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));


// c.Sum of all numbers in an array
// BY USING ARROW FUNCTION:
var a=[1,2,3,4,5];
var sum=0;
let add=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(add(a));

// D.Return all the prime numbers in an array
// BY USING ARROW FUNCTION:
let n=21;
let prime=(n)=>
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
console.log(prime(n));



// E.Return all the palindromes in an array
// BY USING ARROW FUNCTION:
let input = [11,12,22,24,'mom','dead','deed']
let palindrome = (input)=> {
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
}