function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Persoanje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        
        `);
        const main = document.querySelector("main");
        
        main.append(article);
    });  
    
});


    // data.results.forEach(personaje => {
    //     const article = document.createRange().createContextualFragmet(`
    //     <article>
    //         <div class="image-container">
    //             <img src="${personaje.image}" alt="Persoanje">
    //         </div>
    //         <h2>${personaje.name}</h2>
    //         <span>${personaje.status}</span>
    //     </article>        
    //     `); 
        
    //     const main = document.querySelector("main");

    //     main.append(article);
    // });
    