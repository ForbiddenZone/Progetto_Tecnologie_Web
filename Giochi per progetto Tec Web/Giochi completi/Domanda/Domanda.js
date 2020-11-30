function blue (){
	alert( "ciao");
}
var corrette=0;
var avanti=false;
var numeroquesito=0;
var documentojson;
var risposta;
var numerodomande;
var numerodomande2;

$( document ).ready(function() { $.getJSON("Domanda.json", function(data) {
	documentojson=data;
	$(".scrittadomanda").append(documentojson.quesito[numeroquesito].domanda);
	var a= documentojson.quesito[numeroquesito].argomento.length;
	numerodomande=documentojson.quesito.length;
	numerodomande2=numerodomande;
	risposta=documentojson.quesito[numeroquesito].soluzione; 
	for (var j = 0; j < a; j++) {
		$(".risposta").append("<button val=" +j+ ">" + documentojson.quesito[numeroquesito].argomento[j] + "</button>");
		console.log(documentojson.quesito[numeroquesito].argomento[j]);
	};
	});
});

$("#muggisci").click(function(){
	if (numerodomande>1 && avanti==true){
		numerodomande= numerodomande-1;
	$(".risposta").empty();
	$(".scrittadomanda").empty();
	console.log(documentojson.quesito[numeroquesito]);
	$(".scrittadomanda").append(documentojson.quesito[numeroquesito].domanda);
	numeroquesito= numeroquesito+1;
	risposta=documentojson.quesito[numeroquesito].soluzione;
	var a= documentojson.quesito[numeroquesito].argomento.length;
	for (var j = 0; j < a; j++) {
		$(".risposta").append("<button val=" +j+ ">" + documentojson.quesito[numeroquesito].argomento[j] + "</button>");
		console.log(documentojson.quesito[numeroquesito].argomento[j]);
	};
	avanti=false;
	}
	else if (numerodomande<=1) {
		$(".domanda").empty();
		$(".risposta").empty();
		$(".opzioni").empty();
		$(".risposta").append("<h1>" + corrette + " domande giuste su " + numerodomande2 + "<h1>");
		$(".risposta").append("<button> ESCI </button>");
		
		
	}
});

$("button").click(function() {
console.log("premuto");
});

$(document).on('click', ".risposta button", function() {
	if (avanti==false){
		let criceto;
		criceto=$(this).attr("val");
		console.log(risposta);
		console.log(criceto);
		if(criceto==risposta){
			corrette=corrette+1;
			$(this).css("backgroundColor","green");
		}
		else {
			$(this).css("backgroundColor","red");
			$("button [val='risposta']").css("backgroundColor","green");
		}
		avanti=true;
	}
});

/*
$('#bottone1').click(function(){
	//console.log(i);
	//console.log(item);
	var a= documentojson.argomento1.length;
	console.log(a);
	console.log(documentojson);
	for (var j = 0; j < a; j++) {
	$(".risposta").append("<button>" + documentojson.argomento1[j] + "</button>");
  console.log(documentojson.argomento1[j]);
	};
});*/

