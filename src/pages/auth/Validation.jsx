import { ToastContainer, toast } from "react-toastify";
function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phone_pattern = /^(03|07|08|09|01[2-9])[0-9]{8}$/;

  if (values.fullname === "") {
    toast.error("Fullname should not e empty");
  } else {
    errors.fullname = "";
  }

  if (values.lastname === "") {
    toast.error("Lastname should not e empty");
  } else {
    errors.lastname = "";
  }

  if (values.phone === "") {
    toast.error("Phone should not e empty");
  } else if (!phone_pattern.test(values.phone)) {
    toast.warn("Phone Didn match");
  } else {
    errors.phone = "";
  }

  if (values.email === "") {
    toast.error("Email should not e empty");
  } else if (!email_pattern.test(values.email)) {
    toast.warn("Email Didn match");
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    toast.error("Password should not e empty");
  } else if (!password_pattern.test(values.password)) {
    toast.warn("Password Didn match");
  } else {
    errors.password = "";
  }
  return errors;
}
export default Validation;
