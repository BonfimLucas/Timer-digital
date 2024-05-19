function main(){
    
    textoHora = document.querySelector('h1');

    function getDate(seconds){
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        })


    }

    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const reset = document.querySelector('.reset');

    let seconds = 0;
    let runTimer

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
        
    })

    function startClock(){
        textoHora.classList.remove('pausado')
        runTimer = setInterval(function(){
            seconds++
            textoHora.innerHTML = getDate(seconds);
        }, 1000);
    }
    

}

main()