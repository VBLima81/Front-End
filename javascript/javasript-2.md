<!DOCTYPE html>
<!doctype informa ao agente de usuário a versão do html q deve ser reenderizada-->
<html lang="pt-br">

<head>

    <title>JavaScript</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Vitor Lima">
    
</head>

<body>
    
    <script>

function calcularMedia( notas) {

let soma = 0;
for( c = 0; c < notas.length; c++) {
soma += notas[c];
}

media = soma / notas.length;

return media;

}

function aprovacao ( notas ) {

    let media = calcularMedia( notas);
let condicao = media >= 8 ? "aprovado" : "reprovado";

return "Média: " + media + " - Resultado: " + condicao;

}

// console.log()

//console.log("Média: " + calcularMedia([8, 8]))
//console.log( aprovacao ( calcularMedia([8, 8]))
console.log( aprovacao([8, 8, 7]));

//console.log("Média: " + calcularMedia([8, 8, 10]))
//console.log( aprovacao ( calcularMedia([8, 8, 10]))
console.log( aprovacao([8, 8, 10, 6]));

//console.log("Média: " + calcularMedia([9, 6]))
//console.log( aprovacao ( calcularMedia([9, 6]))



    </script>

</body>
</html>