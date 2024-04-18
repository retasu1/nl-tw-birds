import data from "./birdlist.json" with { type: "json" };
//console.log(data)

const frame = document.getElementById('bird-list');

data.map((bird) => {
    //console.log(bird);
    let newDiv = document.createElement("div");
    newDiv.className = "bird";
    newDiv.innerHTML = `

        
        <figure>
            <a href="${bird.photo.photoLink}" target="_blank"><img src="${bird.photo.photoURL}" alt="${bird.English}" class="birdImg"></a>
            <figcaption>Photo by ${bird.photo.photoOwner}, licensed under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC By 2.0</a></figcaption>
        </figure>
        <div class="birdNames">
            <h2>${bird.Dutch}</h2>
            <h2>${bird.Chinese}</h2>
            <h2>${bird.English}</h2>
            
            <p><i>${bird.Scientific}</i></p>
        </div>
        
    `;
    frame.appendChild(newDiv)
})

const apiKey = process.env.API_KEY;