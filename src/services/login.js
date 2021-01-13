const axios = require("axios").default;

export const authenticate = (user, pass) => {
  axios
    .post(`http://test.elecsis.co/auth/`, { "user": user, "pass": pass })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
