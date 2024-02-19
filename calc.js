function calcular() {
  const peso = window.document.getElementById('peso').value;
  const altura = window.document.getElementById('altura').value;
  parseFloat(altura, peso);
  const imc = peso / (altura * altura);
  console.log(imc);
  if (imc <= 16.9) {
    document.getElementById('imc').innerHTML = `muito abaixo do peso ${imc}`;
    document.body.style.background = '#Ff0000';
  } else if (imc >= 17 && imc <= 18.4) {
    document.getElementById('imc').innerHTML = ` abaixo do peso ${imc}`;
    document.body.style.background = '#FFFF99';
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById('imc').innerHTML = ` peso ideal ${imc}`;
    document.body.style.background = '#05ec00';
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById('imc').innerHTML = ` acima do peso ${imc}`;
    document.body.style.background = '#feff42';
  } else if (imc >= 30 && imc <= 34.9) {
    document.getElementById('imc').innerHTML = ` obesidade grau I ${imc}`;
    document.body.style.background = '#ff5a00';
  } else if (imc >= 35 && imc <= 39.9) {
    document.getElementById('imc').innerHTML = ` obesidade grau II${imc}`;
    document.body.style.background = '#Ff0000';
  } else if (imc > 40) {
    document.getElementById('imc').innerHTML = ` obesidade grau III ${imc}`;
    document.body.style.background = '#Ff0000';
  }
}
