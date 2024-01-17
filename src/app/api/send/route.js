import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL
export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [''],
    subject: 'Hello world',
    react: <>
            <p>Email Body</p>   
        </>,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
