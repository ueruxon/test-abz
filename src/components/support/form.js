import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { CustomInput, CustomSelect, CustomTextArea } from './fields';

import styles from './index.scss';

let SupportForm = props => {
    return (
        <section className={styles.wrapper}>
            <form
                onSubmit={props.handleSubmit}
                className={styles['support-form']}
            >
                <div className={styles['form-body']}>
                    <span className={styles.textG}>
                        Fields marked “*” are required
                    </span>
                    <Field
                        name="Enquiry type"
                        component={CustomSelect}
                        label="Enquiry type *"
                        types={props.types}
                    />
                    {/* <Field
                        name="Subject"
                        component={CustomInput}
                        type="text"
                        placeholder='Other'
                    /> */}
                    <div className={styles['form-row']}>
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
                        name="Subject"
                        component={CustomInput}
                        type="text"
                        label="Subject *"
                    />
                    <Field
                        name="Description"
                        component={CustomTextArea}
                        type="textarea"
                    />
                </div>
                <div className={styles.buttonSubmit}>
                    <button
                        type="submit"
                        disabled={props.pristine || props.submitting}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

SupportForm = reduxForm({
    form: 'supportForm'
})(SupportForm);

export default SupportForm;
