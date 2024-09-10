const INFO = {
	main: {
		title: "Reactfolio by neranjhana",
		name: "Neranjhana Ramesh",
		email: "neranjhanaramesh@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/Neranjhana/",
		linkedin: "https://www.linkedin.com/in/neranjhana/",
		instagram: "https://instagram.com/neranjhana",
		medium: "https://medium.com/@neranjhanaramesh/",
	},

	// homepage: {
	// 	title: "Software Developer | Machine Learning & Data Science | AI for Healthcare",
	// 	description:
	// 		"I am a graduate student at University of Southern California. My passion lies in crafting innovative solutions at the intersection of software and machine learning. I want to be a better version of myself each day and am not afraid of making mistakes.\n\n" +
	// 		"I love to take up projects which interest me and challenge me at the same time. This has led me to work in diverse areas including AI for healthcare, Machine Learning for security solutions, gameplay agent development, and data analytics.\n\n" +
	// 		"I am also a seasoned software engineer well-versed in algorithms, problem-solving, and database management, thanks to my work experience at Zoom and IBM.\n\n" +
	// 		"I love going on adventures, reading books, trying out new restaurants, and scrolling through Reddit. I am currently reading 'A Wild Sheep Chase' by Murakami and find it enjoyable and intriguing. I also occasionally write poems.",
	// },

	homepage: {
		title: "Software Developer | Machine Learning & Data Science | AI for Healthcare",
		description:
			"Hi! I am Neranjhana, a tech-enthusiast and a perpetual learner.  My passion lies in developing innovative solutions at the intersection of software and machine learning. I am currently a graduate student at the University of Southern California." 
	},

	about: {
		title: "I’m Neranjhana. I live in Los Angeles, where I work on exciting tech projects",
		description:
			"I believe in the trasnformative power of technology and I love to take up projects which interest me and challenge me at the same time. This has led me to work in diverse areas including AI for healthcare, Machine Learning for security solutions, gameplay agent development, and data analytics. I love going on adventures, reading books, trying out new restaurants, and scrolling through Reddit. I am currently reading 'A Wild Sheep Chase' by Murakami and find it enjoyable and intriguing. I also occasionally write poems. I love meeting new people and am always open to feedback.",
	},

	articles: {
		title: "Blogs",
		description:
			"Chronological collection of my long-form thoughts on programming, machine-learning, views on life and more",
	},

	projects: [
		{
			title: "EEG Benchmarking",
			description:
				"The study comprehensively evaluates various deep learning strategies to classify Motor Movement / Imagery using Electroencephalogram (EEG) signals, an area pivotal to advancements in brain-computer interfaces (BCIs).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png",
			//logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iQyYphUHhLEUchqyhIwsRMe0G9aqVFjUaA&s"
			linkText: "View Project",
			link: "https://github.com/Neranjhana/EEGBenchmarking",
		},		

		{
			title: "EventSage",
			description:
				"An iOS app and an additional web app on GCP using React and Node.js, allowing users to search, view, and favorite live events on the website with data from TicketMaster.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png", // Example logo URL
			linkText: "View Project",
			link: "https://github.com/Neranjhana/EventSage",
		},
		

		{
			title: "Inference Engine",
			description:
				"An inference engine to determine whether a new query can be inferred from an existing knowledge base. The engine utilizes backward chaining to solve this problem.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", // Example logo URL
			linkText: "View Project",
			link: "https://github.com/Neranjhana/InferenceEngine",
		},
		

		{
			title: "STARFISH - Soft Translational Advanced Robot for In-Space Handling",
			description:
				"Created a soft robotic crawling inspection robot designed for use on satellites and space platforms in orbit. STARFISH integrates electro-gecko adhesive technology with soft materials and locomotion to create a self-powered crawling device.",
			logo: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/10/raspberry_pi_logo/16166824-1-eng-GB/Raspberry_Pi_logo_pillars.jpg", // Example logo URL
			linkText: "Learn More",
			link: "https://www.isi.edu/centers-serc/research/rendezvous-and-proximity-operations-rpo/starfish-soft-translatable-advanced-robot-for-in-space-handling/",
		},
		

		{
			title: "Pente Gameplay Agent",
			description:
				"AI-based Pente gameplay agent that makes clever choices. Built using the Minimax algorithm with Alpha-beta pruning to determine the best move. Developed admissible and efficient heuristics to enhance decision-making during gameplay.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.png",
			linkText: "View Project",
			link: "https://github.com/Neranjhana/PenteGameplayAgent",
		}
		
	],
};

export default INFO;
