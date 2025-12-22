const transporter = require("../config/mailConfig");

exports.sendCareerMail = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      experience,
      experienceYears,
      education,
      skills,
      description,
    } = req.body;

    if (!name || !email || !phone || !education || !skills) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    await transporter.sendMail({
      from: `"Career Application" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: "New Career Application",
      html: `
        <h2>New Career Application</h2>
        <hr />
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Experience Years:</b> ${experienceYears || "N/A"}</p>
        <p><b>Education:</b> ${education}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>About Candidate:</b></p>
        <p>${description || "N/A"}</p>
        <hr />
        <p style="font-size:12px;color:gray;">
          Submitted from Career Page
        </p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Career application sent successfully",
    });
  } catch (error) {
    console.error("Career Mail Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send application",
    });
  }
};
