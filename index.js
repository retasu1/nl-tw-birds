import data from "./birdlist.json" with { type: "json" };
//console.log(data)

const frame = document.getElementById('bird-list');

data.map((bird) => {
    //console.log(bird);

    function seenClass(bool) {
        if (bool) {
            return 'seen'
        } else {
            return 'unseen'
        }
    }

    function seenEmoji(bool) {
        if (bool) {
            return 'seen! ✅'
        } else {
            return 'still looking 👀'
        }
    }

    function seenIcon(bool) {
        if (bool) {
            return '<span class="fluent--checkbox-checked-24-filled"></span>'
        } else {
            return '<span class="fluent--checkbox-unchecked-24-regular"></span>'
        }
    }

    let newDiv = document.createElement("div");
    newDiv.className = "bird";
    newDiv.innerHTML = `

        <h2 class="scientific-name">${bird.Scientific}</h2>
        
        <figure>
            <a href="${bird.photo.photoLink}" target="_blank"><img src="${bird.photo.photoURL}" alt="${bird.English}" class="birdImg"></a>
            <figcaption>Photo by ${bird.photo.photoOwner}, licensed under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC By 2.0</a></figcaption>
        </figure>

        <div class="birdNameList">
            <div class="birdName">
                ${seenIcon(bird.seenIn.nl)}
                <h3>🇳🇱 ${bird.Dutch}</h3>
            </div>
            <div class="birdName">
                ${seenIcon(bird.seenIn.tw)}
                <h3>🇹🇼 ${bird.Chinese}</h3>
            </div>
            <div class="birdName">
                ${seenIcon(bird.seenIn.else)}
                <h3>🗺️ ${bird.English}</h3>
            </div>
        </div>
        
    `;
    frame.appendChild(newDiv)
})