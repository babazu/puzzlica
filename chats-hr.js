export { chats };

const chats = {

    "chat_gameover": {"unstopping":true,"steps": [
        {
            "type": "eginaImage",
            "url": "chat/gameover.png", "w": 65, "h": 65
        },
        {
            "type": "eginaLine",
            "line": "O NE, BATERIJA JE NA NULI!!! 😱😱😱"
        }, 
        {
            "type": "eginaLine",
            "line": "IZGUBILI SMO IGRU!"
        },
        {
            "type": "playerLine",
            "line": "Sve smo mogli mi da je duži bio kapacitet baterije."
        },
        {
            "type": "eginaLine",
            "line": "Baterija će se isprazniti svaki tren. Gle, izgubili smo, ali nije kraj. Možemo sve ponovo, samo tre"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "e-Genija?",
                    "room": "room_gameover"
                }
            ]
        }
    ]},

    "chat_start": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Pozdrav! Ja sam e-Genija. Dobrodošli u igru.",
        },{
            "type": "eginaLine",
            "line": "Moj zadatak je komunicirati s tobom putem chata i voditi te kroz zadatke."
        },{
            "type": "eginaLine",
            "line": "Tvoj zadatak je hodati kroz muzej i riješiti probleme koje tamo nađemo."
        },{
            "type": "eginaLine",
            "line": "Zadaci su teški a problemi izazovni, samo će najbolji stići do cilja."
        },{
            "type": "eginaLine",
            "line": "A cilj nam je pronaći Ifigeniju, veliku tajnu grada Zadra."
        },{
            "type": "playerLine",
            "line": "Tko je Ifigenija?"
        },{
            "type": "eginaLine",
            "line": "To je pravo pitanje. Otkrit ćemo zajedno. Jesmo li spremni za akciju?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Yes!!",
                    "chat": "chat_0_02", 
                    "room": "room_0_01"
                }
            ]
        }
    ]},
    "chat_0_01_BALK": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neki balkon."
        },
        {
            "type": "eginaLine",
            "line": "S njega je providur Dalmacije nadgledao regiju svoje uprave."
        }
    ]},
    "chat_0_02": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Napokon! Uđi u muzej."
        },
        {
            "type": "eginaLine",
            "line": "Klikni sve što ti se učini zanimljivo. Strelice te vode na novu lokaciju."
        },
        {
            "type": "eginaLine",
            "line": "Obrati pažnju na svaki detalj. Sve može biti korisno."
        },
        {
            "type": "lowerPhone",
            "delay": 1000
        }
    ]},
    "chat_0_DP": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neka zastava."
        },
        {
            "type": "eginaLine",
            "line": "Dvije palače. Kneževa i Providurova palača zajedno pretvorene su u muzej. Na dobrom smo mjestu."
        }
    ]},
    "chat_0_ZB": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Zadar baštini."
        },
        {
            "type": "eginaLine",
            "line": "Zadar baštini: projekt očuvanja, revitalizacije i integracije kulturne baštine. Da, unutra je ono što nas zanima. Idemo!",
            "delay": 2500
        }
    ]},
    "chat_0_ZV": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Zatvoreno je."
        },
        {
            "type": "eginaLine",
            "line": "Prvo moraš znati kamo ideš. Vrati se i idi desno na mapu muzeja."
        }
    ]},
    "chat_0_03": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, sad pažljivo. Svaka pogreška nas košta vremena. Ako ne riješimo problem dok ti ne istekne baterija, misija je propala."
        },
        {
            "type": "playerLine",
            "line": "Okeeej."
        }
    ]},
    "chat_0_03_EKR": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Ekrani."
        },
        {
            "type": "eginaLine",
            "line": "To je dio promjenjivog postava. To nas sad ne zanima."
        }
    ]},
    "chat_0_NO": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Vrati se unutra. Nemamo vremena za šetnje po gradu."
        }
    ]},
    "chat_0_06": {"steps": [
        {
            "type": "eginaLine",
            "line": "Sad budi pažljiv. Moraš znati u koji dio muzeja idemo. Pazi, zbog svake pogreške potrošit će se dio baterije."
        },
        {
            "type": "eginaLine",
            "line": "Ako baterija 🔋 padne na nulu gotovi smo, misija je propala."
        },
        {
            "type": "eginaLine",
            "line": "Koliko baterije ti je ostalo?"
        },
        {
            "type": "playerLine",
            "line": "[battery]%"
        },
        {
            "type": "eginaLine",
            "line": "To će biti dovoljno ako ne griješiš previše."
        },
        {
            "type": "playerLine",
            "line": "Potrudit ću se."
        },
        {
            "type": "eginaLine",
            "line": "Prvi zadatak: u koji dio muzeja idemo? Meni piše ovako: 'Šest salonskih priča'. Stalna izložba iz fundusa Odjela Muzeja grada Zadra NMZ. Izložbeni saloni - Kneževa palača."
        },
        {
            "type": "eginaLine",
            "line": "Idi na mapu i onda klikni na dio mape gdje se nalazi Šest salonskih priča."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Kako to točno radi?",
                    "chat": "chat_0_06_help",
                    "removeChoices": true
                }
            ]
        }
    ]},
    "chat_0_06_premap":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, idi na mapu."
        }
    ]},
    "chat_0_06_noway":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Tražimo stalni postav, nije tim putem. Prvo pronađi naš cilj na mapi."
        }
    ]},
    "chat_0_06_help": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Na mobitelu imaš ikonu za Wi-Fi. Klikni je i označit će ti se mjesta na koja je moguće kliknuti. To će pomoći."
        },
        {
            "type": "eginaLine",
            "line": "Što se mape tiče, postoji pet zona. Ono što tražimo je u Kneževoj palači, ne u Providurovoj."
        }
    ]},
    "chat_0_06_win": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!! 💚💚💚💚💚💚"
        },
        {
            "type": "eginaLine",
            "line": "A sad idi tamo."
        }
    ]},
    "chat_0_06_lose": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "O, neee! ☹️☹️☹️ Nije taj dio muzeja. Molim te, razmisli malo, trošiš bateriju 🔋 Stalni postav je na prvom katu."
        }
    ]},
    "chat_0_06_lose2": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Jao!! 👎👎👎 Nije to. Molim te pazi, trošiš bateriju 🔋. Kat je dobar, ali sobe krive."
        }
    ]},
    "chat_0_06_lose3": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ne!! 😟😟😟 To je krivo. Pazi, pogreške troše bateriju 🔋. Ostalo ti je još [battery]%! Stalni postav nije u Providurovoj palači."
        }
    ]},    
    "chat_0_06_lose4": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Neeeee!! 👎👎👎 😟 Pazi, pogreške troše bateriju 🔋 [battery]%!!! Padne li baterija na 0% misija propada! 😟"
        }
    ]},

    "chat_0_08_bunar": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Bunar."
        },
        {
            "type": "eginaLine",
            "line": "Sjajno opažanje. 😴😴😴"
        }
    ]},
    "chat_0_08_skale": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Stubište za gore."
        },
        {
            "type": "eginaLine",
            "line": "Možda možemo i tim putem, ali držimo se mape. Kreni naprijed u Kneževu palaču."
        }
    ]},

    "chat_0_08_EKR": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Kneževa palača."
        },
        {
            "type": "eginaLine",
            "line": "Tamo idemo. Iz nje je zadarski knez upravljao gradom još od 13. stoljeća."
        },
        {
            "type": "playerLine",
            "line": "Preko sto godina. 😵"
        },
        {
            "type": "eginaLine",
            "line": "Zapravo preko sedamsto. 😇"
        }
    ]},
    "chat_0_11": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ovo je dobar smjer. Nastavi stubama."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Što nam je zadatak?",
                    "chat": "chat_0_11B",
                    "removeChoices": true
                }
            ]
        }
    ]},
    "chat_0_10": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "To nije put prema šest salona."
        }
    ]},
    "chat_0_10_vrata": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Tu je neki prolaz."
        },
        {
            "type": "eginaLine",
            "line": "Ne idemo tamo. Vrati se i idi na kat."
        }
    ]},
    "chat_0_11B": {"steps": [
        {
            "type": "eginaLine",
            "line": "Želimo riješiti tajne 6 salona završno s veličanstvenom slikom Ifigenije. Neće biti lagano. Držim fige da zadaci ne budu teški 🤞"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Također.",
                    "chat": "chat_0_11C"
                }
            ]
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Meni teški? Ha-ha! Rasturam muzeje. 😎",
                    "chat": "chat_0_11D"
                }
            ]
        }
    ]},
    "chat_0_11C": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Samo pazi na bateriju 🔋🔋🔋 Svaka greška skupo košta."
        }
    ]},
    "chat_0_11D": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "🐵"
        }
    ]},
    "chat_0_end": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "To je to. Ok, agente, krenimo. Unutra nas čeka rješenje."
        }
    ]},
    "room_0_15_novrata":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Zaključano."
        },
        {
            "type": "eginaLine",
            "line": "U šest salona je moguće ući kroz nekoliko vrata. Probaj naći otvorena."
        }
    ]},
    "room_0_16_h": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Tu nešto nedostaje."
        },
        {
            "type": "eginaLine",
            "line": "Dok je ovdje stolovao knez tu je vjerojatno stajao kip nekog sveca, možda i poprsje kojeg moćnika."
        },
        {
            "type": "playerLine",
            "line": "Možda i samog kneza."
        },
        {
            "type": "eginaLine",
            "line": "Moguće. No, zapravo ne znamo."
        },
        {
            "type": "eginaLine",
            "line": "Povijest je mjesto zaborava. Zato i imamo muzeje."
        }
    ]},
    "room_0_16_f": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Mrlje."
        },
        {
            "type": "eginaLine",
            "line": "To su ostaci freske koja je originalno krasila zidove palače. Nije imala bijele zidove kao sad."
        }
    ]},



    "chat_1_start": {"steps": [
        {
            "type": "playerLine",
            "line": "U salonu sam. Što tražimo?"
        },
        {
            "type": "eginaLine",
            "line": "Prvo mi reci u kojoj si sobi pa ću ti javiti koji su zadaci.",
            "delay": 1000 
        },
        {
            "type": "playerLine",
            "line": "Tu je nekakav namještaj."
        },
        {
            "type": "eginaLine",
            "line": "Svaka salonska soba ima namještaj, može li malo specifičnije? Kakav je namještaj?"
        },
        {
            "type": "playerLine",
            "line": "Šaren."
        },
        {
            "type": "eginaLine",
            "line": "Izgleda li taj namještaj kao bidermajer ili rokoko?",
            "delay": 2500
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Roko-što?",
                    "chat": "chat_1_02"
                },{
                    "text": "Bid? Maj?",
                    "chat": "chat_1_02"
                },{
                    "text": "Nemam pojma. Može pomoć?",
                    "chat": "chat_1_02"
                }
            ]
        }
    ]},
    "chat_1_02": {"steps": [
        {
            "type": "eginaLine",
            "line": "O, ne! 😱😱😱 Nemoj mi reći da ne raspoznaješ umjetnost."
        },
        {
            "type": "eginaLine",
            "line": "Ovako ćemo: dam ti kratke upute, a ti se pokušaj snaći.",
            "delay": 1500 
        },
        {
            "type": "eginaLine",
            "line": "Hoćemo pokušati?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Naravno!",
                    "chat": "chat_1_03"
                }
            ]
        }
    ]},
    "chat_1_03": {"steps": [
        {
            "type": "eginaLine",
            "line": "Rokoko je kičast, preukrašen i lakomislen no ipak profinjen. Vizualiziraj vrckave francuske careve."
        },
        {
            "type": "eginaLine",
            "line": "Bidermajer je dobroćudan, skroman ali decentan. Vizualiziraj suzdržane bečke dame.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Na koji stil podsjeća namještaj u sobi?"
        },
        {
            "type": "eginaLine",
            "line": "Prije nego odgovoriš možeš prošetati po sobi i bolje pogledati."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Rokoko",
                    "chat": "chat_1_03win",
                    "func": "animationManager.animateWin",
                },{
                    "text": "Bidermajer",
                    "chat": "chat_1_03lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }
    ]},
    "chat_1_03lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 😪",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Ok, izgubili smo malo baterije, nema veze, idući put ćeš bolje.",
            "delay": 600 
        },
        {
            "type": "rollNext",
            "chat": "chat_1_04"
        }
    ]},
    "chat_1_03win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!!! 🥳 Zapravo neorokoko, stil koji kopira rokoko, no, izgledaju isto.",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "chat": "chat_1_04"
        }
    ]},
    "chat_1_04": {"steps": [
        {
            "type": "eginaLine",
            "line": "To je Luxardova neorokoko soba. Luxardo je bio veliki zadarski proizvođač likera. Dao je izraditi ovaj namještaj u stilu venecijanskog barocchetta."
        },
        {
            "type": "eginaLine",
            "line": "Sad mi odgovori koji točno elementi spadaju u Luxardov komplet."
        },
        {
            "type": "rollNext",
            "chat": "chat_1_05"
        }
    ]},
    "chat_1_s4_detail": {"unstopping":true, "steps": [
        {
            "type": "playerLine",
            "line": "Kao nekakva šiška."
        },
        {
            "type": "eginaLine",
            "line": "Motiv šiške nije uobičajen u baroknom namještaju. Cvjetovi, listovi, školjke, da; šiška ne baš. Zanimljivo."
        }
    ]},
    "chat_1_05": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Krevet i noćni ormarići",
                    "chat": "chat_1_06lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Krevet, noćni ormarići i komoda",
                    "chat": "chat_1_06win",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Krevet, noćni ormarići, komoda i ogledalo",
                    "chat": "chat_1_06lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Krevet, noćni ormarići, komoda, ogledalo i konzolni stolić",
                    "chat": "chat_1_06lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]},
    "chat_1_06lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 😐🥵🔋",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_1_05"
        }
    ]},
    "chat_1_06win": {"steps": [
        {
            "type": "eginaLine",
            "line": "O-la-la!! 💚 Yes!!",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "chat": "chat_1_puzzles_start"
        }
    ]},
    "chat_1_k2_leptir1": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Crveni leptir."
        },
        {
            "type": "eginaLine",
            "line": "Rokoko je lud za leptirima. Zvali su ih leteći cvjetovi. 🦋🦋🦋"
        }
    ]},
    "chat_1_k2_leptir2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Plavi leptir."
        },
        {
            "type": "eginaLine",
            "line": "Leptir je simbol transformacije. Od ružne gusjenice do prelijepog leptira. Ne znam koliko se Luxardo doživljavao u tome."
        }
    ]},
    "chat_1_k2_leptir3": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Ovdje je neki čudni kukac. Čini mi se da to nije leptir."
        },
        {
            "type": "eginaLine",
            "line": "Mala subverzija venecijanskog majstora.",
        }
    ]},


    "chat_1_ArmidaStart": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, slike su riješene i proučene. Nadam se da smo spremni za interpretaciju slika.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Spremni smo!",
                    "chat": "chat_1_11"
                }
            ]
        }
    ]},
    "chat_1_11": {"steps": [
        {
            "type": "eginaLine",
            "line": "To su slike koje prikazuju različita pjevanja spjeva Torquata Tassa 'Oslobođeni Jeruzalem' iz 1575.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Da bi išli dalje moraš mi prepoznati na kojoj je slici Armida. To je protagonistica iz spjeva.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Tema spjeva je Prvi križarski rat i osvajanje Jeruzalema. Armida je nećakinja kralja Damaska, čarobnica koja je zavela glavnoga križara Rinalda koji je ostavio vojsku pa pošao za njom na otok sreće.",
            "delay": 2000
        },{
            "type": "playerLine",
            "line": "Opa!"
        },{
            "type": "eginaLine",
            "line": "Ipak, uvijek trijeznog Goffreda, glavnog lika spjeva, nije mogla očarati.",
            "delay": 1000
        },{
            "type": "playerLine",
            "line": "Pih!"
        },{
            "type": "eginaLine",
            "line": "Pažljivo pogledaj obje slike i reci mi na kojoj je Armida.",
            "delay": 1000
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Molim pomoć.",
                    "chat": "chat_1_11b",
                }
            ]
        }
    ]},
    "chat_1_11b": {"steps": [
        {
            "type": "eginaLine",
            "line": "Dobro je da smo oprezni.",
        },{
            "type": "eginaLine",
            "line": "Armida je kompleksan lik, fatalna žena. Prvo proždire muškarce da bi do kraja spjeva postala pokorna sljedbenica vjere.",
            "delay": 1500
        },{
            "type": "eginaLine",
            "line": "Piše ovako: Armida je bila žena neodoljive tjelesne ljepote.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Armida je na slici s plemićima i robovima, vjerojatno.",
                    "chat": "chat_1_11win1",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Armida je na slici s djecom i janjetom, vjerojatno.",
                    "chat": "chat_1_11lose1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Još uvijek ne znam, na obje slike je lijepa žena.",
                    "chat": "chat_1_11c",
                }
            ]
        }
    ]},
    "chat_1_11c": {"steps": [
        {
            "type": "eginaLine",
            "line": "Evo stihovi iz spjeva:",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Pjevaše: Gledaj ružu, gdje ozdňla, kroz zčlen pupa, djevičanski skromno, napol je skrita, otvorena pňla, što manje vidna, lijepo i pitomno više se kaže, širi prsa gola, a kada vehne i malakše lomno, od mnoštva više željkovana nije od ljubovnikâ i dekli kô prije.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Napol je skrita!! Armida je na slici s plemićima i robovima.",
                    "chat": "chat_1_11win1",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Prsa gola!! Armida je na slici s djecom i janjetom.",
                    "chat": "chat_1_11lose1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }
    ]},
        
        
    "chat_1_11win1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Odlično. No, trebat ćemo još nešto. Pogledaj sliku s Armidom i pronađi viteza koji stoji pred njom.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok",
                    "setProgress": ["crusader"],
                    "removeChoices": true
                }
            ]
        }
    ]},
    "chat_1_11lose1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 😰😰😰😰😰",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Armida je ona dama na slici s plemićima."
        },
        {
            "type": "eginaLine",
            "line": "S janjetom je Erminia iz spjeva VII, koju spase pastiri kad je vojnici greškom napadnu."
        },
        {
            "type": "playerLine",
            "line": "O, nesretne dike ter hvaljenja :("
        },
        {
            "type": "playerLine",
            "line": "Moram više čitati srednjovjekovne spjevove."
        },
        {
            "type": "eginaLine",
            "line": "Ok, nema veze. Ali moraš mi nešto drugo provjeriti. Pogledaj sliku s Armidom i klikni viteza koji stoji pred njom."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok",
                    "setProgress": ["crusader"],
                    "removeChoices": true
                }
            ]
        }
    ]},
    "chat_1_armida": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "To je Armida, princeza Damaska, čarobnica i zavodnica."
        }
    ]},
    "chat_1_11quest": {"steps": [
        {
            "type": "eginaLine",
            "line": "Sad vrlo pažljivo pogledaj tog križara i reci mi je li on Rinaldo ili Goffredo?"
        },
        {
            "type": "playerLine",
            "line": "Kako to mogu znati?"
        },
        {
            "type": "eginaLine",
            "line": "Sjeti se, jednog je očarala, a drugi je bio skeptičan i trezven pa se nije dao zavesti."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Rinaldo, onaj koji ju je pratio na otok sreće 💘",
                    "chat": "chat_1_11lose2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress": "crusader"
                },{
                    "text": "Goffredo, onaj kojeg nije uspjela očarati 💔",
                    "chat": "chat_1_11win2",
                    "func": "animationManager.animateWin",
                    "removeProgress": "crusader"
                }
            ],
        }
    ]},
    "chat_1_11win2": {"steps": [
        {
            "type": "eginaLine",
            "line": "Yes!!! Pogledaj samo kako je gleda. Taj se nije dao očarati.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "🏆🏆🏆🏆🏆 Bravo! Ovim smo riješili sve zadatke prve sobe. Idemo dalje!",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Idi u drugi salon."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, krećem u drugi salon",
                    "setProgress": ["room1_ok"],
                }
            ]
        }
    ]},
    "chat_1_11lose2": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne!! Jaoooo 🤕🤕🤕 Pogledaj samo kako je gleda. Taj se nije dao očarati.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Nema veze idemo dalje. Prvu sobu smo riješili. Idi u drugi salon.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, krećem u drugi salon",
                    "setProgress": ["room1_ok"],
                }
            ]
        }
    ]},
    "chat_1_o9_detail": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Cvijeće."
        },
        {
            "type": "eginaLine",
            "line": "Cvjetni motivi su vrlo česti u rokokou. Koristili su ih kako bi stvorili romantičnu i raskošnu atmosferu."
        }
    ]},
    "chat_1_10_detail": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Puno cvijeća."
        },
        {
            "type": "eginaLine",
            "line": "Rokoko je pun cvijeća. Naći ćeš ga na svim mogućim tipovima namještaja, uvijek elegantno i nježno."
        }
    ]},
    "chat_1_o6_detail": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Leptir."
        },
        {
            "type": "eginaLine",
            "line": "Leptir je hit motiv u rokoko stilu umjetnosti, uključujući namještaj."
        }
    ]},
    "chat_1_k3_leptir": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Na krevetu je puno leptira i cvijeća."
        },{
            "type": "eginaLine",
            "line": "I nijedna višnja! Luxardo je proizvodio maraskino, liker od višanja. Očekivala bih vidjeti bar koju višnju na tom namještaju."
        }
    ]},
    "chat_1_ka4_detail1": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neka djeca."
        },{
            "type": "eginaLine",
            "line": "Možda anđeli? Klasičan motiv baroka. Veza čovjeka s Bogom. Lete li?"
        },{
            "type": "playerLine",
            "line": "Ne."
        },{
            "type": "eginaLine",
            "line": "Onda su možda samo djeca."
        }
    ]},
    "chat_1_ka4_detail2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Gole grudi."
        },{
            "type": "eginaLine",
            "line": "Antička ljepota. Također simbol čednosti i nevinosti."
        },{
            "type": "playerLine",
            "line": "I ženstvenosti?"
        },{
            "type": "eginaLine",
            "line": "Naravno."
        }
    ]},
    "chat_1_ka4_detail3": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Janje."
        },{
            "type": "eginaLine",
            "line": "Janje Božje, često simbol Isusa Krista i kroz njega simbol pravednosti, dobrote i nesebičnosti."
        }
    ]},
    "chat_1_s5_detail1": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neki ljudi kleče."
        },{
            "type": "eginaLine",
            "line": "Riječ je o kršćanskim ratovima. To su porobljeni muslimani"
        }
    ]},
    "chat_1_s5_detail2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Čudno su obučeni za križarske ratove."
        },{
            "type": "eginaLine",
            "line": "Obučeni su po modi vremena kad je slika nastala. Klasičan problem slikarstva u vrijeme prije televizije."
        },{
            "type": "playerLine",
            "line": "Nisu imali televiziju, ha-ha! 😃"
        },{
            "type": "eginaLine",
            "line": "Ni internet."
        },{
            "type": "playerLine",
            "line": "😱"
        }
    ]},
    "chat_1_puzzles_start": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, sad moramo riješiti slike. 🖼️🖼️"
        },
        {
            "type": "eginaLine",
            "line": "U sobi su dva ulja na platnu iz 17. stoljeća s naslikanim motivima iz spjeva Oslobođeni Jeruzalem Torquata Tassa."
        },
        {
            "type": "eginaLine",
            "line": "Pazi! Svaka slika prvo je puzzle slagalica 🧩 koju moraš riješiti."
        },
        {
            "type": "eginaLine",
            "line": "Riješi obje slagalice, upoznaj se sa sadržajem slika pa nastavljamo."
        },
        {
            "type": "eginaLine",
            "line": "Možeš ih riješiti bilo kojim redoslijedom."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Majstori za puzzle! 🧩🧩",
                    "setProgress": ["p1_UNSOLVED","p2_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_1_puzzle_1_win": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!!! 🔥🔥"
        },
        {
            "type": "eginaLine",
            "line": "Rasturaš rotirajuće slagalice! 🎡"
        },
        {
            "type": "rollNext",
            "requisites": ["p1_SOLVED","p2_SOLVED"],
            "chat": "chat_1_ArmidaStart"
        }
    ]},
    "chat_1_puzzle_2_win": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!!! 💚"
        },
        {
            "type": "eginaLine",
            "line": "Samo se nemoj zaslijepiti uspjehom, iduće slagalice bi mogle biti teže."
        },
        {
            "type": "rollNext",
            "requisites": ["p1_SOLVED","p2_SOLVED"],
            "chat": "chat_1_ArmidaStart"
        }
    ]},




    "chat_2_start": {"steps": [
        {
            "type": "playerLine",
            "line": "U drugom salonu sam."
        },
        {
            "type": "eginaLine",
            "line": "Opiši što vidiš."
        },
        {
            "type": "playerLine",
            "line": "Puno portreta po zidovima. Sve dečki, nijedna cura."
        },
        {
            "type": "eginaLine",
            "line": "To su Nassisi. Plemićka obitelj koja je stoljećima vladala Zadrom."
        },
        {
            "type": "eginaLine",
            "line": "Bili su jedna od najbogatijih zadarskih obitelji još od 13-tog stoljeća.💰💰💰"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Koji je moj zadatak?",
                    "chat": "chat_2_start2"
                }
            ]
        }
    ]},
    "chat_2_start2": {"steps": [
        {
            "type": "eginaLine",
            "line": "Svaka slika je slagalica koju prvo treba riješiti. Riješi svih šest i dobro se upoznaj s njima. Nassisi su važan ključ za razumijevanje povijesti Zadra.",
            "delay": 2500
        },
        {
            "type": "playerLine",
            "line": "Svih 6?"
        },
        {
            "type": "eginaLine",
            "line": "Navali."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Bacam se na slaganje! 🧩🧩",
                    "setProgress": ["p3_UNSOLVED","p4_UNSOLVED","p5_UNSOLVED","p6_UNSOLVED","p7_UNSOLVED","p8_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_2_crni1": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Neorenesansni ormarić. Neorenesansa je najrašireniji historicistički stil uopće, vidjet ćeš je u arhitekturi i namještaju na svakom koraku."
        }
    ]},   
    "chat_2_crni2": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Neorenesansni ormarić, izrađen u Njemačkoj oko 1880."
        }
    ]},  
    "chat_2_zoilo1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!! Nikad nije lako složiti slagalicu bez označenih rubova."
        },
        {
            "type": "playerLine",
            "line": "Nikakav problem."
        },
        {
            "type": "eginaLine",
            "line": "Ok, koncentrirajmo se: riješena je slika Zoila Nassisa."
        },
        {
            "type": "eginaLine",
            "line": "To je ime u Zadru vrlo poznato. Tko je, važan Zadru, nosio to ime?"
        },
        {
            "type": "rollNext",
            "chat": "chat_2_zoilo1Q"
        }
    ]},
    "chat_2_zoilo1Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Mitološki osnivač grada",
                    "chat": "chat_2_zoilo1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Svetac zaštitnik grada",
                    "chat": "chat_2_zoilo1_win",
                    "func": "animationManager.animateWin",
                },{
                    "text": "General koji je obranio grad od Križara",
                    "chat": "chat_2_zoilo1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                }
            ]
        }
    ]},
    "chat_2_zoilo1_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 🥵🥵🔋",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_zoilo1Q"
        }
    ]},
    "chat_2_zoilo1_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "DA! 💚",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Zoilo je bio svećenik iz Akvileje koji je pokopao tijelo mučenika Krševana, također zaštitnika grada Zadra.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Zoilo je zaštitnik siromašnog stanovništva Zadra."
        },
        {
            "type": "playerLine",
            "line": "A Nassisi su bili bogati?"
        },
        {
            "type": "eginaLine",
            "line": "Najbogatiji. Imali su mnoge kuće u gradu, mlinove u Crnom i solane na Pagu, zemljišta na baš svim zadarskim otocima."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Lova do krova 🤑🤑🤑",
                    "chat": "chat_2_zoilo1_win2"
                }
            ]
        }
    ]},
    "chat_2_zoilo1_win2": {"steps": [
        {
            "type": "eginaLine",
            "line": "No, ima još zanimljivosti sa Zoilovom slikom. Ona je jedina iz kompleta na kojoj je nešto dopisivano.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Bogata i slavna obitelj Nassis do 19. stoljeća je izumrla, a posljednja članica obitelji poklonila je ove portrete gradu Zadru.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pitanje je: koje se godine to dogodilo?",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "chat": "chat_2_zoilo2Q"
        }
    
    ]},
    "chat_2_zoilo2Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Možda 1399.",
                    "chat": "chat_2_zoilo2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Recimo 1892.",
                    "chat": "chat_2_zoilo2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Vjerojatno 1842.",
                    "chat": "chat_2_zoilo2_win",
                    "func": "animationManager.animateWin",
                },{
                    "text": "Ajmo reći 1724.",
                    "chat": "chat_2_zoilo2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                }
            ]
        }
    ]},
    "chat_2_zoilo2_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Krivo 🥴🥴🥴",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_zoilo2Q"
        }
    ]},
    "chat_2_zoilo2_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Pa naravno, lijepo piše: MDCCCXLII = 1842.",
            "delay": 1500
        },
        {
            "type": "eginaLine",
            "line": "Složi i ostale članove obitelji Nassis.",
        },
        {
            "type": "playerLine",
            "line": "Idem."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        },
    ]},
    "chat_2_petar1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!! 😃😃😃"
        },
        {
            "type": "playerLine",
            "line": "Sitnica."
        },
        {
            "type": "eginaLine",
            "line": "Petrus De Nassis. Bio je rektor grada, ali za Nassise je važniji što je baš on jedan od tih koji su zgrnuli golemo bogatstvo obitelji."
        },
        {
            "type": "playerLine",
            "line": "Zato zahvaljuje Djevici?"
        },
        {
            "type": "eginaLine",
            "line": "Moguće. No, tvoje pitanje je: kojom trgovinom, karakterističnom za zadarski kraj, se Petar obogatio?"
        },
        {
            "type": "rollNext",
            "chat": "chat_2_petar1Q"
        }
    ]},
    "chat_2_petar1Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Sol",
                    "chat": "chat_2_petar1_win",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Maslina",
                    "chat": "chat_2_petar1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Kamen",
                    "chat": "chat_2_petar1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Drača",
                    "chat": "chat_2_petar1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]},
    "chat_2_petar1_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne, ne, ne, ne. Čuvaj bateriju, smanjuje se svakom pogreškom.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_petar1Q"
        }
    ]},
    "chat_2_petar1_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Točno! Nassisi su imali solane na Pagu i drugim otocima. Bili su veliki trgovci solju.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Damjan de Nassis, čija je slika također u ovom salonu, bio je kraljevski opunomoćenik za Kraljevsku komoru soli i tridesetine.",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Slani rektori.",
        },
        {
            "type": "eginaLine",
            "line": "Tako je. Nastavimo sa slagalicama.",
        },
        {
            "type": "playerLine",
            "line": "Idem."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        },
    ]},
    "chat_2_damjan1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Damjan riješen!! 😃😃😃"
        },
        {
            "type": "playerLine",
            "line": "Damjan-tamjan."
        },
        {
            "type": "eginaLine",
            "line": "Ne rugaj se, Damjan je jedan od najutjecajnijih Nassisa."
        },
        {
            "type": "eginaLine",
            "line": "Obrati pažnju na tekst."
        },
        {
            "type": "playerLine",
            "line": "Damianus De Nassis..."
        },
        {
            "type": "eginaLine",
            "line": "Damianus De Nassis Bis Rector Jadrae Comes Tragurii Orator Aa Regem Hung. Cu Plentipot Et Capit. Gnlis Domilor Pagi MCCCLXXXII"
        },
        {
            "type": "playerLine",
            "line": "Slabo divanim starozadarski. Nešto malo, a i to s greškom."
        },
        {
            "type": "eginaLine",
            "line": "Prevest ćemo zajedno! Haj'mo red po red:"
        },
        {
            "type": "eginaLine",
            "line": "DAMIANUS DE NASSIS BIS RECTOR JADRAE"
        },
        {
            "type": "rollNext",
            "chat": "chat_2_damjan1Q"
        }
    ]},
    "chat_2_damjan1Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Damjan Nassis, počasni rektor Jadre",
                    "chat": "chat_2_damjan1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Damjan Nassis, počasni rektor Zadra",
                    "chat": "chat_2_damjan1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Damjan Nassis, dvostruki rektor Zadra",
                    "chat": "chat_2_damjan1_win",
                    "func": "animationManager.animateWin",
                }
            ]
        }
    ]},
    "chat_2_damjan1_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ajoj, latinski nam zapinje. 😐",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_damjan1Q"
        }
    ]},
    "chat_2_damjan1_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Vidiš da znaš latinski! Damjan je dva puta bio gradski rektor.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Idemo dalje: COMES TRAGURII.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Comes je isto što i engleski count, dakle grof.",
        },
        {
            "type": "eginaLine",
            "line": "Ali grof čega? Što je Tragurii?",
        },
        {
            "type": "rollNext",
            "chat": "chat_2_damjan2Q"
        }
    ]},
    "chat_2_damjan2Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Tratica na Ugljanu",
                    "chat": "chat_2_damjan2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Trogir",
                    "chat": "chat_2_damjan2_win",
                    "func": "animationManager.animateWin",
                },{
                    "text": "Tragöß u Austriji",
                    "chat": "chat_2_damjan2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Tragaki u Grčkoj",
                    "chat": "chat_2_damjan2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }
    ]},
    "chat_2_damjan2_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Nije, možda je ipak riječ o poznatom gradu 🤕",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_damjan2Q"
        }
    ]},
    "chat_2_damjan2_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Odlično baratanje geografijom!!! 💚💚💚",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Što još tu zanimljivo piše? Orator Ad Regem Hung, kraljevski ambasador za Mađarsku, imao je Damian puno titula: kapetan...",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Aha, ovo je zanimljivo: DOMII OB PAGI. Što bi to moglo značiti?",
        },
        {
            "type": "rollNext",
            "chat": "chat_2_damjan3Q"
        }
    ]},
    "chat_2_damjan3Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Živi u Pagu",
                    "chat": "chat_2_damjan3_win",
                    "func": "animationManager.animateWin",
                    "drainBattery": 4
                },{
                    "text": "Kući na selu",
                    "chat": "chat_2_damjan3_lose",
                    "func": "animationManager.animateLose",
                }
            ]
        }
    ]},
    "chat_2_damjan3_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Nije, Pagi je Pag gdje su Nassisi imali solane. 🤕",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Nema veze. Gotovi smo s Damjanom. Idemo na iduću Nassis-slagalicu?",
            "delay": 1100 
        },
        {
            "type": "playerLine",
            "line": "Idemo."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        }
    ]},
    "chat_2_damjan3_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Wow!! 💚💚💚 Odličan latinski! Audentes fortuna iuvat!",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Veni, vidi, vici!",
        },
        {
            "type": "eginaLine",
            "line": "Altera aenigma. To znači: Gotovi smo s Damjanom, idemo na sljedeću slagalicu.",
        },
        {
            "type": "playerLine",
            "line": "Idem."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        }
    ]},
    "chat_2_matija1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Još jedan Nassis uspješno složen! 😃😃😃"
        },
        {
            "type": "eginaLine",
            "line": "A primijeti podstavu njegove odjeće. Na nekoliko slika ćeš primijetiti krasno crno-bijelo krzno. Pokazivali su bogatstvo na sve načine pa je i Matthaeus obučen u jedno od najskupljih krzna tog vremena, bijelo s crnim točkama.",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Čije je to krzno?"
        },
        {
            "type": "eginaLine",
            "line": "Baš to je moje pitanje. Pokazat ću ti fotke životinja pa ćeš odgovoriti. Spremni?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Spremni!",
                    "chat": "chat_2_matija1b",
                }
            ]
        }
    ]},
    "chat_2_matija1b": {"steps": [
        {
            "type": "eginaImage",
            "url": "chat/2-01.jpg", "w": 200, "h": 200
        },
        {
            "type": "eginaLine",
            "line": "Slatka mala činčilica 🐹"
        },
        {
            "type": "eginaImage",
            "url": "chat/2-02.jpg", "w": 200, "h": 200
        },
        {
            "type": "eginaLine",
            "line": "Hermelin, krvoločna lasica 🐭"
        },
        {
            "type": "eginaImage",
            "url": "chat/2-03.jpg", "w": 200, "h": 200
        },
        {
            "type": "eginaLine",
            "line": "Ili... beba 101 dalmatinac 🐶"
        },
        {
            "type": "eginaLine",
            "line": "Od čega su renesansne Zlice od Opaka radile bijele kapute s crnim točkama?"
        },
        {
            "type": "rollNext",
            "chat": "chat_2_matija1Q"
        }
    ]},
    "chat_2_matija1Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "🐭 Hermelin",
                    "chat": "chat_2_matija1_win",
                    "func": "animationManager.animateWin"
                },{
                    "text": "🐹 Činčila",
                    "chat": "chat_2_matija1_lose1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "🐶 Dalmatinac",
                    "chat": "chat_2_matija1_lose2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Hmm, nešto mi je sumnjivo. Može pomoć?",
                    "chat": "chat_2_matija1_help",
                    "drainBattery": 1
                }
            ]
        }
    ]},
    "chat_2_matija1_help": {"steps": [
        {
            "type": "eginaLine",
            "line": "Osjećaj te nije prevario, nešto je doista neuobičajeno s krznom.",
            "delay": 2000
        },{
            "type": "eginaLine",
            "line": "Naime, jedna od ovih životinja je ljeti crvena a zimi postaje bijela i samo im vrh repa uvijek ostaje crn.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj sad.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_matija1Q"
        }
    ]},
    "chat_2_matija1_lose1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Činčile dolaze u mnogim bojama krzna, ali nikad bijele s crnim točkama.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_matija1Q"
        }
    ]},
    "chat_2_matija1_lose2": {"steps": [
        {
            "type": "eginaLine",
            "line": "O joooj! Misliš da bi ogulili slatke male psiće? Ma nije to Disneyev film, iako Nassisi jesu bili Dalmatinci.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_matija1Q"
        }
    ]},
    "chat_2_matija1_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Daaaaa!!!!! Hermelini su ljeti crveni a zimi bijeli s crnim vrhom repa.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Osim što su ga gulili za odjeću, bio je i igračka damama popularnog društva. Sjeti se Da Vincijeve slike:",
            "delay": 2000
        },
        {
            "type": "eginaImage",
            "url": "chat/2-05.jpg", "w": 200, "h": 227
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Mona Lisa",
                    "chat": "chat_2_matija2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Posljednja večera",
                    "chat": "chat_2_matija2_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Dama s hermelinom",
                    "chat": "chat_2_matija2_win",
                    "func": "animationManager.animateWin"
                }
            ]
        }
    ]},
    "chat_2_matija2_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ma daaaj! 🙈🙈🙈🙈🙈",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "chat": "chat_2_matija2_win"
        }
    ]},
    "chat_2_matija2_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ima jedna legenda: lovci su ga dotjerali do prljave lokve a hermelin bi stao da ne uprlja svoju snježnobijelu bundu. Takva briga za čistoću nadahnjivala je ljude s poštovanjem. Zato su halje plemstva često bile podstavljene krznom hermelina kao simbolom čistoće.",
            "delay": 3000
        },
        {
            "type": "eginaLine",
            "line": "No, dosta je bilo životinja. Je li ostala još koja slagalica?",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Provjerit ću."
        },      
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        }
    ]},
    "chat_2_thibaldus1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Odlično složeno! B-R-A-V-O!"
        },
        {
            "type": "playerLine",
            "line": "Slažemo narodu."
        },
        {
            "type": "eginaLine",
            "line": "Primijeti da su svi Nassisi sa slika živjeli u 14. stoljeću. Nassisi su tad bili na vrhuncu moći, posjedovali ogromne količine zemlje po cijelom kraju, a onda su 1409. zapali u nemilost nove vlasti."
        },
        {
            "type": "playerLine",
            "line": "Nemilost?"
        },
        {
            "type": "eginaLine",
            "line": "Da. U anžuvinsko doba su bili moćni i politički pa su morali u izgnanstvo. Kasnije će se oporaviti i nova će ih država priznati. (Ipak su bili bogati zemljoposjednici.) No svakako im je vrhunac bio prije 1409."
        },
        {
            "type": "playerLine",
            "line": "A što je bilo 1409.?"
        },
        {
            "type": "eginaLine",
            "line": "Pa to ti moraš znati, to je ključna godina iz zadarske prošlosti. Što je bilo 1409.?"
        },
        {
            "type": "rollNext",
            "chat": "chat_2_thibaldus1Q"
        }
    ]},
    "chat_2_thibaldus1Q": {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Križari na putu do Jeruzalema usput osvajaju i razaraju Zadar.",
                    "chat": "chat_2_thibaldus1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Napoleon osvaja Veneciju.",
                    "chat": "chat_2_thibaldus1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Hrvatski kralj Ladislav prodaje Zadar Veneciji za 100 000 dukata.",
                    "chat": "chat_2_thibaldus1_win",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Kolumbo otkrio Ameriku.",
                    "chat": "chat_2_thibaldus1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Sklopljen Rapalski ugovor kojim se Zadar predaje Italiji",
                    "chat": "chat_2_thibaldus1_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }
    ]},
    "chat_2_thibaldus1_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne, ne, ne, ne. Štedi bateriju, smanjuje se svakom pogreškom.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "chat": "chat_2_thibaldus1Q"
        }
    ]},
    "chat_2_thibaldus1_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Tako je. Venecija preuzima Zadar na idućih 388 godina.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Zadru se slična stvar dogodila puno puta u povijesti, od Ladislava do Rapalski i Rimskih ugovora.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "No, vratimo se Nassisima.",
        },
        {
            "type": "playerLine",
            "line": "Vraćam se."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        },
    ]},
    "chat_2_gregorus1": {"steps": [
        {
            "type": "eginaLine",
            "line": "Odlično složeno!! 🌞"
        },
        {
            "type": "playerLine",
            "line": "Zgodan Nassis."
        },
        {
            "type": "eginaLine",
            "line": "Ove su slike nastale početkom 17. stoljeća kad je obitelj Nassis naručila portrete svojih već odavno mrtvih slavnih predaka. Tako da možda i ne prikazuju vjerno njihovu ljepotu."
        },
        {
            "type": "playerLine",
            "line": "A vjerojatno ni njihovu odjeću jer su naslikani po modi vremena nastanka slika."
        },
        {
            "type": "eginaLine",
            "line": "Dobro naučeno. Idamo dalje. Ima li još koja neriješena slagalica u ovoj sobi?"
        },
        {
            "type": "playerLine",
            "line": "Provjerit ću."
        },
        {
            "type": "rollNext",
            "requisites": ["p3_SOLVED","p4_SOLVED","p5_SOLVED","p6_SOLVED","p7_SOLVED","p8_SOLVED"],
            "chat": "chat_2_nassis_win"
        }
    ]},
    "chat_2_nassis_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Oh, zapravo je SVIH ŠEST NASSISA RIJEŠENO!",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "💚 💚 💚 💚 💚 💚",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Šest srca za šest složenih Nassisa! Bravo!!!",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Ok, ide nam sjajno. Imam završne zadatke za ovaj salon. Odlično smo riješili sve slike, međutim treba mi informacija o namještaju. Možeš li pronaći životinju koja je najčešće korišteni dekorativnog elementa romanike i neoromanike?",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Koja je to životinja?",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Ti to moraš otkriti. Pronađi mi lice životinje.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, krećem. 🔎",
                    "setProgress": ["lion1_hunt"],
                }
            ]
        }
    ]},
    "room_2_lion1": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Lav?",
            "delay": 2000
        },{
            "type": "eginaLine",
            "line": "To je lav! Bravo! 🦁🦁🦁🦁🦁",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Lav je ultra popularna životinja u romaničkim dekoracijama, heraldici i općenito. I Zadar je pun slika, crteža i reljefa lavova.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "A naravno, znaš koje su životinje na grbu Dalmacije?",
            "delay": 2000
        },
        {
            "type": "eginaImage",
            "url": "chat/2-06.png", "w": 200, "h": 251
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Pa lavovi",
                    "chat": "chat_2_lion_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Nisu li pantere?",
                    "chat": "chat_2_lion_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Možda leopardi?",
                    "chat": "chat_2_lion_win",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Gepardi!",
                    "chat": "chat_2_lion_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Na grbu Dalmacije bi morala biti neka riba!",
                    "chat": "chat_2_lion_lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }
    ]},
    "chat_2_lion_lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Neeeeeeee. Životinje na grbu zapravo sliče na lavove no ipak su leopardi! 🐆🐆🐆."
        },{
            "type": "eginaLine",
            "line": "Točnije: heraldički leopardi, posebna vrste životinje koja živi samo na grbovima."
        },
        {
            "type": "eginaLine",
            "line": "No, vratimo se lavovima. Pronađi u sobi još neki dekorativni ukras s motivom lava, osim lavljeg lica."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Lavovsko traženje. 🔎",
                    "setProgress": ["lion2_hunt"],
                }
            ]
        }
    ]},
    "chat_2_lion_win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Da, sliče na lavove no ipak su leopardi! 🐆🐆🐆",
        },{
            "type": "eginaLine",
            "line": "Točnije: heraldički leopardi, posebna vrste životinje koja živi samo na grbovima."
        },
        {
            "type": "eginaLine",
            "line": "No, vratimo se lavovima. Pronađi u sobi još neki dekorativni ukras na motiv lava, osim lavljeg lica.",
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, tražim dio lava osim lica. 🔎",
                    "setProgress": ["lion2_hunt"],
                }
            ]
        }
    ]},
    "room_2_lion2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Šapa!",
            "delay": 2000
        },{
            "type": "eginaLine",
            "line": "Eto lavlje noge kao dekorativnog elementa neoromanike. Bravo!",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Jesi li znao da su lavovi donedavno živjeli na ovom području?",
        },
        {
            "type": "playerLine",
            "line": "Donedavno?",
        },
        {
            "type": "eginaLine",
            "line": "Dobro, ne baš donedavno, ali još u doba starih Grka i prvih Rimljana lavovi su lutali Dalmacijom.",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "I što se onda dogodilo?",
        },
        {
            "type": "eginaLine",
            "line": "Pametniji je popustio. Nego, ono što je bitno: SALON 2 JE RIJEŠEN!! Svi zadaci su iza nas. Idemo u treći salon.",
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Salon broj 3️⃣, stižem!! ",
                    "setProgress": ["room2_SOLVED"]
                }
            ]
        }
    ]},






    "chat_3_start": {"steps": [
        {
            "type": "playerLine",
            "line": "U trećem salonu sam."
        },
        {
            "type": "eginaLine",
            "line": "Čestitam! Ipak, najteže tek slijedi."
        },
        {
            "type": "playerLine",
            "line": "Jedva čekam."
        },
        {
            "type": "eginaLine",
            "line": "Odlično. Sljedeći izazov: pronađi Njegovo carsko i kraljevsko apostolsko visočanstvo Božjom milošću cara Austrije, kralja Ugarske i Češke, Dalmacije, Hrvatske, Slavonije, Galicije, Lodomerije i Ilirije; kralja Jeruzalema, vojvodu Furlanije, Dubrovnika i Zadra."
        },
        {
            "type": "playerLine",
            "line": "Sve njih?"
        },
        {
            "type": "eginaLine",
            "line": "To je samo jedan čovjek. Jedan ali vrijedan."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Tražim 🔎",
                    "setProgress": ["franz_hunt"]
                }
            ]
        }
    ]},
    "chat_3_fg1": {"steps": [
        {
            "type": "playerLine",
            "line": "Našao sam ga!"
        },{
            "type": "eginaLine",
            "line": "💚 Franjo Josip I. car Austro-Ugarski, po milosti Božjoj, vladar naš 68 godina."
        },
        {
            "type": "playerLine",
            "line": "Zašto su ih dva? Bit će zbog dvojne monarhije!"
        },
        {
            "type": "eginaLine",
            "line": "To je dio zadatka. Moraš pronaći 9 razlika u ove dvije slike. Razliku klikni na lijevoj slici. Pazi, svaka pogreška košta baterije! 🔋🔋🔋"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Pronaći ću 9 razlika 🔎",
                    "setProgress": ["franz_UNSOLVED"],
                    "chat": "chat_3_fg1_help",
                }
            ]
        }
    ]},
    "chat_3_fg1_help": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, a ako zapneš traži pomoć! To će te koštati mrvicu baterije 🔋 ali isplatit će ti se. Trebaš pronaći svih 9 razlika!!"
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
                    "text": "Treba mi pomoć za 9%🔋🔋",
                    "chat": "chat_3_fg1_help3",
                    "drainBattery": 9
                }
            ]
        }
    ]},
    "chat_3_fg1_help3": {"steps": [
        {
            "type": "eginaLine",
            "line": "Baci oko na medalju, kravatu, krunu, orla, stolicu te prste nožne i ručne."
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
            "line": "9 veličanstvenih Franje Josipa! 👑👑👑👑👑👑👑👑👑"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "removeChoices": true,
                    "text": "Riješeno! 👑",
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
            "line": "Otkud car u Zadru?"
        },
        {
            "type": "eginaLine",
            "line": "Car je posjetio Zadar u travnju 1875. Bečke novine ovako pišu: 'Danas, 10. travnja, Njegovo Veličanstvo Car stigao je u Zadar, glavni grad pokrajine koja će igrati istaknutu i važnu ulogu u budućnosti Austrije'"
        },
        {
            "type": "playerLine",
            "line": "Dalmacija je bila važna pokrajina?"
        },
        {
            "type": "eginaLine",
            "line": "Stvar je tumačenja. Druge bečke novine pišu ovako: 'Ako Austrija ima bilo kakvo poslanje u Europi, tada je to jamačno promicanje uljuđenosti na istoku'"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Uljuđenosti! 😡",
                    "chat": "chat_3_fg22"
                },{
                    "text": "Mi smo njima istok? 😲",
                    "chat": "chat_3_fg22"
                }
            ]
        }
    ]},
"chat_3_fg22": {"steps": [
    {
        "type": "eginaLine",
        "line": "No, zato je car tu. Prošetao Kalelargom, odslušao misu, podružio se s Driolijima i Luxardima, obišao sve važne punktove i pohvalio Novu rivu koju su tek napravili od srušenih južnih zidina pa je nazvali po njemu."
    },
    {
        "type": "eginaLine",
        "line": "Slijedi zadatak. Izbaci uljeza:"
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
                    "text": "Riva Francesco Giuseppe I",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Riva Nuova",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Riva Vittorio Emanuele III",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Obala Maršala Tita",
                    "chat": "chat_3_fg2lose",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Obala kralja Petra Krešimira III",
                    "chat": "chat_3_fg2win",
                    "func": "animationManager.animateWin"
                }
            ]
        }
    ]},
    "chat_3_fg2lose": {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne!!! To su povijesni nazivi zadarske rive. No, jednom je krivi broj."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fg2q"
        }
    ]},
    "chat_3_fg2win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Naravno!!! 🌊🌊🌊 Nije Petar Krešimir Treći nego Četvrti!"
        },
        {
            "type": "eginaLine",
            "line": "Sve su to bila imena zadarske rive, često nazivana po aktualnom državnom poglavaru. Pa je tako Franjo Josip I hodao po rivi nazvanoj po sebi."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Je li tada naslikana ova slika?",
                    "chat": "chat_3_fg2win2"
                }
            ]
        }
    ]},
    "chat_3_fg2win2": {"steps": [
        {
            "type": "eginaLine",
            "line": "Slika je nastala dvadesetak godina kasnije. Kad je car pohodio Zagreb i upoznao najvećeg hrvatskog slikara koji ga je otišao slikati u Beč."
        },
        {
            "type": "eginaLine",
            "line": "Ovako je izgledala skica."
        },
        {
            "type": "eginaImage",
            "url": "chat/3-02.jpg", "w": 200, "h": 260
        },   
        {
            "type": "eginaLine",
            "line": "A to nam je i prilika za zadatak: o kojem je slikaru riječ?"
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
            "line": "Neee! To je Vlaho Bukovac, veliki hrvatski slikar."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fgVlaho"
        }
    ]},
    "chat_3_fg3win": {"steps": [
        {
            "type": "eginaLine",
            "line": "Tako je! 😃😃😃"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_fgVlaho"
        }
    ]},
    "chat_3_fgVlaho": {"steps": [
        {
            "type": "eginaLine",
            "line": "Vlaho Bukovac je u to doba umjetnik svjetskog glasa. Ipak, i on nešto duguje Zadru, ovdje je imao svoju prvu samostalnu izložbu 1884."
        },   
        {
            "type": "eginaLine",
            "line": "Mi ga znamo po Gundulićevom snu i zastoru HNK, svijet ga zna po divnim impresionističkim i simboličkim aktovima. Ovo je 'Une fleur':"
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
            "line": "Za rukav su ga vukli mnogi moćnici. Osim Franje Josipa, naslikao je silne velikaše, grofa Draškovića, kraljicu Srbije i kralja Jugoslavije."
        },        
        {
            "type": "eginaLine",
            "line": "To me podsjetilo, idemo dalje. Pronađi u sobi sliku koju popularno nazivaju 'Jugoslavija'."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "To će biti izazov 🔎",
                    "setProgress": ["yu_hunt"]
                }
            ]
        }
    ]},
    "chat_3_yu0": {"steps": [
        {
            "type": "playerLine",
            "line": "Sloga."
        },
        {
            "type": "eginaLine",
            "line": "Pravo joj je ime 'Sloga južnoslavenskih vladara'"
        },
        {
            "type": "playerLine",
            "line": "A zato onda piše samo 'Sloga'?"
        },
        {
            "type": "eginaLine",
            "line": "🤫"
        }
    ]},
    "chat_3_yu1": {"steps": [
        {
            "type": "playerLine",
            "line": "Hmm. Čini mi se da bi ovo mogla biti Jugoslavija, ali pojma nemam zašto."
        },
        {
            "type": "eginaLine",
            "line": "Naslikana je u doba snažnog simbolizma, zato je slika vrlo metaforična, nimalo doslovna. Pravo joj je ime 'Sloga južnoslavenskih vladara'"
        },
        {
            "type": "playerLine",
            "line": "A gdje je tu Jugoslavija?"
        },
        {
            "type": "eginaLine",
            "line": "Idemo je složiti pa će puno toga biti jasnije. Pripremi se, ovo je najteža slagalica dosad. 🧩 Traži se strpljenje i upornost."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Strpljenje i Upornost moja su druga imena! 🧩",
                    "setProgress" : ["p9_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_yu2": {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Složena!"
        },
        {
            "type": "eginaLine",
            "line": "Impresivno! 👼"
        },
        {
            "type": "eginaLine",
            "line": "Remek djelo Francesca Salghetti-Drolija 'Sloga južnoslavenskih vladara' iz 1870. Zovu je još i 'Zakletva tri južnoslavenska vladara' i 'Jugoslavija', u Muzeju je atributirana kao 'Sloga'."
        },
        {
            "type": "eginaLine",
            "line": "Sliku je naručio biskup Strossmayer, veliki mecena i reformator, ali i veliki pobornik južnoslavenske ideje, zato je i naručio sliku te tematike."
        },
        {
            "type": "playerLine",
            "line": "Prajugoslaveni?"
        },
        {
            "type": "eginaLine",
            "line": "Strossmayer je kroatizirani Nijemac, a Drioli Talijan, pa ti vidi. Kako ti se sviđa slika?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Tri stare bradonje lete prema mladoj curi. 😒",
                    "chat" : "chat_3_yu222",
                    "setProgress" : "yu_details"
                }
            ]
        }
    ]},
    "chat_3_yu222": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "To su hrvatski kralj Krešimir, srpski car Dušan i bugarski car Simeon. Razmišljaj simbolički, slika je puna simbola i motiva, nije doslovna."
        },
        {
            "type": "eginaLine",
            "line": "Ok, očito moramo riješiti neke zadatke. Moraš prepoznati motive s kompozicije i kliknuti ih na slici."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Sloga❔ Klikni je."
        }
    ]},
    "chat_3_yu_q1": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Točno. Sloga je mlada djevojka koja kraljeve vodi do trona."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Jugoslavija❔"
        }
    ]},
    "chat_3_yu_q2": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo! Jugoslavija sjedi na tronu."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Dunav❔"
        }
    ]},
    "chat_3_yu_q3": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Da. Dunav spaja Hrvatsku, Srbiju i Bugarsku. Personifikacija Dunava sjedi uz vodu."
        },
        {
            "type": "eginaLine",
            "line": "Gdje su na slici Sebičnost i Pakost❔"
        }
    ]},
    "chat_3_yu_q4": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Da. Kraljevi gaze preko Sebičnosti i Pakosti da bi stigli do Sloge."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici simbol Hrvatske❔"
        }
    ]},
    "chat_3_yu_q5": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Da. Hrvatski grb je na štitu, zajedno s grbovima Srbije i Bugarske."
        },
        {
            "type": "eginaLine",
            "line": "⭐⭐⭐⭐⭐"
        },
        {
            "type": "eginaLine",
            "line": "Bravo!!! Jugoslavija je riješena! No, u sobi je još jedno Driolijevo djelo, zove se Mojsije pred faraonom. Pronađi ga."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "clearProgress": true,
                    "text": "To neće biti problem 🔎",
                    "setProgress": ["moses_hunt"]
                }
            ]
        }
    ]},
    "chat_3_yu_q_fail": {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ne"
        }
    ]},
    "chat_3_m1":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Evo ga! Mali Mojsije."
        },
        {
            "type": "eginaLine",
            "line": "Dijete Mojsije pred faraonom gazi skiptar i kapu, simbole njegove moći."
        },
        {
            "type": "playerLine",
            "line": "Biblijski."
        },{
            "type": "eginaLine",
            "line": "Zapravo nije, događaj je zapisao Josipa Flavije, povjesničar iz prvog stoljeća, ne postoji takva scena u Bibliji. Složi slagalicu pa nastavljamo. 🧩"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "clearProgress": true,
                    "text": "Zaželio sam se dobrog slaganja 🧩",
                    "setProgress": ["p10_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_m2":{"steps": [
        {
            "type": "playerLine",
            "line": "Složenac!"
        },
        {
            "type": "eginaLine",
            "line": "Odlično slaganje!"
        },
        {
            "type": "eginaLine",
            "line": "Prepoznaješ li autora?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Naravno, isti onaj anonimni autor koji je naslikao Nassise.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Očito umjetnik koji je slikao Armidu i Erminiju.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Salghetti-Drioli koji je naslikao Jugoslaviju.",
                    "chat": "chat_3_m3",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Svakako Vlaho Bukovac koji slika careve.",
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
            "line": "Očito."
        },
        {
            "type": "eginaLine",
            "line": "Vjerojatno najveći zadarski slikar. No i više od toga, Francesco je i baštinik i upravitelj možda i najveće zadarske tvornice likera."
        },
        {
            "type": "eginaLine",
            "line": "Maraskino se radi od višnje maraške koja uspijeva samo u srednjoj Dalmaciji. Slikarev djed je proizvodnjom likera stvorio obiteljsko bogatstvo, što je mladom Francescu omogućilo školovanje diljem Italije, pa kad je došlo doba da preuzme tvornicu, nije bilo presretan. Više je volio slikanje."
        },
        {
            "type": "eginaLine",
            "line": "A nas zanima: Kako se zvala tvornica likera 🍒 koju je slikar vodio?"
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
            "line": "Proizvodnja maraskina jedna je od najsvjetlijih točaka zadarske povijesti. Pili su ga svugdje, od engleskog dvora do Titanica."
        },
        {
            "type": "eginaLine",
            "line": "No, dosta slikara i likera. Pokraj Mojsijeve slike bi trebalo stajati Verdijevo poprsje. Prouči ga."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Krećem 🔎",
                    "setProgress": ["verdi_hunt"]
                }
            ]
        }
    ]},
    "chat_3_v1":{"steps": [
        {
            "type": "playerLine",
            "line": "Tu je."
        },
        {
            "type": "eginaLine",
            "line": "Giuseppe Verdi, možda i najveći talijanski kompozitor. Poprsje je izradio Bruno Bersa, zadarski kipar iz obitelji Bersa koja je ostavila veliki trag u zadarskoj kulturi."
        }, {
            "type": "eginaLine",
            "line": "Možeš li navesti bar jedno Verdijevo djelo?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Nabucco",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Seviljski brijač",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Travijata ",
                    "chat": "chat_3_v2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Figarov pir",
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
            "line": "Sigurno poznaješ ariju iz Rigoletta: La donna è mobile"
        },
        {
            "type": "eginaLine",
            "line": "La donna è mobile qual piuma al vento / Muta d'accento e di pensiero / Sempre un a mabile leggiadro viso / In pianto o in riso è mensognero."
        },
        {
            "type": "eginaLine",
            "line": "Žena je varljiva poput pera na vjetru / Mijenja svoje riječi i svoje misli / Uvijek dopadljivo i lijepo lice / U plaču ili smijehu lažno je."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Jel mu neka žena razbila nos?",
                    "chat": "chat_3_v3"
                }
            ]
        }
    ]},
    "chat_3_v3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Nos mu je stradao od savezničkih bombi."
        },
        {
            "type": "eginaLine",
            "line": "Zadar je grad koji je u Drugom svjetskom ratu razoren do temelja, 80% objekata bilo je uništeno a svi oštećeni. Teško je oštećena bila i zgrada Teatra Verdi u kojem je stajala ova bista. To je jedan od najtragičnijih događaja koji su se dogodili ovom gradu, a lista nije kratka."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Strašno. 😢",
                    "chat": "chat_3_v4"
                }
            ]
        }
    ]},
    "chat_3_verdkaz":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Oštećen mu je nos."
        },{
            "type": "eginaLine",
            "line": "Verdijevo poprsje stajalo je u Teatru Verdi napravljenom 1865. Srušenom u bombardiranju 1943. pa prepuštenom devastaciji i propasti. Zadnji su ostaci kazališta porušeni tek 1974."
        },

    ]},
    "chat_3_v4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Mnoge umjetnine iz ovog postava pronađene su u zadarskim ruševinama, a velik broj je spašen iz okolnih sela gdje su za vrijeme rata našle utočište. Ugljanski poliptih, jedno je od najvrjednijih djela cjelokupne hrvatske slikarske baštine, služio je kao kokošinjac."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Divno.",
                    "chat": "chat_3_v5"
                }
            ]
        }
    ]},
   "chat_3_v5":{"steps": [
        {
            "type": "eginaLine",
            "line": "Idemo dalje. Pored Verdija bi trebao biti portret nadbiskupa Petra Dujma Maupasa. Složi ga."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Slažem se 🧩",
                    "setProgress": ["p11_UNSOLVED"]
                }
            ]
        }
    ]},
    "chat_3_dujm":{"steps": [
        {
            "type": "playerLine",
            "line": "SLO-ŽE-NO"
        },{
            "type": "eginaLine",
            "line": "Bravo!!! Sve smo bliže cilju! Pronađi u ovom salonu ogledalo."
        },
        {
            "type": "playerLine",
            "line": "Čekaj! A nećeš me pitati dodatna pitanja o ovom liku?"
        },
        {
            "type": "eginaLine",
            "line": "Nemam nikakva pitanja. Ali eto, za promjenu, možeš ti mene nešto pitati. Imaš pravo na jedno pitanje."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Samo jedno? Mogu li dobiti DVA pitanja?",
                    "chat": "chat_3_dujm0",
                },{
                    "text": "Tko je lik na slici?",
                    "chat": "chat_3_dujm1",
                },{
                    "text": "Što mi ovdje zapravo radimo?",
                    "chat": "chat_3_dujm2",
                },{
                    "text": "Tko si ti?",
                    "chat": "chat_3_dujm3",
                },{
                    "text": "Mogu li umjesto pitanja dobiti 10% baterije?",
                    "chat": "chat_3_dujm4",
                    "drainBattery": -10
                }
            ]
        }
    ]},
    "chat_3_dujm0":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ne možeš!"
        },
        {
            "type": "eginaLine",
            "line": "Potrošeno je tvoje jedno pitanje. 😏"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Zadarski nadbiskup od 1862. do 1891."
        },
        {
            "type": "playerLine",
            "line": "Po čemu je poznat?"
        },
        {
            "type": "eginaLine",
            "line": "Napisao je knjigu Storia della Dalmazia o povijesti Dalmacije. Dopisivao se sa suvremenicima, bio utjecajan čovjek svoga vremena. Naslikao ga je Antonio Zuccaro, talijanski slikar poznat po radovima na dekoriranju dalmatinskih kazališta."
        },
        {
            "type": "playerLine",
            "line": "Dobro, no realno, po kojem je kriteriju izložen u Narodnom muzeju? Zbog njegove važnosti ili zato što postoji sačuvana slika?"
        },
        {
            "type": "eginaLine",
            "line": "Točno. 😶"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Uživamo. Istražujemo Narodni muzej Zadar i kroz niz zadataka pokušavamo razotkriti njegovu veliku tajnu."
        },
        {
            "type": "playerLine",
            "line": "A koja je tajna?"
        },
        {
            "type": "eginaLine",
            "line": "To je pravo pitanje!"
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ja sam e-Genija. Moj je zadatak provesti te kroz ovu operaciju."
        },
        {
            "type": "eginaLine",
            "line": "Očito to nije moje pravo ime, no slično je."
        },
        {
            "type": "playerLine",
            "line": "A koje ti je pravo ime?"
        },
        {
            "type": "eginaLine",
            "line": "Samo ću priznati da završava s 'genija'."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Riješeno."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_dujm_next"
        }
    ]},
    "chat_3_dujm_next":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, lijepo smo se napričali, a sad u ovom salonu pronađi ogledalo."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ogledam se, moja vilo.",
                    "setProgress": ["mirror_hunt"]
                }
            ]
        }
    ]},
    "chat_3_mirr":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Evo ogledalo."
        },
        {
            "type": "eginaLine",
            "line": "Sjajno. Ovdje imamo zanimljiv eksponat. Riječ je o obiteljskom poklonu, prvobitno je u okviru bila slika, no slika je nestala pa je u okviru sad ogledalo."
        },
        {
            "type": "eginaLine",
            "line": "Pažljivo pogledaj izložak pa zaključi kome je, od naših prijatelja, taj okvir bio poklon?"
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
            "line": "Ne! Bolje prouči okvir ogledala, u njemu je trag. Nemoj da nas ovo košta previše baterije! 🔋"
        },
        {
            "type": "eginaLine",
            "line": "Pokušaj ponovo."
        },
        {
            "type": "rollNext",
            "chat": "chat_3_mirrQ"
        }
    ]},
    "chat_3mirryes":{"steps": [
        {
            "type": "eginaLine",
            "line": "Tako je! Na zaglavlju se mogu vidjeti izdjeljani slikarski kist i paleta. A on navedenih prijatelja samo je Drioli slikar."
        },
        {
            "type": "eginaLine",
            "line": "To je poklon od obitelji. Kad je Franjo kao mlad naslijedio tvornicu, majka je preuzela poslovanje dok ne odraste. Međutim, dok je on odrastao, postao je priznat slikar, jedan od prvih profesionalaca, a opet... tvornica je čekala."
        },
        {
            "type": "playerLine",
            "line": "Vječna dilema: novac ili umjetnost."
        },
        {
            "type": "eginaLine",
            "line": "Bez obzira na Driolija, ono što je važno je da smo završili salon broj tri! 🎉🎊🥳🎉🎊🥳🎉🎊🥳"
        },
        {
            "type": "eginaLine",
            "line": "Možeš nastaviti u četvrti salon, ili... postoji još zanimljivog namještaja u ovom salonu koji nismo proučili. Nije obavezno, no pronađeš li ga možeš skupiti i kakvu nagradu."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Četvorka For The Win!!!",
                    "setProgress": ["room3_solved","hunt_desnica"]
                }
            ]
        }
    ]},
    "chat_3_m2xx":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Slika pripada Modernoj galeriji, ali je izložena u Zadru, Driolijevu gradu."
        }
    ]},
    "chat_3_freska":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Riječ je o rekonstrukciji freske koja je bila na ovom mjestu."
        },
        {
            "type": "eginaLine",
            "line": "Dok je ovo bilo mjesto stolovanja kneza prostor je bio drukčije uređen."
        },
        {
            "type": "playerLine",
            "line": "Šarenije?"
        },
        {
            "type": "eginaLine",
            "line": "Šarenije i bogatije."
        },
        {
            "type": "playerLine",
            "line": "A tko je lik na fresci. Izgleda poput Rimljanina."
        },
        {
            "type": "eginaLine",
            "line": "Nemam informaciju."
        }
    ]},
    "chat_3_desn":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "O sjajno! Pronašli smo namještaj iz Kule Jankovića, posjeda plemićke obitelji Desnica-Janković."
        },
        {
            "type": "eginaLine",
            "line": "Tu su kanape, stolice i stol iz salona kuće Vladana Desnice."
        },{
            "type": "eginaLine",
            "line": "Vladan Desnica jedan je od najvećih hrvatskih pisaca, njegova Proljeća Ivana Galeba generalno su smatrana jednim od najvažnijih romana."
        },
        {
            "type": "playerLine",
            "line": "Znam, u lektiri je."
        },
        {
            "type": "eginaLine",
            "line": "A nama je to prilika za bonus pitanje. Ako točno odgovoriš napunit će ti se baterija."
        },
        {
            "type": "playerLine",
            "line": "Može!"
        },
        {
            "type": "eginaLine",
            "line": "Kako se zove roman Vladana Desnice koji tematizira izgnanstvo Zadrana iz grada za trajanja savezničkih bombardiranja koja su počela u studenom 1943. kad je potpuno razoreno 80% svih gradskih objekata?"
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
                    "text": "Planine",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Zimsko ljetovanje",
                    "chat": "chat_3_desn2",
                    "func": "animationManager.animateWin",
                    "drainBattery": -10,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Okvir za mržnju",
                    "chat": "chat_3_desn1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "removeProgress":"hunt_desnica"
                },{
                    "text": "Tko kaže da grada ovog nesta ispod neba?",
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
            "line": "Ne, 😑 riječ je o romanu Zimsko ljetovanje. Šteta."
        }
    ]},
    "chat_3_desn2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo! Sjajan Desničin roman i 10% baterije za tebe 🔋"
        }
    ]},



    "chat_4_start": {"steps": [
        {
            "type": "playerLine",
            "line": "Ušao sam u četvrti salon. 4️⃣"
        },
        {
            "type": "eginaLine",
            "line": "Sjajno ti ide! Ipak, baterija je na [battery]%! Tu ti mogu pomoći: pronađi i klikni palmu za punjenje baterije.🔋"
        },
        {
            "type": "playerLine",
            "line": "Gdje je palma?"
        },
        {
            "type": "eginaLine",
            "line": "Moraš je pronaći. 🌴"
        },
        {
            "type": "playerLine",
            "line": "Ok. A što je idući zadatak?"
        },
        {
            "type": "eginaLine",
            "line": "Četvrti salon je pun uzbudljivih tajni. Kreni u nekom smjeru i sam ćeš pronaći zadatke."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Krećem! 🔎",
                    "removeChoices":true,
                    "setProgress":["palm","p12_chat","p13_chat","p14_chat","p15_chat","mini_chat","bonus_question"]
                }
            ]
        }
    ]},
    "chat_4_lux_unsolved":{"steps": [
        {
            "type": "playerLine",
            "line": "Tko je ovo?"
        },
        {
            "type": "eginaLine",
            "line": "To je Girolamo Luxardo osnivač najveće zadarske destilerije. Zadar je u 19. stoljeću bio svjetski poznat po proizvodnji alkoholnih likera, posebno maraskina."
        },
        {
            "type": "eginaLine",
            "line": "Luxardo je kao konzul Kraljevstva Sardinije u Zadar došao 1821. gdje ga je supruga Maria nagovorila da počne industrijsku proizvodnju rosola marschina koji se u dalmatinskim samostanima proizvodio još od srednjeg vijeka."
        },
        {
            "type": "eginaLine",
            "line": "Dugo godina je zgrada Luxardo na ulazu u gradsku luku pozdravljala sve brodove i hidroavione koji su tu slijetali."
        },
        {
            "type": "eginaLine",
            "line": "Nakon Drugog svjetskog rata nova vlast nacionalizirala je sve zadarske destilerije i napravila novu tvrtku koja postoji i radi i danas. Pitanje je kako se zove?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Maraška",
                    "chat": "chat_4_lux2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Maraska",
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
            "line": "No, pravo je pitanje, koje je to voće toliko proslavilo i Zadar i Luxarda?"
        },
        {
            "type": "eginaLine",
            "line": "Ponudim ti nekoliko slika pa izaberi."
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
                    "text": "Prvo voće",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Drugo voće",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Treće voće",
                    "chat": "chat_4_lux3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }]},
    "chat_4_lux3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Maraskino se dobiva iz esencije zrelih plodova dalmatinske višnje maraške i lišća njezinih mladih grančica."
        },{
            "type": "eginaLine",
            "line": "Autohtone biljke u srednjoj Dalmaciji, a posebno u zadarskom području. Zadarska povijest i ovo voće su neraskidivi."
        },
        {
            "type": "eginaLine",
            "line": "No, dosta priče. Riješi Luxardovu sliku da možemo dalje."
        },{
            "type": "eginaLine",
            "line": "Budi strpljiv kao što je bio Luxardo kad je otvarao destileriju u gradu u kojem je već poslovalo preko dvadeset destilerija na čelu s destilerijom Drioli."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Na zapovijed. ",
                    "setProgress": ["p12_UNSOLVED"],
                    "removeProgress": "p12_chat"
                }
            ]
        }]},
    "chat_4_lux_solved":{"steps": [
        {
            "type": "playerLine",
            "line": "Složen Mr Maraskino!"
        },
        {
            "type": "eginaLine",
            "line": "Bravo! 🍒🍒🍒 Nastavi dalje u istraživanje četvrtog salona."
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
            "line": "Ovdje je jedna zanimljiva slika."
        },
        {
            "type": "eginaLine",
            "line": "Angelika Salghetti-Drioli, rođena Isola."
        },
        {
            "type": "eginaLine",
            "line": "Prvo je složi da bi se mogli baviti njome. Ovo slaganje neće biti lako, neki su dijelovi gotovo identični, ali potrudi se."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Dat ću sve od sebe. 🧩",
                    "setProgress": ["p13_UNSOLVED"],
                    "removeProgress": "p13_chat"
                }
            ]
        }]},
    "chat_4_drioli_win":{"steps": [
        {
            "type": "playerLine",
            "line": "Gotovo! 🥳"
        },{
            "type": "eginaLine",
            "line": "BRAVO!!! 😵😵😵 Ovo nije bilo lagano."
        },{
            "type": "eginaLine",
            "line": "Nastavimo: S Nassisima smo se dobro snašli s tekstovima na slikama pa nam neće biti problem prevesti ovaj natpis. Važno nam je razumjeti natpis da bi razumjeli sliku."
        },{
            "type": "eginaLine",
            "line": "Prvo, koji je to jezik?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Talijanski",
                    "chat": "chat_4_drioli2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Latinski",
                    "chat": "chat_4_drioli1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Starozadarski",
                    "chat": "chat_4_drioli1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_4_drioli1":{"steps": [
        {
            "type": "eginaLine",
            "line": "A neeeee! 🙄 To je talijanski. U 19. stoljeću većina gospode i građana govorili su talijanski."
        },{
            "type": "rollNext",
            "chat": "chat_4_drioli3"
        }]},
    "chat_4_drioli2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Naravno. To je talijanski. U 19. stoljeću većina gospode i građana govorili su talijanski."
        },{
            "type": "rollNext",
            "chat": "chat_4_drioli3"
        }]},
    "chat_4_drioli3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bacamo se na prijevod:"
        },{
            "type": "eginaLine",
            "line": "OH, PIÙ CHE AI PRIMI TEMPI, AMATO MIO," 
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Više nego na početku, voljena moja,",
                    "chat": "chat_4_drioli4",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Na početku vremena, prijatelju moj,",
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
                    "text": "Budi majka našoj djeci, voli mene u njima.",
                    "chat": "chat_4_drioli5",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Ti si majka našoj djeci, voli Boga u njima.",
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
                    "text": "Molim se da imaš blago na nebu,",
                    "chat": "chat_4_drioli6",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Molim te da budeš moje blago,",
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
                    "text": "Svaka sumnja neka me približi Bogu.",
                    "chat": "chat_4_drioli7",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Svaki uzdah neka se uzdigne Bogu kroz mene.",
                    "chat": "chat_4_drioli7",
                    "func": "animationManager.animateWin"
                }
            ]
        }]},
    "chat_4_drioli7":{"steps": [
        {
            "type": "playerLine",
            "line": "Više nego na početku, voljena moja, budi majka našoj djeci, voli mene u njima." 
        }, {
            "type": "eginaLine",
            "line": "Naslikao ju je suprug 12 godina nakon njene smrti. Umrla je pri porodu 1853. 😢"
        },{
            "type": "eginaLine",
            "line": "To nije jedino djelo kojim ju je ovjekovječio. Suprugu je naslikao i u kapitalnom djelu Apoteoza umrle supruge, koja se danas nalazi u koru crkve Sv. Frane. Angelika leži na odru, Franjo i djeca joj pod nogama, a na oblaku je čeka Gospa."
        },{
            "type": "playerLine",
            "line": "To je moć umjetnosti, nije li? Ovjekovječiti - učiniti vječnim..." 
        },{
            "type": "eginaLine",
            "line": "😢 Nastavimo. Ima li još zadataka u ovom salonu?"
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
            "line": "Što mi ove stolice govore o meni?"
        },{
            "type": "eginaLine",
            "line": "Povijest umjetnosti objašnjava svijet i nas u njemu."
        },{
            "type": "eginaLine",
            "line": "U ovom salonu je bidermajer namještaj. Bidermajer je stil priznatog obrtničkog staleža. Nekadašnju raskoš zamijenili su jednostavni oblici i udobnost."
        },{
            "type": "eginaLine",
            "line": "Imam ideju: postavim ti pitanje o bidermajeru i ako pogodiš dobiješ 5% baterije. Ako pogriješiš gubiš 5%."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Pristajem.",
                    "chat": "chat_4_chair1",
                    "removeProgress":"bonus_question"
                },{
                    "text": "Ne želim se tako igrati.",
                    "chat": "chat_4_chair2",
                    "removeProgress":"bonus_question"
                }
            ]
        }
    ]},
    "chat_4_chair1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Cijenim hrabrost! Evo, za hrabrost mijenjam pravila: ako pogodiš odgovor na pitanje o bidermajeru dobit ćeš 10% baterije."
        },{
            "type": "eginaLine",
            "line": "A pitanje je: po kome ili čemu je bidermajer dobio ime?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Po Fredericku Biedermeieru, pruskom oficiru koji je sam goloruk osvojio dotad neosvojivu švedsku utvrdu.",
                    "chat": "chat_4_chair2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5
                },{
                    "text": "Po Gottliebu Biedermeieru, fiktivnom seoskom učitelju koji piše dosadne pjesme.",
                    "chat": "chat_4_chair3",
                    "func": "animationManager.animateWin",
                    "drainBattery": -10
                },{
                    "text": "To je prijevod fraze 'neavanturistički svibanj' koji su dokoni Nijemci koristili za proljetni umor.",
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
            "line": "Šteta. ☹️"
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
            "line": "Borelli, grofovi Vranski, još jedna slavna zadarska obitelj."
        },{
            "type": "eginaLine",
            "line": "Po oslobođenju Vrane 1699. dobili su na upravljanje vranski feud, u koji spadaju Vrana, Biograd, Sveti Filip i Jakov, Radošević, Banjevci, Pakoštane, Betina i Murter."
        },{
            "type": "playerLine",
            "line": "Umalo pola Dalmacije."
        },{
            "type": "eginaLine",
            "line": "Istina. No, od koga se to Vrana oslobodila 1699.?"
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
                    "text": "Mlečana",
                    "chat": "chat_4_bor_mN",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Turaka",
                    "chat": "chat_4_bor_mY",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Bugara",
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
            "line": "Neeee."
        },{
            "type": "eginaLine",
            "line": "Pokušaj ponovo."
        },{
            "type": "rollNext",
            "chat": "chat_4_bor_Q1"
        }
    ]},   
    "chat_4_bor_mY":{"steps": [
        {
            "type": "eginaLine",
            "line": "Naravno! 300 godina su Turci prijetili Zadru, ali ga nisu osvojili."
        },{
            "type": "eginaLine",
            "line": "Da ne bude baš toliko lagano pitanje, 😁 o kojem je ratu riječ u kojem je Osmansko Carstvo dobilo Kretu, dok je Mletačka Republika dobila Dalmaciju."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Morejski rat",
                    "chat": "chat_4_bor_mN2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Kandijski rat",
                    "chat": "chat_4_bor_mY2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Vranski rat",
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
            "line": "Neeee. 😟 Kandija je Kreta. To je Kandijski rat."
        },{
            "type": "eginaLine",
            "line": "Nema veze, idemo dalje. Složi Franu Borellija."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Slažem 🧩",
                    "setProgress": ["p15_UNSOLVED"],
                    "removeProgress": "p15_chat"
                }
            ]
        }
    ]},  
    "chat_4_bor_mY2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Tako je, Kandija je Kreta."
        },{
            "type": "eginaLine",
            "line": "Frano Borelli ima začuđujuću životnu priču. Njegov otac Andrija je bio jedan od najistaknutijih pristaša francuske revolucije u Dalmaciji, načelnik Zadra za francuske uprave i upravitelj masonske lože pa kad je Zadar dopao pod Austriju, obitelj je zapala u nemilost, a otac se ubio."
        },{
            "type": "eginaLine",
            "line": "Austrija je nacionalizirala Vranski feud a mladi Frano, kojem je tad bilo 6 godina, zakleo se da će vratiti očevinu. Završio je pravo pa se 30 godina tužio s Kraljevinom dok mu nisu vratili Vranu."
        },
        {
            "type": "eginaLine",
            "line": "Tu se izmijenilo puno vlasti."
        },
        {
            "type": "eginaLine",
            "line": "I često su najbolje prolazili oni koji su znali brzo mijenjati stranu. No, politiku na stranu, vratimo se umjetnosti. Složi Franu Borellija."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Slažem 🧩",
                    "setProgress": ["p15_UNSOLVED"],
                    "removeProgress": "p15_chat"
                }
            ]
        }
    ]}, 
    "chat_4_bor_m_solved":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Složen!"
        },{
            "type": "eginaLine",
            "line": "Bravo! 🧩🧩🧩 Nastavi dalje u istraživanje četvrtog salona."
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
            "line": "Antonija Borelli, r. Cattani-Jorgeti."
        },{
            "type": "eginaLine",
            "line": "Obje slike je naslikao zadarski slikar Ivan Skvarčina, Driolijev učenik. I njegova je priča tužna."
        },{
            "type": "eginaLine",
            "line": "Skvarčina je ostatak života posvetio svom kapitalnom djelu Odricanje Galilejevo pa je fokusiran na tu sliku umro u krajnjoj bijedi."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Na kraju su se odrekli njega.",
                    "chat": "chat_4_bor_f1"
                }
            ]
        }
    ]},    
    "chat_4_bor_f1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Gospođa Borelli dolazi iz obitelji znanstvenika i umjetnika pa su i njena djeca (čak 12) mahom bili umjetnici. Borelli su dali i kipara, i pjesnikinja, i keramičarki, a najviše slikara, točnije: slikarica. Zadarsko žensko slikarstvo u vrijeme druge Austrijske uprave pomalo je fenomen, a upravo je i Antonija Borelli zaslužna za to."
        },{
            "type": "playerLine",
            "line": "Ima li koje poznato ime?"
        },{
            "type": "eginaLine",
            "line": "Zoe Borelli Vranski Alačević najpoznatija je zadarska slikarica. Izlagala je po cijeloj Europi, poznata po svojim portretima i karikaturama."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Nikad čuo.",
                    "chat": "chat_4_bor_f1x"
                },{
                    "text": "Kako to da nije poznatija?",
                    "chat": "chat_4_bor_f1x"
                }
            ]
        }
    ]},
    "chat_4_bor_f1x":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bila je jedna od rijetkih slikarica uvrštenih u hrvatsku Enciklopediju likovnih umjetnosti. Jedan kritičar, Fran Kobal, toliko ju je nahvalio da je napisao kako u njenim radovima 'nema ništa ženskog'."
        },{
            "type": "playerLine",
            "line": "Rodni stereotipi devetnaestog stoljeća?"
        },{
            "type": "eginaLine",
            "line": "I ne samo devetnaestog."
        },{
            "type": "eginaLine",
            "line": "No, dosta priče. Složi groficu Borelli."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Slažem 🧩",
                    "setProgress": ["p14_UNSOLVED"],
                    "removeProgress": "p14_chat"
                }
            ]
        }
    ]},
    "chat_4_bor_f_solved":{"steps": [
        {
            "type": "playerLine",
            "line": "Složena!"
        },{
            "type": "eginaLine",
            "line": "BRAVO! Velika pravda za prešućenu žensku umjetnost! Nastavi dalje u istraživanje četvrtog salona."
        },
        {
            "type": "playerLine",
            "line": "Nastavljam"
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
            "line": "Što je ovo?"
        },{
            "type": "eginaLine",
            "line": "Pažljivo! ⚠️⚠️⚠️ Pažljivo!⚠️⚠️⚠️ Ovdje možemo izgubiti previše baterije ako ne budemo pažljivi!!"
        },
        {
            "type": "eginaLine",
            "line": "Riječ je o kolekciji minijatura."
        },
        {
            "type": "eginaLine",
            "line": "Ciklus minijatura obitelji Borelli jedini je takav sačuvan na ovom području. Prikazuje članove jedne obitelji u rasponu većem od 100 godina."
        },{
            "type": "eginaLine",
            "line": "Tvoj zadatak je složiti minijature kronološki. Obrati pažnju na modu i tu ćeš naći rješenje."
        },{
            "type": "eginaLine",
            "line": "Pazi, svaka pogreška košta baterije. Što je više složenih minijatura, to je pogreška skuplja!"
        }
    ]}, 
    "chat_4_mini_win":{"steps": [
        {
            "type": "eginaLine",
            "line": "Mini pobjeda!! 🤩🤩🤩🤩🤩"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Minijature riješene!",
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
            "line": "Je li ostalo još zadataka u četvrtom salonu?"
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
            "line": "Francuski zidni tapeti - dio veće cjeline. Zidni tapeti iz radionice Zuber krase i zidove Bijele kuće u Washingtonu."
        },{
            "type": "playerLine",
            "line": "Kao i brački kamen."
        },{
            "type": "eginaLine",
            "line": "Ne, to je urbana legenda. Ali tapeti su stvarni."
        },
        
    ]}, 
    "chat_4_wp2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bidermajer komoda, Austrija, poč. 19. st., puno drvo, nove ručke, br. inv. MGZ 624"
        },{
            "type": "playerLine",
            "line": "Uzbudljivo."
        },
    ]}, 
    "chat_4_sekret":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "bidermajer sekretar, Austrija, oko 1830. god., drvo furnirano, novi okov i ručke, br. inv. MGZ 2344"
        },{
            "type": "playerLine",
            "line": "Sekretar? Kao sekretarica, samo dečko?"
        },{
            "type": "eginaLine",
            "line": "Latinski secretus je tajna, dakle tajnik."
        },{
            "type": "playerLine",
            "line": "Namještaj za skrivanje tajni."
        },{
            "type": "eginaLine",
            "line": "Točno to."
        }
    ]},
    "chat_4_palm":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Vidim palmu!!! 🌴"
        },
        {
            "type": "eginaLine",
            "line": "Čestitam! Baterija se napunila za 10%. Sad će biti malo lakše."
        }
    ]},
    "chat_4_all_puzzles_win":{"steps": [
        {
            "type": "eginaLine",
            "line": "Sve slagalice sobe 4 riješene!!! 😀😃😄😁 Sve smo bliže velikom finalu."
        },
        {
            "type": "eginaLine",
            "line": "Nastavi u sobu 5.",
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Sve 5 ♷",
                    "setProgress": ["4_solved"]
                }
            ]
        }
    ]},



    "chat_5_start":{"steps": [
        {
            "type": "eginaLine",
            "line": "Evo nas u petom i pretposljednjem salonu."
        },
        {
            "type": "playerLine",
            "line": "Ovdje nema slika?"
        },
        {
            "type": "eginaLine",
            "line": "Ovdje nema slagalica pa ćemo se moći bolje koncentrirati na sadržaj. A tema je period francuske uprave u Zadru."
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
            "line": "Poslije pada Venecije i kraće austrijske vlasti Zadar dobiva francusku upravu pod Napoleonovim generalom Augustom Marmontom, koji će u mnogočemu nastojati unaprijediti život i stanje u do tada zaostaloj pokrajini."
        },
        {
            "type": "eginaLine",
            "line": "Tako su Francuzi napravili cestu preko Velebita koja je Zadar spojila s unutrašnjošću, uveli su prve novine na hrvatskom jeziku, otvorili su škole kojih dotad uopće nije bilo u Dalmaciji, sedam gimnazija za dječake i djevojčice, licej koji će kasnije postati zadarsko sveučilište."
        },{
            "type": "eginaLine",
            "line": "I uz sve to, Dalmatinci su svejedno žestoko mrzili Francuze i njihovu upravu, a kad su ukinuli feudalizam i kmetski rad za gospodare, narod se dizao i na pobune."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "A zašto su ih mrzili?",
                    "chat": "chat_5_startxx"
                }
            ]
        }]},
    "chat_5_startxx":{"steps": [
        {
            "type": "playerLine",
            "line": "Možda sloboda, jednakost i bratstvo nisu odgovarali duhu dalmatinskog čovjeka?"
        },{
            "type": "eginaLine",
            "line": "Prvenstveno zato što su Francuze smatrali okupatorima, dok su ostali Hrvati ostali u Austriji."
        },{
            "type": "eginaLine",
            "line": "A pitanje je kako se zvala ta državna tvorevina u kojoj je bio Zadar 1806. do 1813.?"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Republika Francuska",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Republika Dalmacija",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Ilirske pokrajine",
                    "chat": "chat_5_2",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Zona Schönbrunnskog mira",
                    "chat": "chat_5_1",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]},
    "chat_5_1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ma ne.... 🥶🥶🥶"
        },        
        {
            "type": "eginaLine",
            "line": "Ilirske pokrajine, kao i kasniji pokret narodnog preporoda, dobili su naziv po starosjediocima ovih zemalja, Ilirima."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_3"
        }]},
    "chat_5_2":{"steps": [
        {
            "type": "eginaLine",
            "line": "O da.... 🌞🌞🌞"
        },        
        {
            "type": "eginaLine",
            "line": "Iliri, starosjedioci ovih zemalja, dali su ime i Ilirskim pokrajinama i kasnijem narodnom preporodu."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_3"
        }]},
    "chat_5_3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Kad je Napoleon poražen 1813. kod Leipziga, raspalo se njegovo carstvo i Austrija je lako ušetala u sve Dalmatinske gradove osim Zadra. Opsjedali su ga Englezi i Austrijanci i tek je u prosincu gradski načelnik uspio dogovoriti predaju i spasiti grad."
        },        
        {
            "type": "eginaLine",
            "line": "Kako se ono zvao načelnik koji je bio na strani Francuza i na kraju spasio grad u tim nemirnim vremenima, samo da bi poslije pao u nemilost i ubio se?"
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
            "line": "Ne! 🥶 Riječ je o Andriji Borelliju, ocu Frane Borellija kojeg smo rotirali u prethodnom salonu."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_6"
        }]},
    "chat_5_5":{"steps": [
        {
            "type": "eginaLine",
            "line": "Da! 🌞 Riječ je o ocu Frane Borellija kojeg smo rotirali u prethodnom salonu."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_6"
        }]},
    "chat_5_6":{"steps": [
        {
            "type": "eginaLine",
            "line": "No, osim upravno-pravne i civilnih vrlina, Francuzi su nam u nasljeđe ostavili i stil."
        },        
        {
            "type": "eginaLine",
            "line": "Pronađi u ovom salonu ornament u obliku lista akantusa, klasičnog motiva za ukrašavanje koji se koristio još od grčkih i rimskih vremena, izuzetno popularnog i u francuskom carstvu."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Akantus, razumijem",
                    "removeChoices": true,
                    "setProgress":["akantus_hunt"]
                }
            ]
        }]},  
    "chat_5_7":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo! To je akantus, u Hrvatskoj ga zovemo još i primog ili tratorak, gotovo neugledan grm koji je ostavio golem trag u umjetnosti."
        },        
        {
            "type": "eginaLine",
            "line": "Naravno, Francuzi su koristili i druge biljne motive: palmete, rozete, lovore, a jedna biljka im je i na grbu. Indikativno, također i na grbu obitelji Borelli. Koja?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Heraldički ljiljan",
                    "chat": "chat_5_9",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Heraldički vodeni ljiljan",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Heraldički ljubičica",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                },{
                    "text": "Heraldički ruža",
                    "chat": "chat_5_8",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2
                }
            ]
        }]},  
    "chat_5_8":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ne! 🥶 Fleur-de-lis, koji jest ljiljan makar predstavlja šiljak helebarde. Prisutan je na mnogim grbovima, ipak najpoznatiji je kao simbol francuskih kraljeva."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_10"
        }]},
    "chat_5_9":{"steps": [
        {
            "type": "eginaLine",
            "line": "Da! ⚜️ Fleur-de-lis, koji jest ljiljan makar predstavlja šiljak helebarde. Prisutne je na mnogim grbovima, ipak najpoznatiji je kao simbol francuskih kraljeva."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_10"
        }]}, 
    "chat_5_10":{"steps": [
        {
            "type": "eginaLine",
            "line": "To je to. Još jedan zadatak ovdje."
        }, 
        {
            "type": "playerLine",
            "line": "Može."
        },{
            "type": "eginaLine",
            "line": "Ne brzaj. Dobro prouči sve što se može vidjeti u ovoj sobi pa te čeka pitanje."
        }, {
            "type": "playerLine",
            "line": "OK"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Molim pitanje",
                    "chat": "chat_5_11"
                }
            ]
        }]},
    "chat_5_11":{"steps": [
        {
            "type": "eginaLine",
            "line": "U sobi ima različitog namještaja. Panoi s ogledalima su tipično francuski, a nas zanima koji je od ova tri komada namještaja francuske proizvodnje?"
        },        
        {
            "type": "eginaLine",
            "line": "Fotelja, pisaći stol ili ležaljka?"
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
                    "text": "Fotelja",
                    "chat": "chat_5_13",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Pisaći stolić",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Recamier ležaljka",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Nijedno od navedenog",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                },{
                    "text": "Sve od navedenog",
                    "chat": "chat_5_12",
                    "func": "animationManager.animateLose",
                    "drainBattery": 4
                }
            ]
        }]},
    "chat_5_12":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ne! 🙄🙄🙄 Pokušaj ponovo."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_11Q"
        }]},
    "chat_5_13":{"steps": [
        {
            "type": "eginaLine",
            "line": "⚜️⚜️⚜️ Točno, Fotelja Louis XVI, koji je bio kralj u doba francuske revolucije, u kojoj je i sam stradao ⚜️⚜️⚜️"
        },{
            "type": "eginaLine",
            "line": "Samo provjere radi, koje se godine dogodila Francuska revolucija, koja je prva pronijela fundamentale principe liberalne demokracije: Liberté, égalité, fraternité?"
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
            "line": "Ne! 🥶 Francuska građanska revolucija započela je 1789. godine."
        },
        {
            "type": "rollNext",
            "chat": "chat_5_16"
        }]},
    "chat_5_15":{"steps": [
        {
            "type": "eginaLine",
            "line": "Da! Francuska revolucija donijela je osnaživanje ideja o građanskim slobodama, ljudskim pravima i demokraciji te potaknula širenje tih vrijednosti diljem svijeta."
        },        
        {
            "type": "rollNext",
            "chat": "chat_5_16"
        }]}, 
    "chat_5_16":{"steps": [
        {
            "type": "eginaLine",
            "line": "Zanimljivo, od tada je krilatica 'Sloboda, jednakost, bratstvo' dio francuskog ustava, samo je u doba višijevske nacističke vlasti bila zamijenjena za 'Rad, obitelj, domovina'."
        }, 
        {
            "type": "playerLine",
            "line": "Vrrrrlo zanimljivo."
        },
        {
            "type": "eginaLine",
            "line": "Ok, to je bilo to što se tiče pete sobe."
        },       
        {
            "type": "eginaLine",
            "line": "Znaš li koja slijedi?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Šesta!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                },{
                    "text": "Posljednja!!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                },{
                    "text": "Cilj naše igre u salonu u kojem je sama Ifigenija!!!",
                    "chat": "chat_5_17",
                    "func": "animationManager.animateWin",
                    "setProgress": ["5_solved"]
                }
            ]
        }]}, 
    "chat_5_17":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Daaaaaaaaaaaaaaaaa! 🤍💜💙💚💛🧡❤️🖤"
        }, {
            "type": "eginaLine",
            "line": "Kreni u salon s Ifigenijom!"
        }]}, 
    "chat_5_swan":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "🦢🦢 2 labuda oko vatre. 2 labuda još od stare Grčke simbol su odanosti i nevinosti."
        }, {
            "type": "playerLine",
            "line": "A vatra?"
        },{
            "type": "eginaLine",
            "line": "🔥 Vatra bi mogla simbolizirati Boga."
        }]}, 
    "chat_5_qr":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "QR code vodi na mjesto gdje se može saznati više o Muzeju. Skeniraj ga 📱 mobitelom i odvest će te na stranice gdje se može puno više naučiti o ovom mjestu."
        }]},
    "chat_5_o1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Empire pano. Trumeau je centralni stup koji se nalazi u velikim prolazima."
        }]},
    "chat_5_o2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Pozlaćeno, rezbareno i obojeno drvo. Stil Louis XVI koji se razvio u Francuskoj pred Francusku revoluciju."
        }]},







    "chat_6_start":{"steps": [
        {
            "type": "playerLine",
            "line": "U šestom sam salonu."
        },{
            "type": "eginaLine",
            "line": "🤍💜💙💚💛🧡❤️🖤"
        }, {
            "type": "eginaLine",
            "line": "Šesti salon! Najšestiji od svih salona!"
        },
        {
            "type": "playerLine",
            "line": "Napokon!"
        },
        {
            "type": "eginaLine",
            "line": "Ovdje ćemo se sresti s Ifigenijom. Ali prije nje čeka nas još nekoliko zadataka."
        },
        {
            "type": "eginaLine",
            "line": "Prvo, pronađi portret Franje Posedarskog."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "To neće biti teško.",
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
            "line": "Franjo Posedarski, još jedan izdanak stare ratničke obitelji koja je stoljećima štitila zadarsko zaleđe, prvenstveno od Turaka, a i od drugih nevolja."
        },{
            "type": "eginaLine",
            "line": "Knezovi Posedarski potječu od loze Gusića, jednom od dvanaest starohrvatskih plemena."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "Oni koji su doveli Hrvate na more?",
                    "chat": "chat_6_p2"
                }
            ]
        }]},
    "chat_6_p2":{"steps": [
        {
            "type": "eginaLine",
            "line": "To je vrijeme slabo dokumentirano, ali svakako pratimo ovu obitelj sve do srednjeg vijeka."
        },{
            "type": "eginaLine",
            "line": "Nije nemoguće da su jedno od prahrvatskih plemena. Znaš li kako se zovu mitološki prvi Hrvati, petoro braće i dvije sestre?"
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
            "line": "Po knjizi Konstantina Porfirogeneta Klukas, braća i sestre došli su iz Bagibareje, Bijele Hrvatske."
        }, {
            "type": "rollNext",
            "chat": "chat_6_p5"
        }]},   
    "chat_6_p4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Neeee!!! 😵‍💫😵‍💫"
        },{
            "type": "eginaLine",
            "line": "Klukas, braća i sestre došli su iz Bagibareje, Bijele Hrvatske."
        }, {
            "type": "rollNext",
            "chat": "chat_6_p5"
        }]},
    "chat_6_p5":{"steps": [
        {
            "type": "eginaLine",
            "line": "No, vratimo se slici. Franjo Posedarski uživao je titulu Capitano di tutti li Morlacchi, znači da je bio zapovjednik kompletne mletačke kopnene obrane izvan zidina grada."
        },{
            "type": "eginaLine",
            "line": "I sad, što nam je ovdje zanimljivo? Glava obitelji s izrazito vojničkim pedigreom pozira u vojnoj uniformi i uokviruje se u okvir pun ratnih motiva. Osim..."
        },{
            "type": "playerLine",
            "line": "Osim..."
        },{
            "type": "eginaLine",
            "line": "Osim što jedan od simbola na okviru nije ratni, već baš suprotno - predstavlja mir. Koji simbol? Pronađi ga na okviru."
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
            "line": "✔️✔️ Maslina jest simbol mira!!! Još otkad ju je golubica donijela Noi na arku.🕊️🕊️🕊️ "
        },
        {
            "type": "eginaLine",
            "line": "Judeokršćani i stari Grci, svima je maslina simbol mira, a eto ju je vojni zapovjednik subverzivno sakrio u svoj ratnički okvir."
        },
        {
            "type": "playerLine",
            "line": "Stari lisac Posedarski"
        },
        {
            "type": "eginaLine",
            "line": "Gotovi smo sa starim liscem, sad obrati pažnju na kabinet ispod njegove slike."
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
            "line": "❌ Perjanica na šljemu nikako nije simbol mira."
        }]},
    "chat_6_pq2":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Šljem je oklop ratnika. Nije simbol mira."
        }]},    
    "chat_6_pq3":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Štit je vojnički asesoar. Nije simbol mira."
        }]},
    "chat_6_pq4":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Oklop nikako nije simbol mira."
        }]},    
    "chat_6_pq5":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Luk i strijele ne mogu biti simbol mira."
        }]},
    "chat_6_pq6":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Sjekira? Ne."
        }]},   
    "chat_6_pq7":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Topovi? Ma kakvi."
        }]},
    "chat_6_pq8":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Bubnjevi? Ne, to je ratni doboš."
        }]},    
    "chat_6_pq9":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Krila. Možda da su na anđelu ili golubici, ali ovako, van konteksta - ne. Nisu simbol mira."
        }]},
    "chat_6_pq10":{"steps": [
        {
            "type": "eginaLine",
            "line": "❌ Satir može predstavljati mnoge stvari, ali ne i mir."
        }]},  









    "chat_6_k1":{"steps": [
        {
            "type": "eginaLine",
            "line": "Bogato ukrašena komoda s kraja 17. stoljeća. Furnirana i inkrustrirana s intarzijama. Ona skriva i jedan vrlo težak zadatak."
        }, {
            "type": "choice",
            "choices": [
                {
                    "text": "Obožavam teške zadatke",
                    "chat": "chat_6_k2"
                }
            ]
        }]}, 
    "chat_6_k2":{"steps": [
        {
            "type": "eginaLine",
            "line": "Svaka od devet intarzija označena je jednom znamenkom. Kao na ovoj slici: Jasno?"
        },
        {
            "type": "eginaImage",
            "url": "chat/6-01.jpg", "w": 200, "h": 128
        }, 
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Jasno",
                    "chat": "chat_6_k3"
                }
            ]
        }]}, 
    "chat_6_k3":{"steps": [
        {
            "type": "eginaLine",
            "line": "Također, svaka od devet ladica povezana s jednim pitanjem na koje se može odgovoriti s 'da' ili 'ne'. Spoji znamenke onih intarzija na koje je odgovor 'da' i dobit ćeš šifru rješenja."
        },
        {
            "type": "playerLine",
            "line": "Znači uzmem samo brojeve s pozitivnim odgovorima?"
        },
        {
            "type": "eginaLine",
            "line": "Da."
        }, {
            "type": "playerLine",
            "line": "Ok, krenimo."
        },
        {
            "type": "eginaLine",
            "line": "Klikni svaku intarziju i dobit ćeš pitanje, pamti ona kojima je odgovor 'da' i dobit ćeš šifru. Nemoj pogađati naslijepo, jer će svaka pogreška koštati 5% baterije."
        },
        {
            "type": "playerLine",
            "line": "Razumijem."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Znam šifru!!!",
                    "chat": "chat_6_k4"
                }
            ]
        }]}, 
    "chat_6_k4":{"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, molim posebnu pažnju."
        },
        {
            "type": "eginaLine",
            "line": "Koja je šifra komode s intarzijama?"
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
            "line": "Neeeee!!!!! 🕷️🕷️🕷️ Pokušaj ponovo."
        },
        {
            "type": "rollNext",
            "chat": "chat_6_kQ"
        }]}, 
    "chat_6_kW":{"steps": [
        {
            "type": "eginaLine",
            "line": "Daaaaaaaa! ✨✨✨✨ 1358!"
        },
        {
            "type": "eginaLine",
            "line": "I za Zadrane to nije bilo kakav broj."
        },        {
            "type": "eginaLine",
            "line": "Šifra je broj koji je Zadru vrlo važan. O čemu je riječ?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Godina rođenja Sv. Donata",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Količina funti zlata za koje su Zadrani kupili svoju neovisnost od Bizanta",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                },{
                    "text": "Godina potpisivanja Zadarskog mira",
                    "chat": "chat_6_kkW",
                    "func": "animationManager.animateWin"
                },{
                    "text": "Ukupan broj koševa koje je Krešimir Ćosić dao u dresu Zadra",
                    "chat": "chat_6_kkL",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3
                }
            ]
        }]}, 
    "chat_6_kkL":{"steps": [
        {
            "type": "eginaLine",
            "line": "Neeee!!!!!!! 🕷️🕷️🕷️ "
        },
        {
            "type": "rollNext",
            "chat": "chat_6_k5"
        }]}, 
    "chat_6_kkW":{"steps": [
        {
            "type": "eginaLine",
            "line": "Daaaa! ✨✨✨"
        },
        {
            "type": "rollNext",
            "chat": "chat_6_k5"
        }]},
    "chat_6_k5":{"steps": [
        {
            "type": "eginaLine",
            "line": "18. veljače 1358. u sakristiji sv. Frane potpisan je Zadarski mir kojim je Dalmacija pripala Hrvatsko-Ugarskom Kraljevstvu, a ne Mletačkoj Republici."
        },
        {
            "type": "eginaLine",
            "line": "Sve je riješeno osim Ifigenije. Posljednja slagalica, ne sumnjam da će biti deset puta teža od bilo čega što smo dosad vidjeli."
        },
        {
            "type": "eginaLine",
            "line": "Pronađi sliku Žrtvovanje Ifigenije. 🎨"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Krećem Ifigeniji u pomoć 🧩",
                    "setProgress": ["hunt_iphi"],
                    "removeProgress": "hunt_kaby",
                }
            ]
        }]},
    "chat_6_ki1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "1: Zadar je bio glavni grad kraljevine Dalmacije❔"
        }]},
    "chat_6_ki2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "2: Zadarski Knez stolovao je u Providurovoj palači❔"
        }]},
    "chat_6_ki3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "3: Zadar je u 19. stoljeću bio pod austrijskom vlašću❔"
        }]},
    "chat_6_ki4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "4: Obitelji Drioli i Luxardo i danas u Zadru proizvode maraskino❔"
        }]},
    "chat_6_ki5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "5: U 20. stoljeću Zadar je bio potpuno raseljen i 80% grada porušeno❔"
        }]},
    "chat_6_ki6":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "6: Zadar i dio Dalmacije kralj Ladislav prodao je Veneciji za milijun zlatnih dukata❔"
        }]},
    "chat_6_ki7":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "7: Zadar je u 17 stoljeću bio pod vlašću Osmanskog Carstva❔"
        }]},
    "chat_6_ki8":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "8: Zadar je pod mletačkom vlašću neprekinuto bio 377 godina❔"
        }]},
    "chat_6_ki9":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "9: Francesco Salghetti-Drioli najveći je zadarski impresionistički slikar❔"
        }]},
    "chat_6_r1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Barokne zidne oplate iz 18.st. vrlo su vrijedan eksponat. U to doba su bile toliko skupe da su ih samo najbogatiji plemići mogli priuštiti. Skupe su bile zbog tehnike izrade, ali i činjenice da je Venecija imala monopol u proizvodnji stakla." 
        },{
            "type": "playerLine",
            "line": "Odlična stakla kad su izdržala toliko stoljeća." 
        },{
            "type": "eginaLine",
            "line": "To nisu originalna ogledala, ali oplate jesu." 
        }]},
    "chat_6_r2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Barokni pano. Drvo je rezbareno, polikromirano i posrebreno, a sadrži i ulje na platnu nepoznatog autora."
        }]},
    "chat_6_ifi1":{"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Ifigenija."
        },
        {
            "type": "eginaLine",
            "line": "Veličanstvena kompozicija Žrtvovanje Ifigenije najuzbudljiviji je eksponat Muzeja, a možda i cijelog grada. Već i sama sudbina te slike je zadivljujuća."
        },
        {
            "type": "eginaLine",
            "line": "I da bi to prezentirali, prvo ću je sakriti."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Da?",
                    "room": "room_6_l_ifig1",
                    "chat": "chat_6_ifi2"
                }
            ]
        }]},
    "chat_6_ifi2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Slika je ovako izgledala kad je pronađena u Zadarskim ruševinama. I to je samo dio slike. Izrezana u dijelove, godine je provela u ruševinama dok nije 1958. stigla u restauratorski odjel."
        },
        {
            "type": "eginaLine",
            "line": "Tamo su je zavoskali i umotali na drveni valjak pošto nisu imali mogućnosti ni sredstava za restauraciju."
        },
        {
            "type": "eginaLine",
            "line": "Uništena, baš poput grada samog, trebat će desetljeća da ponovo zasja starim sjajem, da se i ona i Zadar poput mitološke ptice uzdignu iz svog pepela. Znaš o kojoj ptici govorim?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Feniks",
                    "room": "room_6_l_ifig2",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi3"
                },{
                    "text": "Plameni pehar",
                    "room": "room_6_l_ifig2",
                    "func": "animationManager.animateLose",
                    "drainBattery": 5,
                    "chat": "chat_6_ifi3"
                },{
                    "text": "Plamenac",
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
            "line": "Zatim su 2001. počeli radovi."
        },
        {
            "type": "eginaLine",
            "line": "Vosak je otopljen, slika očišćena i zalijepljena na novo platno, oštećenja su zakitana i cijela je golema konstrukcija razapeta na novi okvir."
        },
        {
            "type": "eginaLine",
            "line": "Znaš kako se zovu ovi radovi očuvanja i održavanja baštine?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Restauratorski i konzervatorski radovi",
                    "room": "room_6_l_ifig3",
                    "func": "animationManager.animateLose",
                    "drainBattery": 3,
                    "chat": "chat_6_ifi4"
                },{
                    "text": "Propadajući i devastatorski radovi",
                    "room": "room_6_l_ifig3",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi4"
                }
            ]
        }]},   
    "chat_6_ifi4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Potom slijedi bojanje. Oštećenja se podslikavaju gvaš bojama."
        },
        {
            "type": "eginaLine",
            "line": "Gvaš boje su akvarel boje umiješane s pigmentima i punilom da budu gušće. No znaš li što se koristilo za punilo?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Kreda",
                    "room": "room_6_l_ifig4",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2,
                    "chat": "chat_6_ifi5"
                },{
                    "text": "Tinta",
                    "room": "room_6_l_ifig4",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi5"
                }
            ]
        }]},  
    "chat_6_ifi5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Da, ono što se u školskim torbama naziva temperama."
        },{
            "type": "eginaLine",
            "line": "Ovako Žrtvovanje Ifigenije izgleda po završetku podslikavanja gvaš bojama prije retuširanja."
        },
        {
            "type": "eginaLine",
            "line": "A pitanje za tebe je: Što je retuširanje?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Bojanje tušem",
                    "room": "room_6_l_ifig5",
                    "func": "animationManager.animateLose",
                    "drainBattery": 2,
                    "chat": "chat_6_ifi6"
                },{
                    "text": "Popravljanje i dotjerivanje",
                    "room": "room_6_l_ifig5",
                    "func": "animationManager.animateWin",
                    "chat": "chat_6_ifi6"
                },{
                    "text": "Pranje i čišćenje",
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
            "line": "Tehničko popravljanje, dotjerivanje crteža, slike, fotografije, od francuskog retouche: ponovno doticati."
        },
        {
            "type": "eginaLine",
            "line": "I napokon, više od deset godina nakon početka restauracije, više od 50 godina nakon pronalaska, više od 300 godina nakon nastanka, slika je 2012. ponovo predstavljena očima Zadrana."
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
            "line": "No nije samo sudbina platna zanimljiva, jako je zanimljivo i ono što je na platnu."
        },
        {
            "type": "eginaLine",
            "line": "Pojednostavnimo priču: 🏺 Grci žele u pohod na Troju 🏛️ ali gnjevna božica im je ukinula vjetrove 💨 i sad, da bi brodovi ⛵ isplovili Agamemnon mora žrtvovati 🗡️ kćer Ifigeniju."
        },
        {
            "type": "eginaLine",
            "line": "Agamemnon je pred klasičnom dilemom - što više vrijedi: obitelj ili država? Je li vrijednije osobno ili javno? Emocio ili racio?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Užas",
                    "chat": "chat_6_ifi8"
                }
            ]
        }]},
    "chat_6_ifi8":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Dilema je svakako užasna, jer predstavlja dvije loše opcije. No što je ispravno?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Naravno, spasiti kćer.",
                    "chat": "chat_6_ifi9"
                },{
                    "text": "Domovina! Žrtva jednog vrijedi spasa mnogih.",
                    "chat": "chat_6_ifi9"
                },{
                    "text": "Ovo je kao Trolley problem.",
                    "chat": "chat_6_ifi9"
                }
            ]
        }]},
    "chat_6_ifi9":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Nema točnog odgovora. Pitanje morala je relativno."
        },
        {
            "type": "eginaLine",
            "line": "Ne postoji apsolutni moral."
        },{
            "type": "eginaLine",
            "line": "Zato je taj motiv toliko snažan, i zato ćeš ga i dan danas naći na mnogim umjetničkim djelima."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Izuzetna priča.",
                    "chat": "chat_6_ifi10",
                    "setProgress":["ifi_qs"]
                }
            ]
        }]},
    "chat_6_ifi_q_fail":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 🤕 Pokušaj ponovo."
        }]}, 
    "chat_6_ifi10":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, sad moramo prepoznati motive na kompoziciji. Dobro je upoznajmo da bi je kasnije mogli riješiti."
        },{
            "type": "playerLine",
            "line": "Navali!"
        },{
            "type": "eginaLine",
            "line": "Na slici pronađi i klikni Ifigeniju."
        },]},   
    "chat_6_ifi_q_1":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Da! Pred nožem dželata."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Agamemnon?"
        }]},   
    "chat_6_ifi_q_2":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Da! Opis Agamamenovovog štita u Ilijadi nešto je drukčiji, kao i Ahilejevog, a oboje su prisustvovali ovoj sceni, no možemo pretpostaviti da si u pravu."
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Klitemnestra?"
        }]},   
    "chat_6_ifi_q_3":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Da! Ifigenijina majka neutješno jeca. 😢"
        },
        {
            "type": "eginaLine",
            "line": "Gdje je na slici Kalhant?"
        }]},   
    "chat_6_ifi_q_4":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "💚 Točno, svećenik Kalhant je pored žrtvenika."
        },
        {
            "type": "eginaLine",
            "line": "Sad jedno osobno tumačenje. Ovo nije jasna stvar pa nema penala ako pogriješiš, ali, bi li mogli pronaći simbol uzaludnosti žrtve?"
        },
        {
            "type": "eginaLine",
            "line": "Klikni taj motiv."
        }]}, 
    "chat_6_ifi_q_5":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "🌬️ Daaa!!!! To je samo moja teorija, no gle: žrtvuju je da zapuše vjetar, a dim se miče, dakle vjetar već puše 🌬️💨, iako još nitko nije stradao."
        },
        {
            "type": "playerLine",
            "line": "Možda je rješenje Agamemnonove dileme to da se dilema izbjegne? 🧐"
        },
        {
            "type": "eginaLine",
            "line": "Daaa!!!! Ovim smo malim trikom možda upravo spasili Ifigeniju!! 🏳️🏳️🏳️🏳️🏳️"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Uzaludno žrtvovanje",
                    "chat": "chat_6_ifi11"
                }
            ]
        }
    ]}, 
    "chat_6_ifi11":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ništa nije toliko sveto, kao ono što je uzaludno, napisao je Rešicki."
        },{
            "type": "eginaLine",
            "line": "No, to je tek tumačenje. Također postoji tumačenje da na slici uopće nije Ifigenija već Poliksena, princeza Troje, žrtvovana na Ahilejevu grobu da zapušu vjetrovi i da se Grci vrate iz Troje."
        },{
            "type": "eginaLine",
            "line": "Istina je da ne znamo ni tko je autor slike, iako i o tome postoje teorije."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Istina je nezapisana.",
                    "chat": "chat_6_ifi12"
                }
            ]
        }
    ]},
    "chat_6_ifi12":{"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Istina ili ne, približili smo se konačnom cilju, ultimativnom zadatku, kraju igre."
        },{
            "type": "eginaLine",
            "line": "Složi slagalicu Žrtvovanje Ifigenije 🧩"
        },{
            "type": "eginaLine",
            "line": "I..."
        },{
            "type": "playerLine",
            "line": "Da?"
        },{
            "type": "eginaLine",
            "line": "Sretno!"
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Posljednja slagalica 🧩",
                    "setProgress":["ifigenia"]
                }
            ]
        }
    ]}
};


