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
  id?: string;
  name: string;
  role: string;
  department?: string;
  qualification?: string;
  qualifications?: string;
  specialty?: string;
  experience?: string;
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
  formerName: "",
  tagline: "Leading Orthopedic, Joint Replacement & 24x7 Trauma Care Centre in Jabalpur",
  phone1: "0761-2626123",
  phone1Raw: "07612626123",
  phone2: "+91 76489-98668",
  phone2Raw: "+917648998668",
  phone3: "+91 7614037843",
  phone3Raw: "+917614037843",
  whatsapp: "+91 76489-98668",
  whatsappRaw: "917648998668",
  emergencyPhone: "+91 76489-98668",
  emergencyPhoneRaw: "+917648998668",
  ambulancePhone: "0761-2626123",
  ambulancePhoneRaw: "07612626123",
  email: "mphospital19@gmail.com",
  altEmail: "drabhishekjain@gmail.com",
  address: "1/1, High Court Road, Beoharbagh, Jabalpur, M.P.",
  googleMapsUrl: "https://maps.google.com/maps?q=Beoharbagh+Near+Ghamapur+Chowk+Jabalpur+Madhya+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socials: {
    whatsapp: "https://wa.me/917648998668",
    facebook: "https://www.facebook.com/MPHospitalandTraumaCentre/",
    instagram: "https://www.instagram.com/mphospitaljabalpur/",
    youtube: "https://www.youtube.com/@MPHospitalJabalpur",
    linkedin: "https://www.linkedin.com/company/mp-hospital-trauma-centre",
  },
  stats: {
    surgeriesCount: "Clinical Mastery",
    projectsCount: "Clinical Mastery",
    jointReplacements: "Precision Care",
    emergencyTrauma: "24x7",
    modularOTs: "Sterile Well-Equipped",
    satisfactionRate: "99%+",
    yearsExperience: "Trusted Legacy",
    infectionControl: "100%",
  },
  showMarquee: false,
  statsBanner: [
    {
      title: "24x7 Trauma & Emergency",
      desc: "Immediate casualty reception, dedicated Trauma ICU, emergency triage, and round-the-clock ALS ambulance in Jabalpur.",
      iconName: "HeartPulse",
      iconColor: "text-red-600",
    },
    {
      title: "Surgical Excellence",
      desc: "Led by Dr. Abhishek Jain with extensive clinical expertise in successful orthopedic surgeries, emergency trauma rescues, and well-equipped joint replacement center.",
      iconName: "Award",
      iconColor: "text-sky-600",
    },
    {
      title: "Well-Equipped OT",
      desc: "Laminar airflow and sterile HEPA filtration surgical suites ensuring ultra-clean infection control and high patient satisfaction.",
      iconName: "Building2",
      iconColor: "text-red-600",
    },
  ],
  whyHospitalPoints: [
    {
      title: "24x7 Trauma Emergency",
      desc: "Immediate casualty reception, trauma surgeons, and round-the-clock ALS ambulance availability in Jabalpur.",
      iconName: "Ambulance",
      iconColor: "text-red-600",
    },
    {
      title: "Senior Orthopedic Specialists",
      desc: "Experienced surgical team led by Dr. Abhishek Jain specializing in joint replacement, sports injury & complex trauma.",
      iconName: "Stethoscope",
      iconColor: "text-[#008EC7]",
    },
    {
      title: "Well-Equipped Laminar Flow OT",
      desc: "Cleanroom well-equipped surgical theatres with HEPA filtration for ultra-sterile, infection-free surgeries.",
      iconName: "Building2",
      iconColor: "text-red-600",
    },
    {
      title: "Cashless Mediclaim & TPA",
      desc: "Hassle-free insurance pre-authorization desk supporting major mediclaim policies and corporate TPA coverage.",
      iconName: "ShieldCheck",
      iconColor: "text-[#008EC7]",
    },
  ],
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
    description: "MP Hospital & Trauma Centre – Dedicated accidental trauma resuscitation, well-equipped surgical infrastructure, and round-the-clock emergency team.",
    bgImage: "/images/mp-hospital-building.jpg",
  },
  {
    id: 2,
    highlightNumber: "Well-Equipped OT",
    title: "Well-Equipped Surgical & Joint Replacement Suite",
    description: "Well-equipped operation theatres with laminar airflow, HEPA filtration, and minimally invasive joint replacement by Dr. Abhishek Jain.",
    bgImage: "/images/modular-ot.jpg",
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
      "Well-Equipped ICU with Multi-Parameter Monitors & Ventilators",
      "Cardiac Life Support (ACLS) Protocol",
      "Dedicated High-Tech ALS Ambulance Fleet",
      "In-House Emergency Pathology & Digital X-Ray",
    ],
  },
  {
    id: "physiotherapy-rehabilitation",
    title: "Physiotherapy & Post-Surgery Rehabilitation",
    iconName: "Activity",
    image: "/images/physiotherapy-center.jpg",
    items: [
      "Targeted Post-Op Joint Mobilization (TKR/THR)",
      "Well-Equipped Electrotherapy, Ultrasound & IFT",
      "Sports Injury Rehabilitation & Muscle Conditioning",
      "Spine, Cervical & Lower Back Physical Therapy",
      "Senior Citizen Joint Mobility & Gait Training",
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
    title: "Well-Equipped Surgical Care",
    description: "Surgical execution inside well-equipped laminar airflow operation theatres, minimizing infection risk and ensuring international surgical standards.",
  },
  {
    step: "04",
    title: "Rehabilitation & Mobility",
    description: "Physiotherapist-guided mobilization within 24-48 hours, customized recovery protocols, and regular follow-ups for full pain-free lifestyle.",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "general-inpatient-ward",
    title: "General Inpatient Ward",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Spacious and hygienic multi-bed recovery ward with centralized nursing desk, individual IV stands, clean ventilation, and partition curtains.",
    highlights: ["Central Nursing Station on Floor", "Dedicated IV & 24x7 Nursing Care", "Daily Specialist Doctor Rounds"],
    image: "/images/general-ward.jpg",
  },
  {
    id: "semi-private-ward",
    title: "Semi-Private Inpatient Ward",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Air-conditioned recovery rooms and multi-bed step-down recovery units with nursing care, attached storage, and privacy partition curtains.",
    highlights: ["Air-Conditioned Recovery Ward", "Step-Down Recovery & Telemetry", "Privacy Partition Curtains"],
    image: "/images/semi-private-room.jpg",
  },
  {
    id: "private-deluxe-room",
    title: "Private Patient Room",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Individual private room featuring single patient hospital bed, dedicated attendant sleeper-bed with storage, designer privacy curtains, and quiet recovery environment.",
    highlights: ["Individual Private Room", "Dedicated Attendant Bed & Storage", "Direct Nursing Assistance"],
    image: "/images/private-room.jpg",
  },
  {
    id: "emergency-casualty",
    title: "24x7 Emergency Casualty & Trauma Triage",
    category: "domestic",
    type: "Healthcare",
    status: "Completed",
    specs: "Immediate polytrauma resuscitation bay equipped with crash carts, multi-channel monitors, defibrillators, X-ray view station, and rapid life-support care.",
    highlights: ["Immediate Polytrauma Resuscitation", "Crash Cart & Defibrillator Ready", "X-Ray Viewbox & Vital Monitors"],
    image: "/images/emergency-casualty.jpg",
  },
  {
    id: "emergency-trauma-icu-suite",
    title: "24x7 Trauma & Critical Care ICU",
    category: "domestic",
    type: "Healthcare",
    status: "Completed",
    specs: "State-of-the-art intensive care unit with mechanical ventilators, multi-para vital monitors, centralized oxygen pipeline, and 24x7 dedicated intensivist supervision.",
    highlights: ["Mechanical Ventilator & Telemetry", "24x7 Intensivist On-Duty", "Centralized Oxygen & Suction"],
    image: "/images/emergency-trauma-icu.jpg",
  },
  {
    id: "modular-operation-theatre",
    title: "Well-Equipped Operation Theatre Suite",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "Ultra-clean surgical suite with laminar airflow, HEPA filtration, precision LED surgical pendants, and live orthopedic surgeries performed by Dr. Abhishek Jain.",
    highlights: ["Sterile Cleanroom Well-Equipped OT", "Zero-Infection Protocol", "Digital C-Arm Integration"],
    image: "/images/surgery-wide.jpg",
  },
  {
    id: "diagnostic-radiology-center",
    title: "OPD Reception, Diagnostics & Cashless TPA Desk",
    category: "facade",
    type: "Healthcare",
    status: "Completed",
    specs: "Dedicated patient admission reception, 24x7 OPD registration, wheelchair assistance, emergency stretcher transit, and quick cashless mediclaim processing.",
    highlights: ["24x7 OPD & Reception", "Instant Cashless TPA Desk", "Wheelchair & Stretcher Access"],
    image: "/images/diagnostic-center.jpg",
  },
  {
    id: "physiotherapy-rehab-center",
    title: "Physiotherapy & Rehabilitation Center",
    category: "interior",
    type: "Healthcare",
    status: "Completed",
    specs: "Full-fledged physical therapy and rehabilitation department equipped with ultrasonic therapy, TENS, muscle stimulation, gait training, exercise cycle, and senior physiotherapists.",
    highlights: ["Senior Certified Physiotherapists", "Electrotherapy, Ultrasound & TENS", "Post-Op Joint Mobility & Sports Rehab"],
    image: "/images/physiotherapy-center.jpg",
  },
  {
    id: "arthroscopy-minimally-invasive",
    title: "Arthroscopy & Keyhole Surgery Unit",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "Specialized keyhole arthroscopic procedures for ACL ligament tears, meniscus injuries, and joint pain with minimal cuts and fast recovery.",
    highlights: ["Minimal Incisions & Quick Healing", "Day-Care / Short Stay Procedure", "Guided Sports Rehabilitation"],
    image: "/images/arthroscopy-surgery.jpg",
  },
  {
    id: "als-ambulance-network",
    title: "24x7 Well-Equipped Life Support (ALS) Ambulance",
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
    highlights: ["Central Prime Jabalpur Location", "Ample Stretcher & Patient Access", "24x7 Emergency Services"],
    image: "/images/mp-hospital-building.jpg",
  },
];

export const videoTestimonials: VideoTestimonial[] = [];

export const teamMembers: TeamMember[] = [
  {
    id: "dr-abhishek-jain",
    name: "Dr. Abhishek Jain",
    role: "Director & Senior Orthopedic Surgeon",
    department: "Orthopedics",
    qualification: "MBBS, M.S.",
    image: "/images/dr-abhishek-jain.jpg",
    bio: "Director and Head of Orthopedics & Trauma Care at MP Hospital. Highly acclaimed specialist in complex accidental polytrauma resuscitation, total knee and hip replacement, and minimally invasive 4K arthroscopy.",
  },
  {
    id: "dr-akshay-juriani",
    name: "Dr. Akshay Juriani",
    role: "Consultant Physician & Chest Specialist",
    department: "Medicine",
    qualification: "MBBS, MD (Respiratory Medicine)",
    image: "/images/dr-akshay-juriani.jpg",
    bio: "Specializes in internal medicine, respiratory and pulmonary diseases, critical asthma and COPD management, and perioperative medical optimization of trauma patients.",
  },
  {
    id: "dr-prashant-singh-kushwaha",
    name: "Dr. Prashant Singh Kushwaha",
    role: "Consultant Neurosurgeon",
    department: "Neurosurgery",
    qualification: "MBBS, MCh",
    image: "/images/dr-prashant-singh-kushwaha.jpg",
    bio: "Distinguished specialist in emergency neuro-trauma decompression, spinal instrumentation, microvascular neurosurgery, and traumatic brain injury management.",
  },
  {
    id: "dr-mazid-ansari",
    name: "Dr. Mazid Ansari",
    role: "Senior Consultant General & Laparoscopic Surgeon",
    department: "General Surgery",
    qualification: "MBBS, M.S.",
    image: "/images/dr-mazid-ansari.jpg",
    bio: "Leading surgeon for acute abdominal trauma, visceral surgical emergencies, minimally invasive laparoscopy, hernia repairs, and specialized wound management.",
  },
  {
    id: "dr-arjit-saraf",
    name: "Dr. Arjit Saraf",
    role: "Consultant Pathologist & Laboratory Director",
    department: "Pathology",
    qualification: "MBBS, M.D.",
    image: "/images/dr-arjit-saraf.jpg",
    bio: "Oversees the 24x7 automated laboratory services, clinical pathology, biochemistry, emergency cross-matching, hematology, and microbiological diagnostics.",
  },
  {
    id: "dr-abhijeet-jain",
    name: "Dr. Abhijeet Jain",
    role: "Consultant Radiologist",
    department: "Radiology",
    qualification: "MBBS, DMRE",
    image: "/images/dr-abhijeet-jain.jpg",
    bio: "Specializes in high-resolution emergency digital radiography, trauma ultrasonography, Doppler studies, and tele-radiology for rapid diagnostic decisions.",
  },
  {
    id: "dr-himanshu-jain",
    name: "Dr. Himanshu Jain",
    role: "Chief Anesthesiologist & ICU Intensivist",
    department: "Anesthesia & ICU",
    qualification: "MBBS, M.D.",
    image: "/images/dr-himanshu-jain.jpg",
    bio: "Heads the 24x7 Trauma ICU, leading multi-organ trauma stabilization, well-equipped mechanical ventilation, hemodynamic monitoring, and resuscitation protocols.",
  },
  {
    id: "dr-nishit-kumar",
    name: "Dr. Nishit Kumar",
    role: "Consultant Anesthesiologist",
    department: "Anesthesia & ICU",
    qualification: "MBBS, MD",
    image: "/images/dr-nishit-kumar.jpg",
    bio: "Specializes in well-equipped operation theatre surgical anesthesia, ultrasound-guided regional nerve blocks for joint replacements, and comprehensive acute pain control.",
  },
  {
    id: "dr-deepesh-agrawal",
    name: "Dr. Deepesh Agrawal",
    role: "Senior Plastic & Reconstructive Surgeon",
    department: "Plastic Surgery",
    qualification: "MBBS, MS, MCh",
    image: "/images/dr-deepesh-agrawal.png",
    bio: "Expert in traumatic soft-tissue coverage, limb salvage reconstruction, microvascular flap surgery, tendon repairs, and post-accident maxillofacial reconstruction.",
  },
  {
    id: "dr-swapnil-jain",
    name: "Dr. Swapnil Jain",
    role: "Consultant Physician",
    department: "Medicine",
    qualification: "MBBS, M.D.",
    image: "/images/dr-swapnil-jain.jpg",
    bio: "Provides comprehensive medical care for adult acute and chronic ailments, infectious illnesses, cardiovascular stabilization, and perioperative diabetic care.",
  },
  {
    id: "dr-sneha-methwani",
    name: "Dr. Sneha Methwani",
    role: "Consultant Gynecologist & Obstetrician",
    department: "Gynecology",
    qualification: "MBBS, DGO",
    image: "/images/dr-sneha-methwani.png",
    bio: "Dedicated to comprehensive women's healthcare, high-risk pregnancy management, emergency obstetric care, and minimally invasive gynecological procedures.",
  },
  {
    id: "dr-ruby-sonker",
    name: "Dr. Ruby Sonker",
    role: "Senior Neuro & Orthopedic Physiotherapist",
    department: "Physiotherapy",
    qualification: "BPT, MPT (Neuro)",
    image: "/images/dr-ruby-sonker.jpg",
    bio: "Specialist in neuro-rehabilitation, early mobilization following polytrauma and spinal stabilization, vestibular balance retraining, and physical restoration.",
  },
  {
    id: "dr-ravi-rathode",
    name: "Dr. Ravi Rathode",
    role: "Consultant Physiotherapist & Mobility Specialist",
    department: "Physiotherapy",
    qualification: "BPT",
    image: "/images/dr-ravi-rathode.jpg",
    bio: "Expert in post-joint replacement gait training, sports injury conditioning, musculoskeletal muscle strengthening, and rapid recovery mobility protocols.",
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
    description: "Honored for maintaining world-class sterile standards across well-equipped operation theatres and critical care units.",
  },
  {
    year: "2021",
    title: "Compassionate Healthcare Service Award",
    description: "Acknowledged for continuous community medical camps, emergency disaster response, and accessible healthcare across Mahakoshal.",
  },
];

export const testimonials = [
  {
    name: "",
    project: "Total Knee Replacement",
    text: "I was suffering from severe knee arthritis for 6 years and could barely walk. Dr. Abhishek Jain performed knee replacement surgery at MP Hospital. Within 2 days I was walking with support and now I live pain-free. Blessed care!",
    rating: 5,
  },
  {
    name: "",
    project: "Emergency Road Accident Trauma",
    text: "My brother met with a major highway accident with multiple bone fractures. The 24x7 emergency and trauma ICU team at MP Hospital saved his leg with timely surgery. Highly grateful to Dr. Abhishek Jain.",
    rating: 5,
  },
  {
    name: "",
    project: "Arthroscopic ACL Reconstruction",
    text: "Tore my ligament playing cricket. The arthroscopic surgery was completely smooth with tiny keyhole cuts. The physiotherapy unit got me back on my feet quickly. Cleanest hospital in Jabalpur!",
    rating: 5,
  },
  {
    name: "",
    project: "Hip Replacement & Cashless TPA",
    text: "From admission to discharge, the cashless mediclaim process was seamless. The nursing staff and well-equipped OT infrastructure are truly top-grade. Highly recommend MP Hospital to everyone in Jabalpur.",
    rating: 5,
  },
];

export const faqsData: FAQItem[] = [
  {
    question: "Do you provide 24x7 emergency and accidental trauma services?",
    answer: "Yes, MP Hospital and Trauma Centre operates a round-the-clock (24/7) emergency trauma unit with immediate casualty reception, on-call trauma surgeons, anesthesiologists, digital X-ray, in-house pharmacy, and Well-Equipped Life Support (ALS) ambulances. Call our emergency hotline at 0761-2626123, +91 7614037843, or +91 76489-98668.",
  },
  {
    question: "What makes MP Hospital a leading trauma center in Jabalpur?",
    answer: "MP Hospital and Trauma Centre combines high-tech laminar flow well-equipped operation theatres, a dedicated 24x7 Trauma ICU, modern digital radiology, and an experienced multidisciplinary team under Dr. Abhishek Jain, ensuring round-the-clock emergency care and rapid orthopedic recovery.",
  },
  {
    question: "Do you accept Cashless Mediclaim and Health Insurance?",
    answer: "Yes, we accept major health insurance policies, corporate TPAs, and cashless mediclaim. Our dedicated TPA helpdesk assists patients and families with quick pre-authorization, seamless document verification, and cashless discharge processing.",
  },
  {
    question: "What types of joint replacement and orthopedic surgeries are done?",
    answer: "We perform Total Knee Replacement (TKR), Total Hip Replacement (THR), Shoulder Arthroplasty, Minimally Invasive Arthroscopic Ligament Repairs (ACL/PCL/Meniscus), Complex Trauma & Pelvic Fractures, and Pediatric Orthopedic Surgeries inside state-of-the-art well-equipped laminar airflow operation theatres.",
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
    content: "Athletic injuries like sudden twisting of the knee often result in ACL and meniscal tears. With well-equipped 4K arthroscopic keyhole surgery at MP Hospital, surgeons reconstruct torn ligaments through tiny incisions without cutting open the joint, ensuring less postoperative pain, negligible blood loss, and accelerated return to sports.",
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
    description: "Provide compassionate critical care nursing, administer intravenous medications, monitor vital signs on well-equipped multi-parameter monitors, and assist intensivists in emergency trauma resuscitation.",
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
    description: "Manage well-equipped operation theatre preparation, sterile instrument sets for orthopedic & joint replacement surgeries, autoclave sterilization, and assist surgeons intra-operatively.",
    responsibilities: [
      "Prepare laminar airflow well-equipped OT suites for elective and emergency orthopedic surgeries.",
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

export const defaultMarqueeItems: string[] = [
  "24x7 Emergency & Trauma Centre",
  "Dr. Abhishek Jain (Orthopedic Specialist)",
  "Well-Equipped Life Support Ambulance",
  "Total Knee & Hip Replacement",
  "Arthroscopy & Sports Medicine",
  "Sterile Well-Equipped OT",
  "Trauma Critical Care ICU",
  "Digital X-Ray & Emergency Diagnostics",
  "Emergency Line: 0761-2626123",
  "Cashless Mediclaim & Corporate TPA",
];

