function populateStorage (){
    var name=prompt("Votre nom svp?");
    if(name==="" || name===null){
        name="inconnu(e)";
    }
    sessionStorage.setItem('user_name', name);
    setName();
}

function setName (){
    var user_name=sessionStorage.getItem('user_name');
    document.getElementById("name").innerHTML="Bienvenu(e) "+user_name+" !";
}

