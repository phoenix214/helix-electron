{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",
      "samples": []
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.LoopOffIntent",
      "samples": []
    },
    {
      "name": "AMAZON.LoopOnIntent",
      "samples": []
    },
    {
      "name": "AMAZON.MoreIntent",
      "samples": []
    },
    {
      "name": "AMAZON.NavigateHomeIntent",
      "samples": []
    },
    {
      "name": "AMAZON.NavigateSettingsIntent",
      "samples": []
    },
    {
      "name": "AMAZON.NextIntent",
      "samples": [
        "Next Step",
        "What's the Next Step",
        "What is the Next Step",
        "Take me to the Next Step",
        "I'm ready for the Next Step",
        "Ok Next Step",
        "Next Step Please",
        "Show the Next Step",
        "What is the First Step",
        "What's the first step"
      ]
    },
    {
      "name": "AMAZON.PageDownIntent",
      "samples": []
    },
    {
      "name": "AMAZON.PageUpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.PauseIntent",
      "samples": []
    },
    {
      "name": "AMAZON.PreviousIntent",
      "samples": [
        "What's the Previous Step",
        "Previous Step",
        "What is the Previous Step",
        "Take to the Previous Step",
        "Show the Previous Step",
        "What's the last step again",
        "What is the last step again"
      ]
    },
    {
      "name": "AMAZON.RepeatIntent",
      "samples": [
        "What's the step again",
        "Say the step again",
        "Say the current step again",
        "Repeat that",
        "Repeat the current step",
        "Can you repeat the step",
        "Repeat the step"
      ]
    },
    {
      "name": "AMAZON.ResumeIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ScrollDownIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ScrollLeftIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ScrollRightIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ScrollUpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ShuffleOffIntent",
      "samples": []
    },
    {
      "name": "AMAZON.ShuffleOnIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StartOverIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "IntroductionIntent",
      "samples": [
        "Helix introduce yourself",
        "Introduce yourself",
        "Tell me about yourself",
        "Helix tell me about yoursef",
        "Helix introduce herself",
        "Introduce herself"
      ],
      "slots": []
    },
    {
      "name": "LookUpIntent",
      "samples": [
        "What is the {Property} of {Entity}",
        "What's the {Property} of {Entity}",
        "Tell me about the {Property} of {Entity}",
        "What is the {Property} for {Entity}",
        "Tell me about the {Property} for {Entity}",
        "What's the {Property} {Entity}",
        "What is the {Property} {Entity}",
        "Tell me about the {Property} {Entity}",
        "What's {Entity} {Property}",
        "Tell me {Entity} {Property}",
        "Look up the {Property} of {Entity}",
        "Lookup the {Property} of {Entity}",
        "Lookup {Entity} {Property}",
        "What is {Property} {Entity}",
        "What's the {Property} of {Entity} on the {LookUpQualifier}",
        "What is the {Property} for {LookUpQualifier} of {Entity}",
        "Tell me the {Property} for {LookUpQualifier} of {Entity}",
        "what is the {Property} for {Entity} in the {LookUpQualifier}",
        "look up scientific reference data",
        "Tell me {Property} {Entity}",
        "Tell me the {Property} for {Entity}",
        "Tell me the {Property} of {Entity}",
        "Is {Entity} a {Property}",
        "What are the {Property} of {Entity}",
        "What are the {Property} for {Entity}",
        "How should i {Property} of {Entity}",
        "How should I {Property} for {Entity}",
        "How should I {Property} {Entity}",
        "Is {Entity} {Property}",
        "What's the {Property} for {Entity}",
        "to lookup the {Property} of {Entity}",
        "to lookup {Entity} {Property}",
        "if {Entity} is {Property}"
      ],
      "slots": [
        {
          "name": "Entity",
          "type": "ENTITY",
          "samples": [
            "{Entity}"
          ]
        },
        {
          "name": "Property",
          "type": "PROPERTY",
          "samples": []
        },
        {
          "name": "LookUpQualifier",
          "type": "LOOKUPQUALIFIER",
          "samples": []
        }
      ]
    },
    {
      "name": "ThanksIntent",
      "samples": [
        "Thanks",
        "Thank you",
        "Thanks Helix",
        "Gracias",
        "Thanks a lot",
        "Thank you very much",
        "Many thanks"
      ],
      "slots": []
    },
    {
      "name": "WhatsNewIntent",
      "samples": [
        "What's new Helix",
        "Tell Me What's New",
        "What's new today"
      ],
      "slots": []
    },
    {
      "name": "WhoAmI",
      "samples": [
        "Who I am",
        "What lab am I"
      ],
      "slots": []
    }
  ],
  "types": [
    {
      "name": "ENTITY",
      "values": [
        {
          "id": null,
          "name": {
            "value": "AatII",
            "synonyms": [
              "AAT2"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AgeI",
            "synonyms": [
              "AGE1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BaeI",
            "synonyms": [
              "BAE1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BamHI HF",
            "synonyms": [
              "BAMH1 HF",
              "NEB BAMH1 HF",
              "NEB BAMHI HF"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BbsI",
            "synonyms": [
              "BBS1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BglII",
            "synonyms": [
              "BGL2"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BsaI HF",
            "synonyms": [
              "BSA1 HF",
              "BSA1HF"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "BstBI",
            "synonyms": [
              "BSTB1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "DpnI",
            "synonyms": [
              "DPN1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "DpnII",
            "synonyms": [
              "DPN2"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "EcoP15I",
            "synonyms": [
              "ECOP15 1",
              "ECHO P 15 1",
              "ECHOP151"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "HindIII",
            "synonyms": [
              "HIND3"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "KpnI",
            "synonyms": [
              "KPN1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "MslI",
            "synonyms": [
              "MSL1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "NotI",
            "synonyms": [
              "NOT1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nt.BstNBI",
            "synonyms": [
              "NTBSTNB1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "SmlI",
            "synonyms": [
              "SML1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "SspI",
            "synonyms": [
              "SSP1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "XbaI",
            "synonyms": [
              "XBA1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "XhoI",
            "synonyms": [
              "XHO1"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dibromoethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DICHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 dichloroethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DICHLOROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dichlorotetrafluoroethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DIHYDRONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dimethoxybenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DIMETHOXYETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DIMETHYLHYDRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dimyristoyl sn glycero 3 phosphocholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dinitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Dioleoyl sn Glycero 3 Phosphocholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Diphenylethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 DIPHENYLHYDRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Epoxybutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 EPOXYOCTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 ETHANEDITHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Hexanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Methoxyphenyl piperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 NAPHTHOQUINONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Pyridyl piperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 2 Pyridylazo 2 naphthol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 5 TRIAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 5 TRICHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 5 TRINITROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 5 TRIOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Bis diphenylphosphino propane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 BUTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Butadiene 2 methyl  polymer with 1 3 butadiene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Butadiyne",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 BUTANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Chlorophenyl piperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 CYCLOHEXADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Cyclohexanedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 diaminopropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIBROMOBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIBROMOPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DICHLORO 2 PROPANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DICHLORO 5 5 DIMETHYLHYDANTOIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Dichloroacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DICHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DICHLOROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DICHLOROPROPENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 dihydroxyacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Dimethoxybenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Dimethyl 2 imidazolidinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Dimethylol 2 imidazolidinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIMETHYLUREA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Dinitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIOXOLAN 2 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 DIOXOLANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Diphenylacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Diphenylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Diphenylguanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Diphenylurea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Indanedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 PROPANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Propanedithiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 3 Propanesultone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 10 13 Tetraoxa 7 16 diazacyclooctadecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 7 10 TETRAOXACYCLODODECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Bis bromomethyl benzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Bis chloromethyl benzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Bis diphenylphosphino butane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 BUTANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Butanediol diglycidyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 CYCLOHEXADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 CYCLOHEXANEDIMETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Diaminoanthraquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Diazabicyclo 2 Point2 2 octane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Dibromobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DIBROMOBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DICHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DICHLOROBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DIETHYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DIFLUOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DIIODOBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Dimethoxybenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Dinitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 DIOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 Dioxaspiro 4 Point5 decan 8 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 4 NAPHTHOQUINONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 5 DIBROMOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 5 HEXADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 5 PENTANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 6 Dibromohexane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 6 Diisocyanatohexane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 6 Hexanediamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 6 HEXANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 6 HEXANEDIOL DIACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 7 OCTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 8 Diamino 3 6 dioxaoctane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 8 Diaminooctane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 8 Naphthalic anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Acetonaphthone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Acetyl 2 phenylhydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Adamantanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 AMINOANTHRAQUINONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Aminocyclopropanecarboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Aminopropan 2 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Benzyl 4 piperidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Benzylpiperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 boc 4 piperidinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 boc piperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMO 2 CHLOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 2 methylpropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 2 nitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMO 3 CHLOROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 3 methyl 2 butene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMO 3 METHYLBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 4 chlorobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 4 fluorobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 4 iodobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromo 4 nitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromoadamantane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMODECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromododecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOETHYL BENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOHEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOHEXADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOOCTADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Bromooctane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BROMOPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Butanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Butanol Butyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Butene polymer with ethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Butoxy 2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Butyl 3 methylimidazolium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 BUTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Chloro 1 1 difluoroethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 chloro 2 4 dinitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 CHLORO 3 METHYL 2 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Chloro 3 nitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Chloro 4 iodobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Chlorobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 CHLORONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 CHLOROOCTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 CHLOROPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 CHLOROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DECANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DECANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DECENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DOCOSANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DODECANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DODECANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 DODECENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Dodecylpyridinium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 EICOSANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Ethoxydecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Ethyl 2 5 dimethyl 1H pyrrole 3 carbaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Ethyl 2 methylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Ethynyl 1 cyclohexanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Fluoro 2 nitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEPTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEPTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEPTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEXADECANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexadecanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexadecene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexadecylpyridinium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEXANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexanol Hexyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEXENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hexene polymer with ethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 HEXYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Hydroxybenzotriazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Indanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Iodo 4 nitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Iodobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 IODOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 IODONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 IODOOCTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 IODOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 IODOPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methoxy 2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methoxy 2 propyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methyl 1 cyclohexene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methyl 1H pyrrole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 METHYL 2 PYRROLIDINONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methyl 3 nitro 1 nitrosoguanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methyl 4 piperidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 methylimidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 METHYLINDOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 METHYLNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 METHYLPHENANTHRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methylpiperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Methylpiperidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 METHYLPYRROLIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Monolaurin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Naphthaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NAPHTHALENESULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NAPHTHOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NAPHTHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Naphthyl isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Naphthylacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NAPHTHYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NITRONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NITROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NITROPYRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Nitroso 2 naphthol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Nitrosopyrrolidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Nonanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 NONENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 OCTADECENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 OCTANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 octanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 OCTEN 3 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 OCTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 OCTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Pentanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PENTEN 3 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PENTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenoxy 2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenyl 1 2 ethanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenyl 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenyl 1 propyne",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenyl 1 trimethylsiloxyethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenylethanamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenylethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PHENYLPIPERAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Phenylurea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PROP 2 YN 1 YLOXY PROPAN 2 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Propanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 propanol propan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 PROPOXY 2 PROPANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 tert butoxy 2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 TETRADECANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 TETRADECENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 Triacontanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 UNDECANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "10 UNDECENOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "11 AMINOUNDECANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "12 Hydroxystearic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "12 Methyltetradecanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "13 Methyltetradecanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "15 Crown 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "17 alpha Estradiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "17 alpha Hydroxypregnenolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "18 Crown 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "19 Norethindrone acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1H 1 2 4 Triazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1H Benzotriazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1H Indazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1H Pyrrole 2 carbaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1H Tetrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1M HCL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2  E octadec 9 enoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 1 Methylene Chloride Methanol Solution",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 2  Propane 1 2 3 triyltrioxytriethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 2 TRICHLOROETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 2 TRIFLUOROETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 3 4 4 5 HEPTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 3 4 4 HEXACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 4 4 5 5 HEPTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 4 4 5 HEXACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 4 5 6 HEXACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 4 5 PENTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 4 Tetrachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 5 6 PENTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 3 5 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 4 5 5 Hexachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 4 5 PENTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 4 6 8 8 HEPTAMETHYLNONANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 4 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 4 Tetrahydroxybenzophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 5 5 PENTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 5 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 6 6 PENTAMETHYLHEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 DIAMINOPHENOXY ETHANOL DIHYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 Nonylphenoxy ethoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 TRIMETHYL 1 3 PENTANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 4 Trimethylpentane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 5 5 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 5 TRICHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 6 2  Terpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 6 6 Tetramethylpiperidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 AMINOETHOXY ETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Aminoethyl isothiourea dihydrobromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Aminoethyl pyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Aminoethylamino ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 BIPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 BIPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Bithiophene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Butoxyethoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 DICHLORO 1 1 1 TRIFLUOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dichlorodiethyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dichloropropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dimethoxy 2 phenylacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dimethoxyethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 DIMETHOXYPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dimethyl 1 3 dioxane 4 6 dione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 DIMETHYLBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Dithiodipyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Methoxyethoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 2 Propoxyethoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 3 4 4 5 5 HEPTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 3 4 4 5 HEXACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 3 4 4 Pentachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 4 5 5 Hexachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 4 5 PENTACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 4 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 5 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 6 7 8 HEXACHLORODIBENZOFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 6 TETRACHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 4 7 8 PENTACHLORODIBENZOFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 5 6 Tetramethylpyrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 5 TRIIODOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 5 Trimethylpyrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 5 Triphenyltetrazolium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 7 8 TETRACHLORODIBENZOFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 aminopropanoylamino 3 3H imidazol 4 yl propanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 butanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 butanedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 butanedione monoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Dichloro 1 4 naphthoquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Dihydrofuran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Dihydroxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Dihydroxynaphthalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Dihydroxypropyl methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 dihydroxypropyl octadec 9 enoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYL 1 3 BUTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYL 2 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYLBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYLNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYLPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 Epoxypropyl acrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 3 PENTANEDIONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 4 TRICHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 4 TRIMETHYL 1 PENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 5 TRICHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 5 TRICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 5 trichlorophenoxyacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 8 10 Pentamethylcyclopentasiloxane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 8 Tetramethylcyclotetrasiloxane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 Tri tert butylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 tribromophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 TRICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 TRIMETHYLANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 TRIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 Trimethylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 6 Tris dimethylaminomethyl phenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 7 TRINITRO 9H FLUOREN 9 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 bis 1 3 benzodioxol 5 yl 4 oxobutanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 D butotyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 D ISOOCTYL ESTER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Di tert butylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 diamino 6 hydroxypyrimidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Diaminotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Dibromoacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DICHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DICHLOROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DICHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 dichlorophenoxyacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 dichloropyrimidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIHYDROXYACETOPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIHYDROXYBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 dihydroxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIHYDROXYBENZOPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Diisocyanatotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Dimethoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIMETHYL 3 PENTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIMETHYLPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DINITROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Dinitrofluorobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 dinitrophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Dinitrophenylhydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 DINITROTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Hydroxyphenyl ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Lutidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 methylphenyl propan 2 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 Pentanedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 4 THIAZOLIDINEDIONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Diaminotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 DICHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 dichlorophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 DIHYDROXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Dimercapto 1 3 4 thiadiazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Dimethoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Dimethoxytetrahydrofuran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 DIMETHYLFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 DIMETHYLPYRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Diphenyloxazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 HEXANEDIONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5 Norbornadiene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 5H Furanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Di tert butyl 4 methylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DI TERT BUTYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Diaminopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DICHLORO 4 NITROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 dichloro 5 fluoroacil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DICHLOROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Dichlorobenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DICHLOROINDOPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DIISOPROPYLANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DIMETHOXYPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Dimethyl 4 heptanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DIMETHYLNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DIMETHYLPYRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Dimethylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 DINITROTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Naphthalenedicarboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 6 Pyridinedicarboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 7 DIHYDROXYNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 9 Dimethyl 4 7 diphenyl 1 10 phenanthroline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Acetamidofluorene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Acetylfuran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Acetylnaphthalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ACETYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ACETYLPYRROLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ACETYLTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Adamantanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ALLYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 1 phenylethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 2 methyl 1 3 propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 2 methyl 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 2 phenylacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINO 3 HYDROXYPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 3 methylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 4 6 dichloropyrimidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 4 chlorophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 4 chloropyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 4 methylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINO 4 NITROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 5 bromopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 5 iodopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino 6 methoxybenzothiazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Amino 6 methylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 amino nitropyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINOBENZIMIDAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminobenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINOBENZOTHIAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminoethyl dihydrogen phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 aminofluorene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminoisobutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminonaphthalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINOPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINOPYRIMIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 AMINOTHIAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Aminothiophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Benzyl 4 chlorophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromo 2 methylpropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromo 2 methylpropionyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromo 4 nitroacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 bromo 5 nitropyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromoacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromoanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 bromobutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOETHYL BENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromoethyl methyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromomethyl naphthalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMONAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Bromopropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BROMOTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butanone Methyl Ethyl Ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BUTANONE OXIME",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BUTANONE PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 butene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butoxyethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butoxyethyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 BUTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Butyne 1 4 diol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloro 1 chloromethyl ethyl carbamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloro 2 methylpropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 chloro 5 nitropyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloro N N dimethylethanamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloroacetamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROACETOPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloroadenosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chlorobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chlorobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chlorobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 chloroethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 chloromethyl oxirane formaldehyde 4 2 4 hydroxyphenyl propan 2 yl phenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 chloronicotinic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloronitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CHLOROPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chloropyrimidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chlorotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Chlorotriethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Cyanoacetamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Cyanoethyl N N diisopropylchlorophosphoramidite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Cyanopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CYCLOHEXEN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CYCLOHEXEN 1 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 CYCLOPENTEN 1 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Decanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Decyloxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Deoxy D ribose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 deoxyadenosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 deoxycytidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 deoxyguanosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 DEOXYURIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Diethylamino ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Dimethylamino ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 dimethylamino ethyl 2 methylprop 2 enoate 1 ethenylpyrrolidin 2 one 1 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Dimethylamino ethyl methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 DODECYLBENZENESULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Dodecyldimethylammonio acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ethenylbenzenesulfonic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethoxyethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethoxyethyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethoxyethyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYL 1 3 HEXANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethyl 2 oxazoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethyl 4 methylimidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLAMINO ETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethylhexan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Ethylhexanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLHEXANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLHEXYL ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLHEXYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLHEXYL PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ethylhexyl prop 2 enoate styrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLHEXYL SALICYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 FLUOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Fluorobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 fluorobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 FLUOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Furaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 FUROIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Furoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 germaacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HEPTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HEPTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Heptanone 98 Percent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hexadecoxyethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HEXANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hexyloxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxy 1 naphthaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxy 2 methylpropiophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxy 5 nitrobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxyacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HYDROXYBENZYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxycinnamic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HYDROXYETHYL ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HYDROXYETHYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxyethyl oleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HYDROXYISOBUTYRIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxypropyl dodecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxypropyl methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Hydroxypropyl stearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 HYDROXYPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Imidazolidinethione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Imidazolidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Imidazoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 IODOANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 IODOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 IODOPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 IODOTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Iodotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Isocyanatoethyl methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Isopropyl 5 methylcyclohexanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Isopropylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 ketoglutaric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Mercaptobenzimidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Mercaptobenzothiazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Mercaptobenzoxazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 mercaptoethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Mercaptopropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Mercaptothiazoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methoxy 4 vinylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHOXYBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHOXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methoxybenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHOXYETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methoxyethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHOXYNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 methoxypropan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methoxypropene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 1 3 PENTANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 1 BUTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 1 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 1 PENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 2 BUTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 2 butene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 2 PENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 2 propanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 3 BUTEN 2 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYL 3 BUTYN 2 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 4 6 dinitrophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 4 isothiazolin 3 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methyl 4 nitroaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylamino ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylbenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLBENZIMIDAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylbenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylbutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylbutanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylbutyraldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLCYCLOHEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylheptadecanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLHEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLIMIDAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLINDOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLNAPHTHALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLNONANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLPIPERIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLPYRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLQUINOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylresorcinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLTETRADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLTETRAHYDROFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 METHYLTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Methylundecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Morpholinoethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Naphthaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Naphthalenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NAPHTHALENETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Naphthoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NAPHTHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NITROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Nitroanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NITROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Nitrobenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NITROBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NITROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Nitrophenyl octyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 nitropropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Nitrotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 NONANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Nonylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Octadecyloxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Octyldodecan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Octylthio ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Oxazolidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 oxobutanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 p Nonylphenoxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PENTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Pentanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PENTYLFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PHENOXYETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenyl 2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PHENYLETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenylethyl propionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenylindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenylpropanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Phenylpropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PHENYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Picolylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Piperidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PrOH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenenitrile polymer with 1 1 dichloroethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  1 2 ethanediyl ester polymer with methyl 2 methyl 2 propenoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  butyl ester polymer with butyl 2 propenoate and ethenylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  methyl ester polymer with butyl 2 propenoate and ethenylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  methyl ester polymer with ethenylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  polymer with ethene sodium salt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  polymer with ethene zinc salt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid 2 methyl  polymer with ethenylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid butyl ester polymer with ethenylbenzene and 2 propenenitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid ethyl ester polymer with ethene and 2 5 furandione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propenoic acid methyl ester polymer with ethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Propoxyethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Pyridinecarboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 PYRIDINEMETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 pyridone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Pyrrolidinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 tert Butyl 4 methoxyphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 TERT BUTYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Thenoyltrifluoroacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 THIOBARBITURIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Thiophenecarbonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 thiouracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 TRIDECANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Tridecyloxy ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 Undecanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2 VINYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "24 25 Dihydroxy VD3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "25 Hydroxycholesterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2E 4E deca 2 4 dienal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2m Acetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2m HCL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2M Nitric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "2S 3S 4R 5R 2 3 4 5 6 pentahydroxyhexanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3  3 dodecanoylamino propyl dimethyl ammonio 2 hydroxypropane 1 sulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 2 6 DIBROMO 4 2 3 5 DIBROMO 4 2 METHOXYETHOXY PHENYL PROPAN 2 YL PHENOXY PROPAN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 4 4 5 5 Hexachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 4 4 5 Pentachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 4 4 Tetrachlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 DIMETHOXYBENZIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 DIMETHYL 1 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 Dimethyl 1 Butyne",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 3 Dimethylacrylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 4 5 TETRACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 5 TRIMETHOXYBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 5 TRIMETHOXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 5 Trimethoxybenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 diaminopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DIAMINOTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DICHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DICHLOROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dihydro 2H pyran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dihydroxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DIHYDROXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dihydroxyphenylacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dimethoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dimethoxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dimethoxybenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dimethoxyphenethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Hydroxyphenyl propionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 4 Xylidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 5 Trimethylhexyl 3 5 5 trimethylhexanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 dibromopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DICHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DICHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DIHYDROXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 Dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DIMETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 Dimethylpyrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DIMETHYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 DINITROBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 5 Dinitrobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 6 9 12 15 18 21 24 27 30 Decaoxadotetracontan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 6 9 12 15 Pentaoxaheptadecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 ACETYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 amino 1 2 4 triazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Amino 1 2 propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 amino 1H pyrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 AMINOBENZENESULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 AMINOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Aminomethyl pyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Aminophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Aminopropanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 aminopropionitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Aminopropyltriethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Aminopropyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 aminopyrazole 4 carbonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 AMINOPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMO 1 CHLORO 5 5 DIMETHYLHYDANTOIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Bromo 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Bromobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Bromopropyl benzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BROMOTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Buten 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BUTEN 2 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BUTENENITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 BUTYN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Butyn 2 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Carene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chloro 1 2 propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 CHLORO 1 PROPANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chloro 2 methylpropene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 CHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 CHLOROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 chlorobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chlorobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chloroperoxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chlorophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 CHLOROPHENYL ISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chloropropionyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chloropropyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 CHLOROPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Chlorotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 cyanopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Decyloxysulfolane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Dimethylaminopropylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Ethoxy 4 hydroxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 ETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Ethyltoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 FLUOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Fluorobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 FLUOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Furaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Glycerophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Heptanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 hexadecyloxy propan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 HEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 HEXYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxy 2 naphthoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxy 4 methoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 hydroxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 hydroxybutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxyflavone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxypropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Hydroxypropionitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 HYDROXYPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Indolepropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Isobutyl 1 methylxanthine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Isocyanato 2 methylfuran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Isocyanatopropyltriethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Mercapto 1 2 propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 MERCAPTOPROPIONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHOXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHOXYPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methoxypropylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methoxypropylgluconamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methoxysalicylaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methyl 1 butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYL 1 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYL 2 BUTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYL 2 BUTEN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methyl 2 butenal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYL 2 CYCLOHEXEN 1 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methyl 2 oxobutanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYL 3 BUTEN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methyl L histidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methylbenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methylbenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methylbutanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 methylcholanthrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLCYCLOHEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLHEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLINDOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Methylthio propionaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 METHYLTHIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitro L tyrosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitroacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitroaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 NITROBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 NITROBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitrobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitrophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Nitrotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 O Methyl d glucose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 OCTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Octanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 PENTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 PENTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 PHENOXYBENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Phenoxypropylene di acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Phenylpropan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Phenylpropanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 phenylpropionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Phenylpropionyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Phenylpropylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Pyridinecarboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 PYRIDINEMETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 pyridinylboronic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Thiophenecarboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Thujene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3 Trifluoromethyl aniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3m H2SO4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3M HCL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "3S 4S pyrrolidine 3 4 diol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 2 4 Dichlorophenoxy butanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 2 Aminoethyl morpholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 2 Pyridylazo resorcinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Azoxyanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 BIPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Bipyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Dichlorobenzophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Dichlorobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Dimethoxytrityl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Diphenylmethane diisocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 METHYLENEBIS 2 6 DI TERT BUTYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 METHYLENEBIS 2 CHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Methylenedianiline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Oxydianiline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 4 Sulfonyldiphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 7 Methano 1H indene 3a 4 7 7a tetrahydro  polymer with ethene and 1 propene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ACETYLBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 acetylbutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Acetylpyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Amino 1 butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminoacetanilide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminoacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminoantipyrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminoazobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 aminobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminobenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 aminobutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminodiphenylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminohippuric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 aminophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 aminopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminosalicylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Aminothiophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Benzyloxyphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 boronoanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMO 1 BUTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromo N N dimethylaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromoacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromoaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMOANISOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMOBENZONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzotrifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Bromobenzyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMOBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 bromoisoquinoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMOPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 BROMOTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Carboxybutyl triphenylphosphonium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 carboxyphenylboronic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chloro 3 5 dimethylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chloro 3 methylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chloroacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chloroanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROBENZONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROBENZOPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROBENZOYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobenzylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorobutyryl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 chloroindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chloronitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CHLOROPHENOXYACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorophenyl isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorophenyl isothiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorophenylboronic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlororesorcinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorostyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorothiophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Chlorotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Cholesten 3 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Cyano 4 octylbiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Cyano 4 pentylbiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Cyanobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Cyanobenzyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 CYANOPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Diethylamino benzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 DIMETHYLAMINO BENZALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Dimethylaminopyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ethenylbenzenesulfonic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ETHOXYANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Ethoxybutan 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Ethyl 2 methoxyphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ETHYLANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ETHYLPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 ETHYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Ethyltoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluoroacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 FLUOROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 FLUOROBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluorobenzylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Fluoronitrobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 FLUOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 fluorophenylboronic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 FORMYLBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Heptanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Heptanone 98 Percent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxyacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 hydroxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 HYDROXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxybenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxybenzophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 hydroxybenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxybutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxycoumarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 hydroxyphenylacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Hydroxypiperidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Iodoacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 IODOANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Iodoanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 IODOBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 IODOPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Iodotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 isopropylbenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 isopropylbenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Isopropylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxyacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzenethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHOXYBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHOXYBENZYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxybenzyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHOXYBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 methoxyindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxyphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxyphenyl isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxyphenylacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxypicolinamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methoxystyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHYL 1 PENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methyl 2 oxovaleric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHYL 2 PENTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methyl 2 pentanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbenzylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylbiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylcatechol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylcyclohexanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHYLCYCLOHEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylimidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylmorpholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylmorpholine N oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHYLPENTANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 methylphenylboronic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylpiperidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylpyrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 METHYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Methylstyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 methylumbelliferone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitro o phenylenediamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitroacetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 NITROANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitroanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 nitrobenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzenesulfonyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 NITROBENZOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzoyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobenzyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrobiphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrophenyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrophenyl chloroformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 nitrophenyl phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrophenylhydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitroquinoline N oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Nitrothiophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 NITROTOLUENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 nonylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 OCTYNE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Oxopentanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 PENTEN 1 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 PENTENOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Pentyn 1 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Phenyl 1 2 4 triazoline 3 5 dione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Phenylbenzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 PHENYLBUTYRIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Phenylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Pyridinecarboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 quinazolinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Butylbenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Butylcalix 4 arene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Butylcatechol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Butylcyclohexanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Butylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 tert Octylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Thujanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Trifluoromethyl aniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Trifluoromethyl benzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Vinylbenzyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 Vinylcyclohexene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "4 VINYLPYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 5 Dimethyl 1 pyrroline N oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Amino 2 methylphenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 aminoisoquinoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Aminolevulinic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Aminosalicylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Aminotetrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Aminovaleric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 azacytidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Bromo 1 pentene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 bromo 2 chloropyrimidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 BROMO 2 DEOXYURIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 bromoindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 bromonicotinic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Bromosalicylaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Bromouracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Chloro 2 methyl 4 isothiazolin 3 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Chlorosalicylaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 cyanoindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 CYTIDYLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Fluorocytosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Fluorouracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Guanylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Hydroxy DL tryptophan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 hydroxy L tryptophan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Hydroxyindole 3 acetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 HYDROXYMETHYLFURFURAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 methoxyindole 3 carboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 METHOXYTRYPTAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Methylcytosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 METHYLFURFURAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Nitrofurfural",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Nonanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5 Sulfosalicylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "50 50 Ethanol Methylene Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "5a Pregnane 3 20 dione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 10 14 Trimethylpentadecan 2 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 aminohexanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 aminonicotinic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Aminopenicillanic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Benzylaminopurine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Biopterin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 bromohexyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Carboxyfluorescein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 chloro 2 pyridinecarboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 chloro 7 dezapurine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 CHLOROPURINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Hexanolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Mercaptopurine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 METHYL 5 HEPTEN 2 ONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6 Thioguanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6M H2SO4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6M HCL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "6m Nitric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 Aminocephalosporanic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 azaindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 Dehydrocholesterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 DIETHYLAMINO 4 METHYLCOUMARIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 hydroxycoumarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 Ketocholesterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "7 nitroindazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 AMINOQUINOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 Anilino 1 naphthalenesulfonic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 AZAGUANINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 epi PGF2alpha",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 Hydroxyguanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "8 HYDROXYQUINOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 10 DIHYDROANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 10 DIMETHYLANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 10 DIPHENYLANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 10 Phenanthrenequinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 Anthraldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 Fluorenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 Fluorenylmethyl chloroformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 METHYLANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 Oxabicyclo 6 Point1 0 nonane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9 Vinylcarbazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9H Pyrido 3 4 B indole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9H Xanthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "9M H2SO4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Abietic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acenaphthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acenaphthenequinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acenaphthylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetanilide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acethydrazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetic Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetoacetanilide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetoacetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetone cyanohydrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetone Oxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetosyringone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetovanillone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "acetyl CoA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetyl L carnitine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetyl Tributyl Citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylcholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylcholine Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylglucosamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acid Orange 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aconitine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acriflavine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acrolein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acrylamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acrylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acrylonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acryloyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Actinium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adamantane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adenine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adenosine diphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "adenosine monophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adenosine Triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adenosylcobalamin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adipic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adipic Dihydrazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adiponitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adipoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aflatoxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Agarose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Agmatine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "albite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alcogum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aldosterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alfacalcidol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alizarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allantoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allopregnanolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allura Red AC",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL CHLOROFORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL GLYCIDYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL IODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYL ISOTHIOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allyl Phenyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allylamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allylpalladium Chloride Dimer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALLYLTHIOUREA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allyltributyltin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allyltrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alpha alanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alpha Amyrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA CAROTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha CYCLODEXTRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha D glucose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Farnesene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA IONONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alpha Ketoglutaric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Maltose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Methylstyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Muurolene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA PHELLANDRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA PINENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA TERPINENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha TERPINEOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALPHA TERPINYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Tetralone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "alpha Thujone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium ammonium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium Antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium Arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium borate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium boron oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium caesium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium chloride fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium chloride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium difluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium gallium indium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium Isopropoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monobromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monofluoride monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monoiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monophosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monotelluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium nickel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium potassium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium rubidium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium silicon monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium Sulfate Hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aluminium triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Calcium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALUMINUM CARBIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum chlorodimethyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALUMINUM DICALCIUM IRON PENTAOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Gallium Arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Monostearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Nitrogen Silicon Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALUMINUM PHOSPHIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Potassium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum purified",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum sec butoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum shots",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Silicate Al6Si2O13",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Stearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALUMINUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Trihydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminum Trisodium Hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALUMINUM YTTRIUM TRIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMARANTH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amelizol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Americium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "amesite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "amide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amine 220",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aminodiphenylmethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aminoguanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aminomethylbenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonia",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonia D3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium 2 4 nonylphenoxy ethyl sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Acrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM BICARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium bifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM BISULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium carbamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Carbonate powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium cerium 4 nitrate ceric ammonium nitrate CAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM DICHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium dihydrogen arsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Dihydrogen Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Dodecyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium hexachloroplatinate 4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Hexafluorosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium hexathiocyanoplatinate 4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM IODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Lauryl Ether Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Manganese 3  Diphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM PERCHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Peroxydisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Persulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ammonium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ammonium Polyphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM SULFAMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM THIOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM THIOSULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMMONIUM XYLENESULFONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amylopectin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amylose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anabasine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Andrographolide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Androstanedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Androstenediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Androstenedione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Androsterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anhydrone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anilazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANILINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANILINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANISOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANSERINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anthanthrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anthocyanin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANTHRACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANTHRAQUINONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANTHRONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antigorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "antimony oxysulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony pentachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony pentaflouride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony pentaselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "antimony trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony triselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony trisulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antimony tritelluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antioxidant 330",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Apigenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ARABINOGALACTAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arachidic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arachidonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aragonite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arecoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arginine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Argon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "argon chloride fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "argon chloride hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "argon fluoride hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Argon gas",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AROMADENDRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsenazo 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsenic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic 3 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsenic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic diiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic diphosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic hemiselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic monophosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic monoxide monochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic oxybromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic oxychloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsenic Pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic pentaselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic pentasulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ARSENIC PENTOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic tetrachloride fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic tetraoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic tetrasulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "arsenic triphosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsenic Triselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arsine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ascorbic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "asparagine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aspartic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Astaxanthin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Auramine O",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Avobenzone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azacyclotridecan 2 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "azepan 2 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azetidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azidobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azidotrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aziridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azodicarbonamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AZOXYBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azulene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bacteriochlorophyll",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARBITURIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium arsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium arsenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium bromate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium bromate monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium carbonate witherite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium chromate 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium chromate barium chromate 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium disilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium formate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium hexaboride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium hexafluorosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM HYDROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium hydroxide baryta",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Hydroxide crystal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium manganate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Metaborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium metaphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium niobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Nitrate crystals",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium orthovandate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium permanganate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium perxenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium potassium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium pyrophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium pyrovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium sodium niobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium stannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Stearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Strontium Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BARIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium sulfate barite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium tellurate trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium tetraiodomercurate 2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium thiosulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Titanate 4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium titanate barium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barium uranium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Barium Zirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "barysilate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bathophenanthroline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "benomyl metabolite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bentazon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bentazone sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benz A Anthracene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzalacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzaldehyde Dimethyl Acetal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzaldoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzamidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZANILIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZANTHRONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzene D 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzenediazonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzenesulfenyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZENESULFONAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZENESULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZENESULFONYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzenethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzethonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZILIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZIMIDAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo 15 crown 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo A Pyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo B Fluoranthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo B Thiophene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo B Triphenylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo C Phenanthrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo E Pyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo Ghi Perylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo J Fluoranthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzo K Fluoranthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "benzoate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzoguanamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzohydrazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOTHIAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOTRICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOTRIFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOXAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzoyl Isothiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOYL PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzoylacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzoylecgonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZOYLFORMIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl 2 bromoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl Butyl Phthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL CHLOROFORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyl Isothiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYL MERCAPTAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYLACETONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENZYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzylethyldimethylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzylidenemalononitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzylmagnesium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzylpenicilloyl G",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyltriethylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzyltrimethylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bergapten",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Berkelium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Beryllium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium acetylacetonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium aluminium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium borohydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Beryllium Difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium formate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BERYLLIUM OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium oxide bromellite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beryllium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta alanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Amyrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Bisabolene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Bourbonene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Bungarotoxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta carotene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA CARYOPHYLLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Cryptoxanthin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta CYCLODEXTRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta D galactose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta D glucose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA ELEMENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Eudesmol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta GalNAc",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Glucan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA IONONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta Methylstyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta naphthoflavone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA PHELLANDRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA PINENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "beta propiolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA SITOSTEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETA TOCOPHEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Betaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Betulin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Betulinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biguanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bilirubin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biliverdin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biochanin A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biphenyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis 1 5 cyclooctadiene nickel 0",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BIS 2 ETHYLHEXYL ADIPATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis 2 ethylhexyl hydrogen phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BIS 2 ETHYLHEXYL SEBACATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BIS 2 ETHYLHEXYL TEREPHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BIS 2 HYDROXYETHYL TEREPHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis 2 mercaptoethyl sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BIS 5 AMIDINO BENZIMIDAZOLYL METHANE ZINC",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis Diphenylphosphino Methane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis GMA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bis Tris",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisabolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismaleimide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismuth",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 nitrate pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 orthoborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 oxychloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 oxyiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 selenide bismuth selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth 3 sulfide bismuthinite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismuth Germanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismuth Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth oxycarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismuth Oxychloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bismuth Trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisphenol A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisphenol A diglycidyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisphenol A polycarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biuret",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "blue vitriol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "borazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Boric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Borneol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bornyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Boron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron 3 arsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron 3 orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron 3 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Boron Carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Boron Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "boron trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BORON TRIFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BRASSICASTEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brefeldin A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brilliant Blue FCF",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brilliant Green",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bromate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromazine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bromic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bromine chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromoacetaldehyde Diethyl Acetal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOACETONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOACETONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromoacetyl Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromoaniline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromochloromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromocresol Green",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromocresol Purple",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOCYCLOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromocyclopentane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMODICHLOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromoethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromoform",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromofos",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromomethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromomethyl Cyclopropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromophenol Blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromophenylmagnesium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromosuccinimide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromothymol Blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOTRICHLOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromotrifluoromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromotrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bromous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMOXYNIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bromthymol blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bronopol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BRUCINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brucine Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bucladesine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUMETRIZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butadiene Monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butadiene Styrene Divinylbenzene Polymer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "butyl 2 methylprop 2 enoate styrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyl 4 hydroxybenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYL ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "butyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYL BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyl Butyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYL GLYCIDYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "butyl prop 2 enoate styrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYL STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butylmagnesium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyraldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYRIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyronitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTYROPHENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butyryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cacodylic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CADMIUM IODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Mercury Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium metatantalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium niobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CADMIUM OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CADMIUM SELENIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium selenide cadmoselite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CADMIUM SULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium sulfide greenockite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cadmium Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cadmium tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Caerulein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium amide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium borate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium bromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium chlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium cyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium dichromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hydrogen orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hypobromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium hypoiodite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium iodite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium metatantalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium methoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium perbromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium periodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium superoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium titanate caesium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "caesium triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Caffeic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Caffeine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcimycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM ALGINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Biphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM CHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium cyanamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium fluoride fluorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium fluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Folinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM GLUCONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Hydrogenphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Hydrogenphosphate Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM HYDROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium hydroxide slaked lime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM HYPOCHLORITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium hypophosphite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Lactate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM LIGNOSULFONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium metasilicate wollastonite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium monophosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium nitrate tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM OXALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Pantothenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium sulfate anhydrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Sulfate Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium sulfate hemihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CALCIUM THIOGLYCOLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Triple Superphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcium Tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CAMPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Camphorquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cannabidiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Canthaxanthin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Capsaicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBAMIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBARYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon 14",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBON DISULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon Monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon rods",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbon Tetrabromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBON TETRACHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "carbon tetrachloride tetrachloromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBON TETRAFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "carbon trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "carbonate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbonyl cyanide m-chlorophenyl hydrazone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbonyl Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBONYL SULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBOPHENOTHION",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARBOXIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARMINIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "carrageenan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARVACROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carvone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Caryophyllene Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Catane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "catechol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cedrol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cellobiose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cellulose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cellulose Acetate Propionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephaloridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceric Ammonium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceric Ammonium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceric Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 2 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerium 3 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 4 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium 4 oxide cerianite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerium 4 Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CERIUM FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerium Oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cerium silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cerulenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cesium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cesium 134",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cesium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM IODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CESIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cetearyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cetrimonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cetylpyridinium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cevian A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chalcone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHAPS",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Charcoal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chiolite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloramine T",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloranil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chloric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloridazon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORINE DIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine heptoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine hexoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorine octaoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORINE TRIFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorine trioxide fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlormequat Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloro Triphenylphosphine Gold",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROACETALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroacetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROACETONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROACETYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorobiphenyl 110",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorobutanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROCYCLOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLORODIBROMOMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorodimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroethylene Ethylene Vinyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROFORM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroform D",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chloroform trichloromethane methyl trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROGENIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chloromethane methyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROMETHYL METHYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROPENTAFLUOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorophyll A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROPHYLL B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROPICRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROPRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROSULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorosulfonie Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorosulfonyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROTRIETHYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROTRIFLUOROETHYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorotrifluoromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorotrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chlorous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorowax 40",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorozirconyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cholesterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cholesteryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cholesteryl Oleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cholic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Choline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHOLINE CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHROMIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromic Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromite ore",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 2 silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium 3 Acetylacetonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium 3 Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 oxide eskolaite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 3 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 4 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 5 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium 51",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 6 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 6 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium 6 oxychloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "chromium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromium Trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chromotropic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHRYSENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chrysophanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chrysotile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cilastatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinalukast",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CINCHONIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinchonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinnamaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CINNAMIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinnamoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinnamyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinnamyl Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citraconic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citraconic Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citral",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "citrate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citric Acid Ammonium Salt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citric Acid Calcium Salt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CITRONELLAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citronellol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citronellyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalamin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt 2 Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt 2 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 chromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 ferricyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 orthosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt 2 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt 2 Phthalocyanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 stannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 titanite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 2 tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 3 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 3 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 3 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 3 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt arsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt chromium alloy",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cobalt disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Naphthenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Octoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cobalt Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cocamidopropyl Betaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cocarboxylase",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cocinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "COCONUT DIETHANOLAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coenzyme A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coenzyme II",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coenzyme Q10",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Concentrated Acetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Concentrated HCl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Congo Red",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CONIFERYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 1 Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "COPPER 1 CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 1 Cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 1 Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 sulfide chalcocite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 1 thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 2 Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 bromate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 chlorate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 nitrate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 nitrate trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 orthoniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 selenate pentahydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 selenite dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 2 Sulfate Pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 sulfide covellite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 2 tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper 2 Trifluoromethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper 3 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper Compound With Tin 6 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper cuttings",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper Dinitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper foil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper II iron 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper naphthenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper Selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper shots",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper sulfate anhydrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper sulfate pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "copper sulfide digenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copper wire",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coprosterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CORONENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CORTICOSTERONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cortisone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CORTISONE ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Corundum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cotinine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cottonseed Oil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coumarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Coumarin 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Creatine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Creatinine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Croscarmellose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CROTONALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CROTONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Crotonyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Crotyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cryolite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Crystal Violet",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Crystal Violet Lactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cubane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CUMENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CUMENE HYDROPEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Carbonate powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cupric Sulfate Anhydrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cuprous Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Curcumin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyanate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyanide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanidin Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanoacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyanogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYANOGEN BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYANOGEN CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYANURIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyanuric Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyanuric triazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclamic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclic GMP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclobutanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLODODECANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEPTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cycloheptatriene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEPTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyclohexane 1 2 diamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexanecarbonyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANECARBOXALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANECARBOXYLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANEMETHANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexanemethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANETHIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexanone Oxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexene Compd Point",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexene Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cycloheximide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexyl Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOHEXYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclohexylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cycloleucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cycloocta 1 5 diene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOOCTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOOCTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclooctatetraene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOOCTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopentadiene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "cyclopentadienyl anion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOPENTANOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOPENTANONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOPENTENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopentolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopentylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclophosphamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclophosphamide Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLOPROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopropanecarbonyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopropanecarboxaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopropyl Methyl Ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopropylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclopropylmethanamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cynaroside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cystamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cysteine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cytidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cytidine Triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYTOCHALASIN B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cytosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Daidzein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Daidzin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dakriloid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dalamar Yellow",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Damascenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Daminozide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dansyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Danthron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DATP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DCTP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEAE CELLULOSE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Debrisoquine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DECABORANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decabromodiphenyl Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DECACHLOROBIPHENYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DECAETHYLENE GLYCOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decalin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decamethonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DECAMETHYLCYCLOPENTASILOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decanoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decanoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decyl Glucoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deethylatrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEHYDROABIETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEHYDROACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEHYDROASCORBIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "delta Cadinene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "delta Elemene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "delta Tocopherol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "delta Valerolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DENATONIUM BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deoxyadenosine monophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deoxybenzoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEOXYCHOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deoxycorticosterone Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deoxyguanylic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEOXYNIVALENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "deoxyribose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DERMATAN SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESMOSTEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Desoxycorticosterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEUTERIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "deuterium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deuterium Hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "deuterium iodidi",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "deuterium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEXPROPRANOLOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DGTP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diacetone Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diacetyl Monoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diacetyldioxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diacetylmorphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIALLYL DISULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIALLYL PHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIALLYL SULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diallylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium hexabromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dialuminium telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIAMMONIUM PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dianate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diazene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diazinon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diazodiphenylmethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diazolidinylurea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIAZOMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenz A H Anthracene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBENZO 18 CROWN 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzofuran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzothiophene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzoylmethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzyl Disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzyl Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibenzylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBORANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dibromine pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibromomethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYL DISULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYL PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibutyl Phthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYL SEBACATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibutyl Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibutylmagnesium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIBUTYLTIN DICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibutyltin Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichloro p cymene ruthenium 2 dimer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLOROACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLOROACETYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichloroalumane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorocarbene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLORODIFLUOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dichlorodifluoromethane freon 12",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorodimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLORODIPHENYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorofluoromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorophenylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICHLOROSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorphenamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichlorvos",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dichromic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dicopper silver trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICUMYL PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dicyandiamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dicyclohexano 18 crown 6",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICYCLOHEXYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICYCLOHEXYLCARBODIIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DICYCLOPENTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Didecyl Dimethyl Ammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dieldrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHANOLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethoxydimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Acetamidomalonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Acetylenedicarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Azodicarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL CHLOROPHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Cyanomethylphosphonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL DISULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diethyl ether ethoxyethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Ethoxymethylenemalonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Fumarate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL MALEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL MALONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL METHYLMALONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL OXALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Phosphite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL PHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Pyrocarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYL SUCCINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethyl Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylaluminum Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYLENE GLYCOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylene Glycol Dibenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylene Glycol Monoethyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylene Glycol Monohexyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIETHYLENETRIAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylpropion Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylstilbestrol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diethylzinc",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dieuropium dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dieuropium disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dieuropium monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dieuropium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluoraminooxysulfonyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluoroaminosulfonyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Difluorochloromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluorodisulfane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluorogermanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluoroiodophosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIFLUOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluorooxosilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "difluorosilylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "digermanium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Digitonin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Digitoxigenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diglycerol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diglyme",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Digoxigenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihexadecyl Dimethyl Ammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihomo gamma linolenic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydrocholesterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIHYDROGEN PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dihydrogen phosphate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIHYDROPROGESTERONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydrostreptomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydrotachysterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIHYDROXYACETONE PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIIODOMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diiron Boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diiron diiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diiron hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diiron phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diiron tetraiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISOBUTYL ADIPATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISOBUTYL PHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diisobutylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISODECYL PHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISONONYL PHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISOPROPANOLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISOPROPYL ADIPATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diisopropyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diisopropyl Fluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIISOPROPYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diketene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DILAURYL THIODIPROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dilithium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimagnesium Silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dimagnesium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimedone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethoxydimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethoxydiphenylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethoxymethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Acetylenedicarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Adipate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Fumarate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL GLUTARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dimethyl hydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Maleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Malonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL METHYLPHOSPHONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Phosphonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Phthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL SUCCINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dimethyl sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Sulfone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dimethyl sulfoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYL TEREPHTHALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyl Trisulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylanilinium Tetrakis Pentafluorophenyl Borate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYLCARBAMOYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyldioctadecylammonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylglyoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyllaurylamine Isostearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylolurea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyloxosilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylphenylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYLPHENYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMETHYLSILANEDIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dimethylsulfoniopropionate DMSP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethyltin Dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylzinc",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dinitrogen pentaoxide nitrogen 5 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dinitrogen Tetroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dinitrogen tetroxide nitrogen 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dinitrogen trioxide nitrogen 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dioctadecyl 3 3 thiodipropionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dioctyl Phthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dioleoylphosphatidylcholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diosgenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dioxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dioxygen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dioxygen difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dioxygen monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPALMITOYL CEPHALIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPENTAERYTHRITOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipentaerythritol Hexaacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipentaerythritol Pentaacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipentene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHEMANIL METHYLSULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENYL CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Chlorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Diselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENYL DISULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Sulfone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenyl Sulfoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENYLACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENYLACETYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylmethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylmethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylphosphoryl Azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENYLTIN DICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphosphoric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diphosphorus tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diphosphorus tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diphosphorus tetraiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diphosphorus triselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "diphosphorus trisulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dipotassium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipotassium Hydrogen Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dipotassium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPROPYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipropyleneglycolsalicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dirhodium Tetraacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dirithromycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DISILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disodium citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disodium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disodium Hydrogen Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disodium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disodium Octaborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disodium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disodium tetrafluorostannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disperal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disperse Black 9",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DISPERSE BLUE 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disperse Blue 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disperse Red 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disulfate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disulfur decafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disulfuric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "disulfurous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ditantalum Pentaoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dithallium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dithionic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dithionous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dithiothreitol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DITHIZONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ditin tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ditiocarb",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Divinyl Sulfone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Divinylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIZOCILPINE MALEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL 2 Aminobutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL 2 Pentanol 99 Percent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Adrenaline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL ALANINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Alaninol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Arginine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL ASPARTIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL DOPA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Glutamic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Glyceric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Leucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Mandelic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Menthol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL METHIONINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Norepinephrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Panthenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL PHENYLALANINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Proline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL sec Phenethyl alcohol 98 Percent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Serine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Tartaric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Thioctic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Threonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Tryptophan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DL Valine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DMBA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Docosahexaenoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DOCOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Docosanoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DODECANAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DODECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DODECANEDIOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecyl D glucoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecyl Hydrogen Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecyl Methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DODECYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecylamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DODECYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecylheptaglycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecyltrimethylammonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dodecyltrimethylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Domiphen Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DOTRIACONTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DPPC",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Drethyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Drierite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Drometrizole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DTTP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Durapatite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Duroquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 2 silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dysprosium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "E beta farnesene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EDTA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EDTA Tetrasodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EDTMP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EGTA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EICOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eicosapentaenoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Einsteinium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Elaidic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Elemol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ellagic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Emodin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Emulphor",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Enoxolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Entellan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Epibromohydrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Epinephrine Bitartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Erbium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium sodium tetraiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "erbium triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Erioglaucine A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERUCAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERUCIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERYTHRITYL TETRANITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Erythrosin B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Esculetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estradiol Benzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estragole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estrone Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETFE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanol Absolute",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ethanol ethyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanolamine Borate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethenamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ether Anhychrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHIDIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethopropazine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ethoxide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethoxyquin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 aminoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ethyl 2 aminothiazole 4 carboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 bromoisobutyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 bromopropionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 cyano 3 3 diphenylacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 cyanoacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 methylacetoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 methylbutyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 oxocyclohexanecarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 2 oxocyclopentanecarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 3 ethoxypropionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 4 bromobutyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl 4 chloroacetoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Acetoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL BENZOYLACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Bromoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Bromopyruvate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL BUTYRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Caproate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL CHLOROACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL CHLOROFORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL CINNAMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL CROTONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL CYANOACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL DECANOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Diazoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Dodecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Glyoxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Hydrogen Malonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL ISOBUTYRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL ISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Isothiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL ISOVALERATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL LACTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL LINOLEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Methacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL METHANESULFONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Methyl Carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL OCTANOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Oleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Pentanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL PHENYLACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl piperidine 4 carboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Propiolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL PROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL PYRUVATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Tetradecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Thioglycolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL TRIFLUOROACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyl Vinyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYL VINYL KETONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHYLALUMINUM SESQUICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylan CD 109",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylcyclohexane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyldiisopropylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene Brassylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ethylene dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene glycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene glycol diacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene Glycol Diglycidyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene Glycol Dimethacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene Glycol Distearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene propene 1 butene polymer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylene Propylene Polymer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylenediamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylmorphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethylparaben",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethyne",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethynylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etynodiol diacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eucalyptol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eugenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Europium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium 2 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium 3 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium diiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium diniobium hexaoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium niobium dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Europium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Europium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Europium Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium titanium trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "europium tungsten tetraoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Farnesol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fastogen Green Y",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Favone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fayalite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Felypressin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FENBUTATIN OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fencamfamin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fenchlorphos",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fenchone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fenclonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fermium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Ammonium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferric chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferric oxide Iron 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferric sulfate iron 3 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferric Versenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferricyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrocene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferrous Ammonium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrous ferric oxide Iron 2 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrous fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferrous Ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrous oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrous sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferrous Sulfate Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferrous Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ferulic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fisetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flavin Adenine Dinucleotide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flavin Mononucleotide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUAZIFOP P BUTYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flucloxacillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUORANTHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUORENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluorescein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluorine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fluorine nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUOROACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoroacetylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoroboric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoroethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoroform",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fluoroimidogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUOROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluorometholone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fluorosulfate radical",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluorosulfonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FMOC ALA OH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FMOC L leucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FMOC L phenylalanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FMOC L proline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FMOC Lys Boc OH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Folic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Forasartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Formaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Formamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "formamide methanamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "formate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Formic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "formic acid methanoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Formononetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "forsterite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Friedelin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fructose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fucostanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fullerene C60",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fullerene C70",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fumaric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FUMARONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fumonisin B1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FURFURYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Furfurylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gadodiamide Hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gadolinia",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GADOLINIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gadolinium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gadolinium Gallium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gadolinium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gadolinium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Galactitol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Galangin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Galaxolide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 orthoarsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 sulfate octadecahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium 3 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium 67",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium Antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium monofluoride monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium Monoselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gallium Phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gallium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Butyrolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Cyclodextrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma cyhalothrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Decalactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Linolenic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Nonanolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GAMMA TERPINENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gamma undecalactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gamma Valerolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Genistein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Genistin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GERANIOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GERANYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Geranylacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germacrene D",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germanium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germanium 2 Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germanium Disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Germanium Tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "germanium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GIBBERELLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gibberellin A4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gillespite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ginsenoside RB1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ginsenoside RE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ginsenoside RG1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Globulol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gluconic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gluconolactone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "glucose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glucose 1 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLUFOSINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "glutamic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "glutamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLUTARIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLUTARIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glutathione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glyceraldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCERALDEHYDE 3 PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycerin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycerol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glyceryl Tribenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCIDOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCIDYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycidyl Phenyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycinamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCINE ETHYL ESTER HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycine Methyl Ester Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCINE SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycocholic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCOGEN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycol Dilaurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycolaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycylglycine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycylglycylglycine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glycyrrhizic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYMIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYOXAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glyoxylic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GM2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "goethite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gold",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold monoboride monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold triselenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold triselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gold trisulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gossypol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gramicidina",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Grepafloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guaiacol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guaiazulene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanabenz",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanethidine Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanidine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "guanidine nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GUANOSINE TRIPHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Haematoxylin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hafnium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium 4 acetate basic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium 4 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium 4 oxychloride octahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium 4 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hafnium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hafnium Tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HECTORITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEDTA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Helium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Helium 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hematin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heme",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HENEICOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HENEICOSANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPES",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heptachlor",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTACHLOR EPOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTADECANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heptanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEPTANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heptylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hesperetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hesperidin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hetacillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexacarbonylchromium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACHLORO 1 3 BUTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACHLOROCYCLOPENTADIENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACHLOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXACOSANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl 2 ethylhexanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl 2 hydroxyethyl dimethylammonium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl Dihydrogen Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl Lactate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecyl Octanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexadecylbetaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexafluoroacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexafluoroacetylacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAFLUOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hexafluorodisilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAFLUOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexafluoropropene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexafluorosilicic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexahydrophthalic Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAMETHYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAMETHYLCYCLOTRISILOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethyldisilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethyldisilazane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAMETHYLDISILOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethylenediamine Sebacate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethyleneimine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXAMETHYLPHOSPHORAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethylphosphorous Triamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXANAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexanes",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexanoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXATRIACONTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexobarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexobarbital Sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEXYLCAINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexylene Glycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hinokitiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hippuric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Histamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "histidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "holmium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "holmium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "holmium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hombreol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Homovanillic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Humulene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydramethylnon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrantoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrazine Hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrazine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrazine Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrazoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydriodic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrobromic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrochloric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrocyanic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrofluoric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen astatide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen carbonate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen gas",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen phosphate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogen Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen sulfide hydrosulfuric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydrogen sulfite ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrogenated MDI",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydroiodic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydronium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydroxide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyaluminum Distearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyethyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyethyl Starch",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxylamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydroxymethylfurfural",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hypericin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hyperoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hypobromous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hypochlorous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hypofluorous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hypoiodous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hyponitrous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hypophosphorous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hypoxanthine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Icosyl Docosanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ilmenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IMAZETHAPYR",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imidazolidinyl Urea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IMINODIACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INDAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indanthrone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indazolium 3 carboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INDENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INDIGO",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indigo Carmine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 1 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 1 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 1 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium 111",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 2 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 bromodiiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 chloride tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 dibromoiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 nitrate tetrahemihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 sulfate monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium 3 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium Arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium Phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indium Tin Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indole 2 carboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indole 3 acetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indole 3 butyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INDOLE 3 CARBOXALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Inosine Triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Inosinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INVERT SUGAR syrup",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine 1 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodine 125",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodine 129",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODINE MONOCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodine pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODIPAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodixanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodoacetamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODOACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODOBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodobenzene Diacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodoethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODOFORM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IODOMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodomethane methyl iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodosylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iodotrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iodous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iofendylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IPTG",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iridium 192",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iridium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Irinotecan Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 dihydrogen phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 fluoride tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 iodide tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron 2 Phthalocyanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 selenate ferrous selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron 2 Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 bromide hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron 3 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron 3 Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IRON ALUMINIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron arsenic sulfide arsenopyrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron Boride FeB",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron Carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IRON DEXTRAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron diiodide iron 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron fillings",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron II III oxide magnetite triiron II III tetraoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron monoiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron monoxide iron 2 oxide w stite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron oxide iron 3 oxide hematite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron pentacarbonyl pentacarbonyl iron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron Potassium Hydroxide Sulfate Fe3K OH 6 SO4 2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iron powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron sulfide iron 2 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron tri phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "iron trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isatoic Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISETHIONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iso Amyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iso Amyl Alcohol Isopental Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOAMYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOAMYL GALLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOAMYL NITRITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOAMYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoascorbic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoborneol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobornyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobornyl Acrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyl 4 hydroxybenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyl Chloroformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyl Isobutyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYL VINYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYRALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOBUTYRIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyric Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyronitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyrophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isobutyryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isocitric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isocyanic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isodecyl Oleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoeugenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOMALTOSE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISONICOTINIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isooctadecyl Pivalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPHORONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPHORONE DIISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPHTHALIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isophthaloyl Dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPHYTOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoprenaline Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropenyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropyl 4 hydroxybenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROPYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropyl Chloroformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropyl Isostearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROPYL MYRISTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROPYL PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROPYL STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROPYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOPROTURON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOQUINOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isorhamnetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOSTEARIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isothiocyanatobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOTHIOCYANIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isothujone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOVALERIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isovaleryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Itaconic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Jasmonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Juglone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Kaempferol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Kainic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "KAOLIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "keatite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "kerosene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ketene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Kinetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Kojic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Krypton 85",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "krypton difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Kynurenic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L alanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Alanine methyl ester hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Alanyl L alanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L arginine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Ascorbyl 6 palmitate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L asparagine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L aspartic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L carnitine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Carnosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L citrulline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L cystathionine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Cysteic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L cysteine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Cysteine hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L cystine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L DOPA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Ethionine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L glutamic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L glutamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L histidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Homocysteine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L homoserine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Hydroxylysine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Hyoscyamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "l isoleucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Lactic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L leucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L lysine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Lysine hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Malic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Menthol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L methionine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L mimosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Norleucine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L norvaline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L ornithine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L phenylalanine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Phenylalanine methyl ester hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Phenylalaninol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L proline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Prolinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Pyroglutamic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L serine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L tartaric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L threonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L thyroxine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L tryptophan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L tyrosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L valine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Valine methyl ester hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "L Valinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lactic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lactitol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Laminaran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lanosterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lanthanum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum 3 phosphate crystal hemihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lanthanum Boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LANTHANUM NICKEL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lanthanum Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lanthanum trifluoride dimer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lapirium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lauramine Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lauric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Laurocapram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Laurox 9",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lauroyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lauroyl Peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lauryl Sarcosine Sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lawrencium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lawsone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead 2 Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead 2 Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead 2 Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD 210",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead 212",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead 214",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead 4 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Diacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead granular shots",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Nitrate crystals",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Oxide red powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Oxide yellow powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD SELENIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEAD TETRAACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lead tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Zirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lead Zirconate Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lepidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lepidocrocite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leucite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leucoglucosan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leuenkephalin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lignoceric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "limonene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "limonite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Linalool",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LINALYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Linoleamide MEA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Linoleic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Linolenic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "linseed oil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lipase",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium 12 hydroxystearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Aluminium Hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium bicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Bis Trimethylsilyl Amide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium bisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium borohydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium bromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium bromide dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LITHIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LITHIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium chlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium chromate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Colbaltite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium cyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium deuteride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium dichromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Diisopropylamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LITHIUM FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hexafluoroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Hexafluoroarsenate 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Hexafluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hydrogen sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hypofluorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium hyponitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Iron Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium metavanadate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium methoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Nickel Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium nitrate monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LITHIUM STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium tantalate lithium metatantalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium tetraborate pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lithium tetrafluoroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithium Trifluoromethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LITHOCHOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lithol Rubine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LONGIFOLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LUMINOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lupeol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lutein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Luteolin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lutetium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lutetium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lutetium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LYCOPENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "lysine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lysine Vasopressin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M Anisidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M cresol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M Phenylenediamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M Toluidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M XYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "M Xylylenediamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium aluminium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium ammonium phosphate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Ascorbyl Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium bismuthide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium carbonate magnesite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium chlorate hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium chromate pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Dioxide crystalline powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Dioxido Oxo Silane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Dodecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM HYDROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium hydroxide milk of magnesia",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium mesh",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium metal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium metal powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium metal ribbon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium metasilicate enstatite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium nitrate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium oxide magnesia periclase",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Oxido Oxo Iron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium polonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium purified",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium pyrophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium shavings",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MAGNESIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium Sulfate Heptahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "magnesium tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnesium turnings",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "maitotoxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MALACHITE GREEN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maleic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maleic Acid Styrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MALEIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MALEIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Malic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "malonate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Malondialdehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Malonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MALONONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "malonyl Co A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maltitol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MALTOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maltose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maltotetraose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maltotriose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese 0 Carbonyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese 2 Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 bromide tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MANGANESE 2 FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 formate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 formate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 nitrate tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 3 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese 3 bismuthide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MANGANESE CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MANGANESE CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese dioxide pyrolusite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese fluoride trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese II III oxide trimanganese tetroxide hausmannite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Oxide MnO",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganese Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganese trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "manganite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganous Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Manganous Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Marble chips",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MBBA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mecoprop dimethylammonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MELAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Melamine Cyanurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Melitten",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Menadione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mendelevium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mentha spicata herb oil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Menthoglycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MEPHENYTOIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercaptoacetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercaptosuccinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MERCURIC BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MERCURIC CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MERCURIC NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MERCURIC OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercuric Oxide yellow",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercuric Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercurous Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercurous Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercury",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 1 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 1 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 1 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 1 perchlorate tetrahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercury 2 Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 ammonium thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 benzoate monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 bromate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 fulminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 nitrate monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 orthoarsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 perchlorate trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 sulfide cinnabar",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury 2 tungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercury Diiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mercury fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercury Selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mercury Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Meropenem Trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mescaline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MESITYL OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MESITYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "meso 2 3 Dimercaptosuccinic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "meso Erythritol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MET enkephalin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METALAXYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metaphosphoric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metasilicic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metasystox",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHACROLEIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHACRYLAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHACRYLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methacrylonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHACRYLOYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methadyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHALLYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methane D4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methanediimine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHANESULFONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methanesulfonyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methanol Anhydrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methionine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methoxamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHOXYACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methoxyacetyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methoxychlor",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methoxyethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methoxyflurane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHOXYTRIMETHYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl 2 bromopropionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl 2 hexyl 3 oxocyclopentanecarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl 4 aminobenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL 4 FORMYLBENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl 4 hydroxybenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL 4 METHYLBENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ACETOACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl alpha D galactopyranoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl alpha D glucopyranoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ANTHRANILATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Benzoylformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl beta D glucopyranoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Bromoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Butyrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL CHLOROACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL CHLOROFORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Cinnamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Crotonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL CYANOACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL DECANOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methyl ethyl ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methyl ethyl ketone peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL GALLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Gluceth",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Glycinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL HEXANOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methyl isobutyl ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ISOBUTYRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ISOCYANIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ISOTHIOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Jasmonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl L leucinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Laurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL LINOLEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL LINOLENATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL METHANESULFONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL NICOTINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Octanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL OLEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL ORANGE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl P toluenesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PHENYL SULFONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PHENYL SULFOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PHENYLACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Propenyl Ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PROPIOLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL PYRUVATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Red",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Tetradecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL THIOGLYCOLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Trifluoromethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYL VINYL KETONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Yellow",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylarsonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLCYCLOHEXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLCYCLOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyldiphenylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylene Blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylene Blue Trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methylene chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylenecyclohexane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLEUGENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylglyoxal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLHYDRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylhydroquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "methylketol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyllithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylmagnesium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylmagnesium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylmalonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylmercuric Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylmercury 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylphosphonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltriacetoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLTRICHLOROSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltriethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltrioctylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltriphenylphosphonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METHYLUREA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metrifonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metrizamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METSULFURON METHYL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MGK 11",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mica",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Michler S Ketone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mineral oil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MOLINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdenum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum 4 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdenum 5 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum difluoride dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdenum Monocarbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdenum Silicide MoSi2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum sulfide molybdenum disulfide molybdenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum tetrafluoride monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum trifluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "molybdenum trifluoride sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MOLYBDENUM TRIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Molybdic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mometasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monensin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monoaluminium ditelluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monobenzone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monoeuropium monovandium dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monofluorine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monofluorodiiodine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monomanganese monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monoolein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monooxygen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monopotassium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monosodium citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monosodium Edetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monosodium glutamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monosodium Methanearsonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Monosodium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "monosulfur monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "montmorillonite clay",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MONURON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Morin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MORPHOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MPTP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "mullite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Muscimol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mustard Gas",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MYCLOBUTANIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mylaxen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "myo inositol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MYRCENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Myricetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Myristamine Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Myristoleic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MYRISTYL MYRISTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Myrtenal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Myrtenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NAD",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NADH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nadide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NADPH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naled",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nalidixic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthacene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "naphthalene 1 5 diol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthalene 2 sulfonic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthalenesulfonic acid dinonyl  barium salt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naphthol AS",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naringenin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Naringin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Natural Beryl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nebularine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neocuproine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neodymium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium 2 chloride neodymium dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium 3 iodide neodymium diiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium 3 oxide dineodymium trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "neodymium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neodymium Trinitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neon 20",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NEOPENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NEOPENTYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neopentyl Glycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NEPHELINE SYENITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neptunium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neptunium 237",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nerol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NEROLIDOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Neryl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NEUTRAL RED",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "New Coccine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 bromide hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 bromide trihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 hypophosphite hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 iron 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel 2 Nirtate Hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 nitrate hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 orthophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 orthosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 oxalate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel 2 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 2 sulfide millerite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel 3 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel arsenic sulfide gersdorffite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NICKEL CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NICKEL CHROMIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel Chromium Iron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NICKEL NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel oxo hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickel Silicide NiSi",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NICKEL SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nickel tetracarbonyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nickelous Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nicotinoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NINHYDRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Niobium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "niobium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "niobium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "niobium 5 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Niobium 5 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "niobium 5 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Niobium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Niobium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Niobium Selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITRIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitric Acid concentrated",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitric acid hydrogen nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitric Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitric oxide nitrogen oxide nitrogen 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitridotriphosphorous hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITRILOTRIACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrite ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrogen Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrogen dioxide nitrogen 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrogen Pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROGEN TRIFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrogen trifluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrogen triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitroglycerin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitroglycerine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitroguanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrooxidanyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitroprusside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROSOBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrosodifluoroamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrosyl bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROSYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrosyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrosyl iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROUS ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nitrous Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitrous oxide dinitrogen oxide nitrogen 1 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitroxyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitryl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "nitryl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nobelium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONADECANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONANAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NONANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Noradrenaline Bitartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Norspermidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Novobiocin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCDD",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCHRATOXIN A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCIMENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octabenzone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTACHLORODIBENZOFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTACOSANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octadecanamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTADECANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octadecanethiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octadecanoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTADECYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTADECYLTRICHLOROSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octafluorocyclobutane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "octafluorotrisilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTAMETHYLCYCLOTETRASILOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTAMETHYLTRISILOXANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octan 2 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octan 2 ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octanedioic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octanoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octanoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octhilinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octinoxate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octocrylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octogen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octopamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octyl Isononanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octyl Phenyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octyl Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OCTYL STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Octyldodecyldimethylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oenin Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Okadaic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oldhamite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oleamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oleandomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OLEANOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oleic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OLEYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oleylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oligomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oralith Brilliant Pink R",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Orcinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Orotic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ortho Phenanthroline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "orthobenzoquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "osmium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "osmium oxide tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OSMIUM TETROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxacyclohexadecan 2 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OXADIAZON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxalacetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "oxalate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxalic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxalic Acid Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxalyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxanthrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OXAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxetane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxidase Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxidopamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxiglutatione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxindole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxine copper",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxirane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxybenzone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxybuprocaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OXYCHLORDANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxyfluorfen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxygen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "oxygen 2 zirconium 4",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "oxygen difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "oxygen monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oxymetazoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "OZONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ozonide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paeoniflorin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PAEONOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palatinose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium 2 Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium 2 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium Alloy Pgc",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palladium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palmitic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palmitoleic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palmitoyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Palmitoyl Coenzyme A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pantothenyl Ethyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "para dichlorobenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "paraffin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paraffin Wax",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PARAQUAT",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paraquat Dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pararosaniline Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pemetrexed Disodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PEMIROLAST POTASSIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTACENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTACHLOROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTACHLOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTACHLORONITROBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentachlorophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentadecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTADECANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaerythrite Tetrabehenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAERYTHRITOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaerythritol tetra 2 ethylhexanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaerythritol Tetraacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAERYTHRITOL TETRANITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaerythritol Triacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaerythrityl Tetrastearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentaether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAETHYLENEHEXAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pentafluorobenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pentafluorobenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAFLUOROETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAFLUOROPHENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentafluorophosphorane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pentafluorosulfanyldifluoroamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentagastrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTAMETHYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentamidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTANAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentane 1 5 diamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentapotassium Triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentasodium DTPA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentazocine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentobarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PENTOBARBITAL SODIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentolonium Tartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentosan Polysulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentostatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentoxifylline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pentylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PERACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perboric Acid Sodium Salt Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "perbromic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PERCHLORIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perfluorodecalin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perfluorohexane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PERFLUOROOCTANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "perfluoroperoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perfluoropropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perfluorotributylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perhexa 3M",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "periodic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "permanganate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "peroxide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Peroxyacetyl Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "peroxydisulfuric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "peroxydisulfuryl difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "peroxymonosulfurous acid aqueous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Perphenazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pertechnetate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "perxenic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PERYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Petroleum Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PGP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phantolid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENANTHRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENANTHRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenazine Methosulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenethyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENETOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenindione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenmedipham",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenol formaldehyde resin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenol Red",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenolphthalein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENOTHIAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENOXYACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenoxyacetyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYL BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYL CHLOROFORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYL ISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenyl Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylacetaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYLACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylacetone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylacetonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYLACETYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phenylanine LPA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylboronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylglyoxal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHENYLHYDRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenyllithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylmercuric Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylmethanesulfonyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylmethylsulfonyl Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylphosphonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylpyruvic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenylthiourea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenyltriethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phenyltris Trimethylsiloxy Silane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pheophytin A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PhIP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phloretin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phlorizin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phloxine O",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phorbol 12 myristate 13 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSGENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphane Tungsten Tetracontahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphenodithioic fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphenothious fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphinothricin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphocreatine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphoenolpyruvate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphonitrilic Chloride Trimer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphoric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphorous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphorus",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSPHORUS 32",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphorus difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphorus monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSPHORUS OXYCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSPHORUS PENTACHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphorus pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphorus Pentasulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphorus pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSPHORUS TRIBROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHOSPHORUS TRICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phosphorus Trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphoryl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phosphoryl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "phthalic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHTHALIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHTHALIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHTHALIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PHTHALOCYANINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phthalonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phthaloyl Dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Physcion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phytane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phytic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Phytol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PICLORAM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Picolinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PICRIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Picropodophyllin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PICROTOXIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Picryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pigment Blue 29",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pigment Red 122",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pigment Red 254",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pimelic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PINACOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pinacolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pinocarvone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIPECURONIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Piperacillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Piperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Piperazine 2 5 dione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIPERIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "piperidine 2 carboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Piperine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIPERITONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIPERONAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIPERONYL BUTOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PIRIMICARB",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pivalic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pivaloyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Platinum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "platinum difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Platinum Silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "platinum tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Plicatic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PLUTONIUM 238",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PLUTONIUM 239",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Plutonium 240",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "plutonium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polonium 210",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polonium 218",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium dibromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polonium trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Poly ethylene co methacrylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Poly ethylene ethyl acrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polybutene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polyelectrolyte 60",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POLYETHERIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polyethylene Glycol Monostearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polyhall",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polypropylene Glycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polypxyethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polyquaternium 11",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polyquaternium 7",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polystyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POPC",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POPOP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Porphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium 40",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Alum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium aluminium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium aluminium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM BENZOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Bicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Biphthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Bisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium bisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium bitartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Borohydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM BROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM CHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium chlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Chromate Merk",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Chromate Neutral",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium chromium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM CYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Cyanate powder",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM CYANIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM DICHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Dichromate crystal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Dideuterium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Dihydrogen Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Ferricyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Ferrocyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM FLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hexachloroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hexafluoraluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Hydrogen Phthalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hydroxide custic potash",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hypofluorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium hyponitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM IODATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium iron 2 hexacyanoferrate 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM LACTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Laurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Lauryl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium manganate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM METABISULFITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Metaphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Methoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Myristate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM NITRITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM PERCHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Periodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM PERMANGANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM PERSULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM PHTHALIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Pyrophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium sodium tartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM SORBATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM SULFITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium tert butoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium tetrachloroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Tetrachloropalladate 2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium tetrafluoroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "POTASSIUM THIOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Thioglycolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "potassium thiosulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium Titanium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pralidoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Praseodymium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "praseodymium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Praseodynium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pregnanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pregnenolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PRISTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Proadifen Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Proflavine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Promethium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Prometryn",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "propanamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propanediol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propanenitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propanoic acid 2 hydroxy  polymer with hydroxyacetic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "propanol 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPARGYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPARGYL BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propargyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propargylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "propene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propidium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPIOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propionaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPIONAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propionic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPIONIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propionyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propiophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propranolol L",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyl Gallate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyl Isocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PROPYLENE CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propylene Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyne",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Propyzamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "protocatechuic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Protoporphyrin 9",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Prussian Blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pulegone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pumice Stone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Purine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Putrescine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyranine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrazine 2 carboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pyrazinoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRIDAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridazine 3 6 diol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridine N oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "pyridinium ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRIDOXAL HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridoxal Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridoxamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridoxine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRIDOXINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrilamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRILAMINE MALEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrimethamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRIMIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrocatechol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrodone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyrogallol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYROMELLITIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRROLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PYRROLIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyruvic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quaternium 15",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quaternium 24",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quaternium 52",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quercetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quercitrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinacridone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "quinaldic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "QUINALPHOS",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "QUINAZOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinizarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "QUINOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinoline 2 carboxylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinoline Yellow",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Quinolinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "QUINOXALINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "QUINUCLIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "R 1 Phenyl 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "R 1 phenylethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RADIUM 224",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RADIUM 226",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Radium 228",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "radium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Radon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Radon 220",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RADON 222",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "radon difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Reactive Black 5",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Reagent Alcohol Ethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Resveratrol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Retinal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Retinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RETINYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rhenium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rhenium heptafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rhenium Heptoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rhenium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rhenium monoxide pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rhenium tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RHODAMINE B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RHODANINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rhodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rhodium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Riboprine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ribose 5 Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RICINOLEIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ROSE BENGAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rosmarinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rotenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium bicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium bisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium bisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium bromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubidium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium bromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubidium Carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RUBIDIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium chlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium cyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hypobromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hypochlorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium hypoiodite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubidium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium iodite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium methoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubidium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium perbromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium periodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "rubidium sulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ruthenium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ruthenium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ruthenium Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ruthenium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ruthenium tetroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rutherfordium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S  Methoprene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S 1 Phenyl 1 propanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S 1 Phenylethanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S adenosylhomocysteine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S Ibuprofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S Methyl 2 amino 3 phenylpropanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "S methyl 2 aminopropanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SABINENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Salicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SALICYLALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Salicylaldoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Samarium Cobalt",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "samarium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "samarium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Santolite MS",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sarcosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SARIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SAXITOXIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Scandium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "scandium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "scandium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "scandium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "scandium oxide scandia",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Scopoletin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sebacic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sec BUTYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sec BUTYLBENZENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sec Butyllithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Secrepan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SELENIOUS ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Selenium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 1 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 4 oxychloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium 4 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SELENIUM DIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Selenium Disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Selenium Sulphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Selenomethionine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "selenyl difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Semicarbazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SEMICARBAZIDE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "serine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SERMORELIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Serotonin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sesamol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Shikimic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sibutramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "siderite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SILICIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silicon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon 4 dioxide silica quartz",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SILICON CARBIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silicon Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silicon tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver 1 Carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 1 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 1 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 2 dichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver 2 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 3 trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver 3 triiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver acetylide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Behenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver bromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver dibromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver dichromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver fulminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver hexafluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SILVER NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SILVER PERCHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver permanganate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver subfluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Sulfadiazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "silver tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Silver Trifluoromethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Simazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Simvastatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SINAPIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sincalide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sisomicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Siver Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium 1 octanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium 2 hydroxyethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium 22",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium 4 methylbenzenesulfinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ALUMINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ALUMINOSILICATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM AMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ARSENITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ASCORBATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Azide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Barbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Benzenesulfinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Benzenesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Benzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM BICARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium bicarbonate baking soda",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Bismuthate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium bisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM BISULFITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium borate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Borohydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM BROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM BUTYRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium carbonate soda ash",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium chloride rock salt halite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CHLORITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Chloroacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CHOLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Cobaltinitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Cocoyl Isethionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Cyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CYANIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Cyanoborohydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM CYCLAMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Decyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Deoxycholate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium deuteride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM DICHLOROISOCYANURATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dichromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium dichromate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium dicyanoaurate 1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM DIETHYLDITHIOCARBAMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dimethylarsinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dimethyldithiocarbamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium disulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dithionite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dodecanoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Dodecyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ERYTHORBATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM FORMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM GLUCONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Glutamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Glycolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium hexachloroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hexadecyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hexafluorosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium hexametaphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hyaluronate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM HYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hydrogen Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM HYDROSULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hydroxymethanesulfinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Hydroxymethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM HYPOCHLORITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium hypofluorite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium hyponitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM HYPOPHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium isostearoyl 2 lactylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium L pyroglutamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM LACTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium laureth 4 phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM LAURIMINODIPROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Lauroamphoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Lignosulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium lithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metaarsenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Metabisulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Metabisulfite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM METABORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metaniobate heptahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Metaphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Metasilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metatantalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Methanolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium methoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Molybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM MONOFLUOROPHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Myreth Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Myristoyl Sarcosinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Naphthalide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Nitrate crystal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Nitrate granular",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM NITRITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Nitroprusside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM OCTANOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM OLEATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM ORTHOSILICATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Orthovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium p cumenesulphonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium p toluenesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Pentachlorophenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium percarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM PERCHLORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Periodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM PEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Peroxydicarbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Persulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Phenoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Phosphate Dibasic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Phosphate Monobasic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Phosphate Tribasic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM PROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium pyrovanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM PYRUVATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium salt of cacodylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SELENATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SELENITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SESQUICARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Stannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM STEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium stearoyl 2 lactylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium sulfanilate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SULFATE DECAHYDRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium sulfate salt cake",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM SULFITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Taurocholate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium tert butoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tetraborate decahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tetrachloroaluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tetrachloropalladate 2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tetradecyl Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tetranitratoborate 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tetraphenylborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tetrasulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM THIOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM THIOGLYCOLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Thiomethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium thiomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Thiophenolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Thiosolfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM THIOSULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM THIOSULFATE PENTAHYDRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Thiosulfate solution",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium tricarbonatocobaltate 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM TRICHLOROACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium trideceth 7 carboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium trifluorostannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Tripolyphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SODIUM TUNGSTATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium Valproate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sodium zincate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solketal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Green 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Orange 2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Orange 3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Red 23",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Red 26",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Solvent Violet 13",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SOMAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sorbic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sorbitan Monooleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sorbitan monooleate Tween",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SORBITAN MONOPALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SORBITAN MONOSTEARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Spermidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Spermine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sphingosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SQUALANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Squalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Squaric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stachyose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "stannate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stannous Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STANNOUS OCTOATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stannous Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STANNOUS SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stannous Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STANOLONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Starch soluble",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Staurolite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Staurosporine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Steapyrium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stearic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stearyl Palmitate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Steel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Stevioside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STIGMASTEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium 89",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium 90",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium bromide hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STRONTIUM CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Ferrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium hafnate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium hydrosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium iodide hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STRONTIUM NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium oxalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium permanganate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium ruthenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium selenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STRONTIUM SULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "strontium tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Titanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strontium Zirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STROPHANTHIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Strychnine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "STYRENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Styrene butadiene copolymer",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Styromal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Substance P",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Succinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SUCCINIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SUCCINIMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sucralose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sucrose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SUCROSE OCTAACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sudan I",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfacetamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfacytine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfadiazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfadimethoxine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFADOXINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfaguanidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfamerazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfamethazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfamethizole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfamethoxazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfamethoxypyridazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFAMIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFANILIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfapyridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfate Reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfite ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfluramid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFOLANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFOSUCCINIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfovinic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfur",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfur 35",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFUR DICHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfur Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFUR HEXAFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfur Precipitated",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfur Sublimed",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur sulphur",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFUR TETRAFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfur trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFUR TRIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFURIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfuric acid hydrogen sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfurie Acid Cone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulfurous Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SULFURYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfuryl difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "sulfuryl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sulisobenzone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sunset Yellow FCF",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "superoxide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Synthetic Impregnating Oil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SYRINGALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "SYRINGIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "T butyl alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "T butyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "T2 Toxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tannic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tantalum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum 5 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum 5 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum 5 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum monoxide trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tantalum Nitride TaN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tantalum pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tantalum Pentoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tantalum Silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tartaric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tartrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tat BP",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Taurine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TAUROCHOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TAXIFOLIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tebuconazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Technetium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Technetium 99",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Teichomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "telluric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tellurium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TELLURIUM DIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurium hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tellurous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Terbium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "terbium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Terbuthylazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TEREPHTHALALDEHYDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TEREPHTHALIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Terephthalonitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Terephthaloyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Terpinen 4 OL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TERPINOLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Amyl methyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TERT BUTYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert butyl acetoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl acrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl bromoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl carbazate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl ethyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TERT BUTYL HYDROPEROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TERT BUTYL ISOCYANATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert BUTYL ISOCYANIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl methyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyl peroxybenzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butylbenzene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butylchlorodiphenylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tert Butyldimethylsilyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butylhydroquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert Butyllithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tertiary Butanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraamminezinc 2  Carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetraarsenic pentaoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetraarsenic tetrasulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetraarsenic trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetraarsenic trisulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRABENAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabromobisphenol A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Hexafluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylammonium Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylphosphonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrabutylstannane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetracaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetracaine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRACHLOROETHYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrachlorosilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrachlorvinphos",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetracosactide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRACOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRACYANOETHYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetracycline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRACYCLINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRADECANAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetradecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetradecanoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetradecylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRADIFON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethyl Orthosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAETHYL PYROPHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAETHYLAMMONIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAETHYLAMMONIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethylammonium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethylammonium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethylammonium Perchlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethylammonium Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAETHYLENE GLYCOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethylene Glycol Dimethacrylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAETHYLENEPENTAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraethyllead",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrafluoroborate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrafluoroethene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetrafluoroethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetrafluorohydrazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrafluoromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrafluorosilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraglyme",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrahydro 4H pyran 4 one",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetrahydrocannabinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrahydrofolic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAHYDROFURAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetrahydrofuran THF",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAHYDROFURFURYL ALCOHOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAHYDROFURFURYL METHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAHYDROPHTHALIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAHYDROPYRAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrahydrothiophene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrakis Triphenylphosphine Palladium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetramethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetramethrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetramethylammonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAMETHYLAMMONIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAMETHYLAMMONIUM HYDROXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetramethylammonium Iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAMETHYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetramethyltin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRAMETHYLUREA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRANITROMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tetraphenylgermane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetraphenyltin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrapotassium EDTA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrapropylammonium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrapropylammonium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrasodium Etidronate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRASODIUM PYROPHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrathiafulvalene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TETRODOTOXIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetryl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thalliium 1 malonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thallium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thallium 1 Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thallium 1 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 formate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 hexafluorophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 1 tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thallium 201",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thallium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thallium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THEBAINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Theobromine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiazolyl Blue",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiazyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiazyl trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiirane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOACETAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thioanisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOBENZAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiobenzoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiocarbanilide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiochromone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiocyanic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiodiglycol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiomorpholine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thionin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIONYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thionyl difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thionyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiopental",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOPENTAL SODIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiophanate methyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOPHENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiophene 2 carbaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOPHENE 2 CARBOXYLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOPHOSGENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiophosphoryl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thioproperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thioridazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiosalicylic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiosemicarbazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiosulfate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiosulfuric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiosulfurous acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiotepa",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thiothionyl fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiothixene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THIOUREA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiourea Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thioxobarium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thoria",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thorium 228",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thorium 230",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thorium 234",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium 4 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium carbonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium monofluoride monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thorium Tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thorium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "threonine Thr",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thulium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thulium 3 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thulium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thullium 3 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thymidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thymine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "THYMOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "thymolphthalein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin 2 Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 bromotrichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 chromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 dibromodichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 dichlorodiiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 sulfate dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin 4 tribromochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin granular",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tin monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin purified",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin Tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium 3 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium 4 dichlorodiiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium 4 Ethoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium 4 n Butoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium 4 oxynitrate hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium 4 trichloroiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TITANIUM DIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium dioxide rutile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium fluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium Monoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium Silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium Sulfide TiS2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Titanium Tetraisopropanolate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "titanium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tocopherols",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Toluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TOPOTECAN HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans  Allethrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRANS 1 2 DICHLOROETHYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Butene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Hexen 1 Ol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Hexenal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Hexene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Nonenal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Octenal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 2 Pentene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans 4 Hydroxy L proline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Anethole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans beta Nitrostyrene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Piperylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Stilbene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Stilbene oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans tetrazene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Vaccenic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trans Zeatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trehalose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triacetin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIADIMENOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triallate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triallyl Cyanurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIALLYL ISOCYANURATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIBUTYL CITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIBUTYL PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIBUTYL PHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributyl Vinyl Tin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIBUTYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributylstannylium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributyltin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributyltin Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tributyltin Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIBUTYRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICALCIUM ALUMINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICALCIUM SILICATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trichlormethiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trichloro Phenyl Silane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROACETIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROACETONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROACETYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trichloroarsine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROETHYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trichlorofluoromethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROISOCYANURIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROMELAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICHLOROVINYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICOSANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRICOSANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tricresolformalin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tricyclene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tridecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIDECANOIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tridecyl Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tridecyloxy Methyl Oxirane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trideuterium oxide cation",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tridihexethyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHANOLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethanolamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHANOLAMINE LAURYL SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethanolamine Salicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHOXYSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYL CITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethyl Orthoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethyl Orthoformate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYL PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYL PHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethyl Phosphonoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLALUMINUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethylborane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLENE GLYCOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLENE GLYCOL MONOBUTYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLENE GLYCOL MONOETHYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLENE GLYCOL MONOMETHYL ETHER",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethylenemelamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLENETETRAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethylgallium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triethylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIETHYLSILANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoperazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoroacetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIFLUOROACETIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoroethylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIFLUOROIODOMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoromethanesulfonic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoromethanesulfonic Anhydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoromethyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluoroscetic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trifluorosilyl radical",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triglyme",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "triiodide ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIISOBUTYLALUMINUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triisopropanolamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIISOPROPYL BORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIISOPROPYL PHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRILAURIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trilinolein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trilithium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMELLITIC ANHYDRIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethoxymethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYL BORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYL PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYL PHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethyl Phosphonoacetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylacetaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLACETONITRILE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylaluminum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLAMINE N OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLGALLIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylindium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylolethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylolpropane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLOLPROPANE TRIACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylolpropane Triglycidyl Ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLOLPROPANE TRIMETHACRYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylphosphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilyl Cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilyl Diazomethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilyl Stearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilyl Trifluoromethanesulfonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethylsilylacetylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHYLTIN CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trinitrotoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trioctylaluminum",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trioctylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIOCTYLPHOSPHINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trioctylphosphine Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triolein",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPALMITIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tripelennamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYL PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYL PHOSPHITE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triphenylantimony",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLARSINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triphenylbismuth",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLMETHANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLPHOSPHINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLPHOSPHINE OXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triphenylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPHENYLTIN CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triphenyltin Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triphosgene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "triphosphorus pentanitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tripotassium phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIPROPYLAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris 2 3 dibromopropyl phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris 2 aminoethyl amine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris 2 butoxyethyl phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris 2 chloroethyl phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris 2 ethylhexyl phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris Base",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris Dibenzylideneacetone Dipalladium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tris Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "trisodium citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trisodium Citrate Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trisodium Etidronate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRISODIUM NITRILOTRIACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRISODIUM PHOSPHATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trisodium Phosphate Dodecahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRISTEARIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tritin hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRITIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tritium oxide tritiated water",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triton",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triton X 100",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tritoyl Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trityl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "triuranium octoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trolox",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tropolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRYPAN BLUE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tryptamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungstate ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 4 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 5 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 5 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 5 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 5 oxytribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 5 oxytrichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 carbonyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten 6 Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 dioxydibromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 dioxydichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 dioxydiiodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 oxytetrabromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 oxytetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 oxytetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten 6 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TUNGSTEN CARBIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten difluoride dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten difluoride disulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten difluoride monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten Disilicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten Hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten Nitride WN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungsten Sulfide WS2",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten tetrafluoride monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tungsten trifluoride monosulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TUNGSTEN TRIOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tungstic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "turpentine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tween 20",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tyramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tyrosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "UDP glucose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "umbelliferone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Undecanal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Undecane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Undecylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium 233",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium 234",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium 235",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium 4 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium 6 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium Carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium dibromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium diselenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium ditelluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "URANIUM HEXAFLUORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium pentabromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium pentafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium tribromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranium trichloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranium Trioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranyl acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranyl chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranyl formate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uranyl nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uranyl sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Urea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Urea Formaldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Urea Hydrogen Peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Urea Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Urethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uridine 5 diphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "uridine 5 triphosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uridylic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Uroanthelone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "URSODEOXYCHOLIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ursolic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valeric Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valeronitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valerophenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valeryl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valienamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "valine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valinomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 2 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadium 2 Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadium Carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadium Dioxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium oxysulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VANADIUM PENTOXIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VANADIUM TETRACHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "vanadium trifluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanadyl Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VANADYL SULFATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vancide TH",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanillic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanillyl Alcohol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vanillylmandelic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Veratridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VERBENONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vindesine Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VINYL ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VINYL BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VINYL CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinylacetylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VINYLENE CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinylidene Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinylidene Fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinylmagnesium Bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinyltriethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinyltrimethoxysilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinyltrimethylsilane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VITAMIN A PALMITATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vitamin B12",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vitamin D3",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VITAMIN E",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vitamin E Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vitamin E Linoleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VITAMIN K1",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vitexin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xanthate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xanthene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xanthine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xanthone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xanthurenic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xenon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xenon 133",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xenon Difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "xenon hexafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "xenon monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "xenon tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "xenon tetrafluoride oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "xylene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xylenol Orange",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ytterbium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2 telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 2chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 chloride hexahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium 3 sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ytterbium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttria yttrium oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yttrium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yttrium Aluminum Garnet",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium monofluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yttrium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yttrium Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "yttrium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yttrium Vanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zearalenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zeaxanthin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zin Sulfate Heptahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc 2 oxide zinc oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Acetate Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc acexamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc aluminate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc antimonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc arsenate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc arsenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc arsenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC BORATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc caprylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC CARBONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc chlorate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC CHROMATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc chromite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Citrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc cyanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Diethyldithiocarbamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc difluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Disodium EDTA",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC GLUCONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc granular",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc iodate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Ion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Iron Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc metal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc metaniobate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc metatantalate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc metatitanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc metavanadate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc metazirconate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZINC NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc nitrite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc orthomolybdate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc orthosilicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc orthotungstate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc peroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc pyrophosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc selenide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc selenite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc stannate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Stearate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc sulfide sphalerite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc tellurate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zinc Telluride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc tellurite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zinc thiocyanate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium 4 nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium 4 silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium 4 sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium boride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium carbide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium dioxide baddeleyite",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium fluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Hydroxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Nitrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Nitride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium phosphide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Silicate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium silicide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zirconium Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium sulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium tetrachloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium tetrafluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zirconium trifluoride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "zwitterion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aluminium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Potassium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Krypton",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rubidium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Caesium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Samarium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gadolinium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dysprosium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Holmium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thulium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Osmium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Iridium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Polonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Astatine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Francium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Radium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Actinium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thorium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Protactinium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Plutonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Curium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Californium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dubnium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Seaborgium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bohrium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hassium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Meitnerium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Darmstadtium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Roentgenium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Copernicium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nihonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flerovium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Moscovium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Livermorium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tennessine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Oganesson",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylene gas",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acetylsalicylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "bismuth subsalicylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium phosphate monobasic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "dextrose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "gum Arabic",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ferrous ferric oxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "latex",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "polyurethane foam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 1 1 trichloroethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "1 1 1 2 tetrafluoroethane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "water",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azobisisobutyronitrile",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Baeyers reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "N Bromosuccinimide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butylated hydroxytoluene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "N Butyllithium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbonyldiimidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Collins reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dess Martin periodinane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydropyran",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diisobutylaluminium hydride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diisopropyl azodicarboxylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylformamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dimethylsulfide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dioxane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fehling reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fenton reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Grignard reagents",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Limestone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Meta chloroperoxybenzoic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl tert-butyl ether",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Millon reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridinium chlorochromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pyridinium dichromate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Raney nickel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Samarium 2 iodide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Sodium bis trimethylsilyl amide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tert-Butyl hydroperoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tetrakis triphenylphosphine palladium 0",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thiophenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tollen reagent",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "calcium chloride anhydrous",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Acyclovir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ADAPALENE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ADEFOVIR DIPIVOXIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Adenosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ADINAZOLAM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Albendazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALCLOMETASONE DIPROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALFENTANIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alfuzosin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alitretinoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alizapride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allobarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Allopurinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ALMITRINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alosetron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alprenolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Altretamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Alverine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amantadine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ambenonium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amcinonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amifostine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amikacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMILORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMILORIDE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aminocaproic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aminoglutethimide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aminophylline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aminopterin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aminothiazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amiodarone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amitriptyline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amlexanox",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amlodipine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amobarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amoxapine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amphotericin B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ampicillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amrinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Amsacrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anagrelide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anastrozole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Angiotensin Amide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ANILERIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anisindione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anthralin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Anthranilic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Antipyrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Apomorphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Apomorphine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Apraclonidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "APRINDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "APROBARBITAL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ARBUTAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Arformoterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Argatroban",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ARGIPRESSIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aripiprazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aspartame",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aspirin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "aspirin acetylsalicylic acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Astemizole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Atomoxetine HCL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Atorvastatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ATOVAQUONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Atracurium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Atropine Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AURANOFIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "AZATADINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azathioprine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azelaic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azelastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azithromycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Azlocillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Aztreonam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bacampicillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Baclofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BALSALAZIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BAMBUTEROL HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzfetamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BISOPROLOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bradykinin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcipotriol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Calcitriol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Camptothecin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Candesartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Captopril",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbachol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbamazepine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbendazim",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbenicillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbidopa",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbimazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carbinoxamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carboplatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carisoprodol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carmustine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carprofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CARTEOLOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Carvedilol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefaclor",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefadroxil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefadroxil Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefaloglycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefamandole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefazolin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefdinir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefditoren Pivoxil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefepime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CEFIXIME",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefmetazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CEFONICID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefoperazone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CEFORANIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefotaxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefotetan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefotiam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefoxitin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefpiramide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CEFPODOXIME",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefprozil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceftazidime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceftazidime Pentahydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceftibuten",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceftizoxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ceftriaxone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cefuroxime",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "celecoxib",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephalexin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephalosporin C",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephalothin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephapirin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cephradine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cetirizine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cetrorelix",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cevimeline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chenodeoxycholic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chitosan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloral Hydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorambucil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloramphenicol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlordiazepoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlormerodrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlormezanone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorohemin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CHLOROPROCAINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroquine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorothiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chloroxine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorpheniramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorpheniramine Maleate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorpromazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorpromazine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorpropamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorprothixene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlortetracycline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chlorzoxazone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Chrysin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ciclesonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CICLOPIROX",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cidofovir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cilostazol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cimetidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinnarizine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinolazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cinoxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ciprofloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cisapride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cisatracurium Besylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citalopram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Citicoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cladribine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clarithromycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CLAVULANIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clemastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clenbuterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clidinium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clindamycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clioquinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clobazam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CLOBETASOL PROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clodronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clofarabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clofazimine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clofedanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clofenotane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clofibrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clomipramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clonazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clonidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CLONIDINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clopidogrel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clorazepate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clotiazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clotrimazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cloxacillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Clozapine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CO Trimoxazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cocaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cocaine HCl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Codeine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Colcemid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Colchicine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "COLESTIPOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cromolyn",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Crotamiton",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLACILLIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclandelate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYCLIZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclobenzaprine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclosporin A",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyclothiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cycrimine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYPROHEPTADINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cyproterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYPROTERONE ACETATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "CYSTEAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cysteamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cytarabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dacarbazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DACTINOMYCIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DALFOPRISTIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Danazol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diatrizoic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diazoxide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dibucaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dicyclomine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Didanosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dienestrol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIVALPROEX SODIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Echothiophate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Econazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Edaravone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Edrophonium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eletriptan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Emedastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EMETINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Emtricitabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Enalapril",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Encainide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Enflurane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Enoxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ENOXIMONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ENPROFYLLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Enrofloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ENTACAPONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Entecavir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ephedrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ephedrine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EPICHLOROHYDRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Epinastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Epinephrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Epirubicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eplerenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eprosartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etidronate Disodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etidronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etodolac",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etomidate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETONOGESTREL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Etoposide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "EXEMESTANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Exhirud",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Famciclovir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Famotidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Felbamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Felodipine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fenfluramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fexofenadine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Finasteride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Furosemide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fusidic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gabapentin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GADOTERIDOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GADOVERSETAMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HYALURONIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydralazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrochlorothiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HYDROCODONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrocortamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrocortisone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydrocortisone Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroflumethiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydromorphone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroquinone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HYDROXOCOBALAMIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hydroxycarbamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxychloroquine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyprogesterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyurea",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hydroxyzine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hymecromone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hyoscyamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Josamycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "KETAZOLAM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "KETOTIFEN FUMARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methadone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Morphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Morphine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "NITROXOLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nizatidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nordiazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Norephedrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Norepinephrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Norethindrone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Norfloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Nortriptyline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RIFABUTIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rifadin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "RIFAPENTINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Riluzole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rimantadine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Risedronate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Risperidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ritodrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rivastigmine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rizatriptan Benzoate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ROCURONIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rolipram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ROLITETRACYCLINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ropinirole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ropivacaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Rosiglitazone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ROSOXACIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Roxithromycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Thymalfasin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tiagabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tiaprofenic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TICARCILLIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ticlopidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tiludronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Timolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tinidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tioconazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tiopronin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tirofiban",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tylosin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "URACIL MUSTARD",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valacyclovir Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VALPROIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valrubicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Valsartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VANCOMYCIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vapreotide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vecuronium bromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Venlafaxine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "VERAPAMIL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vexol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vidarabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vidarabine Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vigabatrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinblastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vincristine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vindesine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vinorelbine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Viscofas",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Voglibose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Voriconazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Vorinostat",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Warfarin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ximenynic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Xylazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Yohimbine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zafirlukast",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zalcitabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zanamivir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zidovudine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ZILEUTON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ziprasidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zoledronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zolmitriptan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zolpidem",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zonisamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zopiclone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zuclomiphene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Zuclopenthixol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Beclomethasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BECLOMETHASONE DIPROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benazepril",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BENDROFLUMETHIAZIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "PARAOXON",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pargyline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paricalcitol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paromomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paromomycin Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Paroxetine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Pefloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Penbutolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Penciclovir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Penicillin G",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Penicillin G Potassium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Penicillin V",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tranylcypromine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trazodone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Treprostinil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "tretinoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triamcinolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIAMCINOLONE ACETONIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triamterene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triazolam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triclocarban",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triclosan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triflupromazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trifluridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trihexyphenidyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimeprazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimesic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethadione",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TRIMETHAPHAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethobenzamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimethoprim",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimetrexate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trimipramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Triprolidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "TROLEANDOMYCIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trometamol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Tropicamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trospium Chloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Trovafloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzonatate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzquinamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benzthiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Benztropine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Betamethasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Betaxolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BETAZOLE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bethanechol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bevantolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bezafibrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bicalutamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bicuculline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bifonazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biotin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Biperiden",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bisacodyl",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bivalirudin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bleomicina",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bosentan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bretylium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brimonidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Brinzolamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromfenac",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bromocriptine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BROMPHENIRAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Buclizine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Budesonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bumetanide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bupivacaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Buprenorphine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bupropion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUSERELIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Buspirone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Busulfan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butabarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butalbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butenafine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "BUTOCONAZOLE NITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Butorphanol Tartrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Bydureon",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Cabergoline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dantrolene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dapiprazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dapsone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DAPTOMYCIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Darifenacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Daunorubicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Decitabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deferoxamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Delavirdine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEMECARIUM BROMIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESERPIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESFLURANE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Desipramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Desirudin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Deslanoside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Desloratadine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESMOPRESSIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESOGESTREL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESONIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Desoximetasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DESOXYCORTICOSTERONE PIVALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dexamethasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dexbrompheniramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dexfenfluramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEXMEDETOMIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dexpanthenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dexrazoxane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEXTRAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dextrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dextroamphetamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dextromethorphan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dextropropoxyphene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DEZOCINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diclofenac",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diclofenac Sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dicloxacillin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dicumarol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Difenidol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diflorasone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diflunisal",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Digitoxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Digoxin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydroergotamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dihydroergotamine Mesylate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diltiazem",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIMENHYDRINATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dinoprost",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dinoprost Tromethamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DINOSEB",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenhydramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENHYDRAMINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DIPHENOXYLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Diphenylpyraline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipivefrin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipyridamole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dipyrone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disopyramide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Disulfiram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dobutamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Docetaxel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dofetilide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dolasetron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Domperidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Donepezil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dopamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dopamine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dorzolamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DOXACURIUM CHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxapram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxazosin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxepin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxorubicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxorubicin Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxycycline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Doxylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dronabinol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Droperidol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Drospirenone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Drostanolone Propionate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "DULOXETINE HYDROCHLORIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dyclonine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dydrogesterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Dyphylline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ergocalciferol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERGONOVINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERGOSTEROL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ERGOTAMINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Erythromycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Escitalopram",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ESMOLOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estazolam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estradiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estradiol Valerate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Estramustine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Eszopiclone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ETHACRYNIC ACID",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethambutol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethamolin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethanolamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethchlorvynol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethinamate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethinyl Estradiol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethionamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethosuximide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethotoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ethoxzolamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flavoxate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flecainide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fleroxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Floxuridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluconazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "flucytosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fludarabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fludarabine Phosphate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fludiazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fludrocortisone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flufenamic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flumazenil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUMETHASONE PIVALATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flunarizine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flunisolide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flunitrazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluocinonide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "fluorouracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoxetine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluoxymesterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUPHENAZINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flurandrenolide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flurazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flurbiprofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluspirilene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Flutamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FLUTICASONE PROPIONATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluvastatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fluvoxamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fondaparinux Sodium",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Formoterol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fortical",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FOSCARNET SODIUM",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "FOSFOMYCIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fosinopril",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Fosphenytoin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Galanthamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GALLAMINE TRIETHIODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gamma aminobutyric acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ganciclovir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gatifloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gelatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gemcitabine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gemfibrozil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gentamicin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glatiramer Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gliclazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glimepiride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Gliquidone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glisoxepide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glutaraldehyde",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glutethimide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Glyburide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GLYCOPYRROLATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Granisetron",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Griseofulvin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guaifenesin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Guanadrel Sulfate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "GUANETHIDINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Halofantrine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Haloperidol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Haloprogin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "HEMATOPORPHYRIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heparin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Heptabarbital",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hetastarch",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Hexamethylenetetramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "hexamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Histamine Dihydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Homatropine Methylbromide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ibandronic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ibuprofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IBUTILIDE FUMARATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IDARUBICIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Idoxuridine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ifosfamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ILOPROST",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imipenem",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imipenem Monohydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imipramine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Imipramine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IMIQUIMOD",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indapamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INDECAINIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indinavir",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indocyanine Green",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "indometacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Indomethacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Innohep",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Inosine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "INTERFERON ALFA 2B",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Irbesartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isocarboxazid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoetharine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoflurane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoniazid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isopropamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isoproterenol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOSORBIDE DINITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "ISOSORBIDE MONONITRATE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Isradipine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Itraconazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "IVERMECTIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ketanserin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ketoprofen",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Ketorolac",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Labetalol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lactulose",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lamivudine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lamotrigine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lansoprazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Latanoprost",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leflunomide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lercanidipine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Letrozole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leucovorin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Leuprorelin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levamisole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levetiracetam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEVOBUNOLOL",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levobupivacaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levocabastine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levodopa",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEVOFLOXACIN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levomepromazine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levomethadyl Acetate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levonorgestrel",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Levorphanol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LEVOSIMENDAN",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lidocaine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lidocaine Hydrochloride",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lincomycin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lindane",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Liothyronine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Liprolog",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lisinopril",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lisinopril Dihydrate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LISURIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lofexidine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lomefloxacin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lomustine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Loperamide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Loratadine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lorazepam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Losartan",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Loteprednol Etabonate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lovastatin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Loxapine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "LUCANTHONE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Lysergide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Magnevist",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Malathion",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Malloside",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Maprotiline",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mazindol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mebendazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mecamylamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mechlorethamine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mecillinam",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Meclizine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Meclofenamic Acid",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mecobalamin",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Medroxyprogesterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyclothiazide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyl Aminolevulinate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyldopa",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylergonovine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylphenidate",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylprednisolone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methyltestosterone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methylthiouracil",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Methysergide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metipranolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metixene",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metoclopramide",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METOCURINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METOCURINE IODIDE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metolazone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metoprolol",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metronidazole",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Metyrapone",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "METYROSINE",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "Mexiletine",
            "synonyms": []
          }
        },
        {
          "id": null,
          "name": {
            "value": "MEZLOCILLIN",
            "synonyms": []
          }
        },
    {