import json


with open('birdlist.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for id, bird in enumerate(data, start=1):
    print(id)
    bird['id'] = id
    # bird['seenIn'] = { "nl": False, "tw": False, "else": False}

with open('birdlist.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)