

function inicio(){

	// console.log("Hasta aqui todo bien campeón!!!");

	$("a").on("click", function(e){
			e.preventDefault();
		});




	$("#econo-btn").on("click",function(){
		// $('.proj-tit-cont-main, h3').css('background-image',"");
		$("#economia").fadeIn();
	});

	$("#seg-btn").on("click",function(){
		$("#seguridad").fadeIn();
	});

	$("#social-btn").on("click",function(){
		$("#social").fadeIn();
	});

	$("#edu-btn").on("click",function(){
		$("#educacion").fadeIn();
	});

	$("#ambiente-btn").on("click",function(){
		$("#ambiente").fadeIn();
	});

	$("#gob-btn").on("click",function(){
		$("#gobierno").fadeIn();
	});

	$("#vis-btn").on("click",function(){
		$("#global").fadeIn();
	});

	$("#transform-btn").on("click",function(){
		$("#transform").fadeIn();
	});

	$("#der-btn").on("click",function(){
		$("#derechos").fadeIn();
	});





	$(".barra").on("click",function(){
		$(".proyectos").fadeOut();
	});


	$(".proj-tit-cont-main").on("click",function (e){
		e.stopPropagation();
	});

	

}



	function aseccion(element,navheight){		
	
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	
	}

function mostrarImagen(e){

	var x = this.name;
	console.log(x);	
	$(".img-desp img").attr("src","imagenes/img-z/"+x+"-z.jpg");
	$(".img-desp").fadeIn();
}



















