const RIDDLES = [
    {
        "riddle": "What is the name of the punctuation mark that is a combination of a question and exclamation mark?",
        "riddleAnswerOptions": ["Percontation point", "SarcMark", "Interrobang", "Authority point"],
        "riddleAnswer": 2
    },
    {
        "riddle": "What did Steve Jobs soak his feet in when he wanted to de-stress?",
        "riddleAnswerOptions": ["A puddle", "A toilet", "A bucket", "A ditch"],
        "riddleAnswer": 1
    },
    {
        "riddle": "Every continent, except Antaractica, has a city called what?",
        "riddleAnswerOptions": ["Paris", "York", "Rome (Roma)", "Seville"],
        "riddleAnswer": 2
    },
    {
        "riddle": "What colour are the hairs of a polar bear's fur?",
        "riddleAnswerOptions": ["Cream", "Transparent", "White", "Grey"],
        "riddleAnswer": 1
    },
    {
        "riddle": "What type of a fruit is a Bing?",
        "riddleAnswerOptions": ["Cherry", "Pear", "Plum", "Apple"],
        "riddleAnswer": 0
    },
    {
        "riddle": "What country was put up for sale on eBay in 2006?",
        "riddleAnswerOptions": ["Malawi", "New Zealand", "Bolivia", "Malaysia"],
        "riddleAnswer": 1
    },
    {
        "riddle": "What is the plural of cul-de-sac?",
        "riddleAnswerOptions": ["Cul-de-sac", "Cul-des-sacs", "Culs-de-sac", "Culs-des-sacs"],
        "riddleAnswer": 2
    },
    {
        "riddle": "What is the profession of both of Jack Black's parents?",
        "riddleAnswerOptions": ["Stand-up comedian", "Nuclear physicist", "Firefighter", "Rocket scientist"],
        "riddleAnswer": 3
    },
    {
        "riddle": "Lyme disease is named after a town in wich U.S State?",
        riddleAnswerOptions: ["Connecticut", "Idaho", "Maine", "Georgia"],
        riddleAnswer: 0
    },
    {
        riddle: "In the TV series MythBusters, a standard household vacuum cleaner lifted what?",
        riddleAnswerOptions: ["A dog", "A bathtub", "A refrigerator", "A car"],
        riddleAnswer: 3
    },
    {
        riddle: "The legendary Man in the Iron Mask was imprisoned in which country?",
        riddleAnswerOptions: ["Spain", "Germany", "Italy", "France"],
        riddleAnswer: 3
    },
    {
        riddle: "Which country has no mosquitoes?",
        riddleAnswerOptions: ["Iceland", "Greenland", "Norway", "Finland"],
        riddleAnswer: 0
    },
    {
        riddle: "Which punctuation mark is used to end a sentence with a note of skepticism?",
        riddleAnswerOptions: ["Acclamation Point", "Irony mark", "Doubt point", "Certitude point"],
        riddleAnswer: 2
    },
    {
        riddle: "As of 2018, how long was the longest recorded bout of hiccuping?",
        riddleAnswerOptions: ["68 days", "68 years", "68 weeks", "68 hours"],
        riddleAnswer: 1
    },
    {
        riddle: "Which sea has no coastline?",
        riddleAnswerOptions: ["Caspian Sea", "Dead Sea", "Sargasso Sea", "Ligurian Sea"],
        riddleAnswer: 2
    },
    {
        riddle: "In 1994, which soccer player was sent off in a World Cup match on his birthday?",
        riddleAnswerOptions: ["Roy Keane", "Gianfranco Zola", "Zinedine Zidane", "David Beckham"],
        riddleAnswer: 1
    },
    {
        riddle: "Which exotic fruit did Mark Twain call 'the most delivious fruit known to men'?",
        riddleAnswerOptions: ["Cherimoya", "Rambutan", "Carambola (Starfruit)", "Kiwano (Horned Melon)"],
        riddleAnswer: 0
    },
    {
        riddle: "Which planet's density is so low that is would float in water?",
        riddleAnswerOptions: ["Netptune", "Saturn", "Uranus", "Mercury"],
        riddleAnswer: 1
    },
    {
        riddle: "Apollo 17 astronaut Harrison Schmitt is allergic to what?",
        riddleAnswerOptions: ["Space suits", "Rocket fuel", "Moondust", "Dried food"],
        riddleAnswer: 2
    },
    {
        riddle: "An episode of which TV series was taken off air in 1976 because it scared children?",
        riddleAnswerOptions: ["Rugrats", "DuckTales", "Fraggle Rock", "Sesame Street"],
        riddleAnswer: 3
    },
    {
        riddle: "Which of the following can be used to pop popcorn",
        riddleAnswerOptions: ["A smartphone", "A camera", "A torch", "A laser"],
        riddleAnswer: 3
    },
    {
        riddle: "In 1872, which ship was found floating in the Atlantic intact but with no crew?",
        riddleAnswerOptions: ["Lusitania", "Titanic", "Bounty", "Mary Celeste"],
        riddleAnswer: 3
    },
    {
        riddle: "What is the term for a group of lemurs?",
        riddleAnswerOptions: ["A conspiracy", "An equation", "A calamity", "A muddle"],
        riddleAnswer: 0
    },
    {
        riddle: "Which element is not permitted on an aircraft?",
        riddleAnswerOptions: ["Lithium", "Selenium", "Mercury", "Lead"],
        riddleAnswer: 2
    },
    {
        riddle: "What was the name of Abraham Lincoln's dog?",
        riddleAnswerOptions: ["Spot", "Fido", "Patch", "Rover"],
        riddleAnswer: 1
    },
    {
        riddle: "Which US President owned an amphibious car?",
        riddleAnswerOptions: ["Lyndon B. Johnson", "Jimmy Carter", "John F. Kennedy", "Gerald Ford"],
        riddleAnswer: 0
    },
    {
        riddle: "What is defalcation?",
        riddleAnswerOptions: ["Destruction", "Screaming", "Embezzlement", "Cursing"],
        riddleAnswer: 2
    },
    {
        riddle: "What is commonly thought to be carrier of the black plague?",
        riddleAnswerOptions: ["Fleas", "Rats", "Elye", "Peasants"],
        riddleAnswer: 1,
    },
    {
        riddle: "What element produces a green colour in fireworks?",
        riddleAnswerOptions: ["Potassium", "Barium", "Stronium", "Sodium"],
        riddleAnswer: 1
    },
    {
        riddle: "What is the meaning of absquatulate?",
        riddleAnswerOptions: ["Arrive suddenly", "Turn quickly", "Leave abruptly", "Walk slowly"],
        riddleAnswer: 2,
    },
    {
        riddle: "How many days did it take to build the Empire State Building?",
        riddleAnswerOptions: ["410", "810", "1,010", "610"],
        riddleAnswer: 0
    },
    {
        riddle: "Which body parts do northern leopard frogs use to help swallow their prey?",
        riddleAnswerOptions: ["Feet", "Eyes", "Ears", "Nostrils"],
        riddleAnswer: 1
    },
    {
        riddle: "The ampersand symbol is formed from which two letters?",
        riddleAnswerOptions: ["S and A", "E and S", "E and T", "A and T"],
        riddleAnswer: 2
    },
    {
        riddle: "What is a group of pugs called?",
        riddleAnswerOptions: ["A grumbling", "A whining", "A moan", "A complaint"],
        riddleAnswer: 0
    },
    {
        riddle: "What colour is the solid form of oxygen?",
        riddleAnswerOptions: ["Red", "Green", "Yellow", "Blue"],
        riddleAnswer: 3
    },
    {
        riddle: "What singer believes that cities beginning with the letter M bring him bad luck?",
        riddleAnswerOptions: ["Bono", "Steven Tyler", "Brandon Flowers", "Axl Rose"],
        riddleAnswer: 3
    },
    {
        riddle: "What was the only food that Usain Bolt ate during the Beijing Olympics?",
        riddleAnswerOptions: ["Chicken nuggets", "Burgers", "Hot dogs", "Pancakes"],
        riddleAnswer: 0
    },
    {
        riddle: "What colour is the sunset on Mars?",
        riddleAnswerOptions: ["Red", "Green", "Blue", "Orange"],
        riddleAnswer: 2
    },
    {
        riddle: "Which company was initially called BackRub?",
        riddleAnswerOptions: ["Google", "Microsoft", "Apple", "Facebook"],
        riddleAnswer: 0
    },
    {
        riddle: "Whose used pregnancy test was taken from her hotel room and sold on eBay?",
        riddleAnswerOptions: ["Angelina Jolie", "Britney Spears", "Kate Winslet", "Mariah Carey"],
        riddleAnswer: 1
    },
    {
        riddle: "What keeps your bath water warmer for longer?",
        riddleAnswerOptions: ["Bath salts", "Cast iron", "Soap bubbles", "Splasing"],
        riddleAnswer: 2
    },
    {
        riddle: "What was the profession of the man who invented fairy floss?",
        riddleAnswerOptions: ["Mechanic", "Doctor", "Chef", "Dentist"],
        riddleAnswer: 3
    },
    {
        riddle: "What does the Q in Q-Tips stand for?",
        riddleAnswerOptions: ["Quality", "Quick", "Quizzical", "Quiet"],
        riddleAnswerOptions: 0,
    },
    {
        riddle: "Which part of the human body does not have a blood supply?",
        riddleAnswerOptions: ["Kneecap", "Earlobe", "Fingernails", "Cornea"],
        riddleAnswer: 3
    },
    {
        riddle: "Which celebrated scientist believed that the world would end in 2060?",
        riddleAnswerOptions: ["Thomas Edison", "Charles Darwin", "Albert Einstein", "Isaac Netwon"],
        riddleAnswer: 3
    },
    {
        riddle: "Which of the following did the Aztecs use as currency?",
        riddleAnswerOptions: ["Cocoa beans", "Coffee beans", "Pinto beans", "Kidney beans"],
        riddleAnswer: 0
    },
    {
        riddle: "Roman Emperor Caligula made which animal a Senator?",
        riddleAnswerOptions: ["A dog", "A cat", "A horse", "A pig"],
        riddleAnswer: 2
    },
    {
        riddle: "As of 2018, who has been the youngest winner of a Nobel prize?",
        riddleAnswerOptions: ["Guglielmo Marconi", "Malala Yousafzai", "Werner Heisenberg", "Marie Curie"],
        riddleAnswer: 1
    },
    {
        riddle: "What is the most reflective element?",
        riddleAnswerOptions: ["Silver", "Titanium", "Aluminium", "Gold"],
        riddleAnswer: 0
    },
    {
        riddle: "Which of the following is a town in Norway?",
        riddleAnswerOptions: ["Heaven", "Hell", "Devil", "Utopia"],
        riddleAnswer: 1
    },
    {
        riddle: "Which emotion can increase the production of earwax?",
        riddleAnswerOptions: ["Sadness", "Indifference", "Elation", "Fear"],
        riddleAnswer: 3
    },
    {
        riddle: "Bubble wrap was originally sold as what?",
        riddleAnswerOptions: ["Insulation", "Bedding", "Fabric lining", "Wallpaper"],
        riddleAnswer: 3
    },
    {
        riddle: "What are almonds?",
        riddleAnswerOptions: ["Seeds", "Legumes", "Nuts", "Beans"],
        riddleAnswer: 0
    },
    {
        riddle: "Ombrophobia is the fear of what?",
        riddleAnswerOptions: ["Sunshine", "Frost", "Rain", "Snow"],
        riddleAnswer: 2
    },
    {
        riddle: "What did Sean Connery wear in all of his Bond movies?",
        riddleAnswerOptions: ["Contact lenses", "A toupée", "Spanx", "A fake moustache"],
        riddleAnswer: 1
    },
    {
        riddle: "Mosquitoes prefer to bite people who have which blood group?",
        riddleAnswerOptions: ["O", "B", "AB", "A"],
        riddleAnswer: 0
    },
    {
        riddle: "What was used to remove pencil marks before the eraser was invented?",
        riddleAnswerOptions: ["Cheese", "Bread", "Barley", "Potatoes"],
        riddleAnswer: 1
    },
    {
        riddle: "What is a durian?",
        riddleAnswerOptions: ["Reptile", "Fish", "Fruit", "Vegetable"],
        riddleAnswer: 2
    },
    {
        riddle: "What does a gentoo pengiun give to his intended mate?",
        riddleAnswerOptions: ["A fish", "A kiss", "A feather", "A pebble"],
        riddleAnswer: 3
    },
    {
        riddle: "Which part of their body do sea cucumbers use for eating?",
        riddleAnswerOptions: ["Feet", "Eyes", "Ears", "Tail"],
        riddleAnswer: 0
    }
];