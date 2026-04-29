import nodemailer from "nodemailer";
import "./env.js";

const requiredMailEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "COMPANY_EMAIL",
];

export function getMissingMailEnv() {
  return requiredMailEnv.filter((key) => !process.env[key]);
}

export const mailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  tlsRejectUnauthorized:
    process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  from: process.env.SMTP_FROM,
  companyEmail: process.env.COMPANY_EMAIL,
};

export const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  secure: mailConfig.secure,
  auth: mailConfig.auth,
  tls: {
    rejectUnauthorized: mailConfig.tlsRejectUnauthorized,
  },
});
