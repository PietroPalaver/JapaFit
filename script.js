
function calcular() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert("Preencha seu peso e sua altura corretamente.");
    return;
  }

  const alturaM = altura / 100;
  const imc = peso / (alturaM * alturaM);

  let classificacao;

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso adequado";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  resultado.style.display = "block";
  resultado.innerHTML =
    "<strong>Seu IMC:</strong> " + imc.toFixed(1) +
    "<br><strong>Classificação:</strong> " + classificacao;
}
