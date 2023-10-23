export const validate = (email = null, password = null, fullname = null) => {
  // if (fullname === null || fullname.length < 1) {
  //   return "fullname field can't be empty";
  // }
  // const nameRegex = /^[A-Za-z]+$/;
  // if (fullname === null || !nameRegex.test(fullname)) {
  //   return 'Full name must contain only alphabetic characters';
  // }
  // const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  // if (!fullname || specialCharRegex.test(fullname)) {
  //   return 'Full name cannot contain special characters';
  // }
};

export const isFullnameValid = (fullname) => {
  if (fullname.length < 2) return false;
  else return true;
};
