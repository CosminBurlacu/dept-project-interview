import React, { ChangeEvent, useState } from 'react'
import { ContactWrapper, ContentWrapper, FormContact, Input, Label, Title, Group, Submit, Textarea } from './contact.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, useField } from 'formik';

interface IContact {
    name: string;
    label: string;
    type: string;
    getContactInformation: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const InputGroup: React.FC<IContact> = (props) => {
    const { label, type } = props;
    const [field] = useField(props);

    return (
        <Group>
            <Label htmlFor={field.name}>{label}</Label>
            {
                type === "input"
                    ? <Input {...field} />
                    : <Textarea {...field} />

            }
            <ErrorMessage component="div" name={field.name} className="error" />
        </Group>
    )
}

const Contact: React.FC = () => {
    const inputs = [
        { _id: "input", label: "Name", name: "name", type: "input" },
        { _id: "input1", label: "Email", name: "email", type: "input" },
        { _id: "input2", label: "Message", name: "message", type: "textarea" },
    ];

    const [ contactState, setContactState ] = useState({
        name: "",
        email: "",
        message: ""
    });

    const getContactInformation = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = ev.target.name;
        const value = ev.target.value;
        setContactState({...contactState, [name]: value});
    }

    const contactValidation = Yup.object({
        name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        message: Yup.string()
            .min(70, 'Must be 70 characters or more')
            .required('Required')
    });

    return (
        <ContactWrapper>
            <ContentWrapper>
                <div>
                    <Title>Question?</Title>
                    <Title>We are here to help!</Title>
                </div>
                <Formik
                    initialValues={contactState}
                    validationSchema={contactValidation}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    {formik => (
                        <FormContact>
                            {inputs.map(input => {
                                return <InputGroup key={input._id} {...input} getContactInformation={getContactInformation} />
                            })}
                            <Submit>Send</Submit>
                        </FormContact>
                    )}
                </Formik>
            </ContentWrapper>
        </ContactWrapper>
    )
}

export default Contact;
