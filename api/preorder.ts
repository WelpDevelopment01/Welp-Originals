import nodemailer from "nodemailer";

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

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const { type, name, email, product, count, address, total, discountApplied } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const isPreorder = type === "preorder";

    // Deterministic generator for custom, secure, 7-character alphanumeric coupon code tied to Name & Email address
    const generateCouponForUser = (userName: string, userEmail: string): string => {
      const n = (userName || "").trim().toLowerCase();
      const e = (userEmail || "").trim().toLowerCase();
      const combined = `${n}|${e}`;
      let hash = 0;
      for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      const absHash = Math.abs(hash);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "YL"; // Start with YL to feel branded (YOLO)
      let temp = absHash;
      for (let i = 0; i < 5; i++) {
        code += chars.charAt(temp % chars.length);
        temp = Math.floor(temp / chars.length);
      }
      return code;
    };

    const couponCode = generateCouponForUser(name, email);

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
            <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #2D5A27;">${discountApplied ? `Yes (20% Off Code ${couponCode})` : "None"}</td>
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
            Exclusive launch discount coupon ${couponCode} (20% OFF) issued to client.
          </p>
        </div>

        <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 16px;">
          YOLO Soda Inc. • Adapting to high-stress routines safely.
        </div>
      </div>
    `;

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbwGbETi4P_X7gQVXPNQQKWS5xcx9WR4ECUf-c2GRCcoxZdLFjppsLWn5eLFVH83tao1/exec";
    const transporter = getMailTransporter();
    
    const clientSubject = isPreorder
      ? `Welper Pre-order details`
      : `You have officially became a Welper`;

    const clientHtml = isPreorder ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <p style="font-size: 24px; font-weight: 900; color: #2D5A27; margin: 0; letter-spacing: 1px; text-transform: uppercase;">YOLO SODA</p>
          <p style="font-size: 12px; font-weight: bold; color: #718096; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">Premium Adaptogen Refreshment</p>
        </div>
        
        <h2 style="font-size: 20px; color: #2D5A27; text-align: center; margin-top: 0; text-transform: uppercase;">Welper Pre-order details</h2>
        
        <p style="font-size: 14px; color: #4a5568; line-height: 1.6; text-align: center;">
          Thank you for securing your YOLO Soda reservation! Here are your official preorder confirmation details:
        </p>

        <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Email Address:</strong> ${email}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Flavor:</strong> ${product}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Number of bottles:</strong> ${count}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Amount to be paid:</strong> ₹${total}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Address:</strong> ${address}</p>
        </div>

        <p style="font-size: 13px; color: #718096; line-height: 1.6; text-align: center;">
          We'll notify you as soon as your batch is ready to ship out!
        </p>

        <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 16px;">
          YOLO Soda Inc. • Guntur - Mumbai - Delhi • Natural Wellness
        </div>
      </div>
    ` : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <p style="font-size: 24px; font-weight: 900; color: #2D5A27; margin: 0; letter-spacing: 1px; text-transform: uppercase;">YOLO SODA</p>
          <p style="font-size: 12px; font-weight: bold; color: #718096; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">Premium Adaptogen Refreshment</p>
        </div>
        
        <h2 style="font-size: 20px; color: #2D5A27; text-align: center; margin-top: 0; text-transform: uppercase;">You have officially became a Welper</h2>
        
        <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Name of user:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Email Address of the user:</strong> ${email}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2d3748;"><strong>Flavor selected by the user:</strong> ${product || "N/A"}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #2D5A27; font-weight: bold;"><strong>Coupon code:</strong> ${couponCode}</p>
        </div>

        <div style="margin: 28px 0; background-color: #FAFBF9; border: 2px dashed #2D5A27; border-radius: 12px; padding: 20px; text-align: center;">
          <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #718096; margin-top: 0; margin-bottom: 8px;">YOUR EXCLUSIVE 20% LAUNCH DISCOUNT COUPON</p>
          <h2 style="font-size: 32px; font-weight: 900; color: #2D5A27; letter-spacing: 4px; margin: 0;">${couponCode}</h2>
          <p style="font-size: 12px; color: #4a5568; margin-top: 8px; margin-bottom: 0; font-weight: 500;">
            Apply this code during future online checkout when our products go officially live to unlock 20% off your entire cart!
          </p>
        </div>

        <p style="font-size: 13px; color: #718096; line-height: 1.6; text-align: center;">
          We'll send you private updates, behind-the-scenes formulations, and the exact launching date so you can lock in your discount.
        </p>

        <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 16px;">
          YOLO Soda Inc. • Guntur - Mumbai - Delhi • Natural Wellness
        </div>
      </div>
    `;

    const clientCouponCode = (req.body.couponCode || "").trim().toUpperCase();
    const resolvedCoupon = isPreorder ? (clientCouponCode || couponCode) : couponCode;

    if (googleScriptUrl) {
      try {
        // 1. Send warning/detail mail to welpdrinks.desk@gmail.com and write/update row in Google spreadsheet
        const scriptResponse = await fetch(googleScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "welpdrinks.desk@gmail.com",
            subject: subject,
            html: htmlContent,
            appendRow: true,
            type: type || "registration",
            name: name || "N/A",
            email: email || "N/A",
            product: product || "N/A",
            count: count || 1,
            address: address || "",
            total: total || 0,
            couponCode: resolvedCoupon,
            coupon: resolvedCoupon,
            coupon_code: resolvedCoupon,
            code: resolvedCoupon,
            discountCode: resolvedCoupon,
            discount_code: resolvedCoupon,
            allottedCoupon: couponCode,
            allotted_coupon: couponCode,
            appliedCoupon: clientCouponCode || "None",
            applied_coupon: clientCouponCode || "None",
            discountApplied: !!discountApplied
          })
        });

        const responseText = await scriptResponse.text();
        console.log(`[Google Apps Script POST] HTTP status of first call: ${scriptResponse.status}`);
        console.log(`[Google Apps Script POST] Raw Response Content: "${responseText}"`);

        let scriptData: any = null;
        try {
          if (responseText && responseText.trim()) {
            scriptData = JSON.parse(responseText);
          }
        } catch (jsonErr) {
          console.warn("[Google Apps Script API] Response was not JSON format. This is common if the Apps Script returns text, an HTML redirect, or errors out.", jsonErr);
          
          if (responseText.includes("Service requiring authorization") || responseText.includes("login") || responseText.includes("Accounts")) {
            console.error("🚨 [Google Apps Script Authorization Required] Your deployment is asking for authorization. Please make sure that under 'Who has access to the app' you selected 'Anyone' (NOT 'Anyone with a Google account' or 'Myself') and redeployed a NEW version!");
          }
        }

        // Check if Apps Script returned a validation error (if it spoke JSON)
        if (scriptData && scriptData.success === false) {
          console.warn("[Google Apps Script Validation Failed]", scriptData);
          return res.status(400).json({
            success: false,
            error: scriptData.error,
            allottedCoupon: scriptData.allottedCoupon,
            message: scriptData.message
          });
        }

        // If Apps Script failed completely with an error status (e.g. 404 or 500), throw to fall back
        if (scriptResponse.status >= 400) {
          throw new Error(`Google Apps Script web app returned HTTP status ${scriptResponse.status}`);
        }

        let emailSent = true;
        let warningMsg = "";

        if (scriptData && scriptData.emailSent === false) {
          emailSent = false;
          warningMsg = scriptData.emailError || "Admin notify email failed.";
        }

        // 2. Send confirmation mail to client (instruct the script to skip double-adding the sheet row)
        let confirmData: any = null;
        try {
          const confirmResponse = await fetch(googleScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: email,
              subject: clientSubject,
              html: clientHtml,
              skipSheet: true,
              type: type || "registration",
              name: name || "N/A",
              email: email || "N/A",
              product: product || "N/A",
              count: count || 1,
              address: address || "",
              total: total || 0,
              couponCode: resolvedCoupon,
              coupon: resolvedCoupon,
              coupon_code: resolvedCoupon,
              code: resolvedCoupon,
              discountCode: resolvedCoupon,
              discount_code: resolvedCoupon,
              allottedCoupon: couponCode,
              allotted_coupon: couponCode,
              appliedCoupon: clientCouponCode || "None",
              applied_coupon: clientCouponCode || "None",
              discountApplied: !!discountApplied
            })
          });
          const confirmText = await confirmResponse.text();
          console.log(`[Google Apps Script Confirmation POST] Status: ${confirmResponse.status}, Response: "${confirmText}"`);
          
          try {
            if (confirmText && confirmText.trim()) {
              confirmData = JSON.parse(confirmText);
            }
          } catch (jsonErr) {
            console.warn("[Google Apps Script Confirmation API] Response was not JSON format.", jsonErr);
          }

          if (confirmData && confirmData.emailSent === false) {
            emailSent = false;
            warningMsg = confirmData.emailError || "Client confirmation email failed to send.";
          }
        } catch (confirmErr: any) {
          console.warn("[Google Apps Script Confirmation Mail Failed] Skipping client mail or fallback to SMTP:", confirmErr);
          emailSent = false;
          warningMsg = confirmErr?.message || "Failed to send confirmation email.";
        }

        console.log(`[Vercel Serverless Script] Mails dispatched status - emailSent: ${emailSent}, warning: ${warningMsg}`);

        return res.status(200).json({
          success: true,
          couponCode: resolvedCoupon,
          emailSent: emailSent,
          warning: warningMsg || undefined,
          method: "google_apps_script",
          message: isPreorder 
            ? "Pre-order successfully matching sheets and reserved!"
            : "Sign up successfully completed and written to sheet!"
        });
      } catch (scriptErr: any) {
        console.error("[Vercel Serverless Script Route Error] Failed, falling back to SMTP", scriptErr);
      }
    }

    if (transporter) {
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

      console.log(`[Vercel Serverless Email] Success! Mail dispatched successfully to welpdrinks.desk@gmail.com and ${email}`);

      return res.status(200).json({
        success: true,
        couponCode,
        emailSent: true,
        method: "smtp",
        message: "Preorder successfully received and email dispatched!"
      });
    } else {
      // Fallback logging
      console.log("\n" + "=".repeat(70));
      console.log(`✉️  [FALLBACK VERCEL MAIL DISPATCH LOG]`);
      console.log(`FROM: welporiginals@gmail.com (Connected Sender Address)`);
      console.log(`TO: welpdrinks.desk@gmail.com & ${email}`);
      console.log(`SUBJECT: ${subject}`);
      console.log(`COUPON: ${couponCode}`);
      console.log(`NAME: ${name}`);
      console.log(`EMAIL: ${email}`);
      console.log("=".repeat(70) + "\n");

      return res.status(200).json({
        success: true,
        couponCode,
        emailSent: false,
        warning: "SMTP user/password or Google Script URL is not configured in environment secrets.",
        message: "Preorder successfully received!"
      });
    }
  } catch (err: any) {
    console.error("[Vercel Handler Error]", err);
    return res.status(500).json({ error: "Failed to process preorder email dispatch", details: err?.message || err });
  }
}
