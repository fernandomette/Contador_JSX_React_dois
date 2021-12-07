import "./index.css";
import { useEffect, useState } from "react";

export default function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [ResultadoAnterior, setResultadoAnterior] = useState(0);

  useEffect(()=>{
    setResultadoAnterior(resultado);
  },[resultado])

  var listaulli = [""];

  var listadehistorico = [(listaulli)];
  
  function CriaUlLI(array) {
    var listhistoricoul = document.createElement("ul");

    var item = document.createElement("li");

    for (var i = 0; i < array.length; i++) {
      item.appendChild(document.createTextNode(array[i]));
      listhistoricoul.appendChild(item);
    }

    // Retorne a lista construída:
    return listhistoricoul;
  }

  function somar() {
    var numeroDigitado = recebeZeroseVazio(parseFloat(document.getElementById("caixanumerodigitado").value));

    var valorResultadoanterior = resultado;

    //var pegaResultado = resultado + numeroDigitado;

    setResultado(resultado + numeroDigitado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " + ", numeroDigitado, " = ", resultado);

    document.getElementById("caixanumerodigitado").value = "";
    document.getElementById('caixanumerodigitado').focus();

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function diminuir() {
    var numeroDigitado = recebeZeroseVazio(parseFloat(document.getElementById("caixanumerodigitado").value));

    var valorResultadoanterior = resultado;

    var pegaResultado = resultado - numeroDigitado;

    setResultado(pegaResultado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " - ", numeroDigitado, " = ", pegaResultado);

    document.getElementById("caixanumerodigitado").value = "";
    document.getElementById('caixanumerodigitado').focus();

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function multiplicar() {
    var numeroDigitado = recebeZeroseVazio(parseFloat(document.getElementById("caixanumerodigitado").value));

    var valorResultadoanterior = resultado;

    var pegaResultado = resultado * numeroDigitado;

    setResultado(pegaResultado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " x ", numeroDigitado, " = ", pegaResultado);

    document.getElementById("caixanumerodigitado").value = "";
    document.getElementById('caixanumerodigitado').focus();

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function dividir() {
    var numeroDigitado = recebeZeroseVazio(parseFloat(document.getElementById("caixanumerodigitado").value));

    var valorResultadoanterior = resultado;

    if (numeroDigitado == 0) {
      numeroDigitado = 0;

      setResultado(numeroDigitado);

      listaulli.splice(0, listaulli.length);

      listaulli.push(valorResultadoanterior, " / ", numeroDigitado, " = ", numeroDigitado);

      document.getElementById("caixanumerodigitado").value = "";
      document.getElementById('caixanumerodigitado').focus();

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    } else {

      var pegaResultado = resultado / numeroDigitado;

      setResultado(pegaResultado);

      listaulli.splice(0, listaulli.length);

      listaulli.push(valorResultadoanterior, " / ", numeroDigitado, " = ", pegaResultado);

      document.getElementById("caixanumerodigitado").value = "";
      document.getElementById('caixanumerodigitado').focus();

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    }
  }

  function zerarresultado() {
    setResultado(0);
    document.getElementById("caixanumerodigitado").value = "";
    document.getElementById('caixanumerodigitado').focus();
  }

  function recebeZeroseVazio(valorCaixadeTexto) {
    
    if (isNaN(valorCaixadeTexto)) {
      valorCaixadeTexto = 0;
    }else{
      valorCaixadeTexto = valorCaixadeTexto;
    }
      
    return valorCaixadeTexto
  }

  return (
    <div className="calculadora">
        <input id="caixanumerodigitado" name="caixanumerodigitado" size="5" autofocus = "autofocus"/>
        <h3>{resultado}</h3>
        <button onClick={somar}>Somar (+)</button>
        <button onClick={diminuir}>Diminuir (-)</button>
        <button onClick={multiplicar}>Multiplicar (x)</button>
        <button onClick={dividir}>Dividir (/)</button>
        <button onClick={zerarresultado}>Zerar Resultado</button>
        <div id="listahistorico"></div>
    </div>

  );
}
