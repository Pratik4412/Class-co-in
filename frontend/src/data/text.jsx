import gautam_gokhale from "../assets/aboutpage/gautam-gokhale.png";
import lm_agarwal from "../assets/aboutpage/lm-agarwal.png";
import pd_goyal from "../assets/aboutpage/pd-goyal.png";
import priyanka_shah from "../assets/aboutpage/priyanka-shah.png";
import rasik_chaturvedi from "../assets/aboutpage/rasik-chaturvedi.png";
import sachin_sarawagi from "../assets/aboutpage/sachin-sarawagi.png";
import { AiOutlineAudit } from "react-icons/ai";
import {
  MdReceiptLong,
  MdOutlineLocalPharmacy,
  MdMovieEdit,
  MdOutlineEngineering,
  MdOutlineCastForEducation,
  MdImportExport,
  MdOutlineShoppingCartCheckout,
  MdOutlineRealEstateAgent,
  MdPrecisionManufacturing,
  MdOutlineAddBusiness,
} from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import {
  FaRegHandshake,
  FaSearchDollar,
  FaHandsHelping,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";
import { RiFileCheckLine, RiBankLine } from "react-icons/ri";
import { GrTechnology, GrServices } from "react-icons/gr";
import { TbSubmarine } from "react-icons/tb";
import { FiTruck } from "react-icons/fi";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiChemicalDrop } from "react-icons/gi";
import { BsPersonCheck } from "react-icons/bs";
export const navbar_items = [
  {
    path: "/",
    lable: "Home",
  },
  {
    path: "/about",
    lable: "About",
  },
  {
    path: "/services",
    lable: "Services",
  },
  {
    path: "/contact-us",
    lable: "Contact",
  },
];
export const servicesContent = [
  {
    icons: <AiOutlineAudit size={38} className="icon-gradient" />,
    title: "Audit & Assurance",
    description:
      "We provide independent audit and assurance services to enhance financial transparency, accuracy, and regulatory compliance, helping businesses build trust with stakeholders.",
  },
  {
    icons: <MdReceiptLong size={38} className="icon-gradient" />,
    title: "Taxation",
    description:
      "Our taxation services cover planning, compliance, and advisory to optimize tax efficiency while ensuring full adherence to applicable laws and regulations.",
  },
  {
    icons: <FaMoneyBillTrendUp size={38} className="icon-gradient" />,
    title: "Corporate Finance",
    description:
      "We assist businesses with financial structuring, fundraising, valuations, and strategic transactions to support sustainable growth and informed decision-making.",
  },
  {
    icons: <FaRegHandshake size={38} className="icon-gradient" />,
    title: "Business Advisory",
    description:
      "Our advisory services help organizations improve performance, manage risks, and implement effective strategies through practical and data-driven insights.",
  },
  {
    icons: <RiFileCheckLine size={38} className="icon-gradient" />,
    title: "FEMA & RBI Compliance",
    description:
      "We ensure seamless compliance with FEMA and RBI regulations, assisting businesses in managing cross-border transactions and regulatory reporting requirements.",
  },
  {
    icons: <FaSearchDollar size={38} className="icon-gradient" />,
    title: "Forensic & Investigation",
    description:
      "We conduct forensic audits and investigations to identify financial irregularities, fraud risks, and control gaps, supporting informed corrective actions.",
  },
];

export const ourServicesContent = [
  {
    title: "Business Support Services",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    title: "Taxation",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    title: "Corporate Finance",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    title: "Business Advisory",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    title: "FEMA & RBI Compliance",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    title: "Forensic & Investigation",
    description:
      "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
];

export const teamImage = [
  {
    name: "CA. Purshottam Das Goyal (FCA)",
    designation: "Founder Partner",
    image: pd_goyal,
    description:
      "Founder Partner with over five decades of experience in accounting, audit, taxation, and corporate advisory. All-India 20th Rank CA. Provides strategic direction with high ethical standards.",
  },
  {
    name: "CA. Gautam Gokhale (FCA, CISA)",
    designation: "Partner",
    image: gautam_gokhale,
    description:
      "18+ years of experience with international exposure in UAE & Oman. Expert in internal audit, ERM, IS audit & special investigations. Ex-Deloitte & Tech Mahindra.",
  },
  {
    name: "CA. Priyanka Shah (FCA)",
    designation: "Partner",
    image: priyanka_shah,
    description:
      "Senior expert in Audit & Assurance, Direct & Indirect Taxation and Bank Audits. Handles GST & IT appeals and regulatory advisory.",
  },
  {
    name: "CA. Sachin Sarawagi (FCA)",
    designation: "Partner",
    image: sachin_sarawagi,
    description:
      "Expert in taxation consultancy, statutory & internal audits, and risk-based audit systems. Known for governance & compliance frameworks.",
  },
  {
    name: "CA. Rasik Chaturvedi (FCA)",
    designation: "Partner",
    image: rasik_chaturvedi,
    description:
      "25+ years of industry leadership and 14+ years in professional practice. Specialist in finance, taxation, compliance & corporate consulting.",
  },
  {
    name: "CA. Laxminarayan Agarwal (FCA)",
    designation: "Partner",
    image: lm_agarwal,
    description:
      "44+ years of post-qualification experience. Specialist in Indian & International Taxation, audits, tax litigation & financial structuring.",
  },
];

export const services = [
  { title: "Information Technology", icon: <GrTechnology /> },
  { title: "Pharmaceuticals & Healthcare", icon: <MdOutlineLocalPharmacy /> },
  { title: "Engineering & Infrastructure", icon: <MdOutlineEngineering /> },
  { title: "Education Sector", icon: <MdOutlineCastForEducation /> },
  { title: "Banking & Financial Services", icon: <RiBankLine /> },
  { title: "Import & Export", icon: <MdImportExport /> },
  { title: "E-Commerce & Retail", icon: <MdOutlineShoppingCartCheckout /> },
  { title: "Real Estate", icon: <MdOutlineRealEstateAgent /> },
  { title: "Vessels & Marine", icon: <TbSubmarine /> },
  { title: "Logistics Services", icon: <FiTruck /> },
  { title: "Automobile Industry", icon: <LiaIndustrySolid /> },
  { title: "Media & Entertainment", icon: <MdMovieEdit /> },
  { title: "Manufacturing & Trading", icon: <MdPrecisionManufacturing /> },
  { title: "Non-Profit Organisations", icon: <FaHandsHelping /> },
  { title: "Chemicals Sector", icon: <GiChemicalDrop /> },
  { title: "HNI Services", icon: <GrServices /> },
  { title: "NRI Client Advisory", icon: <FaHandshake /> },
  { title: "Individual Tax Advisory", icon: <BsPersonCheck /> },
  { title: "Self-Employed Professionals", icon: <FaUserTie /> },
  { title: "MSME Businesses", icon: <MdOutlineAddBusiness /> },
];

// export const servicesPage = [
//   {
//     title: "Specialized Services",
//     icon: "🧠",
//     position: "top-left",
//     points: ["Insolvency", "Business Restructuring"],
//   },
//   {
//     title: "Business Support Services",
//     icon: "⭐",
//     position: "top-right",
//     points: ["Company Registration", "ROC Filings"],
//   },
//   {
//     title: "FEMA, RBI & FOREX Compliance",
//     icon: "🌍",
//     position: "left",
//     points: ["FDI Compliance", "RBI Filings"],
//   },
//   {
//     title: "Audit & Assurance",
//     icon: "📘",
//     position: "right",
//     points: ["Statutory Audits", "Internal Audits"],
//   },
//   {
//     title: "Business Advisory",
//     icon: "💼",
//     position: "bottom-left",
//     points: ["Strategic Planning", "Risk Management"],
//   },
//   {
//     title: "Taxation",
//     icon: "🧾",
//     position: "bottom-right",
//     points: ["Direct Tax", "Indirect Tax"],
//   },
//   {
//     title: "Corporate Finance",
//     icon: "💰",
//     position: "bottom-center",
//     points: ["Project Reports", "Bank Finance"],
//   },
// ];

// data/servicesTabs.js
export const servicesTabs = [
  {
    title: "Audit & Assurance",
    overview:
      "Our Audit & Assurance services are designed to provide independent, objective assurance on financial information while strengthening internal controls and governance frameworks.",
    why: "A well-conducted audit enhances credibility with investors, regulators, lenders, and other stakeholders while identifying risks and process gaps.",
    services: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "Management & Operational Audit",
      "Due Diligence",
      "Certification services",
    ],
    serve:
      "Corporates, SMEs, startups, LLPs, trusts, and not-for-profit organizations.",
    cta: "Talk to our Audit Experts",
  },
  {
    title: "Taxation",
    overview:
      "We offer end-to-end taxation services covering advisory, compliance, and litigation support across direct and indirect taxes.",
    why: "Effective tax planning ensures compliance while reducing exposure to penalties and unnecessary tax outflows.",
    services: [
      "Income Tax compliance & advisory",
      "Corporate tax planning",
      "GST registration, returns & audits",
      "Tax assessments & representation",
      "Advisory on tax structuring",
    ],
    serve: "Individuals, businesses, professionals, startups, and corporates.",
    cta: "Get Expert Tax Advice",
  },
  {
    title: "Corporate Finance",
    overview:
      "Our Corporate Finance team helps businesses make informed financial decisions at every stage of growth.",
    why: "Strategic financial planning enables sustainable growth, better capital allocation, and value creation.",
    services: [
      "Fundraising advisory (debt & equity)",
      "Business & valuation services",
      "Mergers & acquisitions advisory",
      "Financial restructuring",
      "Investor support & pitch readiness",
    ],
    serve: "Startups, growing businesses, and established enterprises.",
    cta: "Discuss Your Financial Strategy",
  },
  {
    title: "Business Advisory",
    overview:
      "We partner with businesses to provide practical, data-driven advisory focused on growth, efficiency, and risk management.",
    why: "Businesses need more than compliance—they need insights that improve performance and decision-making.",
    services: [
      "Business structuring & restructuring",
      "Financial planning & analysis",
      "Process improvement",
      "Risk assessment & mitigation",
      "Strategic advisory",
    ],
    serve: "Entrepreneurs, SMEs, family-run businesses, and corporates.",
    cta: "Partner With Us",
  },
  {
    title: "FEMA & RBI Compliance",
    overview:
      "We provide specialized advisory and compliance services under FEMA and RBI regulations for cross-border transactions.",
    why: "Non-compliance can result in severe penalties and regulatory scrutiny.",
    services: [
      "FDI & ODI advisory",
      "ECB compliance",
      "RBI reporting & filings",
      "Cross-border transaction structuring",
      "Liaison with regulators",
    ],
    serve:
      "Indian companies, foreign entities, NRIs, and multinational businesses.",
    cta: "Ensure FEMA Compliance",
  },
  {
    title: "Forensic & Investigation",
    overview:
      "Our Forensic & Investigation services help identify, analyze, and resolve financial irregularities and disputes.",
    why: "Early detection of fraud and financial misconduct minimizes losses and protects reputation.",
    services: [
      "Fraud investigation",
      "Forensic accounting",
      "Dispute resolution support",
      "Litigation & arbitration support",
      "Risk & fraud prevention reviews",
    ],
    serve: "Corporates, banks, legal firms, and regulatory bodies.",
    cta: "Consult Forensic Specialists",
  },
];
