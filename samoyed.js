window.onload = function() {
    fetch("caini.json")
        .then(response => response.json())
        .then(data => {
            const adapostDiv = document.getElementById('adapost');

            data.forEach(caine => {
                const caineElement = document.createElement('div');
                caineElement.className = 'caine';
                caineElement.innerHTML = `
                    <div class="text">
                        <ul>
                            <li>Nume: ${caine.nume}</li>
                            <li>Vârstă: ${caine.vârstă}</li>
                            <li>Rasă: ${caine.rasă}</li>
                            <li>Preț: ${caine.pret}€</li>
                            <li>Certificat: ${caine.detalii.certificat}</li>
                            <li>Istoric medical: ${caine.detalii.istoric_medical}</li>
                        </ul>
                    </div>
                `;
                adapostDiv.appendChild(caineElement);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
};

