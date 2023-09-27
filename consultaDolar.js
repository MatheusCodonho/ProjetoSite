// colocar apenas 2 casas após a vírgula .toFixed(2);

//usando API DOLAR --> https://docs.awesomeapi.com.br/

function Reais() {

    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL').then(resposta => {
    return resposta.json()
    }).then(economia => {
    console.log(economia)

    document.getElementById("dolar").value = economia.USDBRL.bid
    })
} 

function converterParaReais() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
    .then(resposta => resposta.json())
    .then(economia => {
        console.log(economia);

        var num1 = parseFloat(document.getElementById("valor").value);
        var num2 = parseFloat(economia.USDBRL.bid);
        var multiplicacao = num1 * num2;

        document.getElementById("resultado").value = ("R$") + multiplicacao.toFixed(2);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });
}

function CEP(){
    var cep = document.getElementById("cep").value  // pegar o q foi digitado pelo usuario
    console.log(cep)
    //Usando API CEP --> https://viacep.com.br/

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        return response.json()
    }).then(corpo => {
        console.log(corpo)

        //document.getElementById("cep").value = corpo.cep
        document.getElementById("rua").value = corpo.logradouro
        document.getElementById("bairro").value = corpo.bairro
        document.getElementById("cidade").value = corpo.localidade
        document.getElementById("estado").value = corpo.uf
    })
}
//Compara frete

function Busca(){
  
  estado = document.getElementById("estado").value
  if(estado=="RS" || estado=="SC" || estado=="PR" ){
      document.getElementById("frete").value = "100R$"
  }else if(estado=="SP" || estado=="RJ" || estado=="MG"  || estado=="ES" ){
      document.getElementById("frete").value = "Frete Gratis"
  }else if(estado=="GO" || estado=="MT"  || estado=="MS" || estado=="DF" ){
      document.getElementById("frete").value = "70R$"
  }else if(estado=="AM" || estado=="AC" || estado=="RO"  || estado=="RR" || estado=="AP" || estado=="PR" ){
      document.getElementById("frete").value = "12R$"
  }else if(estado=="BA" || estado=="CE" || estado=="PE"  || estado=="AL" || estado=="MA" || estado=="PI" || estado=="TO" || estado=="PB" || estado=="SE" ){
      document.getElementById("frete").value = "30R$"
  }
}

//Calcula Frete

function CalculaFrete() {
// Busca o valor do CEP
cep = document.getElementById("cep").value;

// Busca o valor do estado
estado = document.getElementById("estado").value;

// Calcula o valor do frete
if (estado == "RS" || estado == "SC" || estado == "PR") {
frete = 100;
} else if (estado == "SP" || estado == "RJ" || estado == "MG" || estado == "ES") {
frete = 0;
} else if (estado == "GO" || estado == "MT" || estado == "MS" || estado == "DF") {
frete = 70;
} else if (estado == "AM" || estado == "AC" || estado == "RO" || estado == "RR" || estado == "AP" || estado == "PA") {
frete = 12;
} else if (estado == "BA" || estado == "CE" || estado == "PE" || estado == "AL" || estado == "MA" || estado == "PI" || estado == "TO" || estado == "PB" || estado == "SE") {
frete = 30;
}

// Converte o valor do frete em uma string com formato local e concatena o símbolo de real
freteString = "R$" + frete.toFixed(0);

// Atribui o valor do frete ao campo com id frete
document.getElementById("frete").value = freteString;
}