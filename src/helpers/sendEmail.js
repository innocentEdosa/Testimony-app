import sg from '@sendgrid/mail';
// import pug from 'pug';

const sgApiKey = process.env.SENDGRID_API_KEYY;
sg.setApiKey(sgApiKey);
export const sendEmail = async (reciever, token) => {
  const msg = {
    to: reciever,
    from: 'innocent.ilegbinijie@andela.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>${token}</strong>`,
  };
  await sg.send(msg);
};

export const sendVerificationEmail = async (userDetails, token) => {
  // const formatEmailVerificationHtml = pug.compileFile('./src/helpers/pugTemplates/signUp.pug');
  const url = `http://localhost:9999/graphql?query={verifyUser{token,id,email,meta}}&variables={"token":"${token}"}`;
  const msg = {
    to: userDetails.email,
    from: 'innocent.ilegbinijie@andela.com',
    subject: 'Email Verification',
    html: `
    <head>
    <script type="text/javascript">
    window.onload(alert('this is  a drill))
    </script>
    </head>
    <body>
    <h1>Testimony Hub</h1>
    <p>Thanks for Joining Testimony Hub. </p>
    <div>Click the link below to confirm your Email</div>
    <a href='${url}'>Confirm Email</a>
    </body>
    `,
  };
  await sg.send(msg);
};
