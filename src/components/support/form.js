import React from 'react';
import { reduxForm, Field } from 'redux-form';

import {
    CustomInput,
    CustomSelect,
    CustomTextArea,
    FileUpload
} from './fields';

import { required, minLength, requiredEmail } from './validation';

import styles from './index.scss';

let SupportForm = props => {
    return (
        <section className={styles.wrapper}>
            <form onSubmit={props.handleSubmit} className={styles.supportForm}>
                <div className={styles.formBody}>
                    <span className={styles.textG}>
                        Fields marked “*” are required
                    </span>
                    <Field
                        name="enquiry_type"
                        component={CustomSelect}
                        label="Enquiry type *"
                        types={props.types}
                        setTypeValue={props.setTypeValue}
                        typeValue={props.data.typeValue}
                        validate={[required]}
                    />
                    {props.data.typeValue === '7' && (
                        <Field
                            name="otherType"
                            component={CustomInput}
                            type="text"
                            placeholder="Other"
                        />
                    )}
                    <div className={styles.formRow}>
                        <Field
                            name="user_name"
                            component={CustomInput}
                            type="text"
                            placeholder="Name"
                            label="Name *"
                            validate={[required, minLength]}
                        />
                        <Field
                            name="email"
                            component={CustomInput}
                            type="email"
                            placeholder="Email"
                            label="Email *"
                            validate={[required, requiredEmail]}
                        />
                    </div>
                    <Field
                        name="subject"
                        component={CustomInput}
                        type="text"
                        label="Subject *"
                        validate={[required]}
                    />
                    <Field
                        name="description"
                        component={CustomTextArea}
                        type="textarea"
                        validate={[required, minLength]}
                        textArea={props.data.textInArea}
                        changeTextArea={props.changeTextArea}
                    />
                    <FileUpload
                        upLoadFile={props.upLoadFile}
                        files={props.data.files}
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
    form: 'supportForm'
})(SupportForm);

export default SupportForm;
