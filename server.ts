import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Lazy initialization of SMTP transporter
function getMailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER || "welporiginals@gmail.com";
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/preorder", async (req, res) => {
    try {
      const { type, name, email, product, count, address, total, discountApplied } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      const isPreorder = type === "preorder";

      // Self-contained generator for custom, secure, 7-character alphanumeric coupon code
      const generateRandomCoupon = (): string => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 7; i++) {
          code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
      };

      const couponCode = generateRandomCoupon();

      const subject = isPreorder 
        ? `🔥 [YOLO Soda Pre-Order] New reservation from ${name}!` 
        : `🎉 "${name}" has become a Welper, Email ID "${email}" and coupon code is "${couponCode}"`;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <p style="font-size: 24px; font-weight: 900; color: #2D5A27; margin: 0; letter-spacing: 1px; text-transform: uppercase;">YOLO SODA</p>
            <p style="font-size: 12px; font-weight: bold; color: #718096; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">Premium India-Crafted Adaptogen Hydration</p>
          </div>
          
          <h2 style="font-size: 18px; color: #1a202c; border-bottom: 2px solid #ebf8ff; padding-bottom: 8px; margin-top: 0; text-transform: uppercase; letter-spacing: 0.5px;">
            ${isPreorder ? "New Bottle Pre-Order Summary" : "New Welper Sign-Up Registration"}
          </h2>

          ${!isPreorder ? `
          <div style="background-color: #f0fff4; border-left: 4px solid #2D5A27; padding: 16px; margin-top: 14px; margin-bottom: 14px; border-radius: 8px;">
            <p style="margin: 0; font-size: 15px; color: #1A3C34; font-weight: bold; line-height: 1.6;">
              "${name}" has become a Welper, Email ID "${email}" and coupon code of his/her is "${couponCode}"
            </p>
          </div>
          ` : ""}
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px;">
            <tr style="background-color: #f7fafc;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7; width: 35%;">Category</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #2D5A27;">
                ${isPreorder ? "Bottle Pre-Order" : "Official Welper Signup"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Full Name</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${name}</td>
            </tr>
            <tr style="background-color: #f7fafc;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Email Address</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}" style="color: #2D5A27; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            ${isPreorder ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Product Flavor</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1a202c;">${product}</td>
            </tr>
            <tr style="background-color: #f7fafc;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Quantity</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${count} ${count === 1 ? "bottle" : "bottles"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Delivery Address</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; white-space: pre-wrap; font-size: 13px;">${address}</td>
            </tr>
            <tr style="background-color: #f7fafc;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Discount Applied</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #2D5A27;">${discountApplied ? `Yes (15% Off Code ${couponCode})` : "None"}</td>
            </tr>
            <tr style="background-color: #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #2d3748; font-size: 14px;">Total Order Value</td>
              <td style="padding: 10px; color: #2D5A27; font-weight: 900; font-size: 16px;">₹${total}</td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #4a5568; border-bottom: 1px solid #edf2f7;">Registered Flavor Choice</td>
              <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; font-weight: bold;">${product || "N/A"}</td>
            </tr>
            `}
          </table>

          <div style="background-color: #f0fff4; border: 1px solid #cee5d0; border-radius: 8px; padding: 12px 16px; margin-top: 16px; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #2D5A27; font-weight: bold;">
              Exclusive launch discount coupon ${couponCode} (15% OFF) issued to client.
            </p>
          </div>

          <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 16px;">
            YOLO Soda Inc. • Adapting to high-stress routines safely.
          </div>
        </div>
      `;

      const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbydyHe9ejoPInD_hq7-y591NXh3G08zuz0h4Bffiw4GvQRqXvQ3OVmcJUc_Y5nELvH-Qg/exec";
      const transporter = getMailTransporter();
      
      const clientSubject = isPreorder
        ? `🥤 [YOLO Soda] We've received your Pre-Order reservation!`
        : `🎉 [YOLO Soda] Welcome to the Tribe, Welper! Get ready to YOLO.`;

      const clientHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <p style="font-size: 24px; font-weight: 900; color: #2D5A27; margin: 0; letter-spacing: 1px; text-transform: uppercase;">YOLO SODA</p>
            <p style="font-size: 12px; font-weight: bold; color: #718096; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">Premium Adaptogen Refreshment</p>
          </div>
          
          <h1 style="font-size: 20px; color: #2D5A27; text-align: center; margin-top: 0;">Hey ${name}! You are now a Welper!</h1>
          
          <p style="font-size: 14px; color: #4a5568; line-height: 1.6; text-align: center;">
            Thanks for supporting YOLO Soda. We've received your ${isPreorder ? "pre-order reservation" : "launch notice sign-up"}.
          </p>

          <div style="margin: 28px 0; background-color: #FAFBF9; border: 2px dashed #2D5A27; border-radius: 12px; padding: 20px; text-align: center;">
            <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #718096; margin-top: 0; margin-bottom: 8px;">YOUR EXCLUSIVE 15% LAUNCH DISCOUNT COUPON</p>
            <h2 style="font-size: 32px; font-weight: 900; color: #2D5A27; letter-spacing: 4px; margin: 0;">${couponCode}</h2>
            <p style="font-size: 12px; color: #4a5568; margin-top: 8px; margin-bottom: 0; font-weight: 500;">
              Apply this code during future online checkout when our products go officially live to unlock 15% off your entire cart!
            </p>
          </div>

          ${isPreorder ? `
          <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #4a5568; text-transform: uppercase;">Pre-Order Details Reserved:</p>
            <p style="margin: 0 0 4px 0; font-size: 13px; color: #2d3748;"><strong>Flavor:</strong> ${product}</p>
            <p style="margin: 0 0 4px 0; font-size: 13px; color: #2d3748;"><strong>Quantity:</strong> ${count} ${count === 1 ? "bottle" : "bottles"}</p>
            <p style="margin: 0 0 4px 0; font-size: 13px; color: #2d3748;"><strong>Reserved Total Cost:</strong> ₹${total}</p>
          </div>
          ` : ""}

          <p style="font-size: 13px; color: #718096; line-height: 1.6; text-align: center;">
            We'll send you private updates, behind-the-scenes formulations, and the exact launching date so you can lock in your discount.
          </p>

          <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 16px;">
            YOLO Soda Inc. • Guntur - Mumbai - Delhi • Natural Wellness
          </div>
        </div>
      `;

      if (googleScriptUrl) {
        try {
          // 1. Send warning/detail mail to welpdrinks.desk@gmail.com
          await fetch(googleScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: "welpdrinks.desk@gmail.com",
              subject: subject,
              html: htmlContent
            })
          });

          // 2. Send confirmation mail to client
          await fetch(googleScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: email,
              subject: clientSubject,
              html: clientHtml
            })
          });

          console.log(`[Google Apps Script] Mails dispatched successfully! Sent to welpdrinks.desk@gmail.com and ${email}`);

          return res.json({
            success: true,
            couponCode,
            emailSent: true,
            method: "google_apps_script",
            message: "Preorder successfully received and routed completely via Google Apps Script!"
          });
        } catch (scriptErr: any) {
          console.error("[Google Apps Script Route Error] Failed, falling back to SMTP", scriptErr);
        }
      }

      if (transporter) {
        // Send actual email to both the desk AND a confirmation to the customer
        const fromEmail = process.env.SMTP_FROM || '"YOLO Soda" <welporiginals@gmail.com>';
        
        // 1. Send warning/detail mail to welpdrinks.desk@gmail.com
        await transporter.sendMail({
          from: fromEmail,
          to: "welpdrinks.desk@gmail.com",
          subject: subject,
          html: htmlContent,
        });

        await transporter.sendMail({
          from: fromEmail,
          to: email,
          subject: clientSubject,
          html: clientHtml,
        });

        console.log(`[Email] Success! Mail dispatched successfully to welpdrinks.desk@gmail.com and ${email}`);

        return res.json({
          success: true,
          couponCode,
          emailSent: true,
          method: "smtp",
          message: "Preorder successfully received and email dispatched!"
        });
      } else {
        // Fallback when no SMTP credentials are provided. Print beautiful log in terminal
        console.log("\n" + "=".repeat(70));
        console.log(`✉️  [FALLBACK MAIL DISPATCH LOG]`);
        console.log(`FROM: welporiginals@gmail.com (Connected Sender Address)`);
        console.log(`TO: welpdrinks.desk@gmail.com & ${email}`);
        console.log(`SUBJECT: ${subject}`);
        console.log(`COUPON: ${couponCode}`);
        console.log(`NAME: ${name}`);
        console.log(`EMAIL: ${email}`);
        if (isPreorder) {
          console.log(`PRODUCT: ${product}`);
          console.log(`COUNT: ${count}`);
          console.log(`ADDRESS: ${address}`);
          console.log(`TOTAL: ₹${total}`);
          console.log(`DISCOUNT APPLIED: ${discountApplied ? "YES" : "NO"}`);
        } else {
          console.log(`FLAVOR PREFERENCE: ${product}`);
        }
        console.log("=".repeat(70));
        console.log(`💡 Note: To enable active live email delivery via Gmail/SMTP, configure 'SMTP_USER' and 'SMTP_PASS' variables in setting secrets.`);
        console.log("=".repeat(70) + "\n");

        return res.json({
          success: true,
          couponCode,
          emailSent: false,
          warning: "SMTP user/password or Google Script URL is not configured in environment secrets. Email was safely logged on server.",
          message: "Preorder successfully received!"
        });
      }
    } catch (err: any) {
      console.error("[Email Error]", err);
      return res.status(500).json({ error: "Failed to process preorder email dispatch", details: err?.message || err });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
