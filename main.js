var akanMaleNames = [ "Kwasi", "Kwadwo","Kwabena","Kwaku ", "Yaw","Kofi" ,"Kwame"];
var akanFemaleNames= ["Akosua","Adwoa"," Abenaa","Akua","  Yaa","Afua"];


    var cc =parseInt(document.getElementById(century).value);
    var yy =parseInt(document.getElementById(year).value);
    var mm =parseInt(document.getElementById(month).value);
    var dd =parseInt(document.getElementById(day).value);
     (d) = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) 


  function akan() {
      if (gender === "Male") {
          prompt("Your Ghanian akan Name is " + akanMaleNames[d]);
          
      } else {
        prompt("Your Ghanian akan Name is " + akanFemaleNames[d])
          
      }
      
  }
