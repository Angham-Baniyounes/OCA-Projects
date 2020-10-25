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
function switchStyle(x) { 
     document.getElementById('pagestyle').setAttribute('href', x);
     localStorage.setItem("theme",x);
     };

     function onLoadThem(){
        (localStorage.length)? document.getElementById('pagestyle').setAttribute('href', localStorage.getItem("theme")) : document.getElementById('pagestyle').setAttribute('href', "style.css");

     }