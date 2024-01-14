import { Resend } from "resend";

interface SendVerificationEmailProps {
  email: string;
  token: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async ({
  email,
  token,
}: SendVerificationEmailProps) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email address",
    html: `<a href="${confirmLink}">Confirm e-mail here.<a/>`,
  });
};
