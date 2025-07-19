import React from 'react'
import { useForm } from "react-hook-form"
import { Phone } from 'lucide-react'
import './Signup.css'
const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.text();
            console.log(data, result);
        } catch (err) {
            console.error("Submission failed:", err);
        }
    };

    return (
        <div className="background">
            <div className="header">
                <h2 className="h2">ChatSecure</h2>
                <button><Phone size={16} className='Phone' /> Contact Us</button>
            </div>

            {isSubmitting && <div>Loading...</div>}

            <div className='container'>
                <div className="Welcome-msg">
                    <h3>Let's get started</h3>
                    <p>Create a secure account to get started with ChatSecure.</p>
                </div>

                <form className="inputs" onSubmit={handleSubmit(onSubmit)}>
                    {/* Username */}
                    <label htmlFor="username" style={{ color: "white", fontSize: "0.9rem" }}>
                        Enter your username
                    </label>
                    <input
                        id="username"
                        placeholder="Username"
                        type="text"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 2,
                                message: "Enter a valid username",
                            }
                        })}
                    />
                    {errors.username && <div className="red">{errors.username.message}</div>}

                    {/* Email */}
                    <label htmlFor="email" style={{ color: "white", fontSize: "0.9rem" }}>
                        Enter your email
                    </label>
                    <input
                        id="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address"
                            }
                        })}
                    />
                    {errors.email && <div className="red">{errors.email.message}</div>}

                    {/* Password */}
                    <label htmlFor="password" style={{ color: "white", fontSize: "0.9rem" }}>
                        Enter your password
                    </label>
                    <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 5,
                                message: "Password should be at least 5 characters"
                            }
                        })}
                    />
                    {errors.password && <div className="red">{errors.password.message}</div>}

                    {/* Confirm Password */}
                    <label htmlFor="confirmPassword" style={{ color: "white", fontSize: "0.9rem" }}>
                        Confirm your password
                    </label>
                    <input
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: value =>
                                value === watch("password") || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && <div className="red">{errors.confirmPassword.message}</div>}

                    {/* Submit */}
                    <input type="submit" value="Sign up" disabled={isSubmitting} />
                    <p>Already a member? <span>Login</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
