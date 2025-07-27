


   function hotel(){
    alert(" welcome to  Clifton Hotel & Resort")
   };
   
   
   var nam = document.getElementById("fullname");
    var textEr = document.getElementById("textEr")
    var email= document.getElementById("email");
    var emailEr= document.getElementById("emailEr");
    var num = document.getElementById("phone");
    var numEr = document.getElementById("numEr")
    

  

    function fun() {
        textEr.innerHTML=" ";
        emailEr.innerHTML=" ";
        numEr.innerHTML=" ";

      if ((nam.value == "")) {
         textEr.innerHTML = " *input your name *";
         textEr.style.color = "red"
        return false;
      }
      else if ((nam.value.length < 3)) {
        textEr.innerHTML = " *input your name at least 3 charecter *";
        textEr.style.color = "red"
        return false;
      }
      else if ((nam.value.length > 22)) {
        textEr.innerHTML = " *input your name should be 3 to 22 charecter *";
        textEr.style.color = "red"
        return false;
      }
      else if(email.value.length == 0){
        emailEr.innerHTML=" * input your email sir";
        emailEr.style.color="red";
        return false;

      }
      else if (num.value == "") {
        textEr.innerHTML = "";
        numEr.innerHTML = " * input number *";
        numEr.style.color = "red";
        return false;
      }
        else if (num.value.length != 10) {
        textEr.innerHTML = "";
        numEr.innerHTML = " * input your 10 digit number *";
        numEr.style.color = "red";

        return false;
      }
      else if(num.value==" " && nam.value==" "){
         textEr.innerHTML = " *input your name *";
      textEr.style.color = "red"
        return false;
      }

      else {
        alert("form submitted " + nam.value)
        return true;
      }


    }



   


