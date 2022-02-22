function submitCode() { 
    
    
    var value =  document.getElementById("codePostal").value;
    
    chars = document.getElementById("codePostal").value;

    val = chars.charAt(0) + chars.charAt(1);
    
    if(value.length != 5) { alert('Il faut 5 chiffre'); return location.reload()}
    if(!value.match("^[0-9]*$")){alert('Seulement des chiffres'); return location.reload()}

    if(val == "31"){
        localStorage.code = "Toulouse";
        return location.assign("page2.html")
    }
    if(val == "33"){
    localStorage.code = "Bordeaux";
    return location.assign("page2.html")
    }
    doCodePostal();    
    location.assign("page2.html");

}
async function fetchCodePostal(code) {
    const response = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${code}`);
  
    return await response.json();    
  }

async function doCodePostal(x) {
    if(localStorage.code != ""){console.log('trigged')}
    x = document.getElementById("codePostal").value;
    let codePostal = await fetchCodePostal(x);
    console.log(codePostal[0].nom)
   return localStorage.code = codePostal[0].nom;
}

window.onload = function() {  
    
    if(document.getElementById("resultat")){
        document.getElementById("resultat").innerHTML = localStorage.code};
        
  };