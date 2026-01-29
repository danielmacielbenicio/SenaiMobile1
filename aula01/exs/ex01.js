let nota = prompt("Digite uma nota: ");

if(nota>7){
	console.log("Aprovado");
	document.getElementById("nota").innerText = "Aprovado! Muito bem, continue assim";
	alert("Aprovado");
} else if(nota<5){
	console.log("Reprovado");
	document.getElementById("nota").innerText = "Reprovado! Não desista, tente novamente";
	alert("Reprovado");
} else{
	console.log("Recuperação");
	document.getElementById("nota").innerText = "Recuperação! Mais um pouco e você passa";
	alert("Recuperação");
}

// Assuming you have an HTML element with id="output"
