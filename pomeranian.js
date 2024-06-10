window.onload=function(){
    const pom1=document.getElementById('pom1');
    const imagini=["pomeranian4.jpg", "pomeraniann1.webp", "pomeraniann2.jpg", "pomeraniann3.jpg"];
    let ind=localStorage.getItem('ultimulIndex');
        if(ind!=null){
            ind=parseInt(ind);
            pom1.src=imagini[ind];
        }else{
            ind=0;
            pom1.src=imagini[ind];
        }
    pom1.addEventListener("click", function(){
        const indexAleator=Math.floor(Math.random()*imagini.length);
        ind=indexAleator;
        pom1.src=imagini[indexAleator];
        localStorage.setItem('ultimulIndex', ind.toString());
        document.addEventListener('keydown', function(event){
            if (event.key==='b') {
                ind=0;
                pom1.src = imagini[ind];
                localStorage.setItem('ultimulIndex', ind.toString());
            }
        });
    });
}
