function contar(){
    var start = document.getElementById("inicio");
    var end = document.getElementById("fim");
    var step = document.getElementById("passo");
    var inicio = Number(start.value);
    var fim = Number(end.value);
    var passo = Number(step.value);
    var result = document.getElementById("result");
    
    if(start.value.length == 0 || end.value.length == 0){
        window.alert("Nenhum valor pode estar vazio");
        texto.innerHTML = "Preparando a contagem...";

    }
    else if(passo <= 0){
        window.alert("Passo invalido. Considerando valor do passo como 1");
        if(inicio < fim){
            //contagem crescente
            passo = 1;
            result.innerHTML = 'Contando: ';
            for(var i = inicio; i <= fim; i+=passo){
                result.innerHTML += ` ${i} \u{27A1} `;
            }
            result.innerHTML += ` \u{2705}`;
        }
        else{
            //contagem decrescente
            passo = 1;
            result.innerHTML = 'Contando: <br>';
            for(var i = inicio; i >= fim; i-=passo){
                result.innerHTML += ` ${i} \u{27A1} `;
            }
            result.innerHTML += ` \u{2705}`;
    
        }
    }
    else if(inicio < fim){
        //contagem crescente
        result.innerHTML = 'Contando: ';
        for(var i = inicio; i <= fim; i+=passo){
            result.innerHTML += ` ${i} \u{27A1} `;
        }
        result.innerHTML += ` \u{2705}`;
    }
    else{
        //contagem decrescente
        result.innerHTML = 'Contando: ';
        for(var i = inicio; i >= fim; i-=passo){
            result.innerHTML += ` ${i} \u{27A1} `;
        }
        result.innerHTML += ` \u{2705}`;

    }
}