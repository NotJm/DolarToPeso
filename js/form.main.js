let pesos = 0,
  dollar = 0,
  __dollar = 0,
  p = null;

const __conversor_dollar = document.getElementById("btnConversorDollar");
const __conversor_pesos = document.getElementById("btnConversorPesos");
const __call_values = document.getElementById("call-values");
const __result_pd = document.getElementById("result-pd");
const __result_dp = document.getElementById("result-dp");
// const __form_parent = document.querySelector('form');

// Accediendo al formulario del html

__call_values.addEventListener("click", function(e){ 
  alert("El valor del peso es "+ pesos + " y el valor del dollar es "+ dollar);
})

// RESULTADO PESOS A DOLARES
__conversor_dollar.addEventListener("click", function (e) {
  if (__result_pd.children.length === 0) p = document.createElement("p");

  pesos = parseFloat(document.getElementById("input-count-pesos").value);
  dollar = parseFloat(document.getElementById("input-value-dollar").value);

  if (isNaN(pesos) || isNaN(dollar))
    p.textContent = "Existen valores negativos";
  else
    p.textContent =
      "La conversion a dolares estadounidenses es de " + pesos * dollar;

  marquee.textContent = "Valor del Peso:"+ pesos + ", Valor del Dollar:"+ dollar;
  __result_pd.appendChild(p);

  document.getElementById("input-count-pesos").value = "";
  document.getElementById("input-value-dollar").value = "";
  // Eliminados campos
});

__conversor_pesos.addEventListener("click", function (e) {
  if (__result_dp.children.length === 0) p = document.createElement("p");
  __dollar = parseFloat(document.getElementById("input-count-dollar").value);

  if (isNaN(__dollar)) p.textContent = "Existen valores negativos";
  else p.textContent = "La conversion a pesos mexicanos es de " + __dollar / pesos;

  __result_dp.appendChild(p);

  document.getElementById("input-count-dollar").value = "";
  // Eliminados campos
});
