//import data from "./birdlist.json" with { type: "json" };

fetch("./birdlist.json")
    .then((res) => res.json())
    .then((data) => {

        const frame = document.getElementById('bird-list');

        data.map((bird) => {
            //console.log(bird);
        
            function seenIcon(bool) {
                if (bool) {
                    return '<span class="fluent--checkbox-checked-24-filled"></span>'
                } else {
                    return '<span class="fluent--checkbox-unchecked-24-regular"></span>'
                }
            }
        
            function getLicense(numStr) {
                let license = ''
                var licenseDict = {
                    '':{
                        "name":'',
                        "url":''
                    },
                    '1': {
                        "name": "CC by-nc-sa 2.0",
                        "url": "https://creativecommons.org/licenses/by-nc-sa/2.0/"
                    },
                    '2': {
                        "name": "CC by-nc 2.0",
                        "url": "https://creativecommons.org/licenses/by-nc/2.0/"
                    },
                    '4': {
                        "name": "CC by 2.0",
                        "url": "https://creativecommons.org/licenses/by/2.0/"
                    },
                    '9': {
                        "name": "CC0 by 2.0",
                        "url": "https://creativecommons.org/publicdomain/zero/1.0/"
                    },
                    '10': {
                        "name": "PDM by 1.0",
                        "url": "https://creativecommons.org/publicdomain/mark/1.0/"
                    }
                }
        
                license = `<a href=${licenseDict[numStr]["url"]} target="_blank">${licenseDict[numStr]["name"]}</a>`
                //console.log(license)
                return license
            }
        
            let newDiv = document.createElement("div");
            newDiv.className = "bird";
            newDiv.innerHTML = `
        
                <h2 class="scientific-name">${bird.Scientific}</h2>
                
                <figure>
                    <a href="${bird.photo.photoLink}" target="_blank"><img src="${bird.photo.photoURL}" alt="${bird.English}" class="birdImg"></a>
                    <figcaption>Photo by ${bird.photo.photoOwner}, licensed under ${getLicense(bird.photo.license)}</figcaption>
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

    })


