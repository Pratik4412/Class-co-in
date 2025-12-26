import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendCareerApplication } from "../api/careerApi";
// import { submitCareerForm } from "../api/careerApi";

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const res = await sendCareerApplication(formPayload);
      toast.success(res.message || "Application submitted!");
      e.target.reset();
    } catch (err) {
      toast.error(err.message || "Submission failed");
    }
  };
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="career-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full ">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
              <h1
                className="
    fadeUp fadeUpDelay2
    text-2xl md:text-4xl lg:text-6xl
    font-semibold text-center
    font-headingFont
    text-white
    drop-shadow-[0_2px_20px_rgba(255,202,151,0.35)]
  "
              >
                Career
              </h1>
              <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                We’re always open to connecting with talented professionals.
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE – INFO */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#9A3B12]/30 p-6">
              <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
                Why Work With Us?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exposure to diverse industries & clients</li>
                <li>• Ethical & transparent work culture</li>
                <li>• Learning-focused environment</li>
                <li>• Long-term growth opportunities</li>
              </ul>
            </div>

            <div className="bg-[#f7f4ee] rounded-2xl border border-[#9A3B12]/30 p-6">
              <h3 className="text-lg font-semibold text-[#9A3B12] mb-2">
                Current Openings
              </h3>
              <p className="text-gray-700">
                We do not have any active openings at the moment. However, you
                can submit your profile for future opportunities.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form
            className="bg-white rounded-2xl shadow-lg p-8 space-y-5 w-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold text-[#9A3B12] mb-2">
              Submit Your Profile
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <div>
              <label className="block mb-2 font-medium">
                Do you have work experience?
              </label>
              <select
                name="experience"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {formData.experience === "yes" && (
              <input
                type="number"
                name="experienceYears"
                placeholder="Years of Experience"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
            )}

            <input
              type="text"
              name="education"
              placeholder="Education (e.g., B.Com, CA, MBA)"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills (comma separated)"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="description"
              placeholder="Brief introduction about yourself"
              rows="4"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              className="w-full"
            />

            <button
              type="submit"
              className="w-full bg-[#9A3B12] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
