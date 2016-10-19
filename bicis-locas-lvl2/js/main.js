
function validateForm(){

	var spans = document.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i++) {
	 	spans[0].parentNode.removeChild(spans[0])
	}

	//Variables nombre, apellido
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");

	//Variable contraseña
	var contra = document.getElementById("input-password");

	//variables de e-mail.
	var email = document.getElementById("input-email").value;
	
	//variable selector
	var seleccion = document.querySelector("select").value;


	//Validar nombre
	if (!/^[A-Z][a-z]*$/g.test(document.getElementById('name').value) || (nombre == "") || (nombre == null)){
		var span = document.createElement("span");
		span.innerHTML = "La primera letra debe ser mayúscula";
		var caja = document.getElementsByClassName("input-box")[0].appendChild(span);
	}

	//validar apellido
	if (!/^[A-Z][a-z]*$/g.test(document.getElementById('lastname').value) || (apellido == "") || (apellido == null)){
		var span = document.createElement("span");
		span.innerHTML = "La primera letra debe ser mayúscula";
		var caja = document.getElementsByClassName("input-box")[1].appendChild(span);
	}

	//Validar e-mail
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("input-email")) || (email == "") || (email == null)) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa un correo valido";
		var caja = document.getElementsByClassName("input-box")[2].appendChild(span);
	}

	//validar contraseña
	if ((contra.value.length <5) || (contra.value.length >20) || (contra.value == "") || (contra.value == null)){
		var span = document.createElement("span");
		span.innerHTML = "Contraseña debe tener más de 6 caracteres";
		var caja = document.getElementsByClassName("input-box")[3].appendChild(span);
	}

	//validar selección
	if (!seleccion == "") {
		var span = document.createElement("span");
		span.setAttribute("class", "error");
		span.innerHTML = "Selecciona una bici";
		var caja = document.getElementsByClassName("input-box")[1].appendChild(span);
	}



}//Cierra functión validateForme                                                                                                                                                                                                                   ]]]]]]]]]