export interface NavItem {
  title: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  highlightNumber: string;
  title: string;
  description: string;
  bgImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description?: string;
  items: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'mega' | 'domestic' | 'facade' | 'interior';
  type: 'Residential' | 'Commercial' | 'Mega' | 'Healthcare' | 'Institutional';
  status: 'Completed' | 'Upcoming';
  specs: string;
  highlights: string[];
  image: string;
  allImages?: string[];
}

export interface VideoTestimonial {
  id: string;
  youtubeId: string;
  title: string;
  clientName: string;
  location: string;
  thumbnail: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualification?: string;
  image: string;
  bio: string;
}

export interface AwardItem {
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface CareerJob {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const siteConfig = {
  name: "MP Hospital",
  fullName: "MP Hospital and Trauma Centre",
  formerName: "Formerly Maxx Hospital & Trauma Centre",
  tagline: "Leading Orthopedic, Joint Replacement & 24x7 Trauma Care Centre in Jabalpur",
  phone1: "0761-2626123",
  phone1Raw: "07612626123",
  phone2: "+91 76489-98668",
  phone2Raw: "+917648998668",
  emergencyPhone: "+91 76489-98668",
  emergencyPhoneRaw: "+917648998668",
  email: "info@mphospital.in",
  altEmail: "drabhishekjain@gmail.com",
  address: "1/1, High Court Road / Dr. Radha Krishnan Chowk, Beoharbagh, Near Ghamapur Chowk (Beside Beoharbagh Petrol Pump, Opposite Modern X-Ray Pathology Centre), Jabalpur, Madhya Pradesh 482001",
  googleMapsUrl: "https://maps.google.com/maps?q=Beoharbagh+Near+Ghamapur+Chowk+Jabalpur+Madhya+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socials: {
    facebook: "https://www.facebook.com/mphospitaljabalpur",
    instagram: "https://www.instagram.com/mphospital_jabalpur",
    youtube: "https://www.youtube.com/@MPHospitalJabalpur",
    linkedin: "https://www.linkedin.com/company/mp-hospital-trauma-centre",
  },
  stats: {
    projectsCount: "15,000+",
    sqftConstructed: "5,000+",
    realEstateProjects: "24x7",
    megaProjects: "50+",
    verticals: "8+",
    satisfactionRate: "99%+",
    yearsExperience: "10+ Years",
    structuralWarranty: "100%",
  }
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Our Team", href: "/our-team" },
  { title: "Facilities", href: "/projects" },
  { title: "Contact Us", href: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    highlightNumber: "24x7",
    title: "Emergency & Trauma Care in Jabalpur",
    description: "MP Hospital & Trauma Centre (Formerly Maxx Hospital) – Dedicated accidental trauma resuscitation, advanced surgical infrastructure, and round-the-clock emergency team.",
    bgImage: "/images/mp-hospital-building.jpg",
  },
  {
    id: 2,
    highlightNumber: "15,000+",
    title: "Surgeries & Trauma Rescues Performed",
    description: "State-of-the-art modular operation theatres with laminar airflow and HEPA filtration for infection-free orthopedic, trauma, and joint replacement surgeries.",
    bgImage: "/images/modular-ot.jpg",
  },
  {
    id: 3,
    highlightNumber: "5,000+",
    title: "Successful Joint Replacements & Arthroscopy",
    description: "Under the leadership of Dr. Abhishek Jain (Orthopedic & Sports Injury Specialist) — minimally invasive knee, hip replacements, and rapid post-op mobility.",
    bgImage: "/images/orthopedic-rehab.jpg",
  },
  {
    id: 4,
    highlightNumber: "100%",
    title: "Critical Care ICU & High-Tech Life Support",
    description: "Multi-parameter monitors, mechanical ventilators, dedicated intensivist team, and advanced life support (ALS) ambulances ready at all times.",
    bgImage: "/images/emergency-trauma-icu.jpg",
  },
  {
    id: 5,
    highlightNumber: "10+ Yrs",
    title: "Trusted Healthcare Legacy in Mahakoshal",
    description: "Continuing the trusted legacy of Maxx Hospital with expanded facilities, digital diagnostics, Ayushman/Cashless TPA, and compassionate patient care.",
    bgImage: "/images/diagnostic-center.jpg",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "orthopedic-trauma",
    title: "Orthopedic & Accidental Trauma Care",
    iconName: "Activity",
    image: "/images/modular-ot.jpg",
    items: [
      "24x7 Emergency Polytrauma Resuscitation",
      "Complex Bone Fractures & Pelvic Reconstruction",
      "Pediatric & Geriatric Orthopedic Surgery",
      "Non-Union & Deformity Correction Surgeries",
      "External Fixation & Minimally Invasive Plating",
    ],
  },
  {
    id: "joint-replacement",
    title: "Joint Replacement & Arthroplasty",
    iconName: "ShieldCheck",
    image: "/images/orthopedic-rehab.jpg",
    items: [
      "Total Knee Replacement (TKR) with Fast-Track Rehab",
      "Total Hip Replacement (THR) - Cemented & Uncemented",
      "Partial Knee & Revision Joint Surgeries",
      "Shoulder Joint Arthroplasty & Hemiarthroplasty",
      "Computer-Assisted & Minimally Invasive Techniques",
    ],
  },
  {
    id: "sports-injury-arthroscopy",
    title: "Arthroscopy & Sports Injury Clinic",
    iconName: "Cross",
    image: "/images/arthroscopy-surgery.jpg",
    items: [
      "ACL, PCL & Multiligament Knee Reconstruction",
      "Meniscus Repair & Cartilage Restoration",
      "Shoulder Arthroscopy for Rotator Cuff & Recurrent Dislocation",
      "Ankle & Elbow Arthroscopic Procedures",
      "Specialized Sports Injury Conditioning & Return-to-Play",
    ],
  },
  {
    id: "emergency-critical-care",
    title: "24x7 Critical Care ICU & Emergency",
    iconName: "HeartPulse",
    image: "/images/emergency-trauma-icu.jpg",
    items: [
      "Fully-Equipped 24/7 Trauma Emergency Department",
      "Advanced ICU with Multi-Parameter Monitors & Ventilators",
      "Advanced Cardiac Life Support (ACLS) Protocol",
      "Dedicated High-Tech ALS Ambulance Fleet",
      "In-House Emergency Pathology & Digital X-Ray",
    ],
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Emergency Triage & Assessment",
    description: "Immediate clinical triage upon arrival, rapid vital stabilization, emergency imaging, and quick consultation with Dr. Abhishek Jain and trauma specialists.",
  },
  {
    step: "02",
    title: "Precision Diagnosis",
    description: "High-resolution digital X-rays, high-speed imaging, and emergency lab diagnostics to pinpoint fractures, ligament injuries, or internal trauma.",
  },
  {
    step: "03",
    title: "Modular Surgical Care",
    description: "Surgical execution inside modular laminar airflow operation theatres, minimizing infection risk and ensuring international surgical standards.",
  },
  {
    step: "04",
    title: "Rehabilitation & Mobility",
    description: "Physiotherapist-guided mobilization within 24-48 hours, customized recovery protocols, and regular follow-ups for full pain-free lifestyle.",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "modular-operation-theatre",
    title: "Advanced Modular Operation Theatre Suite",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "Ultra-clean surgical suite with laminar airflow, HEPA filtration, precision LED surgical pendants, and electro-hydraulic tables.",
    highlights: ["Class 10,000 Cleanroom OT", "Zero-Infection Protocol", "Digital C-Arm Integration"],
    image: "/images/modular-ot.jpg",
  },
  {
    id: "emergency-trauma-icu-suite",
    title: "24x7 Emergency Trauma & Critical Care ICU",
    category: "domestic",
    type: "Healthcare",
    status: "Completed",
    specs: "Dedicated multi-bed intensive care unit equipped with invasive/non-invasive ventilators, cardiac monitors, and central telemetry.",
    highlights: ["24x7 Intensivist On-Duty", "Central Oxygen & Suction", "Immediate Trauma Resuscitation"],
    image: "/images/emergency-trauma-icu.jpg",
  },
  {
    id: "physiotherapy-rehab-center",
    title: "Orthopedic Rehabilitation & Physiotherapy Center",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Comprehensive physical therapy unit featuring gait training bars, electrotherapy, ultrasound therapy, and active joint rehabilitation gear.",
    highlights: ["Certified Rehab Specialists", "Fast-Track Post-Op Recovery", "Customized Sports Conditioning"],
    image: "/images/orthopedic-rehab.jpg",
  },
  {
    id: "diagnostic-radiology-center",
    title: "Digital Radiology & Diagnostic Suite",
    category: "facade",
    type: "Healthcare",
    status: "Completed",
    specs: "Digital High-Frequency X-Ray, ultrasonography, pathology lab, and instant digital reports for rapid emergency decisions.",
    highlights: ["Low Radiation Digital X-Ray", "24x7 Emergency Lab", "Instant Specialist Tele-Reporting"],
    image: "/images/diagnostic-center.jpg",
  },
  {
    id: "deluxe-inpatient-rooms",
    title: "Comfortable Inpatient Deluxe & Private Rooms",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Spacious patient rooms with motorized multi-functional beds, attendant lounge sofa, air conditioning, and hygienic en-suite restrooms.",
    highlights: ["Nurse Call Bell System", "Quiet Healing Atmosphere", "Specialist Dietary Meals"],
    image: "/images/inpatient-room.jpg",
  },
  {
    id: "arthroscopy-minimally-invasive",
    title: "Arthroscopy & Minimally Invasive Surgery Unit",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "High-definition 4K endoscopic surgical cameras, shaver systems, and radiofrequency ablation for keyhole joint procedures.",
    highlights: ["Small Incisions - Minimal Scarring", "Same-Day / Short Stay Surgery", "Speedy Return to Sports"],
    image: "/images/arthroscopy-surgery.jpg",
  },
  {
    id: "als-ambulance-network",
    title: "24x7 Advanced Life Support (ALS) Ambulance",
    category: "facade",
    type: "Healthcare",
    status: "Completed",
    specs: "GPS-tracked ambulance equipped with transport ventilator, monitor-defibrillator, oxygen cylinders, and emergency trauma kit.",
    highlights: ["Jabalpur & Mahakoshal Coverage", "Onboard Paramedic Team", "Emergency Hotline: 0761-2626123"],
    image: "/images/emergency-ambulance.jpg",
  },
  {
    id: "hospital-building-facade",
    title: "MP Hospital & Trauma Centre Main Infrastructure",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "Multi-storey modern hospital building located in Beoharbagh, Jabalpur, featuring wheelchair ramps, reception, and pharmacy.",
    highlights: ["Central Prime Jabalpur Location", "Ample Stretcher & Patient Access", "Formerly Maxx Hospital"],
    image: "/images/mp-hospital-building.jpg",
  },
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "video-1",
    youtubeId: "PXM0LdIZu60",
    title: "Knee Replacement Patient Walking Pain-Free in 48 Hours",
    clientName: "Smt. Shanti Devi (Age 64)",
    location: "Jabalpur, MP",
    thumbnail: "/images/orthopedic-rehab.jpg",
  },
  {
    id: "video-2",
    youtubeId: "5RSlURAHRjE",
    title: "Emergency Polytrauma Road Accident Recovery by Dr. Abhishek Jain",
    clientName: "Mr. Rakesh Patel (Trauma Patient)",
    location: "Ghamapur, Jabalpur",
    thumbnail: "/images/emergency-trauma-icu.jpg",
  },
  {
    id: "video-3",
    youtubeId: "MoUTxz4Lx-o",
    title: "Successful Arthroscopic ACL Ligament Reconstruction Story",
    clientName: "Aman Verma (College Footballer)",
    location: "Jabalpur",
    thumbnail: "/images/arthroscopy-surgery.jpg",
  },
  {
    id: "video-4",
    youtubeId: "O6WhK_95_sY",
    title: "Total Hip Replacement Patient Regaining Active Lifestyle",
    clientName: "Mr. Virendra Kumar",
    location: "Madhya Pradesh",
    thumbnail: "/images/modular-ot.jpg",
  },
  {
    id: "video-5",
    youtubeId: "2JK5W0CSDtg",
    title: "Compassionate Care & Cashless Mediclaim Experience at MP Hospital",
    clientName: "Family of Patient Dinesh Gupta",
    location: "Jabalpur",
    thumbnail: "/images/medical-team.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Abhishek Jain",
    role: "Director & Senior Orthopedic Surgeon",
    qualification: "MBBS, MS (Orthopaedics), Fellowship in Joint Replacement & Arthroscopy",
    image: "/images/dr-abhishek-jain.jpg",
    bio: "Renowned orthopedic surgeon and trauma specialist in Jabalpur with over a decade of excellence in accidental trauma care, robotic & minimally invasive knee and hip replacements, and complex arthroscopic sports surgeries.",
  },
  {
    name: "Dr. Neha Jain",
    role: "Chief Intensivist & Head of Critical Care (ICU)",
    qualification: "MBBS, MD (Critical Care & Anesthesia)",
    image: "/images/medical-team.jpg",
    bio: "Specializes in multi-organ trauma stabilization, post-operative surgical monitoring, invasive mechanical ventilation, and hemodynamic management in our 24x7 Trauma ICU.",
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Consultant Spine & Neuro-Trauma Surgeon",
    qualification: "MBBS, MS, M.Ch (Neuro Surgery)",
    image: "/images/Customer-1.png",
    bio: "Expert in spinal decompression, traumatic vertebral fixation, microdiscectomy, and neurological rehabilitation for road accident trauma victims.",
  },
  {
    name: "Dr. Priya Verma",
    role: "Head of Anesthesiology & Pain Management",
    qualification: "MBBS, DA, DNB (Anesthesia)",
    image: "/images/Customer-2.png",
    bio: "Dedicated to ultra-safe surgical anesthesia, regional nerve blocks for joint replacement, and comprehensive acute post-operative multimodal pain relief.",
  },
  {
    name: "Dr. Ankit Tiwari",
    role: "Senior Physiotherapist & Head of Rehabilitation",
    qualification: "BPT, MPT (Orthopedics & Sports Rehab)",
    image: "/images/Customer-3.png",
    bio: "Guides patients through customized mobilization protocols post-joint replacement, spine surgeries, and athletic sports injuries for rapid functional independence.",
  },
];

export const awardsData: AwardItem[] = [
  {
    year: "2024",
    title: "Best Trauma & Orthopedic Care Excellence",
    description: "Awarded for exceptional 24x7 emergency response, zero-delay trauma surgeries, and high surgical success rate in Jabalpur.",
  },
  {
    year: "2023",
    title: "Healthcare Leadership in Joint Replacement",
    description: "Recognized for Dr. Abhishek Jain's outstanding clinical outcomes in minimally invasive knee and hip arthroplasties.",
  },
  {
    year: "2022",
    title: "Infection Control & Patient Safety Milestone",
    description: "Honored for maintaining world-class sterile standards across modular operation theatres and critical care units.",
  },
  {
    year: "2021",
    title: "Compassionate Healthcare Service Award",
    description: "Acknowledged for continuous community medical camps, emergency disaster response, and accessible healthcare across Mahakoshal.",
  },
];

export const testimonials = [
  {
    name: "Smt. Pushpa Agrawal",
    project: "Total Knee Replacement",
    text: "I was suffering from severe knee arthritis for 6 years and could barely walk. Dr. Abhishek Jain performed knee replacement surgery at MP Hospital. Within 2 days I was walking with support and now I live pain-free. Blessed care!",
    rating: 5,
  },
  {
    name: "Mahesh Chouksey",
    project: "Emergency Road Accident Trauma",
    text: "My brother met with a major highway accident with multiple bone fractures. The 24x7 emergency and trauma ICU team at MP Hospital (formerly Maxx Hospital) saved his leg with timely surgery. Highly grateful to Dr. Abhishek Jain.",
    rating: 5,
  },
  {
    name: "Sunil Soni",
    project: "Arthroscopic ACL Reconstruction",
    text: "Tore my ligament playing cricket. The arthroscopic surgery was completely smooth with tiny keyhole cuts. The physiotherapy unit got me back on my feet quickly. Cleanest hospital in Jabalpur!",
    rating: 5,
  },
  {
    name: "Rajesh K. Gupta",
    project: "Hip Replacement & Cashless TPA",
    text: "From admission to discharge, the cashless mediclaim process was seamless. The nursing staff and modular OT infrastructure are truly top-grade. Highly recommend MP Hospital to everyone in Jabalpur.",
    rating: 5,
  },
];

export const faqsData: FAQItem[] = [
  {
    question: "Do you provide 24x7 emergency and accidental trauma services?",
    answer: "Yes, MP Hospital and Trauma Centre operates a round-the-clock (24/7) emergency trauma unit with immediate casualty reception, on-call trauma surgeons, anesthesiologists, digital X-ray, in-house pharmacy, and Advanced Life Support (ALS) ambulances. Call our emergency hotline at 0761-2626123 or +91 76489-98668.",
  },
  {
    question: "Is MP Hospital the same as Maxx Hospital?",
    answer: "Yes! MP Hospital and Trauma Centre was formerly known as Maxx Hospital & Trauma Centre. We have rebranded and modernized our healthcare infrastructure under the leadership of Dr. Abhishek Jain, continuing our 10+ year legacy of trusted orthopedic, spine, and trauma care in Jabalpur.",
  },
  {
    question: "What are the OPD consultation timings for Dr. Abhishek Jain?",
    answer: "Dr. Abhishek Jain (Orthopedic Surgeon & Trauma Specialist) is available for OPD consultations Monday through Saturday. Morning OPD is generally 10:30 AM to 1:30 PM and evening OPD is 5:30 PM to 8:30 PM. We strongly recommend booking your appointment online or calling +91 76489-98668 prior to visiting.",
  },
  {
    question: "Do you accept Ayushman Bharat and Cashless Mediclaim Insurance?",
    answer: "Yes, we accept major health insurance policies, corporate TPAs, and cashless mediclaim. Our dedicated TPA helpdesk assists patients and families with quick pre-authorization, seamless document verification, and cashless discharge processing.",
  },
  {
    question: "What types of joint replacement and orthopedic surgeries are done?",
    answer: "We perform Total Knee Replacement (TKR), Total Hip Replacement (THR), Shoulder Arthroplasty, Minimally Invasive Arthroscopic Ligament Repairs (ACL/PCL/Meniscus), Complex Trauma & Pelvic Fractures, and Pediatric Orthopedic Surgeries inside state-of-the-art modular laminar airflow operation theatres.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "signs-you-need-knee-replacement",
    title: "5 Warning Signs You May Need Knee Replacement Surgery",
    category: "Orthopedics",
    date: "March 15, 2026",
    author: "Dr. Abhishek Jain",
    image: "/images/orthopedic-rehab.jpg",
    excerpt: "Persistent knee pain, stiffness while climbing stairs, and reduced walking distance: when to consider modern knee arthroplasty.",
    content: "Knee osteoarthritis affects millions. When conservative treatments like medicines, intra-articular injections, and physiotherapy no longer provide relief and daily mobility becomes painful, total knee replacement (TKR) can completely restore your active, pain-free life. With modern rapid recovery protocols at MP Hospital, patients often begin walking within 24 to 48 hours post-surgery.",
  },
  {
    id: "2",
    slug: "golden-hour-trauma-care",
    title: "The Golden Hour in Accident Trauma: Why Rapid Emergency Care Saves Lives",
    category: "Emergency & Trauma",
    date: "February 28, 2026",
    author: "Dr. Abhishek Jain",
    image: "/images/emergency-trauma-icu.jpg",
    excerpt: "Understanding the first critical 60 minutes after road traffic accidents and how rapid surgical intervention prevents permanent disability.",
    content: "In severe polytrauma and accidental injuries, the first hour—known as the 'Golden Hour'—is critical. Prompt airway stabilization, hemorrhagic control, multi-parameter monitoring, and immediate fracture stabilization in a specialized trauma center significantly reduces morbidity and saves lives.",
  },
  {
    id: "3",
    slug: "sports-injuries-acl-tear-rehab",
    title: "ACL Ligament Tears & Sports Injuries: Arthroscopic Keyhole Surgery Guide",
    category: "Sports Medicine",
    date: "February 12, 2026",
    author: "Dr. Abhishek Jain",
    image: "/images/arthroscopy-surgery.jpg",
    excerpt: "How modern arthroscopic knee reconstruction helps young athletes and active individuals return to sports safely.",
    content: "Athletic injuries like sudden twisting of the knee often result in ACL and meniscal tears. With advanced 4K arthroscopic keyhole surgery at MP Hospital, surgeons reconstruct torn ligaments through tiny incisions without cutting open the joint, ensuring less postoperative pain, negligible blood loss, and accelerated return to sports.",
  },
  {
    id: "4",
    slug: "bone-joint-health-after-40",
    title: "Essential Tips for Healthy Bones & Joints After Age 40",
    category: "Preventive Care",
    date: "January 20, 2026",
    author: "Dr. Abhishek Jain",
    image: "/images/diagnostic-center.jpg",
    excerpt: "Calcium, Vitamin D3, low-impact exercise, and early bone density screening to prevent osteoporosis and joint degeneration.",
    content: "As we age, bone mineral density naturally decreases. Maintaining adequate calcium and vitamin D levels, engaging in weight-bearing exercises, avoiding sedentary postures, and seeking early orthopedic evaluation at the first signs of persistent joint ache will keep you agile and active for life.",
  },
];

export const careerJobs: CareerJob[] = [
  {
    id: "icu-staff-nurse",
    title: "Staff Nurse (ICU & Emergency Trauma)",
    location: "MP Hospital, Jabalpur",
    type: "Full-Time (Rotational Shifts)",
    description: "Provide compassionate critical care nursing, administer intravenous medications, monitor vital signs on advanced multi-parameter monitors, and assist intensivists in emergency trauma resuscitation.",
    responsibilities: [
      "Deliver 24x7 bed-side critical care in the Trauma ICU.",
      "Monitor patient vitals, ventilator settings, and IV infusions.",
      "Maintain sterile infection control protocols and nursing records.",
      "Coordinate with doctors, pharmacy, and patient relatives.",
    ],
    requirements: [
      "B.Sc Nursing or GNM registered with MP Nursing Council.",
      "1+ years experience in ICU, Emergency, or Trauma department.",
      "Proficiency in emergency life support and compassionate patient handling.",
    ],
  },
  {
    id: "ot-technician",
    title: "Operation Theatre (OT) Technician",
    location: "MP Hospital, Jabalpur",
    type: "Full-Time",
    description: "Manage modular operation theatre preparation, sterile instrument sets for orthopedic & joint replacement surgeries, autoclave sterilization, and assist surgeons intra-operatively.",
    responsibilities: [
      "Prepare laminar airflow modular OT suites for elective and emergency orthopedic surgeries.",
      "Sterilize and manage orthopedic implant trays, power drills, and arthroscopy sets.",
      "Operate and maintain C-Arm X-ray machine, electrocautery, and suction units.",
      "Ensure adherence to universal surgical asepsis protocols.",
    ],
    requirements: [
      "Diploma or Degree in Operation Theatre Technology (OTT).",
      "2+ years experience in orthopedic and trauma OT setup.",
      "Thorough knowledge of sterile techniques, surgical instrumentation, and bio-medical safety.",
    ],
  },
  {
    id: "duty-medical-officer",
    title: "Resident Medical Officer / Duty Doctor (Casualty)",
    location: "MP Hospital, Jabalpur",
    type: "Full-Time / Shift Basis",
    description: "Manage emergency casualty admissions, evaluate trauma patients, initiate preliminary resuscitation protocols, and coordinate urgent surgical care with specialist consultants.",
    responsibilities: [
      "Assess emergency patients and polytrauma victims arriving at casualty.",
      "Perform emergency splinting, wound dressing, suturing, and medical management.",
      "Coordinate admissions, emergency diagnostics, and consultant consultations.",
      "Supervise nursing staff in casualty and inpatient wards.",
    ],
    requirements: [
      "MBBS degree registered with MP Medical Council.",
      "Emergency medicine / casualty management experience is preferred.",
      "Strong clinical decision-making skills and emergency responsiveness.",
    ],
  },
];
