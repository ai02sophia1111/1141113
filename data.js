// data.js

const articles = [
    {
        id: 1,
        title: "The Friendly Bear",
        level: "beginner",
        content: `Once upon a time, in a big green forest, lived a friendly bear named Barnaby. 
                  Barnaby loved to help his friends. One day, a little rabbit lost his carrot. 
                  Barnaby used his big nose to sniff it out from under a bush. The rabbit was very happy.`
    },
    {
        id: 2,
        title: "The Clever Fox",
        level: "beginner",
        content: `Fiona the fox was very clever. She wanted to get the grapes that were growing high on a vine. 
                  She tried jumping, but they were too high. So, she decided to use a long stick to knock them down. 
                  Success! She enjoyed the sweet grapes.`,
        quiz: [
            {
                question: "How did Fiona the fox get the grapes?",
                options: ["By jumping high", "By using a long stick", "By asking a bird for help"],
                answer: "By using a long stick"
            }
        ]
    },
    {
        id: 3,
        title: "The Singing Bird",
        level: "beginner",
        content: `In a tall oak tree lived a small blue bird named Pip. Pip loved to sing. 
                  Every morning, he would sing a beautiful song that woke up all the other animals. 
                  His music made the forest a cheerful place.`,
        quiz: [
            {
                question: "What did Pip the bird do every morning?",
                options: ["Build a nest", "Look for worms", "Sing a beautiful song"],
                answer: "Sing a beautiful song"
            }
        ]
    },
    {
        id: 4,
        title: "The Shy Squirrel",
        level: "beginner",
        content: `Sammy the squirrel was very shy. He loved watching other animals play, but he was too afraid to join. 
                  One day, a strong wind blew a baby bird from its nest. Forgetting his fear, Sammy quickly climbed the tree and helped the little bird back. 
                  From that day on, he was known as Sammy the Brave.`,
        quiz: [
            {
                question: "What brave thing did Sammy the squirrel do?",
                options: ["He fought a fox", "He helped a baby bird", "He stole nuts"],
                answer: "He helped a baby bird"
            }
        ]
    },
    {
        id: 5,
        title: "The Playful Dolphin",
        level: "beginner",
        content: `Dolly the dolphin loved to play games. Her favorite game was racing with the boats. 
                  She would leap out of the water, splashing everyone with a cheerful spray. 
                  The people on the boats would laugh and wave. Dolly made the sea a happier place.`,
        quiz: [
            {
                question: "What was Dolly the dolphin's favorite game?",
                options: ["Playing with fish", "Racing with the boats", "Jumping through hoops"],
                answer: "Racing with the boats"
            }
        ]
    }
    ,
    {
        id: 6,
        title: "The Wise Owl",
        level: "beginner",
        content: `Professor Hoot, the owl, was the wisest animal in the forest. He wore tiny glasses and read books every night.
                  If any animal had a problem, they would go to him. He always gave thoughtful advice, like "a nap a day keeps the grumpiness away."`,
        quiz: [
            {
                question: "What was Professor Hoot the owl known for?",
                options: ["His fast flying", "His thoughtful advice", "His loud hooting"],
                answer: "His thoughtful advice"
            }
        ]
    },
    {
        id: 7,
        title: "The Busy Beaver",
        level: "beginner",
        content: `Bob the beaver was a hard worker. He was always busy building dams on the river. 
                  His dam was so strong that it created a beautiful, calm pond where all the little fish could play safely.
                  Bob was very proud of his work.`,
        quiz: [
            {
                question: "What was Bob the beaver always busy doing?",
                options: ["Building dams", "Collecting food", "Sleeping"],
                answer: "Building dams"
            }
        ]
    },
    {
        id: 8,
        title: "The Graceful Swan",
        level: "beginner",
        content: `Seraphina the swan glided across the lake. Her long, white neck was curved like a question mark. 
                  She moved so smoothly that she didn't make a single ripple in the water.
                  All the other birds admired her elegance and grace.`,
        quiz: [
            {
                question: "What was special about how Seraphina the swan moved?",
                options: ["She was very fast", "She was very noisy", "She didn't make a ripple"],
                answer: "She didn't make a ripple"
            }
        ]
    },
    {
        id: 9,
        title: "The Loyal Dog",
        level: "beginner",
        content: `Max was a loyal dog. Every day, he waited by the door for his human, a young boy named Tom, to come home from school. 
                  As soon as Tom arrived, Max would wag his tail and bring him his favorite toy. They were the best of friends.`,
        quiz: [
            {
                question: "What did Max the loyal dog do every day?",
                options: ["Go for a walk", "Wait by the door for Tom", "Play in the garden"],
                answer: "Wait by the door for Tom"
            }
        ]
    },
    {
        id: 10,
        title: "The Independent Cat",
        level: "beginner",
        content: `Cleo the cat was very independent. She liked to explore the neighborhood by herself, walking silently on fences and rooftops. 
                  She knew all the best sunny spots for a nap. But at the end of the day, she always returned home for a bowl of milk.`,
        quiz: [
            {
                question: "What does Cleo the cat do at the end of the day?",
                options: ["Sleep on a roof", "Hunt for mice", "Return home for milk"],
                answer: "Return home for milk"
            }
        ]
    },
    {
        id: 11,
        title: "The Fast Cheetah",
        level: "beginner",
        content: `Chase the cheetah was the fastest runner on the savanna. His legs were long and powerful. 
                  When he ran, he was just a blur of spots. The other animals would watch in awe as he zoomed past.`,
        quiz: [
            {
                question: "What is Chase the cheetah known for?",
                options: ["Being the fastest runner", "His loud roar", "His beautiful spots"],
                answer: "Being the fastest runner"
            }
        ]
    },
    {
        id: 12,
        title: "The Gentle Giraffe",
        level: "beginner",
        content: `Gigi the giraffe was so tall she could eat leaves from the highest trees. 
                  Despite her size, she was very gentle. She would often lower her long neck to say hello to the smaller animals below.`,
        quiz: [
            {
                question: "What did Gigi the giraffe often do with her long neck?",
                options: ["Drink water", "Fight other giraffes", "Lower it to say hello"],
                answer: "Lower it to say hello"
            }
        ]
    },
    {
        id: 13,
        title: "The Strong Elephant",
        level: "beginner",
        content: `Eli the elephant was incredibly strong. He could push over small trees with his head and carry heavy logs with his trunk. 
                  But he was also very kind and used his strength to help others, like clearing paths after a big storm.`,
        quiz: [
            {
                question: "How did Eli the elephant use his strength to help others?",
                options: ["By carrying them", "By clearing paths", "By finding food"],
                answer: "By clearing paths"
            }
        ]
    },
    {
        id: 14,
        title: "The Colorful Parrot",
        level: "beginner",
        content: `Polly the parrot had feathers of red, blue, and green. She was not just beautiful; she was also a great talker. 
                  She could say "Hello!" and "Pretty bird!". She learned the words from the sailors who visited her island.`,
        quiz: [
            {
                question: "How did Polly the parrot learn to talk?",
                options: ["From other parrots", "From sailors", "She was born with it"],
                answer: "From sailors"
            }
        ]
    },
    {
        id: 15,
        title: "The Hopping Kangaroo",
        level: "beginner",
        content: `Kanga the kangaroo loved to hop. She could jump over tall bushes and across wide streams with her powerful back legs. 
                  In her pouch, she carried her little baby, called a joey, who peeked out to see the world.`,
        quiz: [
            {
                question: "What is a baby kangaroo called?",
                options: ["A calf", "A joey", "A pup"],
                answer: "A joey"
            }
        ]
    },
    {
        id: 16,
        title: "The Sleepy Koala",
        level: "beginner",
        content: `Kevin the koala spent most of his day sleeping in a eucalyptus tree. He would munch on leaves, and then doze off. 
                  His life was very peaceful and slow. He was the calmest creature in the Australian bush.`,
        quiz: [
            {
                question: "Where did Kevin the koala spend most of his day?",
                options: ["In a cave", "On the ground", "In a eucalyptus tree"],
                answer: "In a eucalyptus tree"
            }
        ]
    },
    {
        id: 17,
        title: "The Striped Zebra",
        level: "beginner",
        content: `Zola the zebra was proud of her black and white stripes. She thought they were the most stylish pattern in all of Africa. 
                  When she stood with her family, it was hard to tell where one zebra ended and another began!`,
        quiz: [
            {
                question: "What effect did the zebras' stripes have when they stood together?",
                options: ["It scared predators", "It was hard to tell them apart", "It helped them stay cool"],
                answer: "It was hard to tell them apart"
            }
        ]
    },
    {
        id: 18,
        title: "The Kingly Lion",
        level: "beginner",
        content: `Leo the lion was the king of the grasslands. He had a magnificent mane that looked like a golden crown. 
                  When he let out a mighty roar, all the animals would listen. He ruled his kingdom with fairness and strength.`,
        quiz: [
            {
                question: "What did Leo the lion's mane look like?",
                options: ["A silver shield", "A golden crown", "A soft pillow"],
                answer: "A golden crown"
            }
        ]
    },
    {
        id: 19,
        title: "The Tricky Monkey",
        level: "beginner",
        content: `Miko the monkey was a little trickster. He loved to swing from vines and steal bananas from the other monkeys. 
                  He was so quick and clever that he was rarely caught. His playful antics always made the jungle a lively place.`,
        quiz: [
            {
                question: "What did Miko the monkey love to do?",
                options: ["Sleep all day", "Sing songs", "Steal bananas"],
                answer: "Steal bananas"
            }
        ]
    },
    {
        id: 20,
        title: "The Witty Penguin",
        level: "beginner",
        content: `Percy the penguin lived in the cold Antarctic. He wore a natural tuxedo of black and white feathers. 
                  He was very witty and loved to tell jokes to his friends. His favorite was: "What do you call a cold penguin? A brrr-d!"`,
        quiz: [
            {
                question: "What did Percy the penguin love to do?",
                options: ["Go swimming", "Tell jokes", "Eat fish"],
                answer: "Tell jokes"
            }
        ]
    },
    {
        id: 21,
        title: "The Migration of the Wildebeest",
        level: "intermediate",
        content: `Every year, vast herds of wildebeest undertake a phenomenal migration across the Serengeti plains. 
                  Driven by the search for fresh grazing and water, this journey is fraught with peril, including treacherous river crossings and predators like lions and crocodiles. 
                  This spectacle of nature demonstrates an incredible instinct for survival and is one of the most impressive natural events on Earth.`,
        quiz: [
            {
                question: "What drives the wildebeest migration?",
                options: ["The change of seasons", "The search for fresh grazing and water", "To escape the heat"],
                answer: "The search for fresh grazing and water"
            }
        ]
    },
    {
        id: 22,
        title: "The Social Structure of Wolves",
        level: "intermediate",
        content: `Wolf packs exhibit a complex social hierarchy, often led by an alpha pair. This structure is not based on aggression, but on cooperation and familial bonds. 
                  Packs work together to hunt, raise pups, and defend their territory. Their sophisticated communication, using body language and vocalizations, is key to their collective success.`,
        quiz: [
            {
                question: "What is the social structure of a wolf pack primarily based on?",
                options: ["Aggression", "Individual strength", "Cooperation and family bonds"],
                answer: "Cooperation and family bonds"
            }
        ]
    },
    {
        id: 23,
        title: "The Camouflage of the Chameleon",
        level: "intermediate",
        content: `Chameleons are masters of disguise, renowned for their ability to change skin color. This adaptation is not just for camouflage against predators, but also for social signaling and regulating body temperature. 
                  Specialized cells called chromatophores allow them to display a stunning array of colors and patterns in response to their environment and emotions.`,
        quiz: [
            {
                question: "Besides camouflage, what is another reason chameleons change color?",
                options: ["To attract mates", "For social signaling", "To find food"],
                answer: "For social signaling"
            }
        ]
    },
    {
        id: 24,
        title: "Bioluminescence in Deep-Sea Creatures",
        level: "advanced",
        content: `In the abyssal zone of the ocean, where sunlight cannot penetrate, many organisms have evolved the ability to produce their own light through a chemical process called bioluminescence. 
                  This fascinating adaptation serves multiple purposes, including attracting prey, deterring predators, and facilitating communication in the perpetual darkness. The diversity of light-producing mechanisms highlights the extraordinary evolutionary pressures of this extreme environment.`,
        quiz: [
            {
                question: "What is bioluminescence?",
                options: ["A type of deep-sea plant", "The ability of an organism to produce light", "A method of swimming in the dark"],
                answer: "The ability of an organism to produce light"
            }
        ]
    },
    {
        id: 25,
        title: "The Complex Communication of Honeybees",
        level: "advanced",
        content: `Honeybees possess one of the most sophisticated communication systems in the animal kingdom, primarily through their famous "waggle dance." 
                  A returning forager performs this intricate dance to convey precise information about the direction and distance of a food source relative to the sun's position. This symbolic language is crucial for the colony's foraging efficiency and collective decision-making.`,
        quiz: [
            {
                question: "What information does the honeybee's 'waggle dance' convey?",
                options: ["The weather forecast", "The presence of a predator", "The direction and distance of a food source"],
                answer: "The direction and distance of a food source"
            }
        ]
    },
    {
        id: 26,
        title: "The Aerodynamics of Avian Flight",
        level: "advanced",
        content: `The principles of avian flight are a marvel of natural engineering, governed by complex aerodynamics. A bird's wing is an airfoil, shaped to generate lift by creating a pressure differential between its upper and lower surfaces. 
                  Through subtle adjustments in wing shape, angle of attack, and flapping mechanics, birds can achieve remarkable feats of maneuverability, speed, and endurance, far surpassing the capabilities of early human aircraft.`,
        quiz: [
            {
                question: "How does a bird's wing generate lift?",
                options: ["By being very light", "By creating a pressure differential", "By flapping very fast"],
                answer: "By creating a pressure differential"
            }
        ]
    }
    ,
    {
        id: 27,
        title: "The Symbiosis of Clownfish",
        level: "intermediate",
        content: `Clownfish and sea anemones share a classic symbiotic relationship, a mutually beneficial partnership. The anemone's stinging tentacles protect the clownfish from predators, while the clownfish, immune to the stings, cleans the anemone and may even lure in food for it. This fascinating interaction is a perfect example of co-evolution in a marine environment.`,
        quiz: [
            {
                question: "How does the sea anemone help the clownfish?",
                options: ["It provides food", "It protects the clownfish from predators", "It helps the clownfish swim faster"],
                answer: "It protects the clownfish from predators"
            }
        ]
    },
    {
        id: 28,
        title: "The Echolocation of Bats",
        level: "intermediate",
        content: `Bats navigate and hunt in complete darkness using a remarkable biological sonar system called echolocation. They emit high-frequency sound pulses and listen for the echoes that bounce back from objects. By interpreting these echoes, they can form a detailed mental map of their surroundings, allowing them to locate prey and avoid obstacles with incredible precision.`,
        quiz: [
            {
                question: "What is echolocation used for by bats?",
                options: ["To communicate with other bats", "To find a mate", "To navigate and hunt in the dark"],
                answer: "To navigate and hunt in the dark"
            }
        ]
    },
    {
        id: 29,
        title: "The Life Cycle of a Butterfly",
        level: "intermediate",
        content: `The transformation of a butterfly, known as metamorphosis, is a four-stage process. It begins as an egg, hatches into a larva (caterpillar), which eats voraciously. Next, it forms a pupa (chrysalis), where a radical reorganization occurs. Finally, the adult butterfly emerges, ready to reproduce and continue the cycle.`,
        quiz: [
            {
                question: "What is the second stage in a butterfly's life cycle?",
                options: ["Egg", "Pupa (chrysalis)", "Larva (caterpillar)"],
                answer: "Larva (caterpillar)"
            }
        ]
    },
    {
        id: 30,
        title: "The Desert Adaptations of Camels",
        level: "intermediate",
        content: `Camels are exceptionally adapted to desert life. Their humps store fat, not water, which can be metabolized for energy and water. They have long eyelashes and can close their nostrils to keep out sand. Furthermore, their bodies can tolerate significant dehydration, making them the ultimate desert survivors.`,
        quiz: [
            {
                question: "What do camels store in their humps?",
                options: ["Water", "Fat", "Sand"],
                answer: "Fat"
            }
        ]
    },
    {
        id: 31,
        title: "The Intelligence of Octopuses",
        level: "intermediate",
        content: `Octopuses are considered one of the most intelligent invertebrates. They have demonstrated problem-solving abilities, such as opening jars, and are capable of complex camouflage. With a large, distributed nervous system, they can control each of their eight arms independently, showcasing a unique form of intelligence.`,
        quiz: [
            {
                question: "Which ability has an octopus demonstrated?",
                options: ["Singing", "Opening jars", "Flying"],
                answer: "Opening jars"
            }
        ]
    },
    {
        id: 32,
        title: "The Hibernation of Bears",
        level: "intermediate",
        content: `Hibernation is a state of metabolic depression that allows bears to survive the winter when food is scarce. During this period, their heart rate and breathing slow down dramatically. Unlike true hibernators, bears can awaken relatively quickly if disturbed. This process is a remarkable adaptation for energy conservation.`,
        quiz: [
            {
                question: "Why do bears hibernate?",
                options: ["To avoid predators", "To survive the winter when food is scarce", "Because they are tired"],
                answer: "To survive the winter when food is scarce"
            }
        ]
    },
    {
        id: 33,
        title: "The Coral Reef Ecosystem",
        level: "intermediate",
        content: `Coral reefs are often called the "rainforests of the sea" due to their incredible biodiversity. These ecosystems are built by tiny animals called coral polyps. They provide shelter and food for a quarter of all marine species, but are highly sensitive to changes in water temperature and pollution, making them vulnerable to climate change.`,
        quiz: [
            {
                question: "Why are coral reefs called the 'rainforests of the sea'?",
                options: ["Because they have many trees", "Due to their incredible biodiversity", "Because it rains a lot there"],
                answer: "Due to their incredible biodiversity"
            }
        ]
    },
    {
        id: 34,
        title: "The Role of Keystone Species",
        level: "advanced",
        content: `A keystone species is an organism that has a disproportionately large effect on its natural environment relative to its abundance. The sea otter is a classic example; by preying on sea urchins, it prevents the destruction of kelp forests, which support a multitude of other species. The removal of a keystone species can lead to a dramatic shift or collapse of the ecosystem.`,
        quiz: [
            {
                question: "What is a keystone species?",
                options: ["The most abundant species", "A species with a disproportionately large effect on its environment", "The largest species in an ecosystem"],
                answer: "A species with a disproportionately large effect on its environment"
            }
        ]
    },
    {
        id: 35,
        title: "Mimicry as an Evolutionary Strategy",
        level: "advanced",
        content: `Mimicry is an evolutionary adaptation where one species evolves to resemble another. In Batesian mimicry, a harmless species imitates a harmful one to deter predators, like the viceroy butterfly mimicking the toxic monarch. In Müllerian mimicry, two or more well-defended species evolve to resemble each other, reinforcing the warning signal to common predators.`,
        quiz: [
            {
                question: "What is Batesian mimicry?",
                options: ["When two harmful species look alike", "When a harmless species imitates a harmful one", "When a species imitates its environment"],
                answer: "When a harmless species imitates a harmful one"
            }
        ]
    },
    {
        id: 36,
        title: "The Neurological Basis of Birdsong",
        level: "advanced",
        content: `Birdsong is a complex learned behavior controlled by a specialized network of brain nuclei known as the song system. This system exhibits remarkable neural plasticity, particularly during the sensory learning phase when a young bird memorizes a tutor's song. Studying this process provides valuable insights into the neural mechanisms of vocal learning, which has parallels with human speech acquisition.`,
        quiz: [
            {
                question: "Is birdsong an innate or a learned behavior?",
                options: ["Innate (born with it)", "Learned", "A mix of both"],
                answer: "Learned"
            }
        ]
    },
    {
        id: 37,
        title: "Conservation Genetics and Species Recovery",
        level: "advanced",
        content: `Conservation genetics applies genetic methods to the conservation and restoration of biodiversity. By analyzing genetic diversity within a population, scientists can assess its health, identify inbreeding risks, and manage captive breeding programs more effectively. This discipline is crucial for making informed decisions in the recovery plans for endangered species like the California condor.`,
        quiz: [
            {
                question: "How does conservation genetics help endangered species?",
                options: ["By creating new species", "By assessing population health and managing breeding", "By cloning animals"],
                answer: "By assessing population health and managing breeding"
            }
        ]
    },
    {
        id: 38,
        title: "The Physiology of Extreme Diving",
        level: "advanced",
        content: `Marine mammals like sperm whales and elephant seals have evolved extraordinary physiological adaptations for deep diving. The 'dive reflex' redirects blood flow to essential organs, while high concentrations of myoglobin in their muscles store vast amounts of oxygen. These mechanisms allow them to withstand immense pressure and oxygen deprivation during prolonged foraging trips in the deep ocean.`,
        quiz: [
            {
                question: "What is the 'dive reflex' in marine mammals?",
                options: ["A reflex to swim faster", "A redirection of blood flow to essential organs", "A way to hold their breath longer"],
                answer: "A redirection of blood flow to essential organs"
            }
        ]
    },
    {
        id: 39,
        title: "The Gut Microbiome's Influence",
        level: "advanced",
        content: `An animal's gut microbiome, the vast community of microorganisms residing in its digestive tract, plays a pivotal role in its health, influencing everything from nutrient absorption to immune function. Research has shown that this symbiotic relationship can even affect behavior. The composition of the microbiome is shaped by diet and environment, and its disruption can have significant health consequences.`,
        quiz: [
            {
                question: "What is an animal's gut microbiome?",
                options: ["The animal's stomach", "A type of food", "A community of microorganisms in the digestive tract"],
                answer: "A community of microorganisms in the digestive tract"
            }
        ]
    },
    {
        id: 40,
        title: "Epigenetics in Animal Development",
        level: "advanced",
        content: `Epigenetics refers to modifications to DNA that do not change the DNA sequence itself but affect gene activity. These changes can be influenced by environmental factors and are heritable. In animals, epigenetic mechanisms are critical for processes like cell differentiation and can explain how genetically identical individuals, such as queen and worker bees, can have vastly different physical traits and behaviors.`,
        quiz: [
            {
                question: "What does epigenetics affect?",
                options: ["The DNA sequence", "Gene activity", "The number of chromosomes"],
                answer: "Gene activity"
            }
        ]
    }
];

const themedVocabulary = {
    "自然 (Nature)": {
        "forest": { definition: "森林 (n.) - A large area covered chiefly with trees and undergrowth.", level: "beginner" },
        "island": { definition: "島嶼 (n.) - A piece of land surrounded by water.", level: "beginner" },
        "ocean": { definition: "海洋 (n.) - A very large expanse of sea...", level: "beginner" },
        "mountain": { definition: "山 (n.) - A large natural elevation of the earth's surface...", level: "beginner" },
        "river": { definition: "河流 (n.) - A large natural stream of water...", level: "beginner" },
        "sunshine": { definition: "陽光 (n.) - Direct sunlight unbroken by cloud.", level: "beginner" },
        "atmosphere": { definition: "大氣層 (n.) - The envelope of gases surrounding the earth or another planet.", level: "intermediate" },
        "climate": { definition: "氣候 (n.) - The weather conditions prevailing in an area in general or over a long period.", level: "intermediate" },
        "species": { definition: "物種 (n.) - A group of living organisms consisting of similar individuals capable of exchanging genes or interbreeding.", level: "intermediate" },
        "environment": { definition: "環境 (n.) - The surroundings or conditions in which a person, animal, or plant lives or operates.", level: "intermediate" },
        "continent": { definition: "大陸；洲 (n.) - Any of the world's main continuous expanses of land (Europe, Asia, Africa, North and South America, Australia, Antarctica).", level: "intermediate" },
        "volcano": { definition: "火山 (n.) - A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are or have been erupted from the earth's crust.", level: "intermediate" },
        "ecosystem": { definition: "生態系統 (n.) - A biological community of interacting organisms and their physical environment.", level: "advanced" },
        "biodiversity": { definition: "生物多樣性 (n.) - The variety of life in the world or in a particular habitat or ecosystem.", level: "advanced" },
        "photosynthesis": { definition: "光合作用 (n.) - The process by which green plants use sunlight to synthesize foods from carbon dioxide and water.", level: "advanced" },
        "geology": { definition: "地質學 (n.) - The science that deals with the earth's physical structure and substance, its history, and the processes which act on it.", level: "advanced" },
        "evolution": { definition: "演化 (n.) - The process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth.", level: "advanced" },
        "habitat": { definition: "棲息地 (n.) - The natural home or environment of an animal, plant, or other organism.", level: "advanced" }
    },
    "情感與概念 (Feelings & Concepts)": {
        "happy": { definition: "快樂的 (adj.) - Feeling or showing pleasure or contentment.", level: "beginner" },
        "brave": { definition: "勇敢的 (adj.) - Ready to face and endure danger or pain; showing courage.", level: "beginner" },
        "curious": { definition: "好奇的 (adj.) - Eager to know or learn something.", level: "beginner" },
        "friendly": { definition: "友善的 (adj.) - Kind and pleasant.", level: "beginner" },
        "cheerful": { definition: "快樂的 (adj.) - Noticeably happy and optimistic.", level: "beginner" },
        "beautiful": { definition: "美麗的 (adj.) - Pleasing the senses or mind aesthetically.", level: "beginner" },
        "knowledge": { definition: "知識 (n.) - Facts, information, and skills acquired through experience or education.", level: "intermediate" },
        "ambition": { definition: "抱負 (n.) - A strong desire to do or to achieve something, typically requiring determination and hard work.", level: "intermediate" },
        "courage": { definition: "勇氣 (n.) - The ability to do something that frightens one; bravery.", level: "intermediate" },
        "patience": { definition: "耐心 (n.) - The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.", level: "intermediate" },
        "opinion": { definition: "意見 (n.) - A view or judgment formed about something, not necessarily based on fact or knowledge.", level: "intermediate" },
        "creativity": { definition: "創造力 (n.) - The use of the imagination or original ideas, especially in the production of an artistic work.", level: "intermediate" },
        "perseverance": { definition: "毅力 (n.) - Persistence in doing something despite difficulty or delay in achieving success.", level: "advanced" },
        "empathy": { definition: "同理心 (n.) - The ability to understand and share the feelings of another.", level: "advanced" },
        "nostalgia": { definition: "懷舊 (n.) - A sentimental longing or wistful affection for the past.", level: "advanced" },
        "apathy": { definition: "冷漠 (n.) - Lack of interest, enthusiasm, or concern.", level: "advanced" },
        "serendipity": { definition: "意外發現 (n.) - The occurrence and development of events by chance in a happy or beneficial way.", level: "advanced" },
        "integrity": { definition: "正直 (n.) - The quality of being honest and having strong moral principles.", level: "advanced" }
    },
    "動作與行為 (Actions & Behaviors)": {
        "listen": { definition: "聆聽 (v.) - To give one's attention to a sound.", level: "beginner" },
        "share": { definition: "分享 (v.) - To have a portion of (something) with another or others.", level: "beginner" },
        "laugh": { definition: "笑 (v.) - To make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement.", level: "beginner" },
        "create": { definition: "創造 (v.) - To bring (something) into existence.", level: "beginner" },
        "imagine": { definition: "想像 (v.) - To form a mental image or concept of.", level: "beginner" },
        "promise": { definition: "承諾 (v.) - To assure someone that one will definitely do, give, or arrange something.", level: "beginner" },
        "explore": { definition: "探索 (v.) - To travel in or through an unfamiliar country or area...", level: "intermediate" },
        "discover": { definition: "發現 (v.) - To find (something or someone) unexpectedly...", level: "intermediate" },
        "communicate": { definition: "溝通 (v.) - To share or exchange information, news, or ideas.", level: "intermediate" },
        "organize": { definition: "組織 (v.) - To arrange or structure in a systematic way.", level: "intermediate" },
        "achieve": { definition: "達成 (v.) - To successfully bring about or reach by effort, skill, or courage.", level: "intermediate" },
        "improve": { definition: "改善 (v.) - To make or become better.", level: "intermediate" },
        "analyze": { definition: "分析 (v.) - To examine in detail the constitution or structure of (something)...", level: "advanced" },
        "collaborate": { definition: "合作 (v.) - To work jointly on an activity, especially to produce or create something.", level: "advanced" },
        "innovate": { definition: "創新 (v.) - To make changes in something established, especially by introducing new methods, ideas, or products.", level: "advanced" },
        "delegate": { definition: "授權 (v.) - To entrust (a task or responsibility) to another person.", level: "advanced" },
        "negotiate": { definition: "協商 (v.) - To obtain or bring about by discussion.", level: "advanced" },
        "articulate": { definition: "清晰表達 (v.) - To express (an idea or feeling) fluently and coherently.", level: "advanced" }
    },
    "生活與社群 (Life & Community)": {
        "family": { definition: "家庭 (n.) - A group consisting of parents and children...", level: "beginner" },
        "school": { definition: "學校 (n.) - An institution for educating children.", level: "beginner" },
        "teacher": { definition: "老師 (n.) - A person who teaches, especially in a school.", level: "beginner" },
        "student": { definition: "學生 (n.) - A person who is studying at a school or college.", level: "beginner" },
        "music": { definition: "音樂 (n.) - Vocal or instrumental sounds combined to produce beauty of form, harmony, and expression of emotion.", level: "beginner" },
        "together": { definition: "一起 (adv.) - With or in proximity to another person or people.", level: "beginner" },
        "community": { definition: "社群 (n.) - A group of people living in the same place or having a particular characteristic in common.", level: "intermediate" },
        "culture": { definition: "文化 (n.) - The arts and other manifestations of human intellectual achievement regarded collectively.", level: "intermediate" },
        "economy": { definition: "經濟 (n.) - The wealth and resources of a country or region, especially in terms of the production and consumption of goods and services.", level: "intermediate" },
        "society": { definition: "社會 (n.) - The aggregate of people living together in a more or less ordered community.", level: "intermediate" },
        "citizen": { definition: "公民 (n.) - A legally recognized subject or national of a state or commonwealth, either native or naturalized.", level: "intermediate" },
        "tradition": { definition: "傳統 (n.) - The transmission of customs or beliefs from generation to generation.", level: "intermediate" },
        "government": { definition: "政府 (n.) - The governing body of a nation, state, or community.", level: "advanced" },
        "infrastructure": { definition: "基礎設施 (n.) - The basic physical and organizational structures and facilities (e.g., buildings, roads, power supplies) needed for the operation of a society.", level: "advanced" },
        "legislation": { definition: "立法 (n.) - Laws, considered collectively.", level: "advanced" },
        "diplomacy": { definition: "外交 (n.) - The profession, activity, or skill of managing international relations.", level: "advanced" },
        "demographics": { definition: "人口統計資料 (n.) - Statistical data relating to the population and particular groups within it.", level: "advanced" },
        "sovereignty": { definition: "主權 (n.) - The authority of a state to govern itself or another state.", level: "advanced" }
    },
    "食物 (Food)": {
        "apple": { definition: "蘋果 (n.) - A round fruit with firm, white flesh...", level: "beginner" },
        "bread": { definition: "麵包 (n.) - Food made of flour, water, and yeast...", level: "beginner" },
        "cheese": { definition: "起司 (n.) - A food made from the pressed curds of milk.", level: "beginner" },
        "water": { definition: "水 (n.) - A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain.", level: "beginner" },
        "sugar": { definition: "糖 (n.) - A sweet crystalline substance obtained from various plants, especially sugar cane and sugar beet.", level: "beginner" },
        "coffee": { definition: "咖啡 (n.) - A hot drink made from the roasted and ground seeds of a tropical shrub.", level: "beginner" },
        "ingredient": { definition: "食材 (n.) - Any of the foods or substances that are combined to make a particular dish.", level: "intermediate" },
        "recipe": { definition: "食譜 (n.) - A set of instructions for preparing a particular dish, including a list of the ingredients required.", level: "intermediate" },
        "protein": { definition: "蛋白質 (n.) - A nutrient found in food (as meat, milk, eggs, and beans) that is an important part of the human diet.", level: "intermediate" },
        "vitamin": { definition: "維他命 (n.) - A group of organic compounds which are essential for normal growth and nutrition.", level: "intermediate" },
        "dessert": { definition: "甜點 (n.) - The sweet course eaten at the end of a meal.", level: "intermediate" },
        "beverage": { definition: "飲料 (n.) - A drink, especially one other than water.", level: "intermediate" },
        "nutrition": { definition: "營養 (n.) - The process of providing or obtaining the food necessary for health and growth.", level: "advanced" },
        "metabolism": { definition: "新陳代謝 (n.) - The chemical processes that occur within a living organism in order to maintain life.", level: "advanced" },
        "fermentation": { definition: "發酵 (n.) - The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms.", level: "advanced" },
        "preservative": { definition: "防腐劑 (n.) - A substance used to preserve foodstuffs, wood, or other materials against decay.", level: "advanced" },
        "antioxidant": { definition: "抗氧化劑 (n.) - A substance that inhibits oxidation, especially one used to counteract the deterioration of stored food products.", level: "advanced" },
        "gourmet": { definition: "美食家 (n.) - A connoisseur of good food; a person with a discerning palate.", level: "advanced" }
    },
    "科技 (Technology)": {
        "computer": { definition: "電腦 (n.) - An electronic device for storing and processing data.", level: "beginner" },
        "internet": { definition: "網路 (n.) - The global computer network...", level: "beginner" },
        "keyboard": { definition: "鍵盤 (n.) - A panel of keys that operate a computer or typewriter.", level: "beginner" },
        "screen": { definition: "螢幕 (n.) - A flat panel or area on an electronic device on which images and data are displayed.", level: "beginner" },
        "phone": { definition: "電話；手機 (n.) - A system for transmitting voices over a distance using wire or radio.", level: "beginner" },
        "mouse": { definition: "滑鼠 (n.) - A small handheld device which is moved across a mat or flat surface to move the cursor on a computer screen.", level: "beginner" },
        "software": { definition: "軟體 (n.) - The programs and other operating information used by a computer.", level: "intermediate" },
        "algorithm": { definition: "演算法 (n.) - A process or set of rules to be followed in calculations or other problem-solving operations.", level: "advanced" },
        "application": { definition: "應用程式 (n.) - A program or piece of software designed and written to fulfill a particular purpose of the user.", level: "intermediate" },
        "network": { definition: "網路 (n.) - A group or system of interconnected people or things.", level: "intermediate" },
        "device": { definition: "裝置 (n.) - A thing made or adapted for a particular purpose, especially a piece of mechanical or electronic equipment.", level: "intermediate" },
        "digital": { definition: "數位的 (adj.) - Involving or relating to the use of computer technology.", level: "intermediate" },
        "virtual": { definition: "虛擬的 (adj.) - Not physically existing as such but made by software to appear to do so.", level: "intermediate" },
        "encryption": { definition: "加密 (n.) - The process of converting information or data into a code, especially to prevent unauthorized access.", level: "advanced" },
        "cybersecurity": { definition: "網路安全 (n.) - The state of being protected against the criminal or unauthorized use of electronic data.", level: "advanced" },
        "database": { definition: "資料庫 (n.) - A structured set of data held in a computer, especially one that is accessible in various ways.", level: "advanced" },
        "interface": { definition: "介面 (n.) - A point where two systems, subjects, organizations, etc., meet and interact.", level: "advanced" },
        "bandwidth": { definition: "頻寬 (n.) - The range of frequencies within a given band, in particular that used for transmitting a signal.", level: "advanced" }
    }
    ,
    "身體部位 (Body Parts)": {
        "head": { definition: "頭 (n.) - The upper part of the human body, containing the brain, eyes, ears, nose, and mouth.", level: "beginner" },
        "hand": { definition: "手 (n.) - The end part of a person's arm beyond the wrist, including the palm, fingers, and thumb.", level: "beginner" },
        "foot": { definition: "腳 (n.) - The part of the leg below the ankle, on which a person stands or walks.", level: "beginner" },
        "eye": { definition: "眼睛 (n.) - Each of a pair of globular organs in the head through which people and vertebrate animals see.", level: "beginner" },
        "nose": { definition: "鼻子 (n.) - The part of the face that bears the nostrils and is involved in breathing and smelling.", level: "beginner" },
        "mouth": { definition: "嘴巴 (n.) - The opening in the lower part of the human face, surrounded by the lips.", level: "beginner" },
        "shoulder": { definition: "肩膀 (n.) - The upper joint of the human arm and the part of the body between this and the neck.", level: "intermediate" },
        "stomach": { definition: "胃；腹部 (n.) - The internal organ in which the major part of the digestion of food occurs.", level: "intermediate" },
        "muscle": { definition: "肌肉 (n.) - A band or bundle of fibrous tissue that has the ability to contract, producing movement.", level: "intermediate" },
        "brain": { definition: "大腦 (n.) - An organ of soft nervous tissue contained in the skull of vertebrates, functioning as the coordinating center of sensation and intellectual and nervous activity.", level: "intermediate" },
        "heart": { definition: "心臟 (n.) - A hollow muscular organ that pumps the blood through the circulatory system.", level: "intermediate" },
        "lung": { definition: "肺 (n.) - Each of the pair of organs situated within the rib cage, consisting of elastic sacs with branching passages into which air is drawn.", level: "intermediate" },
        "skeleton": { definition: "骨骼 (n.) - The framework of bones supporting a human or animal body.", level: "advanced" },
        "tendon": { definition: "肌腱 (n.) - A flexible but inelastic cord of strong fibrous collagen tissue attaching a muscle to a bone.", level: "advanced" },
        "ligament": { definition: "韌帶 (n.) - A short band of tough, flexible fibrous connective tissue which connects two bones or cartilages or holds together a joint.", level: "advanced" },
        "neuron": { definition: "神經元 (n.) - A specialized cell transmitting nerve impulses; a nerve cell.", level: "advanced" },
        "artery": { definition: "動脈 (n.) - Any of the muscular-walled tubes forming part of the circulation system by which blood is conveyed from the heart to all parts of the body.", level: "advanced" },
        "capillary": { definition: "毛細血管 (n.) - Any of the fine branching blood vessels that form a network between the arterioles and venules.", level: "advanced" }
    },
    "職業 (Occupations)": {
        "doctor": { definition: "醫生 (n.) - A person who is qualified to treat people who are ill.", level: "beginner" },
        "nurse": { definition: "護士 (n.) - A person trained to care for the sick or infirm, especially in a hospital.", level: "beginner" },
        "police": { definition: "警察 (n.) - The civil force of a state, responsible for the prevention and detection of crime and the maintenance of public order.", level: "beginner" },
        "cook": { definition: "廚師 (n.) - A person who prepares and cooks food, especially as a job or in a specified way.", level: "beginner" },
        "driver": { definition: "司機 (n.) - A person who drives a vehicle.", level: "beginner" },
        "singer": { definition: "歌手 (n.) - A person who sings, especially professionally.", level: "beginner" },
        "engineer": { definition: "工程師 (n.) - A person who designs, builds, or maintains engines, machines, or public works.", level: "intermediate" },
        "scientist": { definition: "科學家 (n.) - A person who is studying or has expert knowledge of one or more of the natural or physical sciences.", level: "intermediate" },
        "lawyer": { definition: "律師 (n.) - A person who practices or studies law; an attorney or a counselor.", level: "intermediate" },
        "architect": { definition: "建築師 (n.) - A person who designs buildings and in many cases also supervises their construction.", level: "intermediate" },
        "accountant": { definition: "會計師 (n.) - A person whose job is to keep or inspect financial accounts.", level: "intermediate" },
        "designer": { definition: "設計師 (n.) - A person who plans the form, look, or workings of something before its being made or built.", level: "intermediate" },
        "pharmacist": { definition: "藥劑師 (n.) - A person who is professionally qualified to prepare and dispense medicinal drugs.", level: "advanced" },
        "psychologist": { definition: "心理學家 (n.) - An expert or specialist in psychology.", level: "advanced" },
        "geologist": { definition: "地質學家 (n.) - An expert in or student of geology.", level: "advanced" },
        "astronomer": { definition: "天文學家 (n.) - An expert in or student of astronomy.", level: "advanced" },
        "consultant": { definition: "顧問 (n.) - A person who provides expert advice professionally.", level: "advanced" },
        "entrepreneur": { definition: "企業家 (n.) - A person who sets up a business or businesses, taking on financial risks in the hope of profit.", level: "advanced" }
    },
    "交通工具 (Transportation)": {
        "car": { definition: "汽車 (n.) - A road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor.", level: "beginner" },
        "bus": { definition: "公車 (n.) - A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route.", level: "beginner" },
        "train": { definition: "火車 (n.) - A series of connected railway carriages or wagons moved by a locomotive or by integral motors.", level: "beginner" },
        "bicycle": { definition: "腳踏車 (n.) - A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals.", level: "beginner" },
        "boat": { definition: "船 (n.) - A vessel for travel on water, propelled by oars, sails, or an engine.", level: "beginner" },
        "plane": { definition: "飛機 (n.) - A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.", level: "beginner" },
        "motorcycle": { definition: "摩托車 (n.) - A two-wheeled vehicle that is powered by a motor and has no pedals.", level: "intermediate" },
        "subway": { definition: "地鐵 (n.) - An underground electric railway.", level: "intermediate" },
        "helicopter": { definition: "直升機 (n.) - A type of aircraft that derives both lift and propulsion from one or more sets of horizontally revolving overhead rotors.", level: "intermediate" },
        "scooter": { definition: "速克達；滑板車 (n.) - A light two-wheeled open motor vehicle or a child's toy with a board and two wheels.", level: "intermediate" },
        "ferry": { definition: "渡輪 (n.) - A boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service.", level: "intermediate" },
        "tram": { definition: "電車 (n.) - A passenger vehicle powered by electricity conveyed by overhead cables, and running on rails laid in a public road.", level: "intermediate" },
        "submarine": { definition: "潛水艇 (n.) - A warship with a streamlined hull designed to operate completely submerged in the sea for long periods.", level: "advanced" },
        "hovercraft": { definition: "氣墊船 (n.) - A vehicle that travels over land or water on a cushion of air provided by a downward-blasting fan.", level: "advanced" },
        "monorail": { definition: "單軌鐵路 (n.) - A railway system in which the track consists of a single rail.", level: "advanced" },
        "spaceship": { definition: "太空船 (n.) - A vehicle used for travel in outer space.", level: "advanced" },
        "yacht": { definition: "遊艇 (n.) - A medium-sized sailing boat or motor boat, especially one used for racing or private cruising.", level: "advanced" },
        "zeppelin": { definition: "齊柏林飛船 (n.) - A large German airship of the early 20th century, long and cylindrical in shape and with a rigid framework.", level: "advanced" }
    }
};

// For features that need a flat list of all words (like the old daily words logic if no theme is selected)
const vocabulary = Object.values(themedVocabulary).reduce((acc, theme) => {
    const themeWords = {};
    for (const word in theme) {
        themeWords[word] = theme[word].definition;
    }
    return { ...acc, ...themeWords };
}, {});

const proverbs = [
    "An apple a day keeps the doctor away.",
    "The early bird catches the worm.",
    "Actions speak louder than words.",
    "Practice makes perfect.",
    "Where there's a will, there's a way.",
    "A picture is worth a thousand words.",
    "Don't count your chickens before they hatch.",
    "Every cloud has a silver lining.",
    "Good things come to those who wait.",
    "Honesty is the best policy.",
    "Laughter is the best medicine.",
    "The pen is mightier than the sword.",
    "Two heads are better than one.",
    "You can't judge a book by its cover.",
    "A friend in need is a friend indeed.",
    "Better late than never.",
    "All that glitters is not gold.",
    "A journey of a thousand miles begins with a single step.",
    "Beauty is in the eye of the beholder.",
    "Don't put all your eggs in one basket.",
    "Birds of a feather flock together.",
    "A watched pot never boils.",
    "Beggars can't be choosers.",
    "Don't bite the hand that feeds you.",
    "Familiarity breeds contempt.",
    "Fortune favors the bold.",
    "Haste makes waste.",
    "If it ain't broke, don't fix it.",
    "Ignorance is bliss.",
    "It's no use crying over spilled milk.",
    "Let sleeping dogs lie.",
    "Look before you leap.",
    "Make hay while the sun shines.",
    "Misery loves company.",
    "Necessity is the mother of invention.",
    "No man is an island.",
    "Out of sight, out of mind.",
    "People who live in glass houses shouldn't throw stones.",
    "Rome wasn't built in a day.",
    "Slow and steady wins the race.",
    "Still waters run deep.",
    "The squeaky wheel gets the grease.",
    "There's no place like home.",
    "There's no such thing as a free lunch.",
    "Time is money.",
    "Too many cooks spoil the broth.",
    "When in Rome, do as the Romans do.",
    "You can't have your cake and eat it too.",
    "Two wrongs don't make a right."
];

const grammarRules = [
    {
        id: 1,
        title: "現在簡單式 (Present Simple)",
        explanation: "用於描述習慣、不變的事實、一般真理或固定的安排。\n\n結構：主詞 + 動詞原形 (若主詞為第三人稱單數，動詞需 +s/es)",
        examples: [
            "I work in a hospital.",
            "The sun rises in the east.",
            "She speaks three languages.",
            "They usually play tennis on weekends."
        ],
        quiz: [
            {
                question: "The earth ___ around the sun.",
                options: ["go", "goes", "is going"],
                answer: "goes"
            }
        ]
    },
    {
        id: 2,
        title: "冠詞 (Articles: a, an, the)",
        explanation: "冠詞用來表示名詞的特定性。\n\n- 'a/an' (不定冠詞): 用於非特定的、單數可數名詞。'a' 用於子音開頭的單字，'an' 用於母音開-頭的單字。\n- 'the' (定冠詞): 用於特定的、獨一無二的，或前面已經提過的-名詞。",
        examples: [
            "I saw a dog in the park.",
            "She is an excellent teacher.",
            "The dog I saw was very friendly.",
            "The moon is bright tonight."
        ],
        quiz: [
            {
                question: "I need to buy ___ new umbrella.",
                options: ["a", "an", "the"],
                answer: "a"
            }
        ]
    },
    {
        id: 3,
        title: "介係詞 (Prepositions: in, on, at)",
        explanation: "介係詞用來表示時間、地點或方向。\n\n- 'in': 用於較大的空間 (in the city)、月份年份 (in May, in 2023)、一段時間內 (in the morning)。\n- 'on': 用於表面 (on the table)、特定的日期 (on Monday, on Christmas Day)。\n- 'at': 用於特定的地點 (at the station)、特定的時間 (at 5 PM)。",
        examples: [
            "My keys are in my bag.",
            "The picture is on the wall.",
            "Let's meet at the coffee shop at 3 o'clock."
        ],
        quiz: [
            {
                question: "The meeting is ___ Friday morning.",
                options: ["in", "on", "at"],
                answer: "on"
            }
        ]
    },
    {
        id: 4,
        title: "現在進行式 (Present Continuous)",
        explanation: "用於描述當下正在發生的動作，或未來確定的計畫。\n\n結構：主詞 + be動詞 (is, am, are) + 動詞-ing",
        examples: [
            "I am studying English right now.",
            "He is watching television.",
            "They are playing in the garden.",
            "We are meeting him tomorrow."
        ],
        quiz: [
            {
                question: "Please be quiet, the baby ___.",
                options: ["sleeps", "is sleeping", "slept"],
                answer: "is sleeping"
            }
        ]
    },
    {
        id: 5,
        title: "過去簡單式 (Past Simple)",
        explanation: "用於描述過去某個特定時間發生的動作或狀態。規則動詞字尾加 -ed，不規則動詞有其特定形式。\n\n結構：主詞 + 過去式動詞",
        examples: [
            "She visited her grandmother yesterday.",
            "I went to the cinema last night.",
            "They finished their homework an hour ago.",
            "He bought a new car last week."
        ],
        quiz: [
            {
                question: "We ___ to the beach last summer.",
                options: ["go", "goes", "went"],
                answer: "went"
            }
        ]
    },
    {
        id: 6,
        title: "未來簡單式 (Future Simple - will)",
        explanation: "用於描述未來的意圖、預測或即時的決定。\n\n結構：主詞 + will + 動詞原形",
        examples: [
            "I will call you later.",
            "It will probably rain tomorrow.",
            "She will be 20 next year.",
            "I think I will have a cup of tea."
        ],
        quiz: [
            {
                question: "I promise I ___ tell anyone your secret.",
                options: ["will not", "am not", "do not"],
                answer: "will not"
            }
        ]
    },
    {
        id: 7,
        title: "可數與不可數名詞",
        explanation: "可數名詞可以計算數量 (one book, two books)，有單複數形式。不可數名詞無法直接計算 (water, information)，通常沒有複數形式，需要搭配單位詞 (a glass of water)。",
        examples: [
            "I have three apples. (可數)",
            "She needs some advice. (不可數)",
            "There are many cars on the street. (可數)",
            "Can I have some sugar? (不可數)"
        ],
        quiz: [
            {
                question: "How ___ water do you drink every day?",
                options: ["many", "much", "a lot"],
                answer: "much"
            }
        ]
    },
    {
        id: 8,
        title: "比較級與最高級 (Comparatives & Superlatives)",
        explanation: "比較級用於比較兩者 (-er, more)。最高級用於比較三者或以上 (-est, most)。\n\n- 單音節或部分雙音節字：tall -> taller -> tallest\n- 多音節字：beautiful -> more beautiful -> the most beautiful",
        examples: [
            "This car is faster than that one.",
            "She is more intelligent than her brother.",
            "This is the tallest building in the city.",
            "He is the most famous actor in the world."
        ],
        quiz: [
            {
                question: "My sister is ___ than me.",
                options: ["tall", "taller", "tallest"],
                answer: "taller"
            }
        ]
    },
    {
        id: 9,
        title: "情態動詞 (Modal Verbs)",
        explanation: "情態動詞 (can, could, may, must, should) 用來表達能力、可能性、許可或義務。後面必須接動詞原形。",
        examples: [
            "You can speak English very well.",
            "It may rain this afternoon.",
            "You should finish your homework.",
            "I must go now."
        ],
        quiz: [
            {
                question: "You ___ be quiet in the library.",
                options: ["can", "must", "may"],
                answer: "must"
            }
        ]
    },
    {
        id: 10,
        title: "動名詞與不定詞 (Gerunds & Infinitives)",
        explanation: "動名詞 (V-ing) 和不定詞 (to + V) 都可以當作名詞使用，但某些動詞後面只能接特定的形式。\n\n- enjoy, finish, avoid 後面接動名詞。\n- want, hope, decide 後面接不定詞。",
        examples: [
            "I enjoy reading. (Gerund)",
            "She wants to travel the world. (Infinitive)",
            "He finished doing his homework. (Gerund)",
            "They decided to buy a new house. (Infinitive)"
        ],
        quiz: [
            {
                question: "I enjoy ___ to music.",
                options: ["listen", "to listen", "listening"],
                answer: "listening"
            }
        ]
    },
    {
        id: 11,
        title: "現在完成式 (Present Perfect)",
        explanation: "用於描述從過去持續到現在的動作，或對現在有影響的過去事件。\n\n結構：主詞 + have/has + 過去分詞 (V.p.p.)",
        examples: [
            "I have finished my homework.",
            "She has lived here for three years.",
            "They have never been to Japan.",
            "Have you seen this movie?"
        ],
        quiz: [
            {
                question: "He ___ just left the office.",
                options: ["has", "is", "was"],
                answer: "has"
            }
        ]
    },
    {
        id: 12,
        title: "過去進行式 (Past Continuous)",
        explanation: "用於描述在過去某個特定時間點正在進行的動作。\n\n結構：主詞 + was/were + 動詞-ing",
        examples: [
            "I was watching TV when you called.",
            "They were playing football at 5 PM yesterday.",
            "What were you doing at that time?",
            "It was raining all night."
        ],
        quiz: [
            {
                question: "While I was studying, my brother ___ video games.",
                options: ["plays", "is playing", "was playing"],
                answer: "was playing"
            }
        ]
    },
    {
        id: 13,
        title: "被動語態 (Passive Voice)",
        explanation: "當主詞是動作的接受者時使用，強調動作本身或其結果。\n\n結構：主詞 + be動詞 + 過去分詞 (V.p.p.)",
        examples: [
            "The book was written by a famous author.",
            "English is spoken all over the world.",
            "My car is being repaired.",
            "The window was broken last night."
        ],
        quiz: [
            {
                question: "This cake ___ by my mother.",
                options: ["made", "is made", "making"],
                answer: "is made"
            }
        ]
    },
    {
        id: 14,
        title: "關係子句 (Relative Clauses)",
        explanation: "用來修飾名詞，提供更多關於該名詞的資訊。由關係代名詞 (who, which, that) 引導。\n\n- 'who': 用於人\n- 'which': 用於事物\n- 'that': 可用於人或事物",
        examples: [
            "The man who lives next door is a doctor.",
            "This is the book which I bought yesterday.",
            "I know the girl that you are talking about.",
            "The phone that is on the table is mine."
        ],
        quiz: [
            {
                question: "The dog ___ is barking is my neighbor's.",
                options: ["who", "which", "that"],
                answer: "that"
            }
        ]
    },
    {
        id: 15,
        title: "條件句 (Conditional - Type 1)",
        explanation: "用於描述未來可能發生的真實情況及其結果。\n\n結構：If + 主詞 + 現在簡單式動詞, 主詞 + will + 動詞原形",
        examples: [
            "If it rains tomorrow, I will stay home.",
            "If you study hard, you will pass the exam.",
            "She will be late if she doesn't hurry.",
            "If I have enough money, I will buy a new phone."
        ],
        quiz: [
            {
                question: "If you ___ water to 100 degrees, it boils.",
                options: ["heat", "will heat", "heated"],
                answer: "heat"
            }
        ]
    }
];
