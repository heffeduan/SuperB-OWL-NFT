#### Generate Metadata for each Image    
import json
import random

IMAGES_BASE_URL = "https://gateway.pinata.cloud/ipfs/QmeYqtkYbu315hvNqjveHuDYgcFbW4dYWZ2ELuxoozSPbU/"
PROJECT_NAME = "THE SUPERB OWL CLUB"
NFL_TEAMS = ["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills", "Carolina Panthers", 
"Chicago Bears","Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions",
"Green Bay Packers","Houston Texans","Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs",
"Las Vegas Raiders","Los Angeles Chargers","Los Angeles Rams","Miami Dolphins","Minnesota Vikings",
"New England Patriots","New Orleans Saints","New York Giants","New York Jets","Philadelphia Eagles",
"Pittsburgh Steelers","San Francisco 49ers","Seattle Seahawks","Tampa Bay Buccaneers","Tennessee Titans",
"Washington Commanders"]

random.shuffle(NFL_TEAMS)

token_id_start = 33
token_id_end = 96
Tier = ["Rookie","Veteran", "All-Pro"]
TierLevel = Tier[0]
def getAttribute(key, value):
    return {
        "trait_type": key,
        "value": value
    }
for i in range(token_id_start, token_id_end+1):
    token = {
        #"image": IMAGES_BASE_URL + str(i) + '.png'
        "image": IMAGES_BASE_URL + NFL_TEAMS[(i-1)%32] + '.png',
        "tokenId": i,
        "name": PROJECT_NAME +' '+ TierLevel + ' #' + str(i),
        "attributes": []
    }
    token["attributes"].append(getAttribute("Team", NFL_TEAMS[(i-1)%32]))
    token["attributes"].append(getAttribute("Series", int((i-1)/32+1)))
    token["attributes"].append(getAttribute("Tier", TierLevel))

    if i%32 == 0:
        random.shuffle(NFL_TEAMS)
    
    with open('./metadata/json'+ TierLevel+'/' + str(i) + ".json", 'w') as outfile:
        json.dump(token, outfile, indent=4)