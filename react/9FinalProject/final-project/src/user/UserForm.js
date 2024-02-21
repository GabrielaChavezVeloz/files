import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useContext } from 'react';
import Select from 'react-select';

import AuthContext from '../store/AuthContext';
import classes from '../auth/AuthForm.module.css';

const UserForm = () => {
    const data = useActionData();
    const navigation = useNavigation();
    const ctxUser = useContext(AuthContext);

    const isSubmitting = navigation.state === 'submitting';
    const domains = [
        { value: 'Testing', label: 'Testing' },
        { value: 'Development', label: 'Development' }
      ];

    return(
        <>
            <Form method="post" className={classes.form}>
                <h1>Update User Information</h1>
                {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                    ))}
                </ul>
                )}
                {data && data.message && <p>{data.message}</p>}
                <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required value={ctxUser.email}/>
                </p>
                <p>
                <label htmlFor="image">Password</label>
                <input id="password" type="password" name="password" required />
                </p>
                <p>
                <label htmlFor="displayName">Display Name</label>
                <input id="displayName" type="text" name="displayName" required />
                </p>
                <p>
                <label htmlFor="firstName">Firts Name</label>
                <input id="firstName" type="text" name="firstName" required />
                </p>
                <p>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" required />
                </p>
                <p>
                <label htmlFor="about">About yourself</label>
                <input id="about" type="text" name="about" required />
                </p>
                <p>
                    <label htmlFor="domain">Domain Expertise</label>
                    <Select id="domain" name="domain" options={domains} required/>
                </p>
                <div className={classes.actions}>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Save'}
                    </button>
                </div>
            </Form>
        </>
    );
};

export default UserForm;