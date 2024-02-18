export { chats };

const chats = {

    "chat_gameover":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaImage",
              "url":"chat/gameover.png",
              "w":65,
              "h":65
           },
           {
              "type":"eginaLine",
              "line":"OH NO, THE BATTERY IS AT ZERO!!! 😱😱😱"
           },
           {
              "type":"eginaLine",
              "line":"WE LOST THE GAME!"
           },
           {
              "type":"playerLine",
              "line":"We could have won if the battery capacity was longer."
           },
           {
              "type":"eginaLine",
              "line":"The battery will drain any moment now. Look, we lost, but it's not the end. We can start all over again, just nee"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"e-Genia?",
                    "room":"room_gameover"
                 }
              ]
           }
        ]
     },
     "chat_start":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Hello! I am e-Genia. Welcome to the game."
           },
           {
              "type":"eginaLine",
              "line":"My task is to communicate with you through chat and guide you through tasks."
           },
           {
              "type":"eginaLine",
              "line":"Your task is to walk through the museum and solve the problems we find there."
           },
           {
              "type":"eginaLine",
              "line":"The tasks are tough, and the problems are challenging; only the best will reach the goal."
           },
           {
              "type":"eginaLine",
              "line":"And our goal is to find Ifigenia, the great secret of the city of Zadar."
           },
           {
              "type":"playerLine",
              "line":"Who is Ifigenia?"
           },
           {
              "type":"eginaLine",
              "line":"That's a good question. We will discover it together. Are we ready for action?"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Yes!!",
                    "chat":"chat_0_02",
                    "room":"room_0_01"
                 }
              ]
           }
        ]
     },
     "chat_0_01_BALK":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Some balcony."
           },
           {
              "type":"eginaLine",
              "line":"The Dalmatian provveditore used to oversee the region from it."
           }
        ]
     },
     "chat_0_02":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Finally! Enter the museum."
           },
           {
              "type":"eginaLine",
              "line":"Click on anything that seems interesting to you. The arrows will lead you to a new location."
           },
           {
              "type":"eginaLine",
              "line":"Pay attention to every detail. Everything can be useful."
           },
           {
              "type":"lowerPhone",
              "delay":1000
           }
        ]
     },
     "chat_0_DP":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Some flag."
           },
           {
              "type":"eginaLine",
              "line":"Two palaces. The merged Rector's palace and Providur's palace have been turned into a museum. We are in the right place."
           }
        ]
     },
     "chat_0_ZB":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Zadar Heritage."
           },
           {
              "type":"eginaLine",
              "line":"Zadar Heritage: a project for preservation, revitalization, and integration of cultural heritage. Yes, what we are interested in is inside. Let's go!",
              "delay":2500
           }
        ]
     },
     "chat_0_ZV":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Closed."
           },
           {
              "type":"eginaLine",
              "line":"First, you need to know where you're going. Go back and turn right to see the map of the museum."
           }
        ]
     },
     "chat_0_03":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Okay, be careful now. Every mistake costs us time. If we don't solve the problem before your battery runs out, we fail the mission."
           },
           {
              "type":"playerLine",
              "line":"Okaaay."
           }
        ]
     },
     "chat_0_03_EKR":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Screens."
           },
           {
              "type":"eginaLine",
              "line":"That's part of the changing exhibition. We're not interested in that right now."
           }
        ]
     },
     "chat_0_NO":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Go back inside. We don't have time for strolls around the city."
           }
        ]
     },
     "chat_0_06":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Now be careful. You have to know which part of the museum we are going to. Be careful, every mistake will consume part of the battery."
           },
           {
              "type":"eginaLine",
              "line":"If the battery 🔋 falls to zero, we're done. The mission has failed."
           },
           {
              "type":"eginaLine",
              "line":"How much battery do you have left?"
           },
           {
              "type":"playerLine",
              "line":"[battery]%"
           },
           {
              "type":"eginaLine",
              "line":"That will be enough if you don't make too many mistakes."
           },
           {
              "type":"playerLine",
              "line":"I'll do my best."
           },
           {
              "type":"eginaLine",
              "line":"First task: which part of the museum are we going to? My notes state: 'Six Salon Stories'. Permanent exhibition from the fundus of the Zadar City Museum. Exhibition salons - Rector's palace."
           },
           {
              "type":"eginaLine",
              "line":"Go to the map and then click on the part of the map where Six Salon Stories is located."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"How exactly does this work?",
                    "chat":"chat_0_06_help",
                    "removeChoices":true
                 }
              ]
           }
        ]
     },
     "chat_0_06_premap":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Ok, go to the map."
           }
        ]
     },
     "chat_0_06_noway":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"We're looking for a permanent exhibit, it's not that way. First find our target on the map."
           }
        ]
     },
     "chat_0_06_help":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"On your phone, you have a Wi-Fi icon. Click it and all the possible places where you can click will be marked. That will help."
           },
           {
              "type":"eginaLine",
              "line":"As for the map, there are five zones. What we're looking for is in the Rector's palace, not in The Providur's Palace."
           }
        ]
     },
     "chat_0_06_win":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Bravo!! 💚💚💚💚💚💚"
           },
           {
              "type":"eginaLine",
              "line":"Now go there."
           }
        ]
     },
     "chat_0_06_lose":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh, no! ☹️☹️☹️ It's not that part of the museum. Please, think a little, you're consuming the battery 🔋 The permanent exhibit is on the first floor."
           }
        ]
     },
     "chat_0_06_lose2":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh!! 👎👎👎 It's not that. Please be careful, you're consuming the battery 🔋. The floor is good, but the rooms are wrong."
           }
        ]
     },
     "chat_0_06_lose3":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"No!! 😟😟😟 It's wrong. Be careful, mistakes consume battery 🔋. You have [battery]% left! The permanent exhibit is not in The Providur's Palace."
           }
        ]
     },
     "chat_0_06_lose4":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Noooo!! 👎👎👎 😟 Be careful, mistakes consume battery 🔋 [battery]%!!! If the battery falls to 0% the mission fails! 😟"
           }
        ]
     },
     "chat_0_08_bunar":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Well."
           },
           {
              "type":"eginaLine",
              "line":"Great observation. 😴😴😴"
           }
        ]
     },
     "chat_0_08_skale":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Stairs going up."
           },
           {
              "type":"eginaLine",
              "line":"We might go that way too, but stick to the map. Go forward to the Rector's palace."
           }
        ]
     },
     "chat_0_08_EKR":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"The Rector's palace."
           },
           {
              "type":"eginaLine",
              "line":"We're heading there. The Rector of Zadar has been ruling the city from this place since the 13th century."
           },
           {
              "type":"playerLine",
              "line":"Over a hundred years. 😵"
           },
           {
              "type":"eginaLine",
              "line":"Actually over seven hundred. 😇"
           }
        ]
     },
     "chat_0_11":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"This is a good direction. Continue up the stairs."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"What is our task?",
                    "chat":"chat_0_11B",
                    "removeChoices":true
                 }
              ]
           }
        ]
     },
     "chat_0_10":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"This is not the way to the Six Salon Stories."
           }
        ]
     },
     "chat_0_10_vrata":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"There is a passage here."
           },
           {
              "type":"eginaLine",
              "line":"We won't go there. Go back and go upstairs."
           }
        ]
     },
     "chat_0_11B":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"We want to solve the secrets of the Six Salon Stories ending with the magnificent picture of Iphigenia. It won't be easy. I'm crossing my fingers that the tasks won't be difficult 🤞"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Likewise.",
                    "chat":"chat_0_11C"
                 }
              ]
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Difficult for me? Ha-ha! I rock museums. 😎",
                    "chat":"chat_0_11D"
                 }
              ]
           }
        ]
     },
     "chat_0_11C":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Just watch out for the battery 🔋🔋🔋 Every mistake is costly."
           }
        ]
     },
     "chat_0_11D":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"🐵"
           }
        ]
     },
     "chat_0_end":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"That's it. Ok, agent, let's go. The solution is waiting for us inside."
           }
        ]
     },
     "room_0_15_novrata":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Locked."
           },
           {
              "type":"eginaLine",
              "line":"It is possible to enter the six salons through several doors. Try to find the open ones."
           }
        ]
     },
     "room_0_16_h":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Something is missing here."
           },
           {
              "type":"eginaLine",
              "line":"While the prince resided here, there was probably a statue of some saint, maybe even a bust of some powerful figure."
           },
           {
              "type":"playerLine",
              "line":"Maybe even the prince himself."
           },
           {
              "type":"eginaLine",
              "line":"Possible. But, we actually don't know."
           },
           {
              "type":"eginaLine",
              "line":"History is a place of forgetfulness. That's why we have museums."
           }
        ]
     },
     "room_0_16_f":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Stains."
           },
           {
              "type":"eginaLine",
              "line":"These are remnants of a fresco that originally adorned the palace walls. It didn't have white walls like it does now."
           }
        ]
     },
     "chat_1_start":{
        "steps":[
           {
              "type":"playerLine",
              "line":"I'm in the salon. What are we looking for?"
           },
           {
              "type":"eginaLine",
              "line":"First, tell me which room you are in and I will tell you what the tasks are.",
              "delay":1000
           },
           {
              "type":"playerLine",
              "line":"There is some kind of furniture here."
           },
           {
              "type":"eginaLine",
              "line":"Every salon room has furniture, can you be a bit more specific? What does it look like?"
           },
           {
              "type":"playerLine",
              "line":"Colorful."
           },
           {
              "type":"eginaLine",
              "line":"Does this furniture look like Biedermeier or Rococo?",
              "delay":2500
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Rococo?",
                    "chat":"chat_1_02"
                 },
                 {
                    "text":"Bid? What are they bidding?",
                    "chat":"chat_1_02"
                 },
                 {
                    "text":"I have no idea. Can I get some help?",
                    "chat":"chat_1_02"
                 }
              ]
           }
        ]
     },
     "chat_1_02":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh, no! 😱😱😱 Don't tell me you don't recognize art."
           },
           {
              "type":"eginaLine",
              "line":"Here's what we'll do: I'll give you brief instructions, and you try to figure it out.",
              "delay":1500
           },
           {
              "type":"eginaLine",
              "line":"Shall we try?"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Of course!",
                    "chat":"chat_1_03"
                 }
              ]
           }
        ]
     },
     "chat_1_03":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Rococo is kitschy, overly decorated and frivolous yet still refined. Visualize the playful French emperors."
           },
           {
              "type":"eginaLine",
              "line":"Biedermeier is kind-hearted, modest but decent. Visualize restrained Viennese ladies.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"What style does the furniture in the room remind you of?"
           },
           {
              "type":"eginaLine",
              "line":"Before you answer, you can walk around the room and take a better look."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Rococo",
                    "chat":"chat_1_03win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Biedermeier",
                    "chat":"chat_1_03lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":2
                 }
              ]
           }
        ]
     },
     "chat_1_03lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No 😪",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Ok, we lost some battery, no problem, you'll do better next time.",
              "delay":600
           },
           {
              "type":"rollNext",
              "chat":"chat_1_04"
           }
        ]
     },
     "chat_1_03win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Bravo!!! 🥳 Actually neo-rococo, a style that copies rococo, but, they look the same.",
              "delay":2000
           },
           {
              "type":"rollNext",
              "chat":"chat_1_04"
           }
        ]
     },
     "chat_1_04":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"This is Luxardo's neo-rococo room. Luxardo is a big liqueur manufacturer from Zadar. He had this furniture made in the style of Venetian barocchetto."
           },
           {
              "type":"eginaLine",
              "line":"Now answer me which exact elements belong to Luxardo's set."
           },
           {
              "type":"rollNext",
              "chat":"chat_1_05"
           }
        ]
     },
     "chat_1_s4_detail":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Like some kind of cone."
           },
           {
              "type":"eginaLine",
              "line":"Cone motif is not common in baroque furniture. Flowers, leaves, shells, yes; cone not really. Interesting."
           }
        ]
     },
     "chat_1_05":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Bed and bedside tables",
                    "chat":"chat_1_06lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Bed, bedside tables and dresser",
                    "chat":"chat_1_06win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Bed, bedside tables, dresser and mirror",
                    "chat":"chat_1_06lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Bed, bedside tables, dresser, mirror and console table",
                    "chat":"chat_1_06lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 }
              ]
           }
        ]
     },
     "chat_1_06lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No 😐🥵🔋",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_1_05"
           }
        ]
     },
     "chat_1_06win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"O-la-la!! 💚 Yes!!",
              "delay":2000
           },
           {
              "type":"rollNext",
              "chat":"chat_1_puzzles_start"
           }
        ]
     },
     "chat_1_k2_leptir1":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Red butterfly."
           },
           {
              "type":"eginaLine",
              "line":"Rococo artists were crazy about butterflies. They called them flying flowers. 🦋🦋🦋"
           }
        ]
     },
     "chat_1_k2_leptir2":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Blue butterfly."
           },
           {
              "type":"eginaLine",
              "line":"The butterfly is a symbol of transformation. From the ugly caterpillar to the beautiful butterfly. I don't know how much Luxardo identified with that."
           }
        ]
     },
     "chat_1_k2_leptir3":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Here's some weird bug. It seems to me that it's not a butterfly."
           },
           {
              "type":"eginaLine",
              "line":"It's a little subversion from the Venetian master."
           }
        ]
     },
     "chat_1_ArmidaStart":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Ok, the images are solved and studied. I hope we are ready for the interpretation of the pictures?",
              "delay":2000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"We are ready!",
                    "chat":"chat_1_11"
                 }
              ]
           }
        ]
     },
     "chat_1_11":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"These are paintings depicting various verses from Torquato Tasso's 'Jerusalem Delivered' from 1575.",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"To go further you have to tell me on which painting is Armida. She is the protagonist of the song.",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"The theme of the song is the First Crusade and the conquest of Jerusalem. Armida is the niece of the king of Damascus, a sorceress who seduced the main crusader Rinaldo who left the army and followed her to the island of happiness.",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"Wow!"
           },
           {
              "type":"eginaLine",
              "line":"However, she could not enchant Goffredo, the main character of the song.",
              "delay":1000
           },
           {
              "type":"playerLine",
              "line":"Psh!"
           },
           {
              "type":"eginaLine",
              "line":"Carefully investigate both paintings and tell me which one is Armida.",
              "delay":1000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"I need help.",
                    "chat":"chat_1_11b"
                 }
              ]
           }
        ]
     },
    "chat_1_11b": {"steps": [
        {
            "type": "eginaLine",
            "line": "It's good that we're cautious.",
            "delay": 600
        },{
            "type": "eginaLine",
            "line": "Armida is a complex character, a fatal woman. At first, she's a meaneater, just ot become obedient follower of faith till the end of poem.",
            "delay": 1500
        },{
            "type": "eginaLine",
            "line": "It says here: Armida was a woman of irresistible physical beauty.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Armida is in the painting with noblemen and slaves, probably.",
                    "chat": "chat_1_11win1",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Armida is in the painting with children and a lamb, probably.",
                    "chat": "chat_1_11lose1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "I still don't know, both paintings have a beautiful woman.",
                    "chat": "chat_1_11c",
                }
            ]
        }
    ]},
    "chat_1_11c": {"steps": [
        {
            "type": "eginaLine",
            "line": "Here are verses from the epic poem:",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "It sang: Look at the rose, where it withered, through a closed bud, virginally modest, partially hidden, open petals, less visible, beautiful and tame, speaks louder, expands bare chest, and when it sways and breaks more easily, it is no longer desired by lovers and maidens as before.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Partially hidden!! Armida is in the picture with noblemen and slaves.",
                    "chat": "chat_1_11win1",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Bare chest!! Armida is in the picture with children and a lamb.",
                    "chat": "chat_1_11lose1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }
    ]},
    "chat_1_11c":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Here are verses from the epic poem:",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"It sang: Look at the rose, where it withered, through a closed bud, virginally modest, partially hidden, open petals, less visible, beautiful and tame, speaks louder, expands bare chest, and when it sways and breaks more easily, it is no longer desired by lovers and maidens as before.",
              "delay":2000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Partially hidden!! Armida is in the picture with noblemen and slaves.",
                    "chat":"chat_1_11win1",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Bare chest!! Armida is in the picture with children and a lamb.",
                    "chat":"chat_1_11lose1",
                    "func":"animationManager.animateLose",
                    "drainBattery":2
                 }
              ]
           }
        ]
     },
     "chat_1_11win1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Excellent. However, we will need something else. Look at the picture with Armida and find the knight standing in front of her.",
              "delay":1000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ok",
                    "setProgress":[
                       "crusader"
                    ],
                    "removeChoices":true
                 }
              ]
           }
        ]
     },
     "chat_1_11lose1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No 😰😰😰😰😰",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"Armida is the lady in the picture with the noblemen."
           },
           {
              "type":"eginaLine",
              "line":"With the lamb is Erminia from Canto VII, who was saved by shepherds when soldiers attacked her by mistake."
           },
           {
              "type":"playerLine",
              "line":"Oh, unfortunate mistakes and praises :("
           },
           {
              "type":"playerLine",
              "line":"I need to read more medieval epic poems."
           },
           {
              "type":"eginaLine",
              "line":"Ok, no problem. But you need to check something else for me. Look at the picture with Armida and click on the knight standing in front of her."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ok",
                    "setProgress":[
                       "crusader"
                    ],
                    "removeChoices":true
                 }
              ]
           }
        ]
     },
     "chat_1_armida":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"This is Armida, princess of Damascus, sorceress and seductress."
           }
        ]
     },
     "chat_1_11quest":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Now look very carefully at that crusader and tell me if he is Rinaldo or Goffredo?"
           },
           {
              "type":"playerLine",
              "line":"How am I supposed to know that?"
           },
           {
              "type":"eginaLine",
              "line":"Remember, one was charmed by her, and the other was skeptical and sober, so he was not seduced."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Rinaldo, the one who followed her to the island of happiness 💘",
                    "chat":"chat_1_11lose2",
                    "func":"animationManager.animateLose",
                    "drainBattery":3,
                    "removeProgress":"crusader"
                 },
                 {
                    "text":"Goffredo, the one she couldn't charm 💔",
                    "chat":"chat_1_11win2",
                    "func":"animationManager.animateWin",
                    "removeProgress":"crusader"
                 }
              ]
           }
        ]
     },
     "chat_1_11win2":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Yes!!! Just look at how he looks at her. He was not charmed at all, right?. 🏆🏆🏆🏆🏆 Good job agent! I've entered the program for the second room. Let's continue bravely forward!",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"🏆🏆🏆🏆🏆 Bravo! With this, we have solved all the tasks of the first room. Let's move on!",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"Go to the second salon."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ok, I'm heading to the second salon",
                    "setProgress":[
                       "room1_ok"
                    ]
                 }
              ]
           }
        ]
     },
     "chat_1_11lose2":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No!! Oh no 🤕🤕🤕 Just look at how he looks at her. He was not charmed.",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"It's okay, let's move on. We have solved the first room. Go to the second salon.",
              "delay":1000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ok, I'm heading to the second salon",
                    "setProgress":[
                       "room1_ok"
                    ]
                 }
              ]
           }
        ]
     },
     "chat_1_o9_detail":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Flowers."
           },
           {
              "type":"eginaLine",
              "line":"Floral motifs are very common in Rococo. They used them to create a romantic and luxurious atmosphere."
           }
        ]
     },
     "chat_1_10_detail":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Lots of flowers."
           },
           {
              "type":"eginaLine",
              "line":"Rococo is full of flowers. You will find them on all possible types of furniture, always elegant and delicate."
           }
        ]
     },
     "chat_1_o6_detail":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Butterfly."
           },
           {
              "type":"eginaLine",
              "line":"The butterfly is a common motif in the Rococo style of art, including furniture."
           }
        ]
     },
     "chat_1_k3_leptir":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"The bed is full of butterflies and flowers."
           },
           {
              "type":"eginaLine",
              "line":"And not a single cherry! Luxardo was producing maraschino, a cherry liqueur. I would expect to see at least a few cherries on that furniture."
           }
        ]
     },
     "chat_1_ka4_detail1":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Some children."
           },
           {
              "type":"eginaLine",
              "line":"Perhaps angels? A classic motif of Baroque. The connection of man with God. Are they flying?"
           },
           {
              "type":"playerLine",
              "line":"No."
           },
           {
              "type":"eginaLine",
              "line":"Then they might just be children."
           }
        ]
     },
     "chat_1_ka4_detail2":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Bare breasts."
           },
           {
              "type":"eginaLine",
              "line":"Ancient beauty. Also a symbol of chastity and innocence."
           },
           {
              "type":"playerLine",
              "line":"And femininity?"
           },
           {
              "type":"eginaLine",
              "line":"Of course."
           }
        ]
     },
     "chat_1_ka4_detail3":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"A lamb."
           },
           {
              "type":"eginaLine",
              "line":"The Lamb of God, often a symbol of Jesus Christ and through him a symbol of righteousness, kindness and selflessness."
           }
        ]
     },
     "chat_1_s5_detail1":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Some people are kneeling."
           },
           {
              "type":"eginaLine",
              "line":"It was during the Christian wars. Those are enslaved Muslims."
           }
        ]
     },
     "chat_1_s5_detail2":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"They are strangely dressed for the Crusades."
           },
           {
              "type":"eginaLine",
              "line":"They are dressed according to the fashion of the time when the painting was made. The classic problem of painting in the pre-television era."
           },
           {
              "type":"playerLine",
              "line":"They didn't have a TV, ha-ha! 😃"
           },
           {
              "type":"eginaLine",
              "line":"Nor the internet."
           },
           {
              "type":"playerLine",
              "line":"😱"
           }
        ]
     },
     "chat_1_puzzles_start":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Ok, now we have to solve the paintings. 🖼️🖼️"
           },
           {
              "type":"eginaLine",
              "line":"There are two oil paintings from the 17th century in the room with painted motifs from Torquato Tasso's poem Liberated Jerusalem."
           },
           {
              "type":"eginaLine",
              "line":"Watch out! Each painting is first a puzzle 🧩 that you have to solve."
           },
           {
              "type":"eginaLine",
              "line":"Solve both puzzles, familiarize yourself with the paintings and then we continue."
           },
           {
              "type":"eginaLine",
              "line":"You can solve them in any order."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Masters of puzzles! 🧩🧩",
                    "setProgress":[
                       "p1_UNSOLVED",
                       "p2_UNSOLVED"
                    ]
                 }
              ]
           }
        ]
     },
     "chat_1_puzzle_1_win":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Bravo!!! 🔥🔥"
           },
           {
              "type":"eginaLine",
              "line":"You're rocking these rotating puzzles! 🎡"
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p1_SOLVED",
                 "p2_SOLVED"
              ],
              "chat":"chat_1_ArmidaStart"
           }
        ]
     },
     "chat_1_puzzle_2_win":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Bravo!!! 💚"
           },
           {
              "type":"eginaLine",
              "line":"Just don't get dazzled by success, the next puzzles could be harder."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p1_SOLVED",
                 "p2_SOLVED"
              ],
              "chat":"chat_1_ArmidaStart"
           }
        ]
     },
     "chat_2_start":{
        "steps":[
           {
              "type":"playerLine",
              "line":"I'm in the second salon."
           },
           {
              "type":"eginaLine",
              "line":"Describe what you see."
           },
           {
              "type":"playerLine",
              "line":"Lots of portraits on the walls. All boys, no girls."
           },
           {
              "type":"eginaLine",
              "line":"Those are the Nassisi. A noble family that has ruled Zadar for centuries."
           },
           {
              "type":"eginaLine",
              "line":"They have been one of the wealthiest families in Zadar since the 13th century.💰💰💰"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"What is my task?",
                    "chat":"chat_2_start2"
                 }
              ]
           }
        ]
     },
     "chat_2_start2":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Each painting is a puzzle that needs to be solved first. Solve all six and get to know them well. The Nassisi are an important key to understanding the history of Zadar.",
              "delay":2500
           },
           {
              "type":"playerLine",
              "line":"All six of them?"
           },
           {
              "type":"eginaLine",
              "line":"Go for it."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Alright! I'm diving into the puzzles! 🧩🧩",
                    "setProgress":[
                       "p3_UNSOLVED",
                       "p4_UNSOLVED",
                       "p5_UNSOLVED",
                       "p6_UNSOLVED",
                       "p7_UNSOLVED",
                       "p8_UNSOLVED"
                    ]
                 }
              ]
           }
        ]
     },
     "chat_2_crni1":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Neo-Renaissance cabinet. Neo-Renaissance is the most widespread historicist style in general, you'll see it in architecture and furniture everywhere."
           }
        ]
     },
     "chat_2_crni2":{
        "unstopping":true,
        "steps":[
           {
              "type":"eginaLine",
              "line":"Neo-Renaissance cabinet, made in Germany around 1880."
           }
        ]
     },
     "chat_2_zoilo1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Bravo!! It's never easy to solve a puzzle without marked edges."
           },
           {
              "type":"playerLine",
              "line":"No problem at all!"
           },
           {
              "type":"eginaLine",
              "line":"Okay, let's focus: the Zoilo Nassisi painting has been solved."
           },
           {
              "type":"eginaLine",
              "line":"Who is Zoilo to Zadar?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_zoilo1Q"
           }
        ]
     },
     "chat_2_zoilo1Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Mythical founder of the city",
                    "chat":"chat_2_zoilo1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Patron saint of the city",
                    "chat":"chat_2_zoilo1_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"General who defended the city from the Crusaders",
                    "chat":"chat_2_zoilo1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 }
              ]
           }
        ]
     },
     "chat_2_zoilo1_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No 🥵🥵🔋",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_zoilo1Q"
           }
        ]
     },
     "chat_2_zoilo1_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"YES! 💚",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Zoilo was a priest from Aquileia who buried the body of the martyr Chrysogonus, also the patron saint of Zadar.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Zoilo is the protector of the poor in Zadar."
           },
           {
              "type":"playerLine",
              "line":"And the Nassisi were rich?"
           },
           {
              "type":"eginaLine",
              "line":"The richest. They had many houses in the city, mills in Crno and salt pans on Pag, and some land on all the islands around Zadar."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"🤑🤑🤑",
                    "chat":"chat_2_zoilo1_win2"
                 }
              ]
           }
        ]
     },
     "chat_2_zoilo1_win2":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"But there's more to know about this painting. It's the only one in the set that has something written on it.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"The rich and famous Nassisi family became extinct in the 19th century, and the last member of the family donated these portraits to the city of Zadar.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"The question is: In which year did this happen?",
              "delay":2000
           },
           {
              "type":"rollNext",
              "chat":"chat_2_zoilo2Q"
           }
        ]
     },
     "chat_2_zoilo2Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Maybe 1399.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Let's say 1892.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Probably 1842.",
                    "chat":"chat_2_zoilo2_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Let's say 1724.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 }
              ]
           }
        ]
     },
     "chat_2_zoilo2Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Maybe 1399.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Let's say 1892.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Probably 1842.",
                    "chat":"chat_2_zoilo2_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Let's say 1724.",
                    "chat":"chat_2_zoilo2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 }
              ]
           }
        ]
     },
     "chat_2_zoilo2_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Wrong 🥴🥴🥴",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_zoilo2Q"
           }
        ]
     },
     "chat_2_zoilo2_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Well of course, it's clearly written: MDCCCXLII = 1842.",
              "delay":1500
           },
           {
              "type":"eginaLine",
              "line":"Solve the rest of the Nassis puzzles."
           },
           {
              "type":"playerLine",
              "line":"OK."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_petar1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Well done!! 😃😃😃"
           },
           {
              "type":"playerLine",
              "line":"Piece of cake."
           },
           {
              "type":"eginaLine",
              "line":"Petrus De Nassis. He was the rector of the city, but for the Nassis it's important that he was one of those who amassed the enormous wealth of the family."
           },
           {
              "type":"playerLine",
              "line":"That's why he gives his thanks to the Virgin?"
           },
           {
              "type":"eginaLine",
              "line":"Possibly. But, your question is: by what trade, characteristic for the Zadar region, did Peter become rich?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_petar1Q"
           }
        ]
     },
     "chat_2_petar1Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Salt",
                    "chat":"chat_2_petar1_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Olive",
                    "chat":"chat_2_petar1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Stone",
                    "chat":"chat_2_petar1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Sea",
                    "chat":"chat_2_petar1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 }
              ]
           }
        ]
     },
     "chat_2_petar1_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No, no, no, no. Save the battery, it decreases with every mistake.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_petar1Q"
           }
        ]
     },
     "chat_2_petar1_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Correct! The Nassis had salt pans on Pag and other islands. They were great salt traders.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Damjan de Nassis, whose picture is also in this salon, was the royal plenipotentiary for the Royal Chamber of one thirtieth and salt.",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"Salty rectors."
           },
           {
              "type":"eginaLine",
              "line":"That's right. Let's continue with the Nassis puzzles."
           },
           {
              "type":"playerLine",
              "line":"Let's go."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_damjan1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Damjan solved!! 😃😃😃"
           },
           {
              "type":"eginaLine",
              "line":"Damjan is one of the most influential Nassis."
           },
           {
              "type":"eginaLine",
              "line":"Pay attention to the text."
           },
           {
              "type":"playerLine",
              "line":"Damianus De Nassis..."
           },
           {
              "type":"eginaLine",
              "line":"Damianus De Nassis Bis Rector Jadrae Comes Tragurii Orator Aa Regem Hung. Cu Plentipot Et Capit. Gnlis Domilor Pagi MCCCLXXXII"
           },
           {
              "type":"playerLine",
              "line":"I don't speak old languages well."
           },
           {
              "type":"eginaLine",
              "line":"We will translate it together! Let's go line by line:"
           },
           {
              "type":"eginaLine",
              "line":"DAMIANUS DE NASSIS BIS RECTOR JADRAE"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_damjan1Q"
           }
        ]
     },
     "chat_2_damjan1Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Damjan Nassis, honorary rector of Jadre",
                    "chat":"chat_2_damjan1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":2
                 },
                 {
                    "text":"Damjan Nassis, honorary rector of Zadar",
                    "chat":"chat_2_damjan1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":2
                 },
                 {
                    "text":"Damjan Nassis, double rector of Zadar",
                    "chat":"chat_2_damjan1_win",
                    "func":"animationManager.animateWin"
                 }
              ]
           }
        ]
     },
     "chat_2_damjan1_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh no, we're having trouble with Latin. 😐",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_damjan1Q"
           }
        ]
     },
     "chat_2_damjan1_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"You see, you do know Latin! Damjan was the city's rector twice.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Let's move on: COMES TRAGURII.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Comes is the same as the English count, so a count."
           },
           {
              "type":"eginaLine",
              "line":"But count of what? What is Tragurii?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_damjan2Q"
           }
        ]
     },
     "chat_2_damjan2Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Tratica on Ugljan island",
                    "chat":"chat_2_damjan2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Trogir, city in Dalmatia",
                    "chat":"chat_2_damjan2_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Tragöß, city in Austria",
                    "chat":"chat_2_damjan2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 },
                 {
                    "text":"Tragaki, city in Greece",
                    "chat":"chat_2_damjan2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":3
                 }
              ]
           }
        ]
     },
     "chat_2_damjan2_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No, maybe it's a well-known city 🤕",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_damjan2Q"
           }
        ]
     },
     "chat_2_damjan2_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Excellent handling of geography!!! 💚💚💚",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"What else that is interesting is written here? Orator Ad Regem Hung, royal ambassador to Hungary, Damian had a lot of titles: captain...",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Aha, this is interesting: DOMII OB PAGI. What could that mean?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_damjan3Q"
           }
        ]
     },
     "chat_2_damjan3Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Lives in Pag",
                    "chat":"chat_2_damjan3_win",
                    "func":"animationManager.animateWin",
                    "drainBattery":4
                 },
                 {
                    "text":"Home in the village",
                    "chat":"chat_2_damjan3_lose",
                    "func":"animationManager.animateLose"
                 }
              ]
           }
        ]
     },
     "chat_2_damjan3_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No, Pagi is Pag where the Nassisi had saltworks. 🤕",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Never mind. We're done with Damjan. Shall we go to the next Nassis puzzle?",
              "delay":1100
           },
           {
              "type":"playerLine",
              "line":"Let's go."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_damjan3_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Wow!! 💚💚💚 Excellent Latin! Fortune favors the brave!",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"Veni, vidi, vici!"
           },
           {
              "type":"eginaLine",
              "line":"Altera aenigma. That means: We're done with Damjan, let's move on to the next puzzle."
           },
           {
              "type":"playerLine",
              "line":"Let's go!"
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_matija1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Another Nassis successfully put together! 😃😃😃"
           },
           {
              "type":"eginaLine",
              "line":"And notice the underlay of his clothes. In several paintings, you'll notice a beautiful black and white fur. They showed off their wealth in various ways, so Matthaeus is dressed in one of the most expensive furs of that time, white with black spots.",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"Whose fur is that?"
           },
           {
              "type":"eginaLine",
              "line":"That's exactly my question. I'll show you photos of animals and you'll try to answer. Ready?"
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ready!",
                    "chat":"chat_2_matija1b"
                 }
              ]
           }
        ]
     },
     "chat_2_matija1b":{
        "steps":[
           {
              "type":"eginaImage",
              "url":"chat/2-01.jpg",
              "w":200,
              "h":200
           },
           {
              "type":"eginaLine",
              "line":"Cute little chinchilla 🐹"
           },
           {
              "type":"eginaImage",
              "url":"chat/2-02.jpg",
              "w":200,
              "h":200
           },
           {
              "type":"eginaLine",
              "line":"Ermine, a bloodthirsty weasel 🐭"
           },
           {
              "type":"eginaImage",
              "url":"chat/2-03.jpg",
              "w":200,
              "h":200
           },
           {
              "type":"eginaLine",
              "line":"Or... a baby 101 Dalmatian 🐶"
           },
           {
              "type":"eginaLine",
              "line":"From what did the Renaissance versions of Cruella de Vil make white coats with black spots?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_matija1Q"
           }
        ]
     },
     "chat_2_matija1Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"🐭 Ermine",
                    "chat":"chat_2_matija1_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"🐹 Chinchilla",
                    "chat":"chat_2_matija1_lose1",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"🐶 Dalmatian",
                    "chat":"chat_2_matija1_lose2",
                    "func":"animationManager.animateLose",
                    "drainBattery":5
                 },
                 {
                    "text":"Hmm, something's off. Can I get some help?",
                    "chat":"chat_2_matija1_help",
                    "drainBattery":1
                 }
              ]
           }
        ]
     },
     "chat_2_matija1_help":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Your feeling didn't deceive you, something is indeed unusual about the fur.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"In fact, one of these animals is red in summer and becomes white in winter, and only the tip of their tail always remains black.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try now.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_matija1Q"
           }
        ]
     },
     "chat_2_matija1_lose1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Chinchillas come in many fur colors, but never in white with black spots.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_matija1Q"
           }
        ]
     },
     "chat_2_matija1_lose2":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh no! Do you think they would skin cute little puppies? This is not a Disney movie, even though Nassisi were Dalmatians.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_matija1Q"
           }
        ]
     },
     "chat_2_matija1_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Yes!!!! Stoats are red in the summer and white in the winter with a black tail tip.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Apart from being skinned for clothing, it was also a toy for ladies of high society. Remember Da Vinci's painting:",
              "delay":2000
           },
           {
              "type":"eginaImage",
              "url":"chat/2-05.jpg",
              "w":200,
              "h":227
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Mona Lisa",
                    "chat":"chat_2_matija2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"The Last Supper",
                    "chat":"chat_2_matija2_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"Lady with an Ermine",
                    "chat":"chat_2_matija2_win",
                    "func":"animationManager.animateWin"
                 }
              ]
           }
        ]
     },
     "chat_2_matija2_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Come on! 🙈🙈🙈🙈🙈",
              "delay":2000
           },
           {
              "type":"rollNext",
              "chat":"chat_2_matija2_win"
           }
        ]
     },
     "chat_2_matija2_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"There is a legend: hunters chased it to a dirty puddle and the ermine would stop so as not to soil its snow-white fur. Such care for cleanliness inspired people. That's why the robes of nobility were often lined with ermine fur as a symbol of purity.",
              "delay":3000
           },
           {
              "type":"eginaLine",
              "line":"But, enough about animals. Is there any puzzle left?",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"I will check."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_thibaldus1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Great job! B-R-A-V-O!"
           },
           {
              "type":"playerLine",
              "line":"We're pleasing the people."
           },
           {
              "type":"eginaLine",
              "line":"Notice that all the Nassisi from the pictures lived in the 14th century. The Nassisi were at the height of their power then, owning huge amounts of land all over the region, and then in 1409 they fell out of favor with the new authorities."
           },
           {
              "type":"playerLine",
              "line":"Out of favor?"
           },
           {
              "type":"eginaLine",
              "line":"Yes. In the Angevin era they were powerful and political so they had to go into exile. Later they will recover and the new state will recognize them. (After all, they were wealthy landowners.) But their peak was definitely before 1409."
           },
           {
              "type":"playerLine",
              "line":"And what happened in 1409?"
           },
           {
              "type":"eginaLine",
              "line":"Well, you should know , it's a significant year for the history of Zadar. What happened in 1409?"
           },
           {
              "type":"rollNext",
              "chat":"chat_2_thibaldus1Q"
           }
        ]
     },
     "chat_2_thibaldus1Q":{
        "steps":[
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Crusaders on their way to Jerusalem also conquer and destroy Zadar along the way.",
                    "chat":"chat_2_thibaldus1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"Napoleon conquers Venice.",
                    "chat":"chat_2_thibaldus1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"Croatian King Ladislaus sells Zadar to Venice for 100 000 ducats.",
                    "chat":"chat_2_thibaldus1_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Columbus discovered America.",
                    "chat":"chat_2_thibaldus1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"The Treaty of Rapallo was signed, through which Zadar was ceded to Italy.",
                    "chat":"chat_2_thibaldus1_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 }
              ]
           }
        ]
     },
     "chat_2_thibaldus1_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"No, no, no, no. Save the battery, it's decreasing with every mistake!",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Try again.",
              "delay":1500
           },
           {
              "type":"rollNext",
              "chat":"chat_2_thibaldus1Q"
           }
        ]
     },
     "chat_2_thibaldus1_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"That's right. Venice takes over Zadar for the next 388 years.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Zadar has experienced similar events many times in history, from Ladislav to the Rapallo and Rome agreements.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"But, let's return to Nassis."
           },
           {
              "type":"playerLine",
              "line":"I'm coming back."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_gregorus1":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Excellent assembly!! 🌞"
           },
           {
              "type":"playerLine",
              "line":"Those are some handsome Nassis."
           },
           {
              "type":"eginaLine",
              "line":"These paintings were created at the beginning of the 17th century when the Nassis family ordered portraits of their long-dead famous ancestors. So maybe they don't faithfully represent their beauty."
           },
           {
              "type":"playerLine",
              "line":"And probably not their clothes either, as they were painted according to the fashion of that time."
           },
           {
              "type":"eginaLine",
              "line":"Well learned. Let's move on. Are there any more unsolved puzzles in this room?"
           },
           {
              "type":"playerLine",
              "line":"I'll check."
           },
           {
              "type":"rollNext",
              "requisites":[
                 "p3_SOLVED",
                 "p4_SOLVED",
                 "p5_SOLVED",
                 "p6_SOLVED",
                 "p7_SOLVED",
                 "p8_SOLVED"
              ],
              "chat":"chat_2_nassis_win"
           }
        ]
     },
     "chat_2_nassis_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Oh, actually ALL SIX NASSIS ARE SOLVED!",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"💚 💚 💚 💚 💚 💚",
              "delay":1000
           },
           {
              "type":"eginaLine",
              "line":"Six hearts for six completed Nassis! Bravo!!!",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Ok, we're doing great. I have the final tasks for this salon. We have excellently solved all the paintings, however, I need information about the furniture. Can you find the animal that is the most commonly used as a decorative element of Romanesque and Neo-Romanesque style?",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"What's that animal?",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"YOU have to find out. Find me the face of the animal.",
              "delay":2000
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Ok, I'm starting. 🔎",
                    "setProgress":[
                       "lion1_hunt"
                    ]
                 }
              ]
           }
        ]
     },
     "room_2_lion1":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Lion?",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"That's a lion! Well done! 🦁🦁🦁🦁🦁",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Lions are extremely popular animals in Romanesque decorations, heraldry, and in general. And Zadar is full of paintings, drawings, and reliefs of lions.",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"And of course, do you know which animals are on the coat of arms of Dalmatia?",
              "delay":2000
           },
           {
              "type":"eginaImage",
              "url":"chat/2-06.png",
              "w":200,
              "h":251
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Well, lions",
                    "chat":"chat_2_lion_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"Are they panthers?",
                    "chat":"chat_2_lion_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"Maybe leopards?",
                    "chat":"chat_2_lion_win",
                    "func":"animationManager.animateWin"
                 },
                 {
                    "text":"Cheetahs!",
                    "chat":"chat_2_lion_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 },
                 {
                    "text":"There should be some fish on the coat of arms of Dalmatia!",
                    "chat":"chat_2_lion_lose",
                    "func":"animationManager.animateLose",
                    "drainBattery":4
                 }
              ]
           }
        ]
     },
     "chat_2_lion_lose":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Noooooo. The animals on the coat of arms actually resemble lions but they are leopards! 🐆🐆🐆."
           },
           {
              "type":"eginaLine",
              "line":"More specifically: heraldic leopards, a special species of animal that only exists on coats of arms."
           },
           {
              "type":"eginaLine",
              "line":"But let's get back to lions. Find another decorative ornament in the room with a lion motif, besides the lion face."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Lion search. 🔎",
                    "setProgress":[
                       "lion2_hunt"
                    ]
                 }
              ]
           }
        ]
     },
     "chat_2_lion_win":{
        "steps":[
           {
              "type":"eginaLine",
              "line":"Yes, they resemble lions but they are leopards! 🐆🐆🐆"
           },
           {
              "type":"eginaLine",
              "line":"More specifically: heraldic leopards, a special species of animal that only exists on coats of arms."
           },
           {
              "type":"eginaLine",
              "line":"But let's get back to lions. Find another decorative ornament in the room with a lion motif, besides the lion face."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Okay, I'm searching for another part of the lion besides its face. 🔎",
                    "setProgress":[
                       "lion2_hunt"
                    ]
                 }
              ]
           }
        ]
     },
     "room_2_lion2":{
        "unstopping":true,
        "steps":[
           {
              "type":"playerLine",
              "line":"Paw!",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"There's a lion's leg as a decorative element of the Neo-Romanesque style. Well done!",
              "delay":2000
           },
           {
              "type":"eginaLine",
              "line":"Did you know that lions used to live in this area not long ago?"
           },
           {
              "type":"playerLine",
              "line":"Not long ago?"
           },
           {
              "type":"eginaLine",
              "line":"Well, maybe not exactly recently, but during the time of the ancient Greeks and the first Romans, lions used to roam Dalmatia.",
              "delay":2000
           },
           {
              "type":"playerLine",
              "line":"And what happened then?"
           },
           {
              "type":"eginaLine",
              "line":"The smarter one gave in. But what's important is: ROOM 2 IS SOLVED!! All tasks are behind us. Let's go to the third room."
           },
           {
              "type":"choice",
              "choices":[
                 {
                    "text":"Room number 3️⃣, here I come!! ",
                    "setProgress":[
                       "room2_SOLVED"
                    ]
                 }
              ]
           }
        ]
     },
     





    "chat_3_start": {"steps": [
        {
            "type": "playerLine",
            "line": "I'm here."
        },
        {
            "type": "eginaLine",
            "line": "Congratulations! However, the hardest part is yet to come."
        },
        {
            "type": "playerLine",
            "line": "Can't wait!"
        },
        {
            "type": "eginaLine",
            "line": "Excellent. Here is the next challenge: find His Imperial and Royal Apostolic Majesty, by the Grace of God, Emperor of Austria, King of Hungary and Bohemia, Dalmatia, Croatia, Slavonia, Galicia, Lodomeria, and Illyria; King of Jerusalem, Rector of Friuli, Dubrovnik, and Zadar."
        },
        {
            "type": "playerLine",
            "line": "What, all of them?"
        },
        {
            "type": "eginaLine",
            "line": "That's just one man. One but worthy."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I'm searching 🔎",
                    "setProgress": ["franz_hunt"]
                }
            ]
        }
    ]},
    "chat_3_fg1": {"steps": [
        {
            "type": "playerLine",
            "line": "I found him!"
        },{
            "type": "eginaLine",
            "line": "💚 Franz Joseph I, Emperor of Austria-Hungary, by the grace of God, ruled for 68 years."
        },
        {
            "type": "playerLine",
            "line": "Why are there two of them? It must be because of the dual monarchy!"
        },
        {
            "type": "eginaLine",
            "line": "This is part of the task. You have to find 9 differences in these two pictures. Click on the difference in the left picture. Be careful, every mistake costs batteries! 🔋🔋🔋"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I will find these nine differences 🔎",
                    "setProgress": ["franz_UNSOLVED"],
                    "chat": "chat_3_fg1_help",
                }
            ]
        }
    ]},
    "chat_3_fg1_help": {"steps": [
        {
            "type": "eginaLine",
            "line": "Okay, and if you get stuck, ask for help! It'll cost you a bit of battery power 🔋 But it'll be worth it. You need to find all 9 differences!!"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fg1_helpb"
        }
    ]},
    "chat_3_fg1_helpb": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I need help for 9%.🔋🔋",
                    "chat": "chat_3_fg1_help3",
                    "drainBattery": 9
                }
            ]
        }
    ]},
    "chat_3_fg1_help3": {"steps": [
        {
            "type": "eginaLine",
            "line": "Take a look at the medal, tie, crown, eagle, chair, as well as the fingers of the foot and hand."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fg1_helpb"
        }
    ]},
    "chat_3_fg_check": {"steps": [
        {
            "type": "eginaLine",
            "line": "💚"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fg1_helpb"
        },
        {
            "type": "rollNext",
            "requisites": ["fg1_SOLVED","fg2_SOLVED","fg4_SOLVED","fg5_SOLVED","fg7_SOLVED","fg8_SOLVED","fg9_SOLVED","fg10_SOLVED","fg12_SOLVED"],
            "chat": "chat_3_fg_win"
        }
    ]},
    "chat_3_fg_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "The magnificent 9! 👑👑👑👑👑👑👑👑👑"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "removeChoices": true,
                    "text": "Done! 👑",
                    "room": "room_3_f1",
                    "chat": "chat_3_fg2",
                    "clearProgress": true
                }
            ]
        }
    ]},
    "chat_3_fg2": {"steps": [
        {
            "type": "playerLine",
            "line": "How did the emperor end up in Zadar"
        },
        {
            "type": "eginaLine",
            "line": "The Emperor visited Zadar in April 1875. Viennese newspapers report as follows: 'Today, on April 10th, His Majesty the Emperor arrived in Zadar, the capital of the province that will play a prominent and important role in Austria's future.'"
        },
        {
            "type": "playerLine",
            "line": "Dalmatia was an important province?"
        },
        {
            "type": "eginaLine",
            "line": "It's a matter of interpretation. Other Vienna newspapers write as follows: 'If Austria has any mission in Europe, then it is certainly the promotion of civilization in the East.'"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Civilization! 😡",
                    "chat": "chat_3_fg22"
                },{
                    "text": "We were East for them? 😲",
                    "chat": "chat_3_fg22"
                }
            ]
        }
    ]},
"chat_3_fg22": {"steps": [
    {
        "type": "eginaLine",
        "line": "That's why the emperor is here. He walked along Kalelarga, attended a mass, socialized with the Driolis and Luxards, visited all the important spots, and praised the New waterfront they had just built from the demolished southern walls, which they named after him."
    },
    {
        "type": "eginaLine",
        "line": "Here's the task. Get rid of the intruder:"
    },
    {
        "type": "rollNext",
        "chat": "chat_3_fg2q"
    }
]},
    "chat_3_fg2q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Waterfront of Francesco Giuseppe I",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Riva Nuova",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Waterfront of Vittorio Emanuele III",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Coast of Marshal Tito",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Coast of King Petar Krešimir III",
                    "chat": "chat_3_fg2win",
                    "func": "animationManager.animateWin"
                }
            ]
        }
    ]},
    "chat_3_fg2lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "No!!! Those are historical names of Zadar's waterfront. But there's one with the wrong number."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fg2q"
        }
    ]},
    "chat_3_fg2win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Yes!!! 🌊🌊🌊 It's not Petar Krešimir III but IV!"
        },
        {
            "type": "eginaLine",
            "line": "All of those were names of Zadar's waterfront, often named after the current head of state."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Was this painting created then?",
                    "chat": "chat_3_fg2win2"
                }
            ]
        }
    ]},
    "chat_3_fg2win2": {"steps": [
        {
            "type": "eginaLine",
            "line": "The painting was created about twenty years later when the emperor visited Zagreb and met the greatest Croatian painter, who went to Vienna to paint him."
        },
        {
            "type": "eginaLine",
            "line": "This is what the sketch looked like."
        },
        {
            "type": "eginaImage",
            "url": "chat/3-02.jpg", "w": 200, "h": 260
        },   
        {
            "type": "eginaLine",
            "line": "And that's also an opportunity for the next question: which painter are we talking about?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Julije Klović",
                    "chat": "chat_3_fg3lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Celestin Medović",
                    "chat": "chat_3_fg3lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Slava Raškaj",
                    "chat": "chat_3_fg3lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Vlaho Bukovac",
                    "chat": "chat_3_fg3win",
                    "func": "animationManager.animateWin"
                }
            ]
        }
    ]},
    "chat_3_fg3lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "No! That's Vlaho Bukovac, a great Croatian painter."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fgVlaho"
        }
    ]},
    "chat_3_fg3win": {"steps": [
        {
            "type": "eginaLine",
            "line": "That's right! 😃😃😃"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fgVlaho"
        }
    ]},
    "chat_3_fgVlaho": {"steps": [
        {
            "type": "eginaLine",
            "line": "At that time, Vlaho Bukovac was an internationally renowned artist. However, he also owes something to Zadar; he had his first solo exhibition here in 1884."
        },   
        {
            "type": "eginaLine",
            "line": "We know him for Gundulić's Dream and the curtain of the Croatian National Theater, but the world knows him for beautiful impressionistic and symbolic nudes. This is 'Une fleur':"
        }, 
        {
            "type": "eginaImage",
            "url": "chat/3-01.jpg", "w": 200, "h": 260
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "😍",
                    "chat": "chat_3_fgVlaho2"
                },{
                    "text": "😲",
                    "chat": "chat_3_fgVlaho2"
                },
            ]
        }
    ]},
    "chat_3_fgVlaho2": {"steps": [
        {
            "type": "eginaLine",
            "line": "Many powerful figures sought his favor. Besides Franz Joseph, he painted numerous magnates, like Count Drašković, the Queen of Serbia, and the King of Yugoslavia."
        },        
        {
            "type": "eginaLine",
            "line": "That reminded me, let's carry on. Find the painting popularly known as 'Yugoslavia'."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "That will be a challenge 🔎",
                    "setProgress": ["yu_hunt"]
                }
            ]
        }
    ]},
    "chat_3_yu0": {"steps": [
        {
            "type": "playerLine",
            "line": "Unity."
        },
        {
            "type": "eginaLine",
            "line": "Its real name is 'The unity of South Slavic rulers'"
        },
        {
            "type": "playerLine",
            "line": "Then why is it only states 'Unity'?"
        },
        {
            "type": "eginaLine",
            "line": "🤫"
        }
    ]},
    "chat_3_yu1": {"steps": [
        {
            "type": "playerLine",
            "line": "Hmm. It seems to me that this could be Yugoslavia, but I have no idea why."
        },
        {
            "type": "eginaLine",
            "line": "It was painted during the symbolism era, which is why the painting is very metaphorical, not at all literal. Its actual name is 'The Unity of South Slavic Rulers'"
        },
        {
            "type": "playerLine",
            "line": "And where is Yugoslavia?"
        },
        {
            "type": "eginaLine",
            "line": "Let's put it together, and many things will become clearer. Get ready; this is the most challenging puzzle yet 🧩 Patience and persistence are required."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Patience and persistence are my middle names! 🧩",
                    "setProgress" : ["p9_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_yu2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Done!"
        },
        {
            "type": "eginaLine",
            "line": "Impressive! 👼"
        },
        {
            "type": "eginaLine",
            "line": "It is a masterpiece by Francesco Salghetti-Drioli, 'The Unity of South Slavic Rulers' from 1870. It is also known as 'The Oath of the Three South Slavic Rulers' and 'Yugoslavia.' In the museum, it is attributed as 'Unity'"
        },
        {
            "type": "eginaLine",
            "line": "The painting was commissioned by Bishop Strossmayer, a great patron and reformer, as well as a strong supporter of the South Slavic idea. That's why he commissioned a painting with that theme."
        },
        {
            "type": "playerLine",
            "line": "The Proto-Yugoslavs?"
        },
        {
            "type": "eginaLine",
            "line": "Strossmayer is a Germanized Croat, and Drioli is Italian, so there you go. How do you like the painting?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Three old bearded men are flying towards a young girl. 😒",
                    "chat" : "chat_3_yu222",
                    "setProgress" : "yu_details"
                }
            ]
        }
    ]},
    "chat_3_yu222": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Those are Croatian King Krešimir, Serbian Emperor Dušan, and Bulgarian Emperor Simeon. Think symbolically, the painting is full of symbols and motifs, it's not literal."
        },
        {
            "type": "eginaLine",
            "line": "Okay, it's clear that we need to solve some tasks. You have to identify the motifs from the composition and click on them in the picture."
        },
        {
            "type": "eginaLine",
            "line": "Where is Unity in the painting❔ Click it."
        }
    ]},
    "chat_3_yu_q1": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Correct. Unity is a young girl who leads these kings to the throne."
        },
        {
            "type": "eginaLine",
            "line": "Where is Yugoslavia❔"
        }
    ]},
    "chat_3_yu_q2": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Way to go! Yugoslavia sits on the throne."
        },
        {
            "type": "eginaLine",
            "line": "And where is Danube❔"
        }
    ]},
    "chat_3_yu_q3": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Yes. Danube connects Croatia, Serbia, and Bulgaria. The personification of the Danube is sitting by the water."
        },
        {
            "type": "eginaLine",
            "line": "Where are Selfishness and Malice in this painting❔"
        }
    ]},
    "chat_3_yu_q4": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Yes. The kings are stepping over Selfishness and Malice to reach Unity."
        },
        {
            "type": "eginaLine",
            "line": "And where is the simbol of Croatia❔"
        }
    ]},
    "chat_3_yu_q5": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Yes. The Croatian coat of arms is on the shield, along with the coats of arms of Serbia and Bulgaria."
        },
        {
            "type": "eginaLine",
            "line": "⭐⭐⭐⭐⭐"
        },
        {
            "type": "eginaLine",
            "line": "Bravo! Yugoslavia is solved! However, there's one more Drioli's work in the room, called 'Moses before Pharaoh.' Find it."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "clearProgress": true,
                    "text": "That shouldn't be a problem 🔎",
                    "setProgress": ["moses_hunt"]
                }
            ]
        }
    ]},
    "chat_3_yu_q_fail": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "No"
        }
    ]},
    "chat_3_m1":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Here it is! Little Moses."
        },
        {
            "type": "eginaLine",
            "line": "He is before Pharaoh and stepping on a scepter and a crown, symbols of his power."
        },
        {
            "type": "playerLine",
            "line": "Quite biblical."
        },{
            "type": "eginaLine",
            "line": "Actually, it's not. The event was recorded by Josipa Flavije, a historian from the first century. There is no such scene in the Bible. Let's solve the puzzle, and then we'll continue. 🧩"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "clearProgress": true,
                    "text": "I'm in the mood for a good puzzle 🧩",
                    "setProgress": ["p10_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_m2":{"steps": [
        {
            "type": "playerLine",
            "line": "Got it!"
        },
        {
            "type": "eginaLine",
            "line": "Excellent!"
        },
        {
            "type": "eginaLine",
            "line": "Do you recognize the author?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Of course, it's the same anonymous author who painted Nassise.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Clearly, the artist who painted Armida and Erminia.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Salghetti-Drioli, who painted Yugoslavia.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Definitely Vlaho Bukovac, who painted emperors.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]},
    "chat_3_m3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Francesco Salghetti-Drioli."
        },
        {
            "type": "playerLine",
            "line": "Clearly."
        },
        {
            "type": "eginaLine",
            "line": "Probably the greatest painter from Zadar. But more than that, Francesco is also an heir to the perhaps the largest liqueur factory in Zadar."
        },
        {
            "type": "eginaLine",
            "line": "Maraschino is made from Marasca cherries, which only grow in central Dalmatia. The painter's grandfather made great wealth through liqueur production, allowing young Francesco to be educated in Italy. So when the time came for him to take over the factory, he wasn't thrilled. He preferred painting."
        },
        {
            "type": "eginaLine",
            "line": "Do you know what is the name of that 🍒 liqueur factory?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Salghetti-Drioli",
                    "chat": "chat_3_m4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Drioli",
                    "chat": "chat_3_m4",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Luxardo",
                    "chat": "chat_3_m4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Maraska",
                    "chat": "chat_3_m4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }
    ]},
    "chat_3_m4":{"steps": [
        {
            "type": "eginaImage",
            "url": "chat/3-03.jpg", "w": 111, "h": 400
        },
        {
            "type": "eginaLine",
            "line": "🍒 Maraschino liquer. Fondata a Zara nel 1759. 🍒"
        },
        {
            "type": "eginaLine",
            "line": "The production of Maraschino is one of the brightest points in Zadar's history. It was consumed everywhere, from the English court to the Titanic."
        },
        {
            "type": "eginaLine",
            "line": "Enough about painters and liqueur. Next to Moses' painting, there should be a bust of Verdi. Examine it."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Let's go 🔎",
                    "setProgress": ["verdi_hunt"]
                }
            ]
        }
    ]},
    "chat_3_v1":{"steps": [
        {
            "type": "playerLine",
            "line": "Here it is."
        },
        {
            "type": "eginaLine",
            "line": "Giuseppe Verdi, perhaps the greatest Italian composer. The bust was created by Bruno Bersa, a sculptor from the Bersa family in Zadar, which left a significant mark on Zadar's culture."
        }, {
            "type": "eginaLine",
            "line": "Can you name at least one work by Verdi?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Nabucco",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "The Barber of Seville",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "La traviata",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "The Marriage of Figaro",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Rigoletto",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateWin"
                }
            ]
        }
    ]},
    "chat_3_v2":{"steps": [
        {
            "type": "eginaLine",
            "line": "You surely know the aria from Rigoletto: La donna è mobile"
        },
        {
            "type": "eginaLine",
            "line": "La donna è mobile qual piuma al vento / Muta d'accento e di pensiero / Sempre un a mabile leggiadro viso / In pianto o in riso è mensognero."
        },
        {
            "type": "eginaLine",
            "line": "Woman is fickle. Like a feather in the wind / she changes her words and her thoughts! / Always a lovely, pretty face / in tears or in laughter,it is untrue."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Did some woman break his nose?",
                    "chat": "chat_3_v3"
                }
            ]
        }
    ]},
    "chat_3_v3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "His nose was damaged by Allied bombs."
        },
        {
            "type": "eginaLine",
            "line": "Zadar is a city that was completely destroyed in the Second World War, with 80% of its buildings either destroyed or damaged. The Verdi Theater building, where this bust stood, was also heavily damaged. It's one of the most tragic events that happened to this city, and the list of such events is not short."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "That's horrible. 😢",
                    "chat": "chat_3_v4"
                }
            ]
        }
    ]},
    "chat_3_verdkaz":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "His nose is damaged."
        },{
            "type": "eginaLine",
            "line": "Verdi's bust was located in the Verdi Theater, built in 1865. It was destroyed in a bombing in 1943 and left to ruin. The last remains of the theater were demolished in 1974."
        },

    ]},
    "chat_3_v4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Many artworks from this collection were found in the ruins of Zadar, and a large number were rescued from the surrounding villages where they had taken refuge during the war. The Renaissance chest of drawers, displayed in the next room, served as a chicken coop."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Great.",
                    "chat": "chat_3_v5"
                }
            ]
        }
    ]},
   "chat_3_v5":{"steps": [
        {
            "type": "eginaLine",
            "line": "Let's move on. Next to Verdi, there should be a portrait of Archbishop Petar Dujam Maupas. Assemble it."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Yes 🧩",
                    "setProgress": ["p11_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_dujm":{"steps": [
        {
            "type": "playerLine",
            "line": "Done!"
        },{
            "type": "eginaLine",
            "line": "Bravo!!! We're getting closer to our goal! Find a mirror in this room."
        },
        {
            "type": "playerLine",
            "line": "Wait! Aren't you going to ask me additional questions about this guy?"
        },
        {
            "type": "eginaLine",
            "line": "I don't have any questions. But, to switch it up a little bit, you can ask me something. You have the right to one question."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Only one? Can I get two?",
                    "chat": "chat_3_dujm0",
                },{
                    "text": "Who is the person on the painting?",
                    "chat": "chat_3_dujm1",
                },{
                    "text": "What are we actually doing here?",
                    "chat": "chat_3_dujm2",
                },{
                    "text": "Who are you?",
                    "chat": "chat_3_dujm3",
                },{
                    "text": "May I get 10% of the battery instead?",
                    "chat": "chat_3_dujm4",
                    "drainBattery": -10
                }
            ]
        }
    ]},
    "chat_3_dujm0":{"steps": [
        {
            "type": "eginaLine",
            "line": "Nope!"
        },
        {
            "type": "eginaLine",
            "line": "You used your question. 😏"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Zadar's archbishop from 1862 to 1891."
        },
        {
            "type": "playerLine",
            "line": "What is he known for?"
        },
        {
            "type": "eginaLine",
            "line": "He wrote the book 'Storia della Dalmazia' about the history of Dalmatia. He corresponded with contemporaries and was an influential figure of his time. He was painted by Antonio Zuccaro, an Italian painter known for his work on decorating Dalmatian theaters."
        },
        {
            "type": "playerLine",
            "line": "Alright, but realistically, by what criteria is he exhibited in the National Museum? Because of his significance or because there is a preserved painting?"
        },
        {
            "type": "eginaLine",
            "line": "Exactly. 😶"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm2":{"steps": [
        {
            "type": "eginaLine",
            "line": "We're enjoying ourselves. We're exploring the National Museum of Zadar and trying to uncover its great secret through a series of tasks."
        },
        {
            "type": "playerLine",
            "line": "And what is the secret?"
        },
        {
            "type": "eginaLine",
            "line": "Well, that is the real question!"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm3":{"steps": [
        {
            "type": "eginaLine",
            "line": "I am e-Genia. My task is to guide you through this operation."
        },
        {
            "type": "eginaLine",
            "line": "It's obviously not my real name, but it's similar."
        },
        {
            "type": "playerLine",
            "line": "And what is your real name?"
        },
        {
            "type": "eginaLine",
            "line": "I will just say that it ends with 'genia'."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Done."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm_next":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, that was a nice talk. Now, let's find that mirror."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Mirror, mirror, on the wall.",
                    "setProgress": ["mirror_hunt"]
                }
            ]
        }
    ]},
    "chat_3_mirr":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Found the mirror."
        },
        {
            "type": "eginaLine",
            "line": "Well done. Here we have an interesting piece. Originally, there was a painting inside the frame, but the painting disappeared, so now there's a mirror in the frame."
        },
        {
            "type": "eginaLine",
            "line": "Carefully examine the exhibit and conclude which of our friends received this frame as a gift?"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_mirrQ"
        }
    ]},
    "chat_3_mirrQ":{"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Giorolamo Luxardo",
                    "chat": "chat_3_mirrno",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Zoilo Nassis",
                    "chat": "chat_3_mirrno",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Franjo Josip I",
                    "chat": "chat_3_mirrno",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Franjo Salghetti-Drioli",
                    "chat": "chat_3mirryes",
                    "func": "animationManager.animateWin",
                },{
                    "text": "Josip Juraj Strossmayer",
                    "chat": "chat_3_mirrno",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Giuseppe Verdi",
                    "chat": "chat_3_mirrno",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                }
            ]
        }
    ]},
    "chat_3_mirrno":{"steps": [
        {
            "type": "eginaLine",
            "line": "No! Examine the mirror frame better; there's a clue in it. Don't let this cost us too much battery! 🔋"
        },
        {
            "type": "eginaLine",
            "line": "Try again."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_mirrQ"
        }
    ]},
    "chat_3mirryes":{"steps": [
        {
            "type": "eginaLine",
            "line": "That's right! On the header, you can see a broken painter's brush and palette. And among the mentioned friends, only Drioli is a painter."
        },
        {
            "type": "eginaLine",
            "line": "It's a gift from the family. When Franjo inherited the factory at a young age, his mother took over the business until he grew up. However, as he matured, he became a recognized painter, one of the first professionals, and yet... the factory waited."
        },
        {
            "type": "playerLine",
            "line": "An eternal dilemma: money or art."
        },
        {
            "type": "eginaLine",
            "line": "Regardless of Drioli, what's important is that we've completed salon number three! 🎉🎊🥳🎉🎊🥳🎉🎊🥳"
        },
        {
            "type": "eginaLine",
            "line": "Sure, we can continue to the fourth salon, or... there's more interesting furniture in this room that we haven't examined. It's not mandatory, but if you find it, you might collect a reward."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Four For The Win!!!",
                    "setProgress": ["room3_solved","hunt_desnica"]
                }
            ]
        }
    ]},
    "chat_3_m2xx":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "The painting belongs to the Modern Gallery, but it's exhibited in Zadar, Drioli's hometown."
        }
    ]},
    "chat_3_freska":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "It's a reconstruction of a fresco that was placed here."
        },
        {
            "type": "eginaLine",
            "line": "While this was the prince's residence, the space was arranged differently."
        },
        {
            "type": "playerLine",
            "line": "It was more colorful?"
        },
        {
            "type": "eginaLine",
            "line": "More colorful and richer."
        },
        {
            "type": "playerLine",
            "line": "And who is the figure on the fresco? He looks like a Roman."
        },
        {
            "type": "eginaLine",
            "line": "I do not have that information."
        }
    ]},
    "chat_3_desn":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Oh, great! We found furniture from the Janković Tower, the property of the noble Desnica-Janković family."
        },
        {
            "type": "eginaLine",
            "line": "Here, we have a couch, chairs, and a table from the salon of Vladan Desnica's house."
        },{
            "type": "eginaLine",
            "line": "Vladan Desnica is one of the greatest Croatian writers, and his 'Springs of Ivan Galeb' is generally considered one of the most important novels."
        },
        {
            "type": "playerLine",
            "line": "I know. Kids have to write a book report on it in school."
        },
        {
            "type": "eginaLine",
            "line": "And just like that, here is an opportunity for a bonus question. If you answer correctly, a portion of your battery will be recharged."
        },
        {
            "type": "playerLine",
            "line": "Great!"
        },
        {
            "type": "eginaLine",
            "line": "What is the name of Vladan Desnica's novel that thematizes the exile of Zadar residents during the Allied bombings that began in November 1943, when 80% of all city buildings were completely destroyed?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Kalelarga",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Mountains",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "The Winter Summer Holiday",
                    "chat": "chat_3_desn2",
                    "func": "animationManager.animateWin",
                    "drainBattery": -10,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Framework for Hate",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Damaged city",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                }
            ]
        }
    ]},
    "chat_3_desn1":{"steps": [
        {
            "type": "eginaLine",
            "line": "No, 😑 it's 'The Winter Summer Holiday'. Too bad."
        }
    ]},
    "chat_3_desn2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Way to go! 10% of battery for you 🔋"
        }
    ]},



    "chat_4_start": {"steps": [
        {
            "type": "playerLine",
            "line": "I entered the fourth salon. 4️⃣"
        },
        {
            "type": "eginaLine",
            "line": "Great job! However, the battery is at [battery]%! I can help you with that. Find a palm tree and click on it to get more power.🔋"
        },
        {
            "type": "playerLine",
            "line": "Where is the palm tree?"
        },
        {
            "type": "eginaLine",
            "line": "Well, you have to find it 🌴"
        },
        {
            "type": "playerLine",
            "line": "Ok. And what is our next task?"
        },
        {
            "type": "eginaLine",
            "line": "The fourth salon is full of exciting secrets. Start in any direction, and you'll discover tasks on your own."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Here I go! 🔎",
                    "removeChoices":true,
                    "setProgress":["palm","p12_chat","p13_chat","p14_chat","p15_chat","mini_chat","bonus_question"]
                }
            ]
        }
    ]},
    "chat_4_lux_unsolved":{"steps": [
        {
            "type": "playerLine",
            "line": "Who is this?"
        },
        {
            "type": "eginaLine",
            "line": "That's Girolamo Luxardo, the founder of the largest distillery in Zadar. In the 19th century, Zadar was internationally renowned for the production of alcoholic liqueurs, especially Maraschino."
        },
        {
            "type": "eginaLine",
            "line": "Luxardo arrived in Zadar as the Consul of the Kingdom of Sardinia in 1821. It was his wife, Maria, who convinced him to start industrial production of rosolio maraschino, which had been produced in Dalmatian monasteries since the Middle Ages."
        },
        {
            "type": "eginaLine",
            "line": "For many years, the Luxardo building located at the entrance to the city harbor welcomed all ships and seaplanes that landed there."
        },
        {
            "type": "eginaLine",
            "line": "After World War II, the new authorities nationalized all distilleries in Zadar and created a new company that still exists and operates today. The question is, what is its name?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Maraska",
                    "chat": "chat_4_lux2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Marascha",
                    "chat": "chat_4_lux2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Maraschino",
                    "chat": "chat_4_lux2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Badel",
                    "chat": "chat_4_lux2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_4_lux2":{"steps": [
        {
            "type": "eginaLine",
            "line": "But the real question is, what fruit has made both Zadar and Luxardo so famous?"
        },
        {
            "type": "eginaLine",
            "line": "I'll offer you a few pictures to choose from."
        },
        {
            "type": "eginaImage",
            "url": "chat/4-01.jpg", "w": 150, "h": 150
        },
        {
            "type": "eginaImage",
            "url": "chat/4-02.jpg", "w": 150, "h": 150
        },
        {
            "type": "eginaImage",
            "url": "chat/4-03.jpg", "w": 150, "h": 150
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Fruit from the first picture",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Fruit from the second picture",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Fruit from the third picture",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }]},
    "chat_4_lux3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Maraschino is made from the essence of ripe fruits of the Dalmatian marasca cherry and the leaves of its young branches."
        },{
            "type": "eginaLine",
            "line": "Plants native to Central Dalmatia, especially in the Zadar region. Zadar's history and this fruit are inseparable."
        },
        {
            "type": "eginaLine",
            "line": "All right, enough talk. Solve Luxardo's picture so we can move on."
        },{
            "type": "eginaLine",
            "line": "Be patient, just like Luxardo was when he opened his distillery in a city where there were already over twenty distilleries, with Drioli's distillery at the forefront."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Aye, aye. ",
                    "setProgress": ["p12_UNSOLVED"],
                    "removeProgress": "p12_chat"
                }
            ]
        }]},
    "chat_4_lux_solved":{"steps": [
        {
            "type": "playerLine",
            "line": "Mr Maraskino is completed!"
        },
        {
            "type": "eginaLine",
            "line": "Bravo! 🍒🍒🍒 Continue your research of this room."
        },
        {
            "type": "playerLine",
            "line": "Ok"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]},
    "chat_4_drioli_unsolved":{"steps": [
        {
            "type": "playerLine",
            "line": "Oh, here is an interesting painting."
        },
        {
            "type": "eginaLine",
            "line": "Angelika Salghetti-Drioli."
        },
        {
            "type": "eginaLine",
            "line": "First, put it together so we can examine it. This puzzle won't be easy. Some parts look almost identical, but do your best."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I got this. 🧩",
                    "setProgress": ["p13_UNSOLVED"],
                    "removeProgress": "p13_chat"
                }
            ]
        }]},
    "chat_4_drioli_win":{"steps": [
        {
            "type": "playerLine",
            "line": "Done! 🥳"
        },{
            "type": "eginaLine",
            "line": "BRAVO!!! 😵😵😵 This was not easy."
        },{
            "type": "eginaLine",
            "line": "Let's continue: We did well with Nassis' texts on the pictures, so it shouldn't be a problem to translate this inscription. It's important for us to understand the inscription in order to understand the picture."
        },{
            "type": "eginaLine",
            "line": "First, do you recognize the language?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Italian",
                    "chat": "chat_4_drioli2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Latin",
                    "chat": "chat_4_drioli1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Some kind of old Zadar dialect",
                    "chat": "chat_4_drioli1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_4_drioli1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Noooooo! 🙄 It's Italian. In the 19th century, most gentlemen and citizens spoke Italian, while the peasants spoke Croatian."
        },{
            "type": "rollNext",
            "chat": "chat_4_drioli3"
        }]},
    "chat_4_drioli2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yes, of course, Italian. In the 19th century, most gentlemen and citizens spoke Italian, while the peasants spoke Croatian."
        },{
            "type": "rollNext",
            "chat": "chat_4_drioli3"
        }]},
    "chat_4_drioli3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Let's translate this text:"
        },{
            "type": "eginaLine",
            "line": "OH, PIÙ CHE AI PRIMI TEMPI, AMATO MIO," 
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "More than at the beginning, my beloved,",
                    "chat": "chat_4_drioli4",
                    "func": "animationManager.animateWin"
                },{
                    "text": "At the beginning of time, my friend,",
                    "chat": "chat_4_drioli4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_4_drioli4":{"steps": [
        {
            "type": "eginaLine",
            "line": "SII MADRE AI FIGLI NOSTRI; AMAMI IN LORO." 
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Be a mother to our children, love me that is in them.",
                    "chat": "chat_4_drioli5",
                    "func": "animationManager.animateWin"
                },{
                    "text": "You are the mother of our children, love God that is in them.",
                    "chat": "chat_4_drioli5",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_4_drioli5":{"steps": [
        {
            "type": "eginaLine",
            "line": "PREGO CHE ABBIATE IN CIEL VOSTRO TESORO," 
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I pray that you have mercy in heaven,",
                    "chat": "chat_4_drioli6",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "I plead you to be my treasure,",
                    "chat": "chat_4_drioli6",
                    "func": "animationManager.animateWin"
                }
            ]
        }]},
    "chat_4_drioli6":{"steps": [
        {
            "type": "eginaLine",
            "line": "CH'OGNI SOSPIRO A ME S'INNALZI A DIO." 
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Let every doubt bring me closer to God.",
                    "chat": "chat_4_drioli7",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Let my every sigh ascend to God.",
                    "chat": "chat_4_drioli7",
                    "func": "animationManager.animateWin"
                }
            ]
        }]},
    "chat_4_drioli7":{"steps": [
        {
            "type": "playerLine",
            "line": "VMore than at the beginning, my beloved, Be a mother to our children, love me that is in them." 
        }, {
            "type": "eginaLine",
            "line": "Her husband painted her 12 years after her death. She died during childbirth in 1853. 😢"
        },{
            "type": "eginaLine",
            "line": "He immortalized his wife in another work as well. He painted her in the monumental work 'Apoteoza umrle supruge', which is located in the choir of the Church of St. Francis. In the painting, Angelika lies on a bier, with Franjo and their children at her feet, while the Virgin Mary awaits her on a cloud."
        },{
            "type": "playerLine",
            "line": "This is the power of art, isn't it? To immortalize - to make eternal..." 
        },{
            "type": "eginaLine",
            "line": "😢 Let's continue. Do we have any other puzzles in this room?"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]},
    "chat_4_chair":{"steps": [
        {
            "type": "playerLine",
            "line": "What do these chairs say about me?"
        },{
            "type": "eginaLine",
            "line": "The history of art explains the world and us in it."
        },{
            "type": "eginaLine",
            "line": "There is Biedermeier furniture in this salon. Biedermeier is a style recognized for its craftsmanship. It replaced the former splendor with simple forms and comfort."
        },{
            "type": "eginaLine",
            "line": "I have an idea: I'll ask you a question about Biedermeier, and if you guess it correctly, you gain 5% battery. If you answer incorrectly, then you lose 5%."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Seems fair.",
                    "chat": "chat_4_chair1",
                    "removeProgress":"bonus_question"
                },{
                    "text": "I don't want to play like that, sorry.",
                    "chat": "chat_4_chair2",
                    "removeProgress":"bonus_question"
                }
            ]
        }
    ]},
    "chat_4_chair1":{"steps": [
        {
            "type": "eginaLine",
            "line": "I appreciate the bravery! To award your courage, I'm changing the reward: if you guess the answer to the question about Biedermeier, you'll get 10% battery."
        },{
            "type": "eginaLine",
            "line": "And the question is: after whom or what is Biedermeier named?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "After Frederick Biedermeier, a Prussian officer who single-handedly conquered the Swedish fortress.",
                    "chat": "chat_4_chair2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "After Gottlieb Biedermeier, a fictional village schoolteacher who wrote dull poems",
                    "chat": "chat_4_chair3",
                    "func": "animationManager.animateWin",
                    "drainBattery": -10
                },{
                    "text": "That is just a translation of the phrase 'unadventurous May' that idle Germans used to describe spring fatigue.",
                    "chat": "chat_4_chair2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                }
            ]
        }
    ]},
    "chat_4_chair2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Too bad. ☹️"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]},
    "chat_4_chair3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo! + 10% 🔋"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]},
    "chat_4_bor_m_unsolved":{"steps": [
        {
            "type": "eginaLine",
            "line": "Borelli, Counts of Vrana, another famous Zadar family."
        },{
            "type": "eginaLine",
            "line": "After the liberation of Vrana in 1699, they gained control of the Vrana estate, which included Vrana, Biograd, Sveti Filip i Jakov, Stankovci, Pakoštane, Betina, and Murter."
        },{
            "type": "playerLine",
            "line": "That's almost half of Dalmatia."
        },{
            "type": "eginaLine",
            "line": "True. But who did Vrana liberate itself from in 1699?"
        },{
            "type": "rollNext",
            "chat": "chat_4_bor_Q1"
        }
    ]},    
    "chat_4_bor_Q1":{"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "The Venetians",
                    "chat": "chat_4_bor_mN",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "The Turks",
                    "chat": "chat_4_bor_mY",
                    "func": "animationManager.animateWin"
                },{
                    "text": "The Ottomans",
                    "chat": "chat_4_bor_mN",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]},    
    "chat_4_bor_mN":{"steps": [
        {
            "type": "eginaLine",
            "line": "Noooo."
        },{
            "type": "eginaLine",
            "line": "Try again."
        },{
            "type": "rollNext",
            "chat": "chat_4_bor_Q1"
        }
    ]},   
    "chat_4_bor_mY":{"steps": [
        {
            "type": "eginaLine",
            "line": "Indeed! The Turks threatened Zadar for 300 years but they didn't conquer it."
        },{
            "type": "eginaLine",
            "line": "To make it a bit more challenging, 😁 which war resulted in the Ottoman Empire gaining Crete while the Venetian Republic gained Dalmatia?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Morean War",
                    "chat": "chat_4_bor_mN2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Cretan War",
                    "chat": "chat_4_bor_mY2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Vrana war",
                    "chat": "chat_4_bor_mN2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]}, 
    "chat_4_bor_mN2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Nooooo. 😟 It's Cretan War."
        },{
            "type": "eginaLine",
            "line": "Nevermind, let's move on. Assemble Frano Borelli."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "On it 🧩",
                    "setProgress": ["p15_UNSOLVED"],
                    "removeProgress": "p15_chat"
                }
            ]
        }
    ]},  
    "chat_4_bor_mY2":{"steps": [
        {
            "type": "eginaLine",
            "line": "That's right. It's Cretan War."
        },{
            "type": "eginaLine",
            "line": "Frano Borelli has a remarkable life story. His father, Andrija, was one of the most prominent supporters of the French Revolution in Dalmatia, serving as the chief magistrate of Zadar during the French administration and as an administrator of a Masonic lodge. When Zadar came under Austrian rule, the family fell out of favor, and his father took his own life."
        },{
            "type": "eginaLine",
            "line": "Austria nationalized the Vranski feud, and the young Frano, who was only 6 years old at the time, swore to reclaim his family's property. He pursued a career in law and spent 30 years in legal battles with the Kingdom until they finally returned Vrana to him."
        },
        {
            "type": "eginaLine",
            "line": "Many authorities have changed here."
        },
        {
            "type": "eginaLine",
            "line": "And often, those who knew how to switch sides quickly fared the best. But let's put politics aside and get back to art. Assemble Frano Borelli."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "I will try not to be puzzled by it 🧩",
                    "setProgress": ["p15_UNSOLVED"],
                    "removeProgress": "p15_chat"
                }
            ]
        }
    ]}, 
    "chat_4_bor_m_solved":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "I did it!"
        },{
            "type": "eginaLine",
            "line": "Bravo! 🧩🧩🧩 Continue with your investigation of this room."
        },
        {
            "type": "playerLine",
            "line": "Ok"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]}, 
    "chat_4_bor_f_unsolved":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Antonija Borelli, née Cattani-Jorgeti."
        },{
            "type": "eginaLine",
            "line": "Both paintings were created by the Zadar painter Ivan Skvarčina, a student of Drioli. His story is also a sad one."
        },{
            "type": "eginaLine",
            "line": "Skvarčina dedicated the rest of his life to his magnum opus 'Galileo's Renunciation' and, while working on that painting, he died in extreme poverty."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "In the end, they disowned him.",
                    "chat": "chat_4_bor_f1"
                }
            ]
        }
    ]},    
    "chat_4_bor_f1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Antonija Borelli's contribution to the development of Zadar's female painting scene during the second Austrian administration was noteworthy. Her family had a rich background in science and the arts, and her own children (12 of them), were predominantly artists. Among them were sculptors, poets, ceramic artists, and, most prominently, painters, including female painters."
        },{
            "type": "playerLine",
            "line": "Are any of them famous?"
        },{
            "type": "eginaLine",
            "line": "Zoe Borelli Vranski Alačević is the most famous female painter from Zadar. She exhibited throughout Europe and was known for her portraits and caricatures."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Never heard of her.",
                    "chat": "chat_4_bor_f1x"
                },{
                    "text": "How come that she is not more famous?",
                    "chat": "chat_4_bor_f1x"
                }
            ]
        }
    ]},
    "chat_4_bor_f1x":{"steps": [
        {
            "type": "eginaLine",
            "line": "she was one of the few painters included in the Croatian Encyclopedia of Fine Arts. One critic, Fran Kobal, praised her so much that he wrote that there is 'nothing feminine' in her works."
        },{
            "type": "playerLine",
            "line": "Gende stereotypes of the 19th century?"
        },{
            "type": "eginaLine",
            "line": "Not only the 19th."
        },{
            "type": "eginaLine",
            "line": "OK, enough talk. Put Countess Borelli back together."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Here I go 🧩",
                    "setProgress": ["p14_UNSOLVED"],
                    "removeProgress": "p14_chat"
                }
            ]
        }
    ]},
    "chat_4_bor_f_solved":{"steps": [
        {
            "type": "playerLine",
            "line": "Done!"
        },{
            "type": "eginaLine",
            "line": "BRAVO! Great justice for the silenced female art! Let's continue exploring the fourth salon."
        },
        {
            "type": "playerLine",
            "line": "Let's go!"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]}, 
    "chat_4_mini":{"steps": [
        {
            "type": "playerLine",
            "line": "What is this?"
        },{
            "type": "eginaLine",
            "line": "Careful! ⚠️⚠️⚠️ Careful! ⚠️⚠️⚠️ We can lose too much battery here if we make a mistake!"
        },
        {
            "type": "eginaLine",
            "line": "It's a collection of miniatures."
        },
        {
            "type": "eginaLine",
            "line": "The cycle of miniatures depicting the Borelli family is the only one of its kind preserved in this area. It portrays family members over a span of more than 100 years."
        },{
            "type": "eginaLine",
            "line": "Your task is to arrange the miniatures chronologically. Pay attention to the fashion, and that's where you'll find the solution."
        },{
            "type": "eginaLine",
            "line": "Be careful, every mistake costs battery power. The fewer miniatures remain unsolved, the more expensive the mistake gets!"
        }
    ]}, 
    "chat_4_mini_win":{"steps": [
        {
            "type": "eginaLine",
            "line": "Mini victory!! 🤩🤩🤩🤩🤩"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Miniatures are solved!",
                    "setProgress": ["mini_SOLVED"],
                    "chat":"chat_4_mini_win2",
                    "room":"room_4_minisolved2",
                    "removeProgress": "mini_chat"
                }
            ]
        }
    ]}, 
    "chat_4_mini_win2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Do we have any other tasks in this room?"
        },
        {
            "type": "rollNext",
            "requisites": ["p12_SOLVED","p13_SOLVED","p14_SOLVED","p15_SOLVED","mini_SOLVED"],
            "chat": "chat_4_all_puzzles_win"
        }
    ]}, 
    "chat_4_wp1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "French wallpapers - part of a larger whole. Wallpapers from the Zuber workshop also decorate the walls of the White House in Washington, D.C."
        },{
            "type": "playerLine",
            "line": "Same as stone from the island of Brač."
        },{
            "type": "eginaLine",
            "line": "No, that's an urban legend. But the wallpapers are real."
        },
        
    ]}, 
    "chat_4_wp2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Biedermeier dresser, Austria, early 19th century, solid wood, new handles, inventory number MGZ 624"
        },{
            "type": "playerLine",
            "line": "Wow."
        },
    ]}, 
    "chat_4_sekret":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Biedermeier secretary, Austria, around 1830, wood veneer, new fittings and handles, inventory number MGZ 2344"
        },{
            "type": "playerLine",
            "line": "Secretary?"
        },{
            "type": "eginaLine",
            "line": "The word comes from Latin secretus which means secret. So, yes."
        },{
            "type": "playerLine",
            "line": "Furniture for hiding secrets."
        },{
            "type": "eginaLine",
            "line": "Exactly."
        }
    ]},
    "chat_4_palm":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "I see a palm tree!!! 🌴"
        },
        {
            "type": "eginaLine",
            "line": "Congratulations! The battery has been charged by 10%. It should be a bit easier now."
        }
    ]},
    "chat_4_all_puzzles_win":{"steps": [
        {
            "type": "eginaLine",
            "line": "SWe completed the fourth room!!! 😀😃😄😁 We are getting closer to the grand finale."
        },
        {
            "type": "eginaLine",
            "line": "Go to the room 5.",
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "High five! ♷",
                    "setProgress": ["4_solved"]
                }
            ]
        }
    ]},



    "chat_5_start":{"steps": [
        {
            "type": "eginaLine",
            "line": "Here we are in the fifth and penultimate salon."
        },
        {
            "type": "playerLine",
            "line": "There are no paintings here."
        },
        {
            "type": "eginaLine",
            "line": "There are no puzzles here, so we can focus better on the content. The topic is the period of French rule in Zadar."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "L'état c'est moi 😜",
                    "chat": "chat_5_startx"
                }
            ]
        }]},
    "chat_5_startx":{"steps": [
        {
            "type": "eginaLine",
            "line": "After the fall of Venice and a brief Austrian rule, Zadar came under French administration led by Napoleon's general Auguste Marmont. He aimed to improve various aspects of living conditions in the previously underdeveloped region."
        },
        {
            "type": "eginaLine",
            "line": "The French administration made significant contributions to the development of Zadar and its region. They constructed a road across Velebit that connected Zadar to the interior, introduced the first newspapers in the Croatian language, and established schools, including seven gymnasiums for boys and girls and a lyceum that later became the University of Zadar."
        },{
            "type": "eginaLine",
            "line": "And despite all of this, the people of Dalmatia still deeply despised the French and their administration. When they abolished feudalism and serf labor for the landlords, the people frequently rose up in rebellion."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Why did they hate them?",
                    "chat": "chat_5_startxx"
                }
            ]
        }]},
    "chat_5_startxx":{"steps": [
        {
            "type": "playerLine",
            "line": "Perhaps liberty, equality, and fraternity did not resonate with the spirit of the Dalmatian people?"
        },{
            "type": "eginaLine",
            "line": "Primarily because they viewed the French as occupiers, while the rest of the Croats remained under Austrian rule."
        },{
            "type": "eginaLine",
            "line": "This leads us to the new question. And the question is, what was the name of that state entity in which Zadar was from 1806 to 1813?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "French Republic",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Republic of Dalmatia",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Illyrian provinces",
                    "chat": "chat_5_2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Zone of Schönbrunn peace",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_5_1":{"steps": [
        {
            "type": "eginaLine",
            "line": "No... 🥶🥶🥶"
        },        
        {
            "type": "eginaLine",
            "line": "The Illyrian Provinces, as well as the later movement of national revival, were named after the indigenous people of these lands, the Illyrians."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_3"
        }]},
    "chat_5_2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yes.... 🌞🌞🌞"
        },        
        {
            "type": "eginaLine",
            "line": "The Illyrians, the indigenous people of these lands, gave their name to both the Illyrian Provinces and the later National Revival."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_3"
        }]},
    "chat_5_3":{"steps": [
        {
            "type": "eginaLine",
            "line": "After Napoleon was defeated in 1813 at Leipzig, his empire fell apart, and Austria easily took control of all Dalmatian cities. Except Zadar. Zadar was besieged by the English and Austrians, and it was only in December that the city's mayor managed to negotiate its surrender and save the city."
        },        
        {
            "type": "eginaLine",
            "line": "What was the name of the mayor who was initially on the side of the French and later saved the city during those turbulent times, only to fall out of favor and eventually take his own life?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Frane Borelli Vranski",
                    "chat": "chat_5_4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Andrija Borelli Vranski",
                    "chat": "chat_5_5",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Auguste Marmont",
                    "chat": "chat_5_4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Petar Dujam Maupass",
                    "chat": "chat_5_4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }]},
    "chat_5_4":{"steps": [
        {
            "type": "eginaLine",
            "line": "No! 🥶 It was Andrija Borelli Vranski, Frane Borelli's father that we covered in the previous room."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_6"
        }]},
    "chat_5_5":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yes! 🌞 It was Frane Borelli's father, who we covered in the previous room."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_6"
        }]},
    "chat_5_6":{"steps": [
        {
            "type": "eginaLine",
            "line": "In addition to administrative and civil virtues, the French also left us with a sense of style as part of their legacy."
        },        
        {
            "type": "eginaLine",
            "line": "ind in this salon an acanthus leaf ornament, a classical decorative motif used since Greek and Roman times.It was highly popular in the French Empire era."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Acanthus, OK.",
                    "removeChoices": true,
                    "setProgress":["akantus_hunt"]
                }
            ]
        }]},  
    "chat_5_7":{"steps": [
        {
            "type": "eginaLine",
            "line": "Great! This is acanthus, in Croatia, we also call it 'primog' or 'tratorak', an almost inconspicuous shrub that has left a huge mark in art."
        },        
        {
            "type": "eginaLine",
            "line": "Of course, the French also used other plant motifs: palmettes, rosettes, laurels, and one plant is even on their coat of arms. Interestingly, it's also on the coat of arms of the Borelli family. Which one?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Heraldic lily",
                    "chat": "chat_5_9",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Heraldic water lily",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Heraldic violet",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Heraldic rose",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }]},  
    "chat_5_8":{"steps": [
        {
            "type": "eginaLine",
            "line": "No! 🥶 Fleur-de-lis, which is actually a lily although it represents the head of a halberd. It is present on many coats of arms, yet it is most famous as the symbol of French kings."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_10"
        }]},
    "chat_5_9":{"steps": [
        {
            "type": "eginaLine",
            "line": "Da! ⚜️ Fleur-de-lis, which is actually a lily although it represents the head of a halberd. It is present on many coats of arms, yet it is most famous as the symbol of French kings."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_10"
        }]}, 
    "chat_5_10":{"steps": [
        {
            "type": "eginaLine",
            "line": "That's it. One more task here."
        }, 
        {
            "type": "playerLine",
            "line": "Alright"
        },{
            "type": "eginaLine",
            "line": "Don't rush into it. Examine everything that can be seen in this room, a new question awaits you."
        }, {
            "type": "playerLine",
            "line": "OK"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I would like that question now.",
                    "chat": "chat_5_11"
                }
            ]
        }]},
    "chat_5_11":{"steps": [
        {
            "type": "eginaLine",
            "line": "In the room, there is a variety of furniture. The mirrored panels are typically French, and we're curious about which of these three pieces of furniture is of French origin?"
        },        
        {
            "type": "eginaLine",
            "line": "Armchair, writing desk, or lounge chair?"
        },
        {
            "type": "rollNext",
            "chat": "chat_5_11Q"
        }]},
    "chat_5_11Q":{"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Armchair",
                    "chat": "chat_5_13",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Writing desk",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Recamier lounge chair",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "None of the above",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "All of the above",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }]},
    "chat_5_12":{"steps": [
        {
            "type": "eginaLine",
            "line": "No! 🙄🙄🙄 Try again."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_11Q"
        }]},
    "chat_5_13":{"steps": [
        {
            "type": "eginaLine",
            "line": "⚜️⚜️⚜️ Correct! It's the Louis XVI armchair, who was the king during the French Revolution, in which he met his demise. ⚜️⚜️⚜️"
        },{
            "type": "eginaLine",
            "line": "Just to check, in which year did the French Revolution occur, which first proclaimed the fundamental principles of liberal democracy: Liberté, égalité, fraternité?"
        },        
        {
            "type": "choice",
            "choices": [
                {
                    "text": "1709.",
                    "chat": "chat_5_14",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "1789.",
                    "chat": "chat_5_15",
                    "func": "animationManager.animateWin"
                },{
                    "text": "1848.",
                    "chat": "chat_5_14",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Nijedno od navedenog",
                    "chat": "chat_5_14",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }]}, 
    "chat_5_14":{"steps": [
        {
            "type": "eginaLine",
            "line": "No! 🥶 The French Revolution began in 1789."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_16"
        }]},
    "chat_5_15":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yes! The French Revolution brought about the empowerment of ideas about civil liberties, human rights, and democracy, and it spurred the spread of these values worldwide."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_16"
        }]}, 
    "chat_5_16":{"steps": [
        {
            "type": "eginaLine",
            "line": "Interesting, since then, the motto 'Liberty, equality, fraternity' has been a part of the French constitution, only to be replaced with 'Work, family, homeland' during the Vichy Nazi regime."
        }, 
        {
            "type": "playerLine",
            "line": "Oh, very interesting."
        },
        {
            "type": "eginaLine",
            "line": "OK, I guess that is all we can do in this room."
        },       
        {
            "type": "eginaLine",
            "line": "Do you know which room is next?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "The sixt room!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                },{
                    "text": "The last one!!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                },{
                    "text": "The goal of our game, the salon where Iphigenia herself is located!!!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                }
            ]
        }]}, 
    "chat_5_17":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Yaaaaaaas! 🤍💜💙💚💛🧡❤️🖤"
        }, {
            "type": "eginaLine",
            "line": "Head to the room with Iphigenia!"
        }]}, 
    "chat_5_swan":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "🦢🦢 2 swans around the fire. 2 swans have been a symbol of loyalty and innocence since ancient Greece."
        }, {
            "type": "playerLine",
            "line": "And fire?"
        },{
            "type": "eginaLine",
            "line": "🔥 Fire could be the symbol of God."
        }]}, 
    "chat_5_qr":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "The QR code leads to a place where you can learn more about the Museum. Scan it with your 📱 mobile phone, and it will take you to the website where you can discover much more about this place."
        }]},
    "chat_5_o1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Empire panel. A trumeau is a central pillar found in large passages."
        }]},
    "chat_5_o2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Gilded, carved, and painted wood. The Louis XVI style that developed in France before the French Revolution."
        }]},







    "chat_6_start":{"steps": [
        {
            "type": "playerLine",
            "line": "I'm in the sixth salon."
        },{
            "type": "eginaLine",
            "line": "🤍💜💙💚💛🧡❤️🖤"
        }, {
            "type": "eginaLine",
            "line": "The sixth salon!"
        },
        {
            "type": "playerLine",
            "line": "Finally!"
        },
        {
            "type": "eginaLine",
            "line": "Here we will meet Iphigenia. But before her, we have a few more tasks."
        },
        {
            "type": "eginaLine",
            "line": "First, find the portrait of Franjo Posedarski."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "That shouldn't be difficult.",
                    "setProgress": ["hunt_frapos"]
                }
            ]
        }]}, 

    "chat_6_p1":{"steps": [
        {
            "type": "playerLine",
            "line": "Franjo Posedarski."
        },{
            "type": "eginaLine",
            "line": "Franjo Posedarski, another scion of the old warrior family that protected the hinterland of Zadar for centuries, primarily from the Turks, and other threats."
        },{
            "type": "eginaLine",
            "line": "The princes descend from the Gusić lineage, one of the twelve ancient Croatian tribes."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "Those who led the Croats to the sea?",
                    "chat": "chat_6_p2"
                }
            ]
        }]},
    "chat_6_p2":{"steps": [
        {
            "type": "eginaLine",
            "line": "That period is poorly documented, but we certainly follow this family until the Middle Ages."
        },{
            "type": "eginaLine",
            "line": "It's not impossible that they were one of the pre-Croatian tribes. Do you know the names of the mythological first Croats, five brothers and two sisters?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Hrvojit, Serbomir, Tugomir, Mojmir, Tuga i Buga",
                    "chat": "chat_6_p4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Klukas, Lobel, Muhlo, Kosjenac, Hrvat, Tuga i Buga",
                    "chat": "chat_6_p3",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Potjeh, Stribor, Palunko, Jaglenac, Toporko, Tuga i Buga",
                    "chat": "chat_6_p4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }]},
    "chat_6_p3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo! 🤯"
        },{
            "type": "eginaLine",
            "line": "According to the book by Constantine Porphyrogenitus, the brothers and sisters came from Bagibarea, White Croatia."
        }, {
            "type": "rollNext",
            "chat": "chat_6_p5"
        }]},   
    "chat_6_p4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Neoooo!!! 😵‍💫😵‍💫"
        },{
            "type": "eginaLine",
            "line": "Klukas and other brothers and sister arrived from Bagibarea, White Croatia."
        }, {
            "type": "rollNext",
            "chat": "chat_6_p5"
        }]},
    "chat_6_p5":{"steps": [
        {
            "type": "eginaLine",
            "line": "But let's get back to the painting. Franjo Posedarski held the title of Capitano di tutti li Morlacchi, which means he was the commander of the entire Venetian land defense outside the city walls."
        },{
            "type": "eginaLine",
            "line": "And now, what's interesting to us here? The head of the family with a strong military background poses in a military uniform and frames himself within a frame filled with war motifs. Except..."
        },{
            "type": "playerLine",
            "line": "Except..."
        },{
            "type": "eginaLine",
            "line": "Except that one of the symbols on the frame isn't related to war at all, but quite the opposite - it represents peace. Which symbol? Find it on the frame."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok!",
                    "setProgress": ["hunt_frapos2"],
                    "removeProgress":"hunt_frapos"
                }
            ]
        }]}, 
    "chat_6_pq0":{"steps": [
        {
            "type": "eginaLine",
            "line": "✔️✔️ Olive is a symbol of peace!!! Since the dove brought it to Noah on the ark.🕊️🕊️🕊️ "
        },
        {
            "type": "eginaLine",
            "line": "For Judeo-Christians and ancient Greeks, the olive has been a symbol of peace, and here it is, subversively hidden by a military commander in his warrior frame."
        },
        {
            "type": "playerLine",
            "line": "That old fox!"
        },
        {
            "type": "eginaLine",
            "line": "We're done with him, now let's pay attention to the cabinet below his portrait."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok!",
                    "setProgress": ["hunt_kaby"],
                    "removeProgress": "hunt_frapos2"
                }
            ]
        }]},
    "chat_6_pq1":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ The plume on the helmet is by no means a symbol of peace."
        }]},
    "chat_6_pq2":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ The helmet is a warrior's armor. It's not a symbol of peace."
        }]},    
    "chat_6_pq3":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ The shield is a military accessory. It's not a symbol of peace."
        }]},
    "chat_6_pq4":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Armor is definitely not a symbol of peace."
        }]},    
    "chat_6_pq5":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ The bow and arrows cannot be a symbol of peace."
        }]},
    "chat_6_pq6":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Axe? No."
        }]},   
    "chat_6_pq7":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Canons? No."
        }]},
    "chat_6_pq8":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Drums? No."
        }]},    
    "chat_6_pq9":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Wings. Maybe if they are together with the dove, but like this, out of context, no."
        }]},
    "chat_6_pq10":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ The satyr can represent many things, but not peace."
        }]},  









    "chat_6_k1":{"steps": [
        {
            "type": "eginaLine",
            "line": "A richly decorated late 17th-century chest of drawers. Veneered and gilded with inlays. It also conceals a very difficult task."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "I love those!",
                    "chat": "chat_6_k2"
                }
            ]
        }]}, 
    "chat_6_k2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Each of the nine inlays is marked with a numeral. Like on this image: Clear?"
        },
        {
            "type": "eginaImage",
            "url": "chat/6-01.jpg", "w": 200, "h": 128
        }, 
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Clear",
                    "chat": "chat_6_k3"
                }
            ]
        }]}, 
    "chat_6_k3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Also, each of the nine drawers is associated with a yes-or-no question. Connect the numerals on the inlays that correspond to 'yes' answers, and you'll get the code."
        },
        {
            "type": "playerLine",
            "line": "So I take only the numbers with positive answers?"
        },
        {
            "type": "eginaLine",
            "line": "Yes."
        }, {
            "type": "playerLine",
            "line": "OK, let's go."
        },
        {
            "type": "eginaLine",
            "line": "Click on each inlay, and you will get a question. Remember the ones with a 'yes' answer, and you will get the code. Don't guess blindly, as each mistake will cost you 5% of the battery."
        },
        {
            "type": "playerLine",
            "line": "I understand."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I know the code!!!",
                    "chat": "chat_6_k4"
                }
            ]
        }]}, 
    "chat_6_k4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, let's be careful now."
        },
        {
            "type": "eginaLine",
            "line": "What is the code?"
        },
        {
            "type": "rollNext",
            "chat": "chat_6_kQ"
        }]}, 
    "chat_6_kQ":{"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "1239",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1358",
                    "chat": "chat_6_kW",
                    "func": "animationManager.animateWin"
                },{
                    "text": "1367",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1409",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1568",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1578",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1837",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1897",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "1945",
                    "chat": "chat_6_kL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                }
            ]
        }]}, 
    "chat_6_kL":{"steps": [
        {
            "type": "eginaLine",
            "line": "Noooooo!!!!! 🕷️🕷️🕷️ Try again."
        },
        {
            "type": "rollNext",
            "chat": "chat_6_kQ"
        }]}, 
    "chat_6_kW":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yeeeeeees! ✨✨✨✨ 1358!"
        },
        {
            "type": "eginaLine",
            "line": "And for the people of Zadar, this is not just any number."
        },        {
            "type": "eginaLine",
            "line": "Do you know what it means for them?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "The year of birth of St. Donatus",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "The amount of pounds of gold that Zadar paid for its independence from Byzantium",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "The year of signing the Treaty of Zadar",
                    "chat": "chat_6_kkW",
                    "func": "animationManager.animateWin"
                },{
                    "text": "The total number of points Krešimir Ćosić scored while playing for Zadar.",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]}, 
    "chat_6_kkL":{"steps": [
        {
            "type": "eginaLine",
            "line": "Nooooo!!!!!!! 🕷️🕷️🕷️ "
        },
        {
            "type": "rollNext",
            "chat": "chat_6_k5"
        }]}, 
    "chat_6_kkW":{"steps": [
        {
            "type": "eginaLine",
            "line": "Yeeeees! ✨✨✨"
        },
        {
            "type": "rollNext",
            "chat": "chat_6_k5"
        }]},
    "chat_6_k5":{"steps": [
        {
            "type": "eginaLine",
            "line": "1On February 8, 1358, in the sacristy of St. Francis, the Zadar Peace Treaty was signed, which transferred Dalmatia to the Croatian-Hungarian Kingdom, not the Venetian Republic."
        },
        {
            "type": "eginaLine",
            "line": "Everything is solved except for Iphigenia. The last puzzle, I have no doubt it will be ten times harder than anything we've seen so far."
        },
        {
            "type": "eginaLine",
            "line": "Find the painting of the Sacrifice of Iphigenia. 🎨"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "I will help Iphigenia! 🧩",
                    "setProgress": ["hunt_iphi"],
                    "removeProgress": "hunt_kaby",
                }
            ]
        }]},
    "chat_6_ki1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "1: Zadar was the capital of the Kingdom of Dalmatia❔"
        }]},
    "chat_6_ki2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "2: The Duke of Zadar resided in the Providur's Palace❔"
        }]},
    "chat_6_ki3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "3: Zadar was under Austrian rule in the 19th century❔"
        }]},
    "chat_6_ki4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "4: The Drioli and Luxardo families still produce Maraschino in Zadar❔"
        }]},
    "chat_6_ki5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "5: In the 20th century, Zadar was completely depopulated, and 80% of the city was destroyed❔"
        }]},
    "chat_6_ki6":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "6: King Ladislaus sold Zadar and part of Dalmatia to Venice for one million golden ducats❔"
        }]},
    "chat_6_ki7":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "7: Zadar was under the rule of the Ottoman Empire in the 17th century❔"
        }]},
    "chat_6_ki8":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "8: Zadar was under Venetian rule for 377 years❔"
        }]},
    "chat_6_ki9":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "9: Francesco Salghetti-Drioli is the most prominent Impressionist painter from Zadar❔"
        }]},
    "chat_6_r1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "The Baroque wall panels from the 18th century are very valuable exhibits. During that time, they were so expensive that only the wealthiest people could afford them. They were expensive due to their manufacturing technique and the fact that Venice held a monopoly on glass production." 
        },{
            "type": "playerLine",
            "line": "It's remarkable how well those glasses have endured through so many centuries." 
        },{
            "type": "eginaLine",
            "line": "Those are not original mirrors, but the panels are." 
        }]},
    "chat_6_r2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Baroque panel. The wood is carved, polychromed, and silvered, and it contains an oil on canvas by an unknown artist."
        }]},
    "chat_6_ifi1":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Iphigenia."
        },
        {
            "type": "eginaLine",
            "line": "The magnificent composition of the Sacrifice of Iphigenia is the most exciting exhibit in the museum, and perhaps in the entire city. Even the fate of this painting is astonishing."
        },
        {
            "type": "eginaLine",
            "line": "And to present that, I will first hide it."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Yes?",
                    "room": "room_6_l_ifig1",
                    "chat": "chat_6_ifi2"
                }
            ]
        }]},
    "chat_6_ifi2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "The painting looked like this when it was found in the ruins of Zadar. And this is only a part of the painting. Cut into pieces, it spent years in the ruins until it arrived at the restoration department in 1958."
        },
        {
            "type": "eginaLine",
            "line": "There, they wrapped it in wax and rolled it onto a wooden roller since they didn't have the means or resources for restoration."
        },
        {
            "type": "eginaLine",
            "line": "Destroyed, just like the city itself, it will take decades for it to shine again in its old glory, for both it and Zadar to rise from their ashes like a mythological bird. Do you know which bird I'm talking about?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Phoenix",
                    "room": "room_6_l_ifig2",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi3"
                },{
                    "text": "Goblet",
                    "room": "room_6_l_ifig2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5,
                    "chat": "chat_6_ifi3"
                },{
                    "text": "Flamenco",
                    "room": "room_6_l_ifig2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5,
                    "chat": "chat_6_ifi3"
                }
            ]
        }]},
    "chat_6_ifi3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Then, in 2001, the works began."
        },
        {
            "type": "eginaLine",
            "line": "The wax was melted, the painting cleaned, and it was adhered to a new canvas, damages were retouched, and the entire massive structure was stretched onto a new frame."
        },
        {
            "type": "eginaLine",
            "line": "Do you know what these methods of preservation and maintenance are called??"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Restoration and conservation works",
                    "room": "room_6_l_ifig3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "chat": "chat_6_ifi4"
                },{
                    "text": "Decaying and devastating works",
                    "room": "room_6_l_ifig3",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi4"
                }
            ]
        }]},   
    "chat_6_ifi4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "After that damages are retouched with gouache paints."
        },
        {
            "type": "eginaLine",
            "line": "Gouache paints are watercolor paints mixed with pigments and a filler to make them thicker. But do you know what was used as a filler?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Chalk",
                    "room": "room_6_l_ifig4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2,
                    "chat": "chat_6_ifi5"
                },{
                    "text": "Ink",
                    "room": "room_6_l_ifig4",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi5"
                }
            ]
        }]},  
    "chat_6_ifi5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Yes."
        },{
            "type": "eginaLine",
            "line": "This is how the Sacrifice of Iphigenia looks after the application of gouache paint before retouching."
        },
        {
            "type": "eginaLine",
            "line": "Do you know what is retouching?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ink coloring",
                    "room": "room_6_l_ifig5",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2,
                    "chat": "chat_6_ifi6"
                },{
                    "text": "Repairing and finishing",
                    "room": "room_6_l_ifig5",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi6"
                },{
                    "text": "washing and cleaning",
                    "room": "room_6_l_ifig5",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2,
                    "chat": "chat_6_ifi6"
                }
            ]
        }]},  
    "chat_6_ifi6":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Technical repair, refinement of drawings, paintings, photographs, from French 'retouche': to touch up again."
        },
        {
            "type": "eginaLine",
            "line": "And finally, more than ten years after the start of restoration, over 50 years after its discovery, and more than 300 years after its creation, the painting was reintroduced to the people of Zadar in 2012."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Wow!",
                    "chat": "chat_6_ifi7"
                }
            ]
        }]},
    "chat_6_ifi7":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "But it's not just the fate of the canvas that is interesting; what is on the canvas is also very intriguing."
        },
        {
            "type": "eginaLine",
            "line": "Let's simplify the story: 🏺 The Greeks want to go on an expedition to Troy 🏛️ but an angry goddess has taken away the winds from them 💨 And now, for the ships  ⛵ to sail, Agamemnon must sacrifice 🗡️ his daughter Iphigenia."
        },
        {
            "type": "eginaLine",
            "line": "Agamemnon is facing the classic dilemma - what is more valuable: family or state? Is it more important, personal or public? Emotion or reason?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Horrible.",
                    "chat": "chat_6_ifi8"
                }
            ]
        }]},
    "chat_6_ifi8":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "The dilemma is certainly dreadful because it presents two bad options. But what is right?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "To save your daughter, of course.",
                    "chat": "chat_6_ifi9"
                },{
                    "text": "Country! The sacrifice of one is worth the salvation of many.",
                    "chat": "chat_6_ifi9"
                },{
                    "text": "This is like that Trolley problem.",
                    "chat": "chat_6_ifi9"
                }
            ]
        }]},
    "chat_6_ifi9":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "There is no correct answer. The question of morality is relative."
        },
        {
            "type": "eginaLine",
            "line": "There is no absolute morality."
        },{
            "type": "eginaLine",
            "line": "That's why this motif is so powerful, and that's why you can still find it in many works of art today."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Exceptional story.",
                    "chat": "chat_6_ifi10",
                    "setProgress":["ifi_qs"]
                }
            ]
        }]},
    "chat_6_ifi_q_fail":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "No 🤕 Try again."
        }]}, 
    "chat_6_ifi10":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, now we need to identify the motifs in the composition. Let's get familiar with them so we can solve it later."
        },{
            "type": "playerLine",
            "line": "Ok!"
        },{
            "type": "eginaLine",
            "line": "Find and click on Iphigenia."
        },]},   
    "chat_6_ifi_q_1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Yes!"
        },
        {
            "type": "eginaLine",
            "line": "Where is Agamemnon?"
        }]},   
    "chat_6_ifi_q_2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Yes! The description of Agamemnon's shield in the Iliad is somewhat different, as is Achilles', and both of them were present in this scene, but we can assume you are correct."
        },
        {
            "type": "eginaLine",
            "line": "Where is Clytemnestra in this painting?"
        }]},   
    "chat_6_ifi_q_3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Yes! That's Iphigenia's mother, wailing inconsolably. 😢"
        },
        {
            "type": "eginaLine",
            "line": "Where is Calchas?"
        }]},   
    "chat_6_ifi_q_4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Exactly, the priest Calchas is beside the altar."
        },
        {
            "type": "eginaLine",
            "line": "Now, one personal interpretation. This isn't a clear-cut matter, so there are no penalties if you make a mistake, but could you find a symbol of the futility of sacrifice?"
        },
        {
            "type": "eginaLine",
            "line": "Click on the symbol."
        }]}, 
    "chat_6_ifi_q_5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "🌬️ Yes!!! That's just my theory, but look: they sacrifice her to calm the wind, but the smoke is moving, meaning the wind is already blowing 🌬️💨, even though no one has been sacrificed yet."
        },
        {
            "type": "playerLine",
            "line": "Maybe the solution to Agamemnon's dilemma is to avoid the dilemma altogether? 🧐"
        },
        {
            "type": "eginaLine",
            "line": "Yes!!!! With this little trick, we may have just saved Iphigenia! 🏳️🏳️🏳️🏳️🏳️"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Futile sacrifice",
                    "chat": "chat_6_ifi11"
                }
            ]
        }
    ]}, 
    "chat_6_ifi11":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Nothing is as sacred as what is futile, Rešicki wrote."
        },{
            "type": "eginaLine",
            "line": "That's just an interpretation. There's also an interpretation that the figure in the painting isn't Iphigenia at all, but rather Polyxena, a Trojan princess, sacrificed at Achilles' tomb to ensure the winds blow so the Greeks' could return from Troy."
        },{
            "type": "eginaLine",
            "line": "It's true that we don't know who the author of the painting is, although there are theories about that as well."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "The truth is yet to be found.",
                    "chat": "chat_6_ifi12"
                }
            ]
        }
    ]},
    "chat_6_ifi12":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Truth or not, we have approached the final goal, the ultimate task, the end of the game."
        },{
            "type": "eginaLine",
            "line": "Assemble the puzzle of 'The Sacrifice of Iphigenia' 🧩"
        },{
            "type": "eginaLine",
            "line": "And..."
        },{
            "type": "eginaLine",
            "line": "Yes?"
        },{
            "type": "eginaLine",
            "line": "Good luck!"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Finally, the last puzzle 🧩",
                    "setProgress":["ifigenia"]
                }
            ]
        }
    ]}
};


