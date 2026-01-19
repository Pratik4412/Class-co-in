import gautam_gokhale from "../assets/aboutpage/gautam-gokhale.png";
import lm_agarwal from "../assets/aboutpage/CA. L M Agrawal.png";
import pd_goyal from "../assets/aboutpage/pd-goyal.png";
import priyanka_shah from "../assets/aboutpage/priyanka-shah.png";
import rasik_chaturvedi from "../assets/aboutpage/CA. Rasik Chaturvedi.png";
import sachin_sarawagi from "../assets/aboutpage/Sachin Sarawagi.png";
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
      "Independent and risk-based audits focused on transparency, compliance, and governance.",
  },
  {
    icons: <MdReceiptLong size={38} className="icon-gradient" />,
    title: "Taxation",
    description:
      "Comprehensive advisory and compliance support under direct and indirect tax laws.",
  },
  {
    icons: <FaMoneyBillTrendUp size={38} className="icon-gradient" />,
    title: "Corporate Finance & Restructuring",
    description:
      "Financial advisory supporting funding, restructuring, valuation, and strategic transactions.",
  },
  {
    icons: <FaRegHandshake size={38} className="icon-gradient" />,
    title: "Business Advisory & Outsourcing",
    description:
      "Ongoing financial, operational, and compliance support for businesses.",
  },
  {
    icons: <RiFileCheckLine size={38} className="icon-gradient" />,
    title: "FEMA & RBI Compliance",
    description:
      "Specialised advisory and reporting support for cross-border and foreign exchange transactions.",
  },
  {
    icons: <FaSearchDollar size={38} className="icon-gradient" />,
    title: "Insolvency & IBC Advisory",
    description:
      "Advisory services under the Insolvency and Bankruptcy Code, 2016.",
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
    name: "CA. L. M. Agrawal – Partner",
    designation: "B.Com, FCA",
    image: lm_agarwal,
    description:
      "CA. L. M. Agrawal has over four decades of post-qualification experience in Indian and international taxation, audit and assurance, and financial performance analysis. He is widely respected for his expertise in complex tax matters and long-term strategic tax and financial planning across sectors.",
  },
  {
    name: "CA. Rasik Chaturvedi – Partner",
    designation: "B.Com, M.Com, CS, FCA",
    image: rasik_chaturvedi,
    description:
      "CA. Rasik Chaturvedi brings over five decades of professional experience in accounting, audit, taxation, and corporate management. He secured an All-India 20th Rank in the Chartered Accountancy examination and is also a qualified Company Secretary. He is widely respected for his ethical leadership, institutional knowledge, and strategic financial guidance.",
  },
  {
    name: "CA. Purshottam Das Goyal",
    designation: "Founder Partner",
    image: pd_goyal,
    description:
      "Founder Partner with over five decades of experience in accounting, audit, taxation, and corporate advisory. All-India 20th Rank CA. Provides strategic direction with high ethical standards.",
  },
  {
    name: "CA. Gautam Gokhale – Partner",
    designation: "B.Com (Sydenham College), FCA, CISA",
    image: gautam_gokhale,
    description:
      "CA. Gautam Gokhale has over 18 years of professional experience, including significant international exposure. He specialises in internal audit, risk management, information systems audit, and enterprise risk services. His prior experience includes associations with Deloitte, Tech Mahindra, Indian Hotels, Saraswat Bank, and the Kanoo Group (UAE and Oman). He brings global best practices and technology-driven audit methodologies to the firm.",
  },
  {
    name: "CA. Priyanka Shah – Partner",
    designation: "B.Com, FCA, ICAI Concurrent Bank Audit Certified",
    image: priyanka_shah,
    description:
      "CA. Priyanka Shah specialises in banking audits, statutory audits, direct and indirect taxation, and appellate matters. She has extensive experience in regulatory representations, including matters before appellate authorities and tribunals. She is known for her detailed approach, regulatory clarity, and hands-on involvement in complex audit engagements.",
  },
  {
    name: "CA. Sachin Sarawagi – Partner",
    designation: "B.Com, FCA",
    image: sachin_sarawagi,
    description:
      "CA. Sachin Sarawagi specialises in internal control reviews, taxation consultancy, and system audits. He has extensive experience in statutory audits, management audits, and compliance advisory. His work focuses on strengthening financial systems and delivering risk-focused professional solutions.",
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
      "Our Audit & Assurance services provide independent and objective evaluation of financial statements, internal controls, and compliance frameworks. We follow a risk-based audit methodology aligned with applicable standards and industry practices.",
    // why: "A well-conducted audit enhances credibility with investors, regulators, lenders, and other stakeholders while identifying risks and process gaps.",
    services: [
      "Statutory Audit",
      "Internal Audit",
      "Concurrent Audit",
      "Revenue Audit",
      "Management and Operational Audit",
      "Forensic Audit",
      "Due Diligence Reviews",
      "Risk-Based Audit Assignments",
      "ISEDP Audits",
    ],
    serve:
      "Corporates, SMEs, startups, LLPs, trusts, and not-for-profit organizations.",
    cta: "Talk to our Audit Experts",
  },
  {
    title: "Taxation",
    overview:
      "We provide end-to-end direct tax advisory and compliance services covering planning, filing, assessments, and representation.",
    // why: "Effective tax planning ensures compliance while reducing exposure to penalties and unnecessary tax outflows.",
    services: [
      "Income Tax Return Filing ",
      "Tax Planning and Advisory ",
      "Assessments and Appeals",
      "TDS Filings and Compliance ",
      "Representation before Tax Authorities",
    ],
    serve: "Individuals, businesses, professionals, startups, and corporates.",
    cta: "Consult Our Tax Team",
  },
  {
    title: "Corporate Finance & Restructuring",
    overview:
      "Our corporate finance services support strategic financial decisions, restructuring initiatives, and funding requirements.",
    why: "Strategic financial planning enables sustainable growth, better capital allocation, and value creation.",
    services: [
      "Project Finance and Bank Finance",
      "Business and Asset Valuations",
      "Mergers and Acquisitions Advisory",
      "Business Restructuring and Turnaround Financing",
      "Debt and Capital Restructuring",
      "Strategic Alliances",
      "Merchant Banking Advisory Support",
    ],
    serve: "Startups, growing businesses, and established enterprises.",
    cta: "Speak to Our Corporate Finance Advisors",
  },
  {
    title: "Business Advisory & Outsourcing",
    overview:
      "Our advisory and outsourcing services help organisations strengthen financial discipline, reporting systems, and operational efficiency.",
    why: "Businesses need more than compliance—they need insights that improve performance and decision-making.",
    services: [
      "Strategic Planning and Risk Management ",
      "Financial Modelling and Forecasting ",
      "Cash Flow Management and Budgeting ",
      "Performance Review and MIS Reporting ",
      "Virtual CFO Services ",
      "Accounting and Bookkeeping ",
      "Payroll Management ",
      "Compliance Outsourcing",
    ],
    serve: "Entrepreneurs, SMEs, family-run businesses, and corporates.",
    cta: "Partner With Us",
  },
  {
    title: "FEMA & RBI Compliance",
    overview:
      "We assist clients with compliance under FEMA, RBI regulations, and foreign exchange laws, particularly for cross-border transactions and overseas investments.",
    why: "Non-compliance can result in severe penalties and regulatory scrutiny.",
    services: [
      "FEMA Advisory",
      "FDI and ODI Compliance",
      "RBI Filings and Regulatory Reporting",
      "External Commercial Borrowings (ECB)",
      "Cross-Border Transactions",
      "Forex Laws Compliance",
    ],
    serve:
      "Indian companies, foreign entities, NRIs, and multinational businesses.",
    cta: "Discuss Your Regulatory Requirements",
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
