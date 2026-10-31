import React from "react";

// ============================================================================
// MP HOSPITAL & TRAUMA CENTRE — FLATICON-GRADE PROFESSIONAL MEDICAL ICON SYSTEM
// Handcrafted multi-tone vector SVGs with brand colors:
// Emerald Green (#046F47), Hospital Red (#D50011), Mint, Cyan, Gold & White
// ============================================================================

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Robotic Knee & Hip Joint Replacement
 * Authentic Flaticon style: Femur, Tibia, precision titanium hinge & calibration crosshair
 */
export function RoboticJointIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      {/* Femur bone upper */}
      <path
        d="M26 12C26 9.79086 27.7909 8 30 8H34C36.2091 8 38 9.79086 38 12V24C38 25.1046 37.1046 26 36 26H28C26.8954 26 26 25.1046 26 24V12Z"
        fill="#CBD5E1"
      />
      <circle cx="28" cy="11" r="3" fill="#94A3B8" />
      <circle cx="36" cy="11" r="3" fill="#94A3B8" />

      {/* Titanium Robotic Replacement Component (Emerald & Red accents) */}
      <rect x="22" y="26" width="20" height="7" rx="3.5" fill="#046F47" />
      <rect x="25" y="27.5" width="14" height="4" rx="2" fill="#34D399" opacity="0.6" />
      
      {/* Precision Joint Pivot Bearing */}
      <circle cx="32" cy="35" r="5.5" fill="#0F172A" />
      <circle cx="32" cy="35" r="3.5" fill="#38BDF8" />
      <circle cx="32" cy="35" r="1.5" fill="#FFFFFF" />

      {/* Meniscal Spacer Plate */}
      <rect x="22" y="41" width="20" height="5" rx="2.5" fill="#D50011" />
      <rect x="24" y="42" width="16" height="3" rx="1.5" fill="#F87171" opacity="0.7" />

      {/* Tibia bone lower */}
      <path
        d="M27 46H37C38.1046 46 39 46.8954 39 48V54C39 55.6569 37.6569 57 36 57H28C26.3431 57 25 55.6569 25 54V48C25 46.8954 25.8954 46 27 46Z"
        fill="#CBD5E1"
      />

      {/* Robotic Laser Alignment Guides */}
      <circle cx="16" cy="35" r="2" fill="#D50011" />
      <path d="M18 35H21" stroke="#D50011" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="35" r="2" fill="#D50011" />
      <path d="M43 35H46" stroke="#D50011" strokeWidth="2" strokeLinecap="round" />
      
      {/* Motion Arch */}
      <path
        d="M17 24C14 29 14 41 17 46"
        stroke="#046F47"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M47 24C50 29 50 41 47 46"
        stroke="#046F47"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

/**
 * 2. Complex Polytrauma Care & Emergency Resuscitation
 * Authentic Flaticon style: Red trauma shield, emergency cross, glowing vital lifeline ECG
 */
export function PolytraumaCareIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      {/* Outer Protective Medical Shield */}
      <path
        d="M32 9L15 16.5V33C15 44 22.5 53 32 56C41.5 53 49 44 49 33V16.5L32 9Z"
        fill="#D50011"
      />
      <path
        d="M32 12.5L18 19V33C18 42.5 24.5 50.2 32 52.8C39.5 50.2 46 42.5 46 33V19L32 12.5Z"
        fill="#B91C1C"
      />

      {/* Pure White Central Medical Cross */}
      <path
        d="M29 20H35V28H43V34H35V42H29V34H21V28H29V20Z"
        fill="#FFFFFF"
      />

      {/* Neon Vital Heartbeat Waveform (Pulse of Recovery) */}
      <path
        d="M17 31H24L26.5 24L31 39L34.5 28L37 34L39.5 31H47"
        stroke="#FEF08A"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="39" r="2" fill="#EF4444" />
    </svg>
  );
}

/**
 * 3. 4K Sports Arthroscopy & Minimally Invasive Joint Surgery
 * Authentic Flaticon style: Arthroscopic fiberoptic cannula, optical light head, joint target
 */
export function SportsArthroscopyIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#F0FDF4" />
      {/* 4K Medical Optical Scope Body */}
      <rect
        x="36"
        y="12"
        width="16"
        height="10"
        rx="3"
        transform="rotate(45 36 12)"
        fill="#046F47"
      />
      {/* Camera Coupler Rings */}
      <rect
        x="42"
        y="8"
        width="8"
        height="5"
        rx="1.5"
        transform="rotate(45 42 8)"
        fill="#34D399"
      />
      
      {/* Sleek Stainless Surgical Trocar / Cannula Tube */}
      <path
        d="M33 25L17 41"
        stroke="#64748B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M32 26L18 40"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* High-Intensity Fiberoptic Light Beam Tip */}
      <path
        d="M16 42L11 47"
        stroke="#0284C7"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="11" cy="47" r="3.5" fill="#38BDF8" />
      <circle cx="11" cy="47" r="1.5" fill="#FFFFFF" />

      {/* Target Joint Precision Crosshair & 4K Ultra HD badge */}
      <circle cx="11" cy="47" r="8" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 3" />
      
      {/* 4K Badge */}
      <rect x="36" y="44" width="18" height="11" rx="3.5" fill="#D50011" />
      <text
        x="45"
        y="52"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="sans-serif"
      >
        4K HD
      </text>
    </svg>
  );
}

/**
 * 4. Modular Infection-Free OT Complexes (Laminar Flow)
 * Authentic Flaticon style: Surgical dome light, sterile air rays, HEPA cleanroom shield
 */
export function ModularOTIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      
      {/* Overhead Modular Surgical Lamp Fixture */}
      <path d="M32 8V16" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="18" rx="16" ry="6" fill="#334155" />
      <ellipse cx="32" cy="20" rx="13" ry="4" fill="#046F47" />
      <ellipse cx="32" cy="21" rx="6" ry="2" fill="#34D399" />
      
      {/* Sterile Laminar Airflow & Light Cones */}
      <path
        d="M20 23L12 48H52L44 23Z"
        fill="url(#otLightGradient)"
        opacity="0.3"
      />
      
      {/* Cleanroom Sterile Shield */}
      <path
        d="M32 30L22 35V45C22 51 26 55 32 57C38 55 42 51 42 45V35L32 30Z"
        fill="#FFFFFF"
        stroke="#046F47"
        strokeWidth="2.5"
      />
      {/* Clean Cross */}
      <path d="M32 36V48M26 42H38" stroke="#D50011" strokeWidth="3" strokeLinecap="round" />

      {/* Sterile Zero-Infection Particles (Sparkles) */}
      <circle cx="18" cy="36" r="1.5" fill="#38BDF8" />
      <circle cx="46" cy="38" r="1.5" fill="#38BDF8" />
      <circle cx="21" cy="49" r="1.5" fill="#38BDF8" />
      <circle cx="43" cy="50" r="1.5" fill="#38BDF8" />

      <defs>
        <linearGradient id="otLightGradient" x1="32" y1="20" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * 5. OPD Consultation Schedule & Clinic Hours
 * Authentic Flaticon style: Medical calendar clipboard with clinical emerald clock
 */
export function OPDScheduleIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Medical Clipboard */}
      <rect x="15" y="14" width="34" height="42" rx="5" fill="#046F47" />
      <rect x="18" y="17" width="28" height="36" rx="3" fill="#FFFFFF" />
      {/* Clip at top */}
      <rect x="25" y="10" width="14" height="7" rx="3.5" fill="#0F172A" />
      <rect x="28" y="12" width="8" height="3" rx="1.5" fill="#E2E8F0" />

      {/* Schedule Lines */}
      <rect x="22" y="24" width="14" height="2.5" rx="1.2" fill="#CBD5E1" />
      <rect x="22" y="29" width="10" height="2.5" rx="1.2" fill="#CBD5E1" />

      {/* Precision Circular Clock (Emerald & White) */}
      <circle cx="38" cy="39" r="13" fill="#046F47" />
      <circle cx="38" cy="39" r="10.5" fill="#FFFFFF" />
      {/* Clock Hands showing 10:30 */}
      <path d="M38 39V32" stroke="#D50011" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 39L43 41" stroke="#046F47" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="38" cy="39" r="1.8" fill="#D50011" />
    </svg>
  );
}

/**
 * 6. 24x7 Emergency Trauma Desk & Hotline
 * Authentic Flaticon style: Red hospital telephone receiver, emergency 24/7 pulse ring
 */
export function EmergencyTraumaPhoneIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      
      {/* Pulsing Red Emergency Circle */}
      <circle cx="32" cy="32" r="23" fill="#D50011" />
      <circle cx="32" cy="32" r="20" fill="#B91C1C" />
      
      {/* Phone Handset */}
      <path
        d="M26 21C24.5 21 23 22.5 23 24C23 35 31 43 42 43C43.5 43 45 41.5 45 40L42.5 34C42 33 40.5 32.5 39.5 33L37 34.5C33.5 32.5 30.5 29.5 28.5 26L30 23.5C30.5 22.5 30 21 29 20.5L26 21Z"
        fill="#FFFFFF"
      />

      {/* Floating 24/7 Badge */}
      <rect x="33" y="10" width="22" height="11" rx="4" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
      <text
        x="44"
        y="18.5"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="900"
        fill="#78350F"
        fontFamily="sans-serif"
      >
        24x7
      </text>

      {/* Wave Ring */}
      <path
        d="M20 18C16 22 14 28 14 34"
        stroke="#EF4444"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 7. Lead Director & Surgical Leadership Medal
 * Authentic Flaticon style: Gold medal with red-green ribbon and medical caduceus emblem
 */
export function DirectorMedalIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ribbon Tails (Hospital Red & Medical Green) */}
      <path d="M25 24L18 42L25 38L32 42L28 24Z" fill="#D50011" />
      <path d="M39 24L46 42L39 38L32 42L36 24Z" fill="#046F47" />

      {/* Golden Outer Medallion */}
      <circle cx="32" cy="24" r="16" fill="#F59E0B" />
      <circle cx="32" cy="24" r="13" fill="#FBBF24" />
      <circle cx="32" cy="24" r="10" fill="#D97706" />

      {/* Medical Cross Star Center */}
      <path
        d="M30 18H34V22H38V26H34V30H30V26H26V22H30V18Z"
        fill="#FFFFFF"
      />
      <circle cx="32" cy="24" r="2" fill="#D50011" />
    </svg>
  );
}

/**
 * 8. Pathology & Automated Diagnostics Lab
 * Authentic Flaticon style: Precision laboratory microscope & clinical reagent test tube
 */
export function PathologyLabIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Microscope Stand */}
      <path d="M22 52H44" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
      <path d="M36 50V38C36 34 39 30 43 30H45" stroke="#046F47" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M24 38H38" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

      {/* Eyepiece & Body Tube */}
      <rect
        x="24"
        y="12"
        width="10"
        height="18"
        rx="2"
        transform="rotate(-25 24 12)"
        fill="#046F47"
      />
      <rect
        x="22"
        y="8"
        width="6"
        height="6"
        rx="1.5"
        transform="rotate(-25 22 8)"
        fill="#D50011"
      />
      {/* Objective Turret */}
      <circle cx="32" cy="30" r="4" fill="#38BDF8" />

      {/* Specimen Slide with Blood Sample */}
      <rect x="25" y="37" width="10" height="2" rx="1" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.5" />
      <circle cx="30" cy="38" r="1.2" fill="#D50011" />

      {/* Chemical Reagent Flask on side */}
      <path d="M46 38L49 46C49.5 47.5 48.5 49 47 49H41C39.5 49 38.5 47.5 39 46L42 38H46Z" fill="#F87171" opacity="0.8" />
      <circle cx="44" cy="44" r="1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 9. Digital Radiography, X-Ray & Ultrasound
 * Authentic Flaticon style: Digital X-ray illuminator with visible bone structure
 */
export function RadiologyScanIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#F0FDF4" />
      
      {/* Digital Radiography Screen */}
      <rect x="14" y="12" width="36" height="42" rx="4" fill="#0F172A" />
      <rect x="17" y="15" width="30" height="36" rx="2" fill="#0284C7" />
      <rect x="19" y="17" width="26" height="32" rx="1" fill="#075985" />

      {/* Radiographic Spine & Ribs (Glow X-Ray) */}
      {/* Spine column */}
      <rect x="30" y="20" width="4" height="26" rx="2" fill="#FFFFFF" opacity="0.9" />
      <circle cx="32" cy="22" r="1.5" fill="#38BDF8" />
      <circle cx="32" cy="27" r="1.5" fill="#38BDF8" />
      <circle cx="32" cy="32" r="1.5" fill="#38BDF8" />
      <circle cx="32" cy="37" r="1.5" fill="#38BDF8" />
      <circle cx="32" cy="42" r="1.5" fill="#38BDF8" />

      {/* Rib Arches */}
      <path d="M23 25C27 24 30 25 30 25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M41 25C37 24 34 25 34 25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M22 30C27 29 30 30 30 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M42 30C37 29 34 30 34 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M23 35C27 34 30 35 30 35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M41 35C37 34 34 35 34 35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

      {/* Power Indicator */}
      <circle cx="44" cy="50" r="1.5" fill="#22C55E" />
    </svg>
  );
}

/**
 * 10. Critical Care ICU & Mechanical Ventilator
 * Authentic Flaticon style: Patient vital monitor with multi-lead waveform & alarm
 */
export function CriticalCareICUIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      
      {/* ICU Monitor Base & Caster */}
      <rect x="28" y="47" width="8" height="6" fill="#334155" />
      <path d="M24 53H40" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* High-Tech Monitor Chassis */}
      <rect x="13" y="13" width="38" height="34" rx="4" fill="#1E293B" stroke="#046F47" strokeWidth="2" />
      <rect x="16" y="16" width="32" height="26" rx="2" fill="#090D16" />

      {/* Vital Waveform (Neon Green ECG) */}
      <path
        d="M17 26H22L24 21L27 31L29 23L31 28L33 26H46"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* SpO2 Oxygenation Wave (Cyan) */}
      <path
        d="M17 35C21 33 23 37 27 35C31 33 33 37 37 35C41 33 43 37 46 35"
        stroke="#38BDF8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Heart Rate Digital Indicator */}
      <text
        x="42"
        y="22"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="900"
        fill="#EF4444"
        fontFamily="sans-serif"
      >
        75
      </text>

      {/* Top Alarm Beacon */}
      <circle cx="32" cy="11" r="2.5" fill="#D50011" />
    </svg>
  );
}

/**
 * 11. Physiotherapy & Advanced Neuro/Ortho Rehabilitation
 * Authentic Flaticon style: Human biomechanics figure with spinal restore arch & balance gears
 */
export function PhysioRehabIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Restorative Mobility Circular Arrow */}
      <path
        d="M48 30C48 39 41 47 32 47C23 47 16 39 16 30C16 23 20 17 26 14"
        stroke="#046F47"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <path d="M24 10L28 14L23 17" fill="#046F47" />

      {/* Biomechanical Active Figure */}
      {/* Head */}
      <circle cx="32" cy="20" r="4.5" fill="#046F47" />
      {/* Spine & Torso */}
      <path d="M32 25V37" stroke="#D50011" strokeWidth="3.5" strokeLinecap="round" />
      {/* Active Arms */}
      <path d="M22 28L32 26L42 28" stroke="#046F47" strokeWidth="3" strokeLinecap="round" />
      {/* Restored Legs (Running/Stride pose) */}
      <path d="M32 37L25 47" stroke="#046F47" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 37L39 44L44 43" stroke="#046F47" strokeWidth="3" strokeLinecap="round" />

      {/* Joint Energy Stars */}
      <circle cx="32" cy="37" r="2" fill="#F59E0B" />
      <circle cx="22" cy="28" r="1.5" fill="#F59E0B" />
      <circle cx="42" cy="28" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

/**
 * 12. Medical Stethoscope & Doctor Badge
 * Authentic Flaticon style: Curved dual-tone stethoscope with chrome chestpiece & ear tips
 */
export function StethoscopeBadgeIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Ear Tips */}
      <circle cx="23" cy="14" r="2.5" fill="#0F172A" />
      <circle cx="41" cy="14" r="2.5" fill="#0F172A" />

      {/* Chrome Binaural Tubes */}
      <path
        d="M23 16V22C23 27 27 31 32 31C37 31 41 27 41 22V16"
        stroke="#94A3B8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Flexible Rubber Tubing (Medical Emerald Green) */}
      <path
        d="M32 31V40C32 45 27 49 22 49C17 49 14 45 14 40C14 36 17 33 21 33H24"
        stroke="#046F47"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Precision Metallic Chestpiece / Bell */}
      <circle cx="24" cy="33" r="6" fill="#64748B" />
      <circle cx="24" cy="33" r="4.5" fill="#D50011" />
      <circle cx="24" cy="33" r="2" fill="#FFFFFF" />

      {/* Heart Health Emblem in background */}
      <path
        d="M44 38C44 35 47 34 49 36C51 34 54 35 54 38C54 42 49 46 49 46C49 46 44 42 44 38Z"
        fill="#EF4444"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * 13. Cashless Mediclaim & Ayushman Bharat Insurance
 * Authentic Flaticon style: Health insurance smartcard with chip, protective shield & gold checkmark
 */
export function CashlessTPAIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Insurance Smartcard Base */}
      <rect x="12" y="18" width="40" height="28" rx="4" fill="#046F47" />
      <rect x="12" y="24" width="40" height="6" fill="#065F46" />
      
      {/* Golden Smart Chip */}
      <rect x="16" y="33" width="9" height="7" rx="1.5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <line x1="16" y1="36.5" x2="25" y2="36.5" stroke="#B45309" strokeWidth="0.6" />
      <line x1="20.5" y1="33" x2="20.5" y2="40" stroke="#B45309" strokeWidth="0.6" />

      {/* Card Embossed Number Lines */}
      <rect x="28" y="34" width="18" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
      <rect x="28" y="38" width="12" height="2" rx="1" fill="#FFFFFF" opacity="0.6" />

      {/* Floating Protective Shield Badge */}
      <path
        d="M44 11L34 15V24C34 30.5 38.5 35.8 44 38C49.5 35.8 54 30.5 54 24V15L44 11Z"
        fill="#D50011"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      {/* White Verified Checkmark inside Shield */}
      <path
        d="M39 23.5L42.5 27L49 19.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 14. 24x7 Advanced Life Support (ALS) Ambulance
 * Authentic Flaticon style: Hospital ambulance van with red cross, emergency siren & fast wheels
 */
export function AmbulanceEmergencyIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      
      {/* Flashing Roof Beacon Siren */}
      <rect x="24" y="14" width="6" height="4" rx="1.5" fill="#D50011" />
      <path d="M21 13L18 11M33 13L36 11M27 12V9" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />

      {/* Ambulance Van Body */}
      <path
        d="M12 21C12 19.3431 13.3431 18 15 18H38C39.1046 18 40 18.8954 40 20V26H48.5C49.8 26 51 27.2 51.5 28.5L54.5 36C54.8 36.8 55 37.6 55 38.5V44C55 45.1046 54.1046 46 53 46H50C50 49.3137 47.3137 52 44 52C40.6863 52 38 49.3137 38 46H26C26 49.3137 23.3137 52 20 52C16.6863 52 14 49.3137 14 46H13C11.8954 46 11 45.1046 11 44V22C11 21.4477 11.4477 21 12 21Z"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="2.2"
      />
      {/* Front Driver Cabin Window */}
      <path d="M41 27H48L51.5 35H41V27Z" fill="#38BDF8" />

      {/* Hospital Emerald Speed Stripe */}
      <rect x="12" y="34" width="31" height="4" fill="#046F47" />

      {/* Red Hospital Medical Cross */}
      <rect x="22" y="24" width="8" height="2.5" rx="0.5" fill="#D50011" />
      <rect x="24.75" y="21.25" width="2.5" height="8" rx="0.5" fill="#D50011" />

      {/* Heavy-Duty Wheels */}
      <circle cx="20" cy="46" r="5" fill="#1E293B" />
      <circle cx="20" cy="46" r="2.2" fill="#94A3B8" />
      <circle cx="44" cy="46" r="5" fill="#1E293B" />
      <circle cx="44" cy="46" r="2.2" fill="#94A3B8" />

      {/* Speed Motion Lines */}
      <path d="M7 26H9M5 32H8M7 38H10" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 15. Modern Hospital & Trauma Centre Infrastructure
 * Authentic Flaticon style: Multi-storey hospital building with rooftop heli/beacon, red cross & emergency bay
 */
export function HospitalBuildingIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
      
      {/* Main Hospital Center Tower */}
      <rect x="21" y="14" width="22" height="38" rx="2" fill="#046F47" />
      
      {/* Left Wing */}
      <path d="M11 25C11 23.8954 11.8954 23 13 23H21V52H11V25Z" fill="#065F46" />
      
      {/* Right Wing */}
      <path d="M43 23H51C52.1046 23 53 23.8954 53 25V52H43V23Z" fill="#065F46" />

      {/* Rooftop Emergency Helipad / Red Cross Emblem */}
      <circle cx="32" cy="18" r="6" fill="#FFFFFF" />
      <path d="M32 14.5V21.5M28.5 18H35.5" stroke="#D50011" strokeWidth="2.5" strokeLinecap="round" />

      {/* Illuminated Clinical Windows */}
      {/* Center Tower Windows */}
      <rect x="25" y="27" width="5" height="4" rx="1" fill="#38BDF8" />
      <rect x="34" y="27" width="5" height="4" rx="1" fill="#38BDF8" />
      <rect x="25" y="34" width="5" height="4" rx="1" fill="#38BDF8" />
      <rect x="34" y="34" width="5" height="4" rx="1" fill="#38BDF8" />

      {/* Side Wing Windows */}
      <rect x="14" y="28" width="4" height="4" rx="0.8" fill="#BAE6FD" />
      <rect x="14" y="35" width="4" height="4" rx="0.8" fill="#BAE6FD" />
      <rect x="46" y="28" width="4" height="4" rx="0.8" fill="#BAE6FD" />
      <rect x="46" y="35" width="4" height="4" rx="0.8" fill="#BAE6FD" />

      {/* Emergency Entrance Bay */}
      <rect x="28" y="44" width="8" height="8" rx="1" fill="#FFFFFF" />
      <rect x="29" y="45" width="6" height="7" rx="0.5" fill="#D50011" />

      {/* Ground Foundation Line */}
      <line x1="8" y1="52" x2="56" y2="52" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 16. Multi-Specialty Surgeons & Medical Faculty
 * Authentic Flaticon style: Dual specialist doctors with surgical scrub cap & clinical lab coat
 */
export function SurgeonsTeamIcon({ className = "w-10 h-10", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#FEF2F2" />
      
      {/* Background Doctor (Surgeon in OT Cap) */}
      <circle cx="43" cy="22" r="7" fill="#CBD5E1" />
      {/* OT Scrub Cap */}
      <path d="M36 21C36 17 39 15 43 15C47 15 50 17 50 21H36Z" fill="#046F47" />
      {/* Body */}
      <path d="M37 34C37 30 40 28 44 28C48 28 53 30 54 34V46H37V34Z" fill="#065F46" />

      {/* Foreground Doctor (Lead Consultant in White Coat) */}
      {/* Head & Hair */}
      <circle cx="25" cy="23" r="8" fill="#CBD5E1" />
      <path d="M18 21C18 17 21 15 25 15C29 15 32 17 32 21C31 20 29 19 25 19C21 19 19 20 18 21Z" fill="#1E293B" />
      
      {/* Medical Lab Coat Body */}
      <path
        d="M13 36C13 31.5 17 29 23 29H27C33 29 37 31.5 37 36V50H13V36Z"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="1.8"
      />
      {/* Dark Inner Scrub Shirt */}
      <path d="M22 29L25 35L28 29" stroke="#046F47" strokeWidth="2.5" fill="#046F47" />

      {/* Red Stethoscope around Neck */}
      <path
        d="M19 32V38C19 41 22 43 25 43C28 43 31 41 31 38V32"
        stroke="#D50011"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="43" r="2.2" fill="#D50011" />
      <circle cx="28" cy="43" r="0.8" fill="#FFFFFF" />

      {/* Verified Gold Star Badge */}
      <circle cx="48" cy="42" r="5" fill="#F59E0B" />
      <path d="M48 39L49 41.5H51.5L49.5 43L50.5 45.5L48 44L45.5 45.5L46.5 43L44.5 41.5H47L48 39Z" fill="#FFFFFF" />
    </svg>
  );
}
