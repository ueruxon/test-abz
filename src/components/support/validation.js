export const required = value => {
    return value ? undefined : 'Value is required';
};

export const minLength = value => {
    return value.length < 4 ? 'Value must be at least 4 characters' : undefined;
};

export const requiredEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
