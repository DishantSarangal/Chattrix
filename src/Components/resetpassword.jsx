import { useForm } from "react-hook-form";
import './resetpassword.css';
import { Phone } from 'lucide-react';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // You can add toast or modal feedback here
  };

  return (
    <>
      <div className="background">
        <div className="header">
          <h2 className="h2">ChatSecure</h2>
          <button> <Phone size={16} className='Phone' /> Contact Us</button>
        </div>

        {isSubmitting && <div>Loading...</div>}

        <div className='container'>
          <div className="Welcome-msg">
            <h3>Reset Password</h3>
            <p>We will send you a link to reset your password.</p>
          </div>

          <form className="inputs" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" style={{ color: "white", fontSize: "0.9rem" }}>
              Enter your email address
            </label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors.email && <div className="red">{errors.email.message}</div>}

            <input type="submit" value="Send Reset Link" disabled={isSubmitting} />
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
