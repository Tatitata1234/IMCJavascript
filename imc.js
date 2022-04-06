function pulaLinha() {
        document.write("<br><br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function calculaImc(altura, peso) {

        var imc = peso / (altura * altura);
        return imc
    }

    var nome = prompt("Informe o seu nome:");
    var alturaInformada = prompt(nome + ", informe sua altura (ex. 1.70):");
    var pesoInformado = prompt(nome + ", informe seu peso:");

    var imc = calculaImc(alturaInformada, pesoInformado);

    mostra(nome + ", o seu IMC calculado é " + imc);

    if(imc<=18.5){
        mostra("Seu peso está abaixo do recomendado");
    }else{
        if(imc>=35){
            mostra("Seu peso está acima do recomendado");
        }else{
            mostra("Seu peso está excelente!");
        }
    }