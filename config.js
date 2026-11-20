// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {Traffic congestion at Sheppard Avenue West and Yonge Street in Toronto creates operational challenges for urban transportation
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
    heroBg: "#111111",
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
          { text: "Speed and density observations from Edge E145 were compared to evaluate the operational effects of autonomous drivinge." }
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
				"Train schedule simulation outputs across two scenarios showing arrivals, departures, and dwell time across four stations. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario 1 provides a stable baseline timetable with consistent station dwell and smooth train progression.",
				"Scenario 2 applies a delay at S2, which then propagates to downstream stations.",
				"Delay effects grow across frequency levels, with major increases in arrival and departure times at S3 and S4.",
				"S1 is only slightly affected, while downstream stations absorb most of the disruption.",
				"This demonstrates the importance of recovery time, dwell management, and operational control in rail scheduling."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
