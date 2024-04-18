from dotenv import load_dotenv
import requests
import os
import json

load_dotenv()
apiKey = os.getenv("API_KEY")

def getOwnerName(apiKey, owner):
    url = f"https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key={apiKey}&user_id={owner}&format=json&nojsoncallback=1"
    response = requests.get(url).json()

    try:
        name = response['person']['realname']['_content']
    except KeyError:
        name = response['person']['username']['_content']
        print('no real name')
        print(response)
        return name
    except IndexError:
        print('error', owner)
        return ''
    
    return name

def getPhotoURL(apiKey, bird):
    url = f"https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key={apiKey}&text={bird}&license=4&privacy_filter=1&safe_search=1&content_types=0&media=photos&per_page=1&format=json&nojsoncallback=1"
    #print(url)
    response = requests.get(url).json()
    #print(response)

    try :
        photo = response['photos']['photo'][0]
    except IndexError:
        print(bird)
        print(response)
        return '', '', ''

    server = photo['server']
    id = photo['id']
    secret = photo['secret']
    owner = photo['owner']

    photoURL = f"https://live.staticflickr.com/{server}/{id}_{secret}.jpg"
    photoLink = f"http://flickr.com/photos/{owner}/{id}"
    photoOwner = getOwnerName(apiKey, owner)
    
    #print(photoURL, photoLink, photoOwner)
    return photoURL, photoLink, photoOwner

def addPhotoURL():
    with open('birdlist.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    #print(data)

    for bird in data:
        name = bird['Scientific']
        birdSearch = name.replace(" ", "+")
        #print(birdSearch)
        photoURL, photoLink, photoOwner = getPhotoURL(apiKey, birdSearch)

        bird['photo'] = {
            'photoURL': photoURL,
            'photoLink' : photoLink,
            'photoOwner': photoOwner
        }

    with open('birdlist.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

#getPhotoURL(apiKey, "Green+Sandpiper")

addPhotoURL()

