// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Yohan Mohammadi",
    program: "Program / Department",
    university: "McMaster University, Canada",
    email: "your.email@example.com"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#232A33",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Development of Digital Twin of a Railway Corridor Using Unity Game Engine and SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Blender → Unity → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Traffic congestion at Sheppard Avenue West and Yonge Street in Toronto creates operational challenges for urban transportation.",
			"This project uses SUMO microscopic traffic simulation to model the intersection and investigate potential improvements.",
			"Connected Autonomous Vehicles (CAVs) and traffic signal modifications are evaluated as possible congestion-reduction strategies.",
			"The study compares traffic performance using speed-density relationships on a representative roadway approach."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"The intersection experiences traffic congestion and queue buildup under conventional human-driven traffic conditions.",
			"The effectiveness of autonomous vehicles and traffic signal optimization must be evaluated before real-world implementation.",
			"A controlled simulation is required to compare alternative traffic conditions while maintaining consistent road geometry and traffic demand.",
			"The study investigates whether these strategies can reduce congestion and improve roadway efficiency."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Develop a digital roadway network of Sheppard Avenue West and Yonge Street and establish a 100% HDV baseline.",
			"Compare traffic performance between a 100% HDV fleet and a 100% CAV fleet.",
			"Implement an advanced-green traffic signal intervention and evaluate its impact on traffic congestion.",
			"Communicate the project's methodology, simulation results, and conclusions through a web-based showcase."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection",
				text: "Sheppard Avenue West and Yonge Street in Toronto were selected as the study intersection for traffic simulation and operational analysis.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Digital Road Network Development",
				text: "The intersection was recreated in SUMO using road geometry, lane configurations, turning bays, and junction connections.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Baseline and CAV Simulation",
				text: "A 100% HDV baseline was simulated and compared with a 100% CAV scenario using identical traffic demand and network conditions.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Traffic Signal Intervention",
				text: "An eight-second advanced-green phase for left-turning traffic was implemented and evaluated against the baseline scenario.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection",
        bullets: [
				  { text: "The study focused on Sheppard Avenue West and Yonge Street in Toronto, Ontario." },
          { text: "The intersection was selected to investigate urban traffic congestion and roadway efficiency." },
          { text: "A representative upstream roadway segment, Edge E145, was selected for speed-density analysis." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Road Network Development",
        bullets: [
          { text: "The intersection network was developed in SUMO using NetEdit and aerial imagery." },
          { text: "Major roads, local streets, lanes, turning bays, and junction connections were modeled." },
          { text: "Traffic demand and traffic signal configurations were then incorporated to establish the simulation environment." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: HDV and CAV Scenario Comparison",
        bullets: [
			{ text: "Scenario A represented a 100% Human-Driven Vehicle fleet using the baseline traffic signal timings." },
          { text: "Scenario B replaced the HDVs with a 100% Connected Autonomous Vehicle fleet while maintaining the same network and demand." },
		{ text: "Speed and density observations from Edge E145 were compared to evaluate the operational effects of autonomous driving." }
		],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Traffic Signal Intervention",
        bullets: [
          { text: "Scenario C retained a 100% HDV fleet and introduced Intervention X." },
          { text: "An eight-second advanced-green phase was added for left-turning traffic while adjusting the remaining signal timings." },
          { text: "The resulting speed-density observations were compared against the HDV baseline to evaluate congestion reduction." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Speed-density simulation results comparing the 100% HDV baseline and 100% CAV scenarios on Edge E145 at Sheppard Avenue West and Yonge Street.",

			charts: {
				left: {
					title: "Base Scenario – 100% HDV Baseline Speed-Density Relationship",
					src: "assets/img/image6.jpg",
					alt: "Speed-density diagram for the 100% HDV baseline scenario showing free-flow traffic conditions and severe congestion, with a fitted free-flow speed of 14.14 m/s and jam density of 259.2 vehicles per kilometre."
				},
				right: {
					title: "Scenario A — 100% CAV Speed-Density Relationship",
					src: "assets/img/image7.jpg",
					alt: "Speed-density diagram for the 100% CAV scenario showing traffic observations concentrated in low-density free-flow conditions, with a fitted free-flow speed of 15.71 m/s and estimated jam density of 118.7 vehicles per kilometre."
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario A (100% HDV) experienced severe congestion, with observed densities reaching approximately 259.2 veh/km and vehicle speeds dropping toward zero.",
				"Scenario B (100% CAV) maintained predominantly free-flow traffic conditions, with a fitted free-flow speed of 15.71 m/s compared with 14.14 m/s in the HDV baseline.",
				"The CAV scenario reduced queue buildup under the simulated demand, with observations concentrated below approximately 25 veh/km rather than extending into the highly congested conditions observed in the baseline.",
				"The CAV model used shorter following times (0.5 s), smaller minimum gaps (1.0 m), and zero driver imperfection, compared with the HDV parameters of 1.0 s, 2.5 m, and 0.5, respectively.",
				"The CAV jam-density estimate of 118.7 veh/km is uncertain because the simulation produced little to no congested traffic data. The results demonstrate congestion reduction under the tested demand, but additional testing at higher demand is required."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Viroz D'Souza", role: "Results Analysis, Documentation, and Web Showcase" },
      { name: "Rumi Alkhani", role: "Project Coordination and Report Development" },
      { name: "Oliver Naruse", role: "Road Network Modeling and Scenario Development" },
      { name: "Samuel Rosales", role: "SUMO Simulation and Traffic Analysis" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/VirozVD/smartcity-projecta.github.io"
  }
};
