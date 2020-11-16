var sartExam = document.querySelector('#start'),
    quactions = document.getElementsByClassName('Q'),
    container = document.getElementById('container'),
    valuee = [],
    input = document.querySelectorAll('input'),
    nextButton = document.getElementById('next'),
    finesh = document.querySelector('#finesh span');

sartExam.onclick = function () {
    sartExam.style.display = 'none';
    quactions[0].classList.add('order');
    timer(200)
};


var i=1;
document.addEventListener('click',function (N) {
    if (N.target.getAttribute('id')=='next'){
        if(i<quactions.length){
            quactions[i].classList.add('order');
            quactions[i-1].classList.remove('order');
            i++;
        }else{
            document.getElementById('finesh').style.display = 'block';
        }

    }
    })



document.addEventListener('click',function (R) {
    if (R.target.getAttribute('type')=='radio') {
        document.querySelector('#next').onclick  = function () {
            if (R.target.value ==='') {
            }else{
                if(valuee[(valuee.length)-1]==R.target.value){
                }else{
                    valuee.push(R.target.value)
                }
            }
                
            finesh.textContent = valuee.length * 10;
            
            if (parseInt(finesh.textContent)<=20) {
                finesh.style.color = 'red'
            }else{
                finesh.style.color = ' #00ff90'
            }

            //console.log(valuee)
        }
        
        
        
    }
})

function timer(seconds){
    milseconds = seconds*1000;
    setTimeout(function(){
        document.getElementById('finesh').style.display = 'block';
    },milseconds)
}

document.getElementById('finesh').onclick = function(){
    console.log(4)
    window.location.href='login.html'
    console.log(history.length)
}



