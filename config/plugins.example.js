module.exports = ({env}) => ({
  email: {
      provider: 'sendinblue',
      providerOptions: {
          sendinblue_api_key: env('SIB_API_KEY', 'example_key'),
          sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'contact@example.com'),
          sendinblue_default_from: env('SIB_DEFAULT_FROM', 'no-reply@example.com'),
          sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'Sender_Name'),
      },
  },
});
