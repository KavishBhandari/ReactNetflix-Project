export const checkValidateData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!emailRegex) {
    return "Please enter a valid Email Id.";
  }
  if (!passwordRegex) {
    return "Password must be at least 8 characters long and contain letters and numbers.";
  }
  return null; // everything is valid
};
