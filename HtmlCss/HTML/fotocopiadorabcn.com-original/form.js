function lead(frm)
{
	var mensaje='Por favor, inserte el dato ';
	
	if(frm['lead[name]'].value==''){
		alert(mensaje + "Nombre"); 
		frm['lead[name]'].focus();
		return false;
	}
	if(frm['lead[email]'].value==''){
		alert(mensaje + "Email");
		frm['lead[email]'].focus();
		return false;
	}else{
		if(!check_email(frm['lead[email]'].value)){
			alert(mensaje + "Email");
			frm['lead[email]'].focus();
			return false;   
		}  
	}

    //Compruebo si es un valor numérico
    if (isNaN(frm['lead[phone]'].value)) {
		alert(mensaje + "Teléfono"); 
		frm['lead[phone]'].focus();
		return false;
    }
    
	if(frm['lead[politica1]'].checked==0){
		alert(mensaje + "Acepto las condiciones de uso"); 
		frm['lead[politica1]'].focus();
		return false;
	}    
	
	frm.submit();
}
function check_email(address) { 
	if ( (address.indexOf ('@') == -1) || (address.indexOf ('.') == -1)) return false;   
	return true;
}