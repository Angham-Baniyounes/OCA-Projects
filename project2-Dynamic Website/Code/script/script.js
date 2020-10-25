

// cheekData();


function check() {

   
    
    if (document.getElementById("cheek").checked
     && document.getElementById("Name").value !="" 
     && document.getElementById("E-mail").value !=""  
     && document.getElementById("DOB").value !=""  
     && document.getElementById("Password").value !=""  
     && document.getElementById("Mobile").value !="")  {

  
        document.getElementById("submit").setAttribute("class", "active");


    }
    else {
        document.getElementById("submit").setAttribute("class", "dis");
    }
}

function cheekData(){
  

    if (localStorage.length <= 1 && sessionStorage.length <= 1){
     

        
        document.getElementById("clear").setAttribute("class", "dis");
        
    }else{
       
        
        document.getElementById("clear").setAttribute("class", "clear");

        retData();
        
        
        
    }
}

function retData(){
    modal.style.display = "block";
    
    if (localStorage.getItem("Name")!=null){

        
        for(i=0; i<=4;i++){
            var el = document.getElementsByTagName("P")[i].innerHTML;
            // alert(el)
            document.getElementsByTagName("P")[i].innerHTML=el+" : "+ localStorage.getItem(el);
        }
        
        
    }else{
        for(i=0; i<=4;i++){
            var el = document.getElementsByTagName("P")[i].innerHTML;
            // alert(el)
            document.getElementsByTagName("P")[i].innerHTML="";
        }
    }
    
    if (sessionStorage.getItem("Name")!=null){
        
        for(i=5; i<=9;i++){
            var el = document.getElementsByTagName("P")[i].innerHTML;
            // alert(el)
            document.getElementsByTagName("P")[i].innerHTML=el+" : "+  sessionStorage.getItem(el);
        }
        
        
    }else{
        for(i=5; i<=9;i++){
            var el = document.getElementsByTagName("P")[i].innerHTML;
            // alert(el)
            document.getElementsByTagName("P")[i].innerHTML="";
        }

    

    }
}


function clearData(){
    sessionStorage.clear();
    localStorage.clear();
    location.href = "?";


}


function myfunction() {


    // debugger;
    switch (document.getElementById("select").value) {

        case "Local Storge":
            

  
            localStorage.setItem("Name", document.getElementById("Name").value);
            localStorage.setItem("email", document.getElementById("E-mail").value);
            localStorage.setItem("Date of birth", document.getElementById("DOB").value);
            localStorage.setItem("Mobile", document.getElementById("Mobile").value);
            localStorage.setItem("Password", document.getElementById("Password").value);
            break;
        case "Session Storge":
            sessionStorage.setItem("Name", document.getElementById("Name").value);
            sessionStorage.setItem("email", document.getElementById("E-mail").value);
            sessionStorage.setItem("Date of birth", document.getElementById("DOB").value);
            sessionStorage.setItem("Mobile", document.getElementById("Mobile").value);
            sessionStorage.setItem("Password",document.getElementById("Password").value);
            break;
        default: alert("You must Select storge location")
        ;

    }
}

var ss = 1
function switchStyle(x) { 
     document.getElementById('pagestyle').setAttribute('href', x);
     localStorage.setItem("theme",x);
     };

     function onLoadThem(){
        (localStorage.length)? document.getElementById('pagestyle').setAttribute('href', localStorage.getItem("theme")) : document.getElementById('pagestyle').setAttribute('href', "style.css");

     }
function fontup(x){
    ss = eval(ss + x + 0.2)
    
    
    document.getElementById("body").style.fontSize = ss+"em";
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}