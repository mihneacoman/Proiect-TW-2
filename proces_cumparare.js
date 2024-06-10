window.onload=function(){
    document.querySelector('main').addEventListener('click', function(event) {
            event.target.style.color='crimson';
            event.target.textContent=event.target.textContent.toUpperCase();
    });
    document.getElementById('cumparare').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = document.getElementById('cumparare');
        const formData = new FormData(form);
        const nume = formData.get('nume');
        const email = formData.get('email');
        const regexNume = /^[a-zA-Z]+$/;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@(yahoo\.com|gmail\.com)$/;

        if (!regexNume.test(nume)) {
            alert('Numele trebuie să conțină doar litere.');
            return;
        }
        if (!regexEmail.test(email)) {
            alert('Emailul trebuie să fie de la yahoo.com sau gmail.com.');
            return;
        }
});
}