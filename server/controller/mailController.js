const transporter = require("../config/mailConfig.js");

// exports.sendContactMail = async (req, res) => {
//   const { fname, lname, email, service,number, message, agree } = req.body;

//   // Basic validation (backend safety)
//   if (!fname || !lname || !email || !service || !number || !message) {
//     return res
//       .status(400)
//       .json({ success: false, message: "All fields are required" });
//   }

//   if (!agree) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Terms not accepted" });
//   }

//   try {
//     await transporter.sendMail({
//       from: `"${fname} ${lname}" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_USER,
//       replyTo: email, // 👈 important for replying directly
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Contact Form Lead</h2>
//         <hr />
//         <p><b>Full Name:</b> ${fname} ${lname}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Email:</b> ${number}</p>
//         <p><b>Selected Service:</b> ${service}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//         <hr />
//         <p style="font-size:12px;color:gray;">
//           This enquiry was submitted from the website contact form.
//         </p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Email sent successfully",
//     });
//   } catch (error) {
//     console.error("Mail Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to send email",
//     });
//   }
// };
exports.sendContactMail = async (req, res) => {
  const { fname, lname, email, services, phone, message, agree } = req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !services ||
    services.length === 0 ||
    !phone ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (!agree) {
    return res.status(400).json({
      success: false,
      message: "Terms not accepted",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${fname} ${lname}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Lead</h2>
        <hr />
        <p><b>Name:</b> ${fname} ${lname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Services:</b> ${services.join(", ")}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};
