import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function POST(request: NextApiRequest, response: NextApiResponse) {
  const username = process.env.EMAIL_USERNAME;
  const password = process.env.EMAIL_PASSWORD;
  const myEmail = process.env.EMAIL_ACCOUNT;
  const website = 'JDRMovement';

  const { name, email, subject, message } = request.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,

    auth: {
      user: username,
      pass: password,
    },
  });

  console.log('Transporter created successfully:', transporter);

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${website}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Subject: ${subject}</p>
      <p>Message: ${message}</p>`,
    });

    return response
      .status(200)
      .send({ ok: true, message: 'Success: email was sent' });
  } catch (error: any) {
    console.log(error);
    return response.status(500).send({
      ok: false,
      message: 'There was an error, please try again later',
    });
  }
}

export default POST;
