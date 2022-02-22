function submitCode() { 
    localStorage.code = ""
    
    var value =  document.getElementById("codePostal").value;
    
    chars = document.getElementById("codePostal").value;

    val = chars.charAt(0) + chars.charAt(1);
    
    if(value.length != 5) { alert('Il faut 5 chiffre'); return window.location.reload()}
    if(!value.match("^[0-9]*$")){alert('Seulement des chiffres'); return window.location.reload()}

    if(val == "31"){
        localStorage.code = "Toulouse";
        return location.assign("page2.html")
    }

    localStorage.code = "Bordeaux";
    location.assign("page2.html")
}

window.onload = function() {
    if(document.getElementById("resultat")){
        document.getElementById("resultat").innerHTML = localStorage.code};
  };
