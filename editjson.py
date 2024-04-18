import json


with open('birdlist.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

#print(data)

for bird in data:
    print(bird)
    bird['seenIn'] = { "nl": False, "tw": False, "else": False}

with open('birdlist.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)