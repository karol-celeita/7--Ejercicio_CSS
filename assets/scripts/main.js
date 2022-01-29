
//Para seleccionar una etiqueta , query Selector solo devuelve 
//un elemento, así que busca el primero e ignora todos los demas

let container = document.querySelector(".container");

//QuerySelectorAll devuelve todos los elementos del arbol que coincidad con la busqueda 
//El resultado  ya no es un html sino una lista

let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log("link",link)
})

console.log("links_lista",links)

// Los eventos sirven para unir una accion del usuario con una accion de un programa

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){

		//El elemento this devuelve el elemento seleccionado en consola
		console.log(this)
	})
})


let enlaces = document.querySelectorAll(".close");

enlaces.forEach(function(enlace){
	enlace.addEventListener('click',function(){

		//Bloquea el comportamiento por defecto del evento
			ev.preventDefault();

			//return false;

	})
})


/*
//Para moverse a otra url con un timer 
//-- Solo para una vez setTimeout

	setTimeout(function () {
		location.href= "/";
	},1000);

//-- Se hara de manera constante  setInterval

	setTimeout(function () {
		location.href= "/";
	},1000);

//location.href = "/";
*/



/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){

	//Elimina una clase html
	icono.classList.remove("fa-star")

	//Añade una clase html
	icono.classList.add("fa-star")
})
*/
