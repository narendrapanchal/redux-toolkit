import React from 'react'
import { doCreateUserWithEmailAndPassword } from '../../context/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../../utils/helper';

export const SignUp = () => {

    const navigate = useNavigate();

    const createUser = async (email, password) => {
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            navigate('/login')
        } catch (error) {
            console.error("Error during SignUp:", error);
            notify("Something went Wrong!")
        }
    };


    const formSubmitHandler = async (values, { setSubmitting, resetForm }) => {
        await createUser(values.email, values.password);
        setSubmitting(false);
        resetForm();
    };


    const validateForm = (values) => {
        const errors = {};

        if (!values.fullname) {
            errors.fullname = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Register a new account
                </h1>
                <Formik
                    initialValues={{ fullname: "", email: "", password: "" }}

                    onSubmit={formSubmitHandler}

                    validate={validateForm}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="fullname"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <Field
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter your fullname"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="fullname"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                                <Link to="/login" className="w-full flex justify-center mt-4 py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
