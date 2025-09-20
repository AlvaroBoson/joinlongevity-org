export interface Job {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Freelance / Contract' | 'Internship' | 'Volunteer';
  category: 'Scientific' | 'Engineering & Tech' | 'Marketing & Communications' | 'Business & Operations' | 'Clinical & Medical' | 'Gigs & Micro-tasks';
  description: string;
  requirements: string[];
  applicationUrl: string;
  postedDate: string;
  remote: boolean;
  salary?: string;
}

export const jobs: Job[] = [
  {
    id: "longevity-biotech-research-scientist",
    title: "Research Scientist - Cellular Reprogramming",
    company: "Altos Labs",
    companyUrl: "https://altoslabs.com",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Scientific",
    description: "Join our team to advance cellular reprogramming technologies for age reversal. You'll work on cutting-edge research to understand and manipulate cellular aging processes, contributing to groundbreaking discoveries in longevity science.",
    requirements: [
      "PhD in Cell Biology, Molecular Biology, or related field",
      "3+ years experience in cellular reprogramming or stem cell research",
      "Strong publication record in peer-reviewed journals",
      "Experience with iPSC generation and characterization",
      "Proficiency in molecular biology techniques and cell culture"
    ],
    applicationUrl: "https://altoslabs.com/careers",
    postedDate: "2024-01-15",
    remote: false,
    salary: "$120,000 - $180,000"
  },
  {
    id: "longevity-data-engineer",
    title: "Senior Data Engineer - Aging Analytics",
    company: "BioAge Labs",
    companyUrl: "https://bioagelabs.com",
    location: "Richmond, CA",
    type: "Full-time",
    category: "Engineering & Tech",
    description: "Build and maintain data infrastructure for analyzing large-scale aging and longevity datasets. You'll work with genomics, proteomics, and clinical data to support drug discovery efforts targeting age-related diseases.",
    requirements: [
      "Bachelor's or Master's in Computer Science, Bioinformatics, or related field",
      "5+ years experience in data engineering or bioinformatics",
      "Proficiency in Python, SQL, and cloud platforms (AWS/GCP)",
      "Experience with genomics data and analysis pipelines",
      "Knowledge of machine learning and statistical analysis"
    ],
    applicationUrl: "https://bioagelabs.com/careers",
    postedDate: "2024-01-05",
    remote: false,
    salary: "$140,000 - $190,000"
  },
  {
    id: "longevity-content-creator",
    title: "Freelance Science Writer - Longevity Content",
    company: "Join Longevity",
    companyUrl: "https://joinlongevity.org",
    location: "Remote",
    type: "Volunteer",
    category: "Marketing & Communications",
    description: "Create engaging, scientifically accurate content about longevity research and breakthroughs. You'll write articles, create social media content, and help make complex longevity science accessible to a broad audience.",
    requirements: [
      "Background in life sciences, journalism, or related field",
      "2+ years experience in science writing or communication",
      "Strong understanding of aging and longevity research",
      "Excellent writing and editing skills",
      "Experience with content management systems and social media"
    ],
    applicationUrl: "mailto:alex@joinlongevity.org",
    postedDate: "2024-01-20",
    remote: true,
  },
  {
    id: "longevity-clinical-coordinator",
    title: "Clinical Research Coordinator - Longevity Trials",
    company: "Retro Biosciences",
    companyUrl: "https://retrobio.com",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Clinical & Medical",
    description: "Coordinate clinical trials for novel longevity interventions. You'll work with research teams, regulatory bodies, and participants to ensure smooth execution of groundbreaking longevity studies.",
    requirements: [
      "Bachelor's degree in Life Sciences or related field",
      "3+ years experience in clinical research coordination",
      "Knowledge of GCP guidelines and regulatory requirements",
      "Strong organizational and communication skills",
      "Experience with clinical trial management systems"
    ],
    applicationUrl: "https://retrobio.com/careers",
    postedDate: "2024-01-12",
    remote: false,
    salary: "$70,000 - $95,000"
  },
  {
    id: "longevity-volunteer-outreach",
    title: "Volunteer Community Outreach Coordinator",
    company: "LEV Foundation",
    companyUrl: "https://levf.org",
    location: "Remote",
    type: "Volunteer",
    category: "Business & Operations",
    description: "Help expand our community outreach efforts to raise awareness about longevity research. You'll organize events, manage social media campaigns, and connect with potential supporters and volunteers.",
    requirements: [
      "Passion for longevity and healthy aging research",
      "Strong communication and interpersonal skills",
      "Experience with social media and event organization",
      "Ability to commit 10-15 hours per week",
      "Self-motivated and able to work independently"
    ],
    applicationUrl: "https://levf.org/volunteer",
    postedDate: "2024-01-18",
    remote: true
  },
  {
    id: "longevity-social-media-gig",
    title: "Social Media Content Creation - Longevity Posts",
    company: "Various Longevity Companies",
    location: "Remote",
    type: "Freelance / Contract",
    category: "Gigs & Micro-tasks",
    description: "Create engaging social media content about longevity research, breakthroughs, and lifestyle tips. Perfect for content creators looking to contribute to the longevity movement on a project basis.",
    requirements: [
      "Experience with social media platforms (Twitter, LinkedIn, Instagram)",
      "Basic understanding of longevity and aging research",
      "Strong writing and visual content creation skills",
      "Ability to translate complex science into accessible content",
      "Portfolio of previous social media work"
    ],
    applicationUrl: "https://longevitylist.com/gigs",
    postedDate: "2024-01-22",
    remote: true,
    salary: "$25 - $75 per post"
  }
];
