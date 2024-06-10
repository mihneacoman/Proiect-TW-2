window.onload=function(){
    const header = document.querySelector('h1');
    header.style.color='lightblue';
    header.style.fontFamily='cursive';
    document.getElementById('slogan').style.fontStyle='italic';
    const informatii=document.getElementsByClassName('info');
    for(let i=0; i<informatii.length; i++){
        const element=informatii[i];
        element.style.backgroundColor="lightblue";
        element.style.borderStyle="dashed";
        element.style.padding="10px";
        element.style.borderRadius="50px / 10px";
    }
    const titluri=document.getElementsByTagName('h2');
    for(let i=0; i<titluri.length; i++){
        const t=titluri[i];
        t.style.textAlign="center";
    }

    const t2=document.getElementsByTagName('h3');
    for(let i=0; i<t2.length; i++){
        const t=t2[i];
        t.style.textAlign="center";
    }

    const mesajBineVenit = document.createElement('div');
    mesajBineVenit.textContent = 'Bine ați venit!';
    mesajBineVenit.setAttribute('id', 'binevenit');
    mesajBineVenit.style.position = 'fixed';
    mesajBineVenit.style.top = '20px';
    mesajBineVenit.style.left = '55vh';
    mesajBineVenit.style.fontSize='80px';
    mesajBineVenit.style.color='coral';
    document.body.appendChild(mesajBineVenit);

    setTimeout(function() {
        const elementDeSters = document.getElementById('binevenit');
        if (elementDeSters) {
            elementDeSters.remove();
        }
    }, 3000);
}



