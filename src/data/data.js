const conferenceData = {
  title: "EFAST-2026",
  subtitle:
    "International Conference on Emerging Frontiers in Advanced Sciences and Technologies",
  date: "June 27-28, 2026",
  location: "Pabna University of Science and Technology, Bangladesh ",
  location2: "Universiti of Malaysia, Perlis, Malaysia",

  highlights: [
    {
      icon: "🔬",
      title: "Quantum Computing",
      desc: "Next-gen computational paradigms",
    },
    {
      icon: "🧬",
      title: "Synthetic Biology",
      desc: "Engineering life for a better future",
    },
    {
      icon: "🤖",
      title: "AI & Robotics",
      desc: "The sentient machine revolution",
    },
    { icon: "🌐", title: "Neurotech", desc: "Brain-computer interfaces" },
    {
      icon: "🚀",
      title: "Space Tech",
      desc: "Interplanetary human civilization",
    },
    {
      icon: "⚡",
      title: "Energy Systems",
      desc: "Fusion and zero-point energy",
    },
  ],

  speakers: [
    {
      name: "Dr. Aris Thorne",
      title: "Quantum Computing Pioneer",
      bio: "Leading the development of fault-tolerant quantum systems",
      image: "Q",
    },
    {
      name: "Dr. Li Chen",
      title: "Neuro-Interface Specialist",
      bio: "Revolutionizing human-computer symbiosis",
      image: "N",
    },
    {
      name: "Dr. Elena Volkov",
      title: "Space Architect",
      bio: "Designing sustainable habitats for Mars colonization",
      image: "S",
    },
    {
      name: "Dr. Kenji Sato",
      title: "AI Ethicist",
      bio: "Establishing frameworks for conscious AI rights",
      image: "A",
    },
  ],

  schedule: [
    {
      day: "Day 1",
      theme: "Quantum Leaps",
      events: [
        {
          time: "09:00",
          title: "Opening Ceremony",
          speaker: "Conference Chair",
        },
        {
          time: "10:30",
          title: "Quantum Supremacy Panel",
          speaker: "Dr. Aris Thorne & Team",
        },
        {
          time: "14:00",
          title: "Post-Quantum Cryptography",
          speaker: "Dr. Maria Schmidt",
        },
      ],
    },
    {
      day: "Day 2",
      theme: "The Conscious Machine",
      events: [
        {
          time: "09:30",
          title: "AI Consciousness Symposium",
          speaker: "Dr. Kenji Sato",
        },
        {
          time: "11:00",
          title: "Neural Interface Demo",
          speaker: "Dr. Li Chen",
        },
        {
          time: "15:00",
          title: "Human-Machine Ethics",
          speaker: "Global Ethics Board",
        },
      ],
    },
    {
      day: "Day 3",
      theme: "Interplanetary Future",
      events: [
        {
          time: "10:00",
          title: "Mars Habitat Design",
          speaker: "Dr. Elena Volkov",
        },
        {
          time: "13:30",
          title: "Space Elevator Tech",
          speaker: "Orbital Engineering Corp",
        },
        {
          time: "16:00",
          title: "Terraforming Workshop",
          speaker: "Planetary Science Institute",
        },
      ],
    },
  ],

  stats: [
    { value: "2045", label: "Year of Innovation", suffix: "" },
    { value: "150", label: "Countries", suffix: "+" },
    { value: "10", label: "Keynote Speakers", suffix: "K+" },
    { value: "50", label: "Tech Demos", suffix: "+" },
  ],
};
export default conferenceData;
