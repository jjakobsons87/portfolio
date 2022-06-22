import React from 'react';
// import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // error message hook 
    // const [errorMessage, setErrorMessage] = useState('');
    // formState hook 
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // hook that will manage the form data 


    // function handleChange(e) {
    //     if (e.target.name === 'email') {
            // const isValid = validateEmail(e.target.value);
            // console.log(isValid);
            // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }
    //     }
    //     if (!errorMessage) {
    //     setFormState({...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return (
        <section>
            <h1>Contact Me</h1>
            {/* <form id='contact-form' onSubmit={handleSubmit}> */}
            <form id='contact-form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    {/* <input type="text" defaultValue={name} onBlur={handleChange} name="name" /> */}
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    {/* <input type="email" defaultValue={email} onBlur={handleChange} name="email" /> */}
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    {/* <textarea name='message' rows="5" defaultValue={message} onBlur={handleChange} /> */}
                    <textarea name='message' rows="5" />
                </div>
                    <div>
                        <p className='error-text'></p>
                    </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;