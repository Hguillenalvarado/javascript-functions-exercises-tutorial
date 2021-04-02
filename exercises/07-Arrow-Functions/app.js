
   // From this line up Do not change code below
   let str = "John";

   function rapid(){
       
       for (let i=0;i=str.lenght;i++){
           if ((str.charAt(i) == "a") || (str.charAt(i) == "A") || 

            (str.charAt(i) == "e") || (str.charAt(i) == "E") ||

            (str.charAt(i) == "i") || (str.charAt(i) == "I") ||

            (str.charAt(i) == "o") || (str.charAt(i) == "O") ||

            (str.charAt(i) == "u") || (str.charAt(i) == "U"))

   		    {

			document.write(str.charAt(i)); 

  		} 
           
       
   }
   
   console.log(rapid());

}