function calcularMedia( notas) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
    soma += notas[c];
    }
    
    media = soma / notas.length;
    
    return media;
    
    }

    let media; // escopo global
    
    function aprovacao ( notas ) {
    
        let media = calcularMedia( notas);
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    
    return "Média: " + media + " - Resultado: " + condicao;
    
    }
    
    // Funções Recursivas
    
    function contagemRegressiva(numero){
    
    console.log(numero);
    
    let proximoNumero = numero - 1;
    
    if(numero > 0)
        contagemRegressiva(proximoNumero);
    
    }
    
    contagemRegressiva(10);

    document.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopImmediatePropagation();

        let formulario = document.getElementById('formulario-01');

        let dados = new FormData(formulario);

        let objeto = {};

        let notas = [];

        for(let key of dados.keys()) {
            objeto[key] = dados.get(key);

            notas.push( parseInt(dados.get(key)));
        }

        console.log(notas);

        console.log(objeto);

        text = aprovacao(notas);

        document.getElementById('resultado').innerHTML = texto;

    });