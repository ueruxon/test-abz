import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { CustomInput, CustomSelect, CustomTextArea } from './fields';
import { validate } from './validation';

import styles from './index.scss';

let SupportForm = props => {
    return (
        <section className={styles.wrapper}>
            <form
                onSubmit={props.handleSubmit}
                className={styles.supportForm}
            >
                <div className={styles.formBody}>
                    <span className={styles.textG}>
                        Fields marked “*” are required
                    </span>
                    <Field
                        name="types"
                        component={CustomSelect}
                        label="Enquiry type *"
                        types={props.types}
                        setTypeValue={props.setTypeValue}
                        typeValue={props.typeValue}
                    />
                    {props.typeValue === 'Other' ? (
                        <Field
                            name="otherType"
                            component={CustomInput}
                            type="text"
                            placeholder="Other"
                        />
                    ) : null}
                    <div className={styles.formRow}>
                        <Field
                            name="firstName"
                            component={CustomInput}
                            type="text"
                            placeholder="Name"
                            label="Name *"
                        />
                        <Field
                            name="email"
                            component={CustomInput}
                            type="email"
                            placeholder="Email"
                            label="Email *"
                        />
                    </div>
                    <Field
                        name="subject"
                        component={CustomInput}
                        type="text"
                        label="Subject *"
                    />
                    <Field
                        name="description"
                        component={CustomTextArea}
                        type="textarea"
                    />
                </div>
                <div className={styles.buttonSubmit}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
};

SupportForm = reduxForm({
    form: 'supportForm',
    validate
})(SupportForm);

export default SupportForm;
