import { toast } from 'react-toastify';
function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const phone_pattern = /^(03|07|08|09|01[2-9])[0-9]{8}$/;

    if (values.firstName === '') {
        toast.error('FirstName should not e empty!');
    } else {
        errors.firstName = '';
    }

    if (values.lastName === '') {
        toast.error('LastName should not e empty!');
    } else {
        errors.lastName = '';
    }

    if (values.phone === '') {
        toast.error('phone should not e empty!');
    } else if (!phone_pattern.test(values.phone)) {
        toast.warning('Phone Didn match!');
    } else {
        errors.phone = '';
    }

    if (values.email === '') {
        toast.error('Email should not e empty!');
    } else if (!email_pattern.test(values.email)) {
        toast.warning('Email Didn match!');
    } else {
        errors.email = '';
    }

    if (values.password === '') {
        toast.error('Password should not e empty!');
    } else if (!password_pattern.test(values.password)) {
        toast.warning('Password didnt match');
    } else {
        errors.password = '';
    }
    return errors;
}
export default Validation;
