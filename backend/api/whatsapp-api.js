// const axios = require("axios");
const axios = require("axios/dist/node/axios.cjs");

async function SendMessage(phone) {
  try {
    const response = await axios.post("https://mkt.eziline.com/api/send", {
      number: phone,
      type: "text",
      message: `
Registration Successful!

We are delighted to inform you that your registration is successful.

Our HR will contact with you as soon as possible.
If the HR does not respond within 24 hours, you should send a reminder message to this number.

Best regards
    `,
      instance_id: "668CF6A5AB89E",
      access_token: "6635ec7382039",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { SendMessage };
