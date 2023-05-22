
let res = document.querySelector("#res")
let btn_enviar = document.querySelector("#btn_enviar")


btn_enviar.addEventListener("click", ()=>{
   let produto  = document.querySelector("#produto").value
   let qtde  = document.querySelector("#qtde").value
   res.innerHTML = "</br>" + produto + "  e a quantidade = " + qtde +  " kg"
})