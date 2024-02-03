

var num8 = 80;
 function printMyMessage(Harshal) {
    console.log(Harshal);
}
   
 function externalMessage() {
    var num5 = 50 ;
    alert("Welcome from outside !!");
    //
    {
        console.log(num5);

        let num6= 60 ;  // 60
        console.log(num6);

        const num7 = 70 ; // 70
        console.log(num7);

        var num9 = 90 ; // 90
        console.log(num9);

    }
    //console.log(num6); // Block scope, UN
      



    console.log(num5);  // 50


    console.log(num8); // inner scope; Lexical scoping;
    console.log(num9); // 90, functional scope
    

    let suraj = " Welcome to class !!";
    printMyMessage(suraj);

}

// console.log(num5);

  // function name2 () {
    //
  }
  name2()

  const name3 = function() {
    //
  }
  name3();

  const name4 = ()=> {
    //
  }
  name4();

  

* function sum(a,b){
    return a + b;
    }
     
     
     console.log(sum(10,20));  // 30
     console.log(sum(10));  // NaN  
     
     
     * function sum1(a = 0,b=0) {
     return a+b;
     }
     
     console.log(sum1(10,20)); // 30
     consloe.log(sum(10)); // 10
 




     var array=[1,2,3,4,5];
/*function mapper(num) {  // mapper function 
return num *2;
}*/

/* const mapper = function(num) {  
return num * 2;
}*/
var result = array.map(mapper);  // predefine function 

var result = array.map((num) => {
return num *2;
});

console.log(result);



 // class-: userdefine , data type insert,  object calling, more  than one  data member, more than one functionality.
 //  data member-: variable  . 
 // functionality-: 


 class restaurantManager {
    // data values 
    restaurantlist = [
    { name: "KFC", location: "Rajiv Chowk ", city: " Delhi" },
     { name: "Subway", location: "BKC ", city: " Mumbai" },
      { name: "Domino's", location: "MG Road ", city: " Bangalore" },
    ];
    
    // functionality
    printAllNames() {
    this. restaurantlist.forEach((harshal) => {
    console.log(harshal.location);
    });
    }
  }
  
  let obj = new  restaurantManager();
  obj.printAllNames();

  //********************************************************************************************************************************************************* */

  // New topic //
  // Ternary  Operater//
  if (condition) {
    // statement in if bolck
  } else {
    // statement in else bolck
  }
    

  if (condition){
  }

  (condition) ? (statement in if bolck ) : (statement in else bolck); // Valid
  (condition) ? (statement in if bolck); // Not Vaild

  if (condition) {
   // statement in if bolck
   

   if (condition) {
    // // statement in if bolck
   } else {
    // // statement in else bolck
   }
  }

   (condition) ? ( statement in if bolck) : ( statement in else bolck) : (statement in else bolck);


   //**************************************===*************************************//

   var str7 = "Stuendt count : "
var count = 50;
  var syr8= " ${str7} is greater than ${count}";
  consloe.log(str8); 


  // *************************************************************************************************//
var str9= ' wlecome_to_tutorial';
 console.log(str9.length);

 console.log(str9.charAt(1));

 console.log(str9.slice(3.7)); // negtive count is 

 console.log(str9.concat("again"));

 console.log(str9.lastIndexOf('e'));

 console.log(str9.split('_'));

 console.log(str9.substr(3,7)); // negtive count is frint side

 console.log(str9.substring(3,7)); // negtive values is difine 0 

 var str10= "some string";
 console.log(str10.replace('s','z'));
 console.log(str10.replaceAll('s','z'));

//*********************************************************************************************************************************************


