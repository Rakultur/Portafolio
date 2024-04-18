// API # 1
// Rick and morty

function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => { done(data) });

}

getCharacters(data => {
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
                    <div class="chartacters">
                        <div>
                            <img src="${personaje.image}" class="card_image" alt="Personaje">
                        </div>
                        <div>
                            <!-- Nombre -->
                            <h2 class="titulo-2 text-amarillo">
                                ${personaje.name}
                            </h2>
                            <!-- Estado -->
                            <strong class="text-rojo">Estado :</strong><span> ${personaje.status} </span>
                            <br>
                            <!-- Especie -->
                            <strong class="text-rojo">Especie : </strong><span> ${personaje.species} </span>
                            <br>
                            <!-- Genero -->
                            <strong class="text-rojo">Genero : </strong> <span> ${personaje.gender} </span> 
                            <br>
                            <!-- Origen -->
                            <strong class="text-rojo">Origen : </strong> <span> ${personaje.origin.name} </span> 
                            <br>
                            <!-- Locacion -->
                            <strong class="text-rojo">Locacion : </strong> <span> ${personaje.location.name} </span> 
                        </div>
                    </div>
         `);

        const main = document.querySelector("main");

        main.append(article);

    });

});