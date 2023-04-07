const botaoMais = document.querySelector(".btn-mais");
const botaoMenos = document.querySelector(".btn-menos");
let contador = document.querySelector(".contador")
const botaoZerar = document.querySelector(".btn-zerar")
let inputNumero = document.querySelector(".input");


botaoMais.addEventListener('click', ()=>{
    let soma = parseInt(contador.innerHTML) + parseInt(inputNumero.value);
    contador.innerHTML = soma;
   inputNumero.value = '';
});
botaoMenos.addEventListener('click', ()=>{
    let subtracao = parseInt(contador.innerHTML) - parseInt(inputNumero.value);
    contador.innerHTML = subtracao;
});

botaoZerar.addEventListener('click', ()=>{
    console.log(inputNumero.value)
      contador.innerHTML = 0;
 })
