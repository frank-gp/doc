import { Resend } from 'resend';

const resend = new Resend('re_i8i5rCXG_EPNd66KVmKNt');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'user123@gmail.com',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();