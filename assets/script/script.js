//Funcao no qual contem todo a logica do codigo, criada com o intuito de preservar boas praticas de programacao.
function main(){
    
    
    textoHora = document.querySelector('h1'); // variavel no qual tem como objetivo selecionar o texto principal, texto cujo servira para ser o display do timer.

    function getDate(seconds){
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        })

        // Function getDate() tem como objetivo utilizar o objeto Date do javascript para gerar 
        // os segundos utilizados na aplicacao.
    }

    let seconds = 0; // variaveis seconds e runtimer foram criadas para fazer a gestao dos dados gerados pela 
    let runTimer    // function date.



    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('reset')){
            clearInterval(runTimer)
            seconds = 0;
            textoHora.innerHTML = `00:00:00`;
            textoHora.classList.remove('pausado');
        }

        else if(el.classList.contains('stop')){
            clearInterval(runTimer)
            textoHora.classList.add('pausado')
        }

        else if(el.classList.contains('start')){
            clearInterval(runTimer)
            startClock()
        }
        
        // a function(e), uma funcao anonima, responsavel por gerenciar cada acao de seu respectivo botao
        // utilizando a estrutura de if-else 

    })

    function startClock(){
        textoHora.classList.remove('pausado')
        runTimer = setInterval(function(){
            seconds++
            textoHora.innerHTML = getDate(seconds);
        }, 1000);

        // function startClock() com o objetivo de fazer o relogio funcionar ao pressionar o botao start
    }
    

}

main() // chama a variavel do escopo, linha de codigo responsavel para fazer o script funcionar.