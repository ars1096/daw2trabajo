function validate() {
    var msg;

    if(document.myForm.userPass.value.length>5){
        msg="Contraseña válida";
        document.getElementById("mylocation").style.color="limegreen";
    }
    else{

        msg="*Demasiado corta";
        document.getElementById("mylocation").style.color="red";

    }

    document.getElementById("mylocation").innerHTML=msg;

}

function validateName() {
    var aux;

    if(document.myForm.nick.value.length>7){
        aux="nick  válido";
        document.getElementById("myNick").style.color="limegreen";
    }
    else{

        aux="*nick demasiado corto";
        document.getElementById("myNick").style.color="red";

    }

    document.getElementById("myNick").innerHTML=aux;

}
