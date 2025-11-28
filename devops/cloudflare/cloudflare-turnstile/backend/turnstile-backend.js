const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
console.log({ TURNSTILE_SECRET_KEY });

// ======= Service Layer =======
const UserService = {
  USERS: [
    { email: "test@demo.com", password: "QWER_123456" }, // use bcrypt in production
  ],

  async verifyTurnstileToken(token) {
    const params = new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY,
      response: token,
    });

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    return await response.json();
  },

  findUser(email, password) {
    return this.USERS.find((u) => u.email === email && u.password === password);
  },
};

// ======= Controller Layer =======

app.post("/login", async (req, res) => {
  const { email, password, token, ignoreCAPTCHA } = req.body;
  console.log({ email, password, token, ignoreCAPTCHA });

  if (!email || !password || !token) {
    return res.status(400).json({ success: false, message: "Required fields missing" });
  }

  try {
    if (!ignoreCAPTCHA) {
      const captchaResult = await UserService.verifyTurnstileToken(token);
      if (!captchaResult.success) {
        return res.status(400).json({ success: false, message: "Invalid captcha" });
      }
    }

    const user = UserService.findUser(email, password);
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    return res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/validate-turnstile", async (req, res) => {
  const { token } = req.body;
  console.log({ token });

  if (!token) {
    return res.status(400).json({ success: false, message: "Token required" });
  }

  try {
    const captchaResult = await UserService.verifyTurnstileToken(token);

    if (captchaResult.success) {
      return res.json({ success: true, message: "Captcha successfully verified" });
    } else {
      return res.status(400).json({
        success: false,
        message: "Captcha verification failed",
        errorCodes: captchaResult["error-codes"],
      });
    }
  } catch (error) {
    console.error("Error verifying Turnstile:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
