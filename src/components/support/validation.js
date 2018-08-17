export const validate = values => {
    const error = {};

    if (!values.types) {
        error.types = 'Enquiry type cannot be blank';
    }

    if (!values.firstName) {
        error.firstName = 'Please enter your name';
    }

    if (!values.email) {
        error.email = 'Please enter a valid email';
    }

    if (!values.subject) {
        error.subject = 'Subject cannot be blank';
    }

    if (!values.description) {
        error.description = 'Description cannot be blank';
    }

    return error;
};
