// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { sendCareerApplication } from "../api/careerApi";
// // import { submitCareerForm } from "../api/careerApi";

// const Career = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     description: "",
//     experience: "no",
//     experienceYears: "",
//     education: "",
//     skills: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formPayload = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formPayload.append(key, value);
//     });

//     try {
//       const res = await sendCareerApplication(formPayload);
//       toast.success(res.message || "Application submitted!");
//       e.target.reset();
//     } catch (err) {
//       toast.error(err.message || "Submission failed");
//     }
//   };
//   return (
//     <div className="flex flex-col gap-8 md:gap-16">
//       <div className="career-section">
//         <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full ">
//           <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
//             <div className="flex items-center flex-col gap-4">
//               <h1
//                 className="
//     fadeUp fadeUpDelay2
//     text-2xl md:text-4xl lg:text-6xl
//     font-semibold text-center
//     font-headingFont
//     text-white
//     drop-shadow-[0_2px_20px_rgba(255,202,151,0.35)]
//   "
//               >
//                 Career
//               </h1>
//               <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
//                 We’re always open to connecting with talented professionals.
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* CONTENT */}
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* LEFT SIDE – INFO */}
//           <div className="flex flex-col gap-6">
//             <div className="bg-white rounded-2xl border border-[#9A3B12]/30 p-6">
//               <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
//                 Why Work With Us?
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>• Exposure to diverse industries & clients</li>
//                 <li>• Ethical & transparent work culture</li>
//                 <li>• Learning-focused environment</li>
//                 <li>• Long-term growth opportunities</li>
//               </ul>
//             </div>

//             <div className="bg-[#f7f4ee] rounded-2xl border border-[#9A3B12]/30 p-6">
//               <h3 className="text-lg font-semibold text-[#9A3B12] mb-2">
//                 Current Openings
//               </h3>
//               <p className="text-gray-700">
//                 We do not have any active openings at the moment. However, you
//                 can submit your profile for future opportunities.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE – FORM */}
//           <form
//             className="bg-white rounded-2xl shadow-lg p-8 space-y-5 w-full"
//             onSubmit={handleSubmit}
//           >
//             <h3 className="text-xl font-semibold text-[#9A3B12] mb-2">
//               Submit Your Profile
//             </h3>

//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               required
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               required
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               required
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <div>
//               <label className="block mb-2 font-medium">
//                 Do you have work experience?
//               </label>
//               <select
//                 name="experience"
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded-lg"
//               >
//                 <option value="no">No</option>
//                 <option value="yes">Yes</option>
//               </select>
//             </div>

//             {formData.experience === "yes" && (
//               <input
//                 type="number"
//                 name="experienceYears"
//                 placeholder="Years of Experience"
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded-lg"
//               />
//             )}

//             <input
//               type="text"
//               name="education"
//               placeholder="Education (e.g., B.Com, CA, MBA)"
//               required
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="text"
//               name="skills"
//               placeholder="Skills (comma separated)"
//               required
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <textarea
//               name="description"
//               placeholder="Brief introduction about yourself"
//               rows="4"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="file"
//               name="resume"
//               accept=".pdf,.doc,.docx"
//               required
//               onChange={handleChange}
//               className="w-full"
//             />

//             <button
//               type="submit"
//               className="w-full bg-[#9A3B12] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
//             >
//               Submit Application
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;

// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { sendCareerApplication } from "../api/careerApi";

// const Career = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     description: "",
//     experience: "no",
//     experienceYears: "",
//     education: "",
//     skills: "",
//     resume: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setLoading(true);

//     try {
//       const formPayload = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value !== null && value !== "") {
//           formPayload.append(key, value);
//         }
//       });

//       const res = await sendCareerApplication(formPayload);

//       toast.success(res?.message || "Application submitted successfully!");

//       // RESET STATE (IMPORTANT)
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         description: "",
//         experience: "no",
//         experienceYears: "",
//         education: "",
//         skills: "",
//         resume: null,
//       });
//     } catch (err) {
//       toast.error(
//         err?.response?.data?.message || "Submission failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-8 md:gap-14">
//       {/* ================= HERO ================= */}
//       <section className="relative bg-[#180F0B] overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFCA97_0%,_transparent_45%)] opacity-30 animate-pulse" />
//         <div className="container mx-auto px-6 pt-28 pb-12 text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold text-white animate-fadeUp">
//             Build Your Career With Us
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-[#FFCA97] max-w-2xl mx-auto animate-fadeUp delay-200">
//             We believe in growth, transparency, and building long-term
//             professional journeys.
//           </p>

//           <button
//             onClick={() =>
//               document
//                 .getElementById("career-form")
//                 .scrollIntoView({ behavior: "smooth" })
//             }
//             className="mt-8 px-8 py-3 bg-[#9A3B12] text-white rounded-full hover:scale-105 transition animate-fadeUp delay-300"
//           >
//             Apply Now
//           </button>
//         </div>
//       </section>

//       {/* ================= WHY JOIN ================= */}
//       <section className="container mx-auto px-6">
//         <h2 className="text-3xl font-semibold text-center text-[#9A3B12] mb-12">
//           Why Join Us
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               title: "Real Projects",
//               desc: "Work on real client projects across industries",
//             },
//             {
//               title: "Growth Culture",
//               desc: "Learning-first mindset with mentorship",
//             },
//             {
//               title: "Transparency",
//               desc: "Clear roles, feedback & career path",
//             },
//             {
//               title: "Long-Term Vision",
//               desc: "We invest in people, not just positions",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="p-6 bg-white rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//             >
//               <h4 className="text-lg font-semibold text-[#9A3B12] mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= HIRING PROCESS ================= */}
//       <section className="bg-[#f7f4ee] py-8 md:py-12">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center text-[#9A3B12] mb-12">
//             Our Hiring Process
//           </h2>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               "Profile Submission",
//               "Screening Call",
//               "Skill Evaluation",
//               "Final Discussion",
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition"
//               >
//                 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#9A3B12] text-white font-bold">
//                   {i + 1}
//                 </div>
//                 <p className="font-medium">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FORM ================= */}
//       <section id="career-form" className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
//           {/* INFO */}
//           <div className="w-full">
//             <h3 className="text-3xl font-semibold text-[#9A3B12]">
//               Submit Your Profile
//             </h3>
//             <p className="text-gray-200">
//               Even if there are no current openings, we keep profiles for future
//               opportunities.
//             </p>
//             {/* <img src= alt="" /> */}
//           </div>
//           <div className="!w-full bg-white shadow-xl p-4 rounded-xl animate-fadeUp">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 onChange={handleChange}
//                 className="input"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 onChange={handleChange}
//                 className="input"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 onChange={handleChange}
//                 className="input"
//               />

//               <select
//                 name="experience"
//                 onChange={handleChange}
//                 className="input"
//               >
//                 <option value="no">Fresher</option>
//                 <option value="yes">Experienced</option>
//               </select>

//               {formData.experience === "yes" && (
//                 <input
//                   type="number"
//                   name="experienceYears"
//                   placeholder="Years of Experience"
//                   onChange={handleChange}
//                   className="input"
//                 />
//               )}

//               <input
//                 type="text"
//                 name="education"
//                 placeholder="Education"
//                 required
//                 onChange={handleChange}
//                 className="input"
//               />

//               <input
//                 type="text"
//                 name="skills"
//                 placeholder="Skills (comma separated)"
//                 required
//                 onChange={handleChange}
//                 className="input"
//               />

//               <textarea
//                 name="description"
//                 placeholder="Brief introduction"
//                 rows="4"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.doc,.docx"
//                 required
//                 onChange={handleChange}
//                 className="block w-full text-sm text-gray-600
//              file:mr-4 file:py-2 file:px-4
//              file:rounded-lg file:border-0
//              file:bg-[#9A3B12] file:text-white
//              hover:file:opacity-90"
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-3 rounded-lg text-white font-medium transition
//     ${
//       loading
//         ? "bg-gray-400 cursor-not-allowed"
//         : "bg-[#9A3B12] hover:opacity-90"
//     }
//   `}
//               >
//                 {loading ? "Submitting..." : "Submit Application"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-[#180F0B] py-4 text-center">
//         <h2 className="text-3xl text-white font-semibold mb-4">
//           Let’s Grow Together
//         </h2>
//         <p className="text-[#FFCA97]">
//           Your next opportunity might be one click away.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Career;
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { sendCareerApplication } from "../api/careerApi";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    experience: "no",
    experienceYears: "",
    education: "",
    skills: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);

  // Ref for file input to reset it
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formPayload.append(key, value);
        }
      });

      const res = await sendCareerApplication(formPayload);

      toast.success(res?.message || "Application submitted successfully!");

      // RESET STATE
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        experience: "no",
        experienceYears: "",
        education: "",
        skills: "",
        resume: null,
      });

      // RESET FILE INPUT
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 md:gap-14">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#180F0B] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFCA97_0%,_transparent_45%)] opacity-30 animate-pulse" />
        <div className="container mx-auto px-6 pt-28 pb-12 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fadeUp">
            Build Your Career With Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#FFCA97] max-w-2xl mx-auto animate-fadeUp delay-200">
            We believe in growth, transparency, and building long-term
            professional journeys.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("career-form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-8 py-3 bg-[#9A3B12] text-white rounded-full hover:scale-105 transition animate-fadeUp delay-300"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-[#9A3B12] mb-12">
          Why Join Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Real Projects",
              desc: "Work on real client projects across industries",
            },
            {
              title: "Growth Culture",
              desc: "Learning-first mindset with mentorship",
            },
            {
              title: "Transparency",
              desc: "Clear roles, feedback & career path",
            },
            {
              title: "Long-Term Vision",
              desc: "We invest in people, not just positions",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-[#9A3B12] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HIRING PROCESS ================= */}
      <section className="bg-[#f7f4ee] py-8 md:py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-[#9A3B12] mb-12">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Profile Submission",
              "Screening Call",
              "Skill Evaluation",
              "Final Discussion",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#9A3B12] text-white font-bold">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="career-form" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
          {/* INFO */}
          <div className="w-full">
            <h3 className="text-3xl font-semibold text-[#9A3B12]">
              Submit Your Profile
            </h3>
            <p className="text-gray-300 mt-2">
              Even if there are no current openings, we keep profiles for future
              opportunities.
            </p>
          </div>

          {/* FORM */}
          <div className="!w-full bg-white shadow-xl p-6 rounded-xl animate-fadeUp">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="input"
              >
                <option value="no">Fresher</option>
                <option value="yes">Experienced</option>
              </select>

              {formData.experience === "yes" && (
                <input
                  type="number"
                  name="experienceYears"
                  placeholder="Years of Experience"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="input"
                />
              )}

              <input
                type="text"
                name="education"
                placeholder="Education"
                required
                value={formData.education}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="skills"
                placeholder="Skills (comma separated)"
                required
                value={formData.skills}
                onChange={handleChange}
                className="input"
              />

              <textarea
                name="description"
                placeholder="Brief introduction"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="input"
              />

              <input
                ref={fileInputRef}
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                className="block w-full text-sm text-gray-600
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:bg-[#9A3B12] file:text-white
                  hover:file:opacity-90 cursor-pointer"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-medium transition
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#9A3B12] hover:opacity-90"
                  }
                `}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#180F0B] py-12 text-center">
        <h2 className="text-3xl text-white font-semibold mb-4">
          Let's Grow Together
        </h2>
        <p className="text-[#FFCA97]">
          Your next opportunity might be one click away.
        </p>
      </section>
    </div>
  );
};

export default Career;
