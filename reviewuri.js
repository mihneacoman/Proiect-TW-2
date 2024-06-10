function getRandomColor(){
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

window.onload=function(){
    document.querySelector('.grid-recenzii').addEventListener('click', function(){
        let culoareNoua=getRandomColor();
        this.style.backgroundColor=culoareNoua;
    });
    document.querySelectorAll('.recenzie').forEach(function(recenzie) {
        recenzie.addEventListener('click', function(event) {
            event.stopPropagation();
            const computedStyle=getComputedStyle(this);
            let fontSize=parseFloat(computedStyle.fontSize)
            fontSize=fontSize*1.1;
            this.style.fontSize=fontSize+'px';
        });
    });
    const rangeInput=document.getElementById('ani');
    const recenziiDiv=document.getElementById('recenzii');
    function afiseazaRecenzii(numarAni){
        const recenzii=document.querySelectorAll('.recenzie');
        recenzii.forEach(function(recenzie){
            const dataRecenzie=recenzie.querySelector('p.data').textContent;
            const anRecenzie=new Date(dataRecenzie).getFullYear();
            if(new Date().getFullYear()-anRecenzie<=numarAni){
                recenzie.style.display='block';
            }else{
                recenzie.style.display='none';
            }
        });
    }
    rangeInput.addEventListener('input', function(){
        const nrAni=parseInt(this.value);
        afiseazaRecenzii(nrAni);
        localStorage.setItem('ultimulNumarAni', nrAni);
    });
    const ultimulNrAni=localStorage.getItem('ultimulNumarAni');
    if(ultimulNrAni){
        rangeInput.value=ultimulNrAni;
        afiseazaRecenzii(parseInt(ultimulNrAni));
    }  
}