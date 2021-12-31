

//feet to inch
 function feetToInch(feet){

    return feet * 12;
 }
 console.log(feetToInch(5))

// //  centimeter to meter
 function centimiterToMeter(cm){
     return cm / 100;
 }

 console.log(centimiterToMeter(1))


//  //paper requirements 
 function  paperRequirements(Firstbook, secondBOOK, thirdBOOK){
     const firstBookPapers = Firstbook * 100;
     const secondBookPapers = secondBOOK * 200;
     const thirdBookdPapers =  thirdBOOK * 300;
     const totalPapers = firstBookPapers + secondBookPapers + thirdBookdPapers;
     return totalPapers;

 }

 console.log(paperRequirements(2,3,4))


// besfriendNamesCheeck
 function bestFriend(names){
     let largestNameFirend = '';
     for(let name of names){
         if(largestNameFirend.length < name.length){
        
        largestNameFirend = name;
         
     } 

     }
     return largestNameFirend;
    

 }
 const friend = ['arfat', 'hasan', 'fahim', 'jabu', 'arfat hasan fahim']
 const largestNamesFriends =  bestFriend(friend)
 console.log(largestNamesFriends)


// positive array 
 function CheekDigit(Nums){
    let newArr = []
    for(let n of Nums){
          if(n > 0){
              newArr.push(n)

          }
          else{
              break;
          }
    }
   return newArr

 }
 const Numbers = [2,32,32,32,2,32,32,22, -1, -2, 402320, 3034 ,232, 32,3,43,3]
 const arr = CheekDigit(Numbers)
 console.log(arr)