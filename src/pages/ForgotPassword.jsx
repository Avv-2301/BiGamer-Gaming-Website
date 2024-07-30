import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setSendEmail] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#f3f4f6]">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-[1.5rem] leading-[2.3rem] font-semibold font-mono text-black">
          {!emailSent ? "Reset Your Password" : "Check email"}
        </h1>
        <p>
          {!emailSent
            ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery."
            : `We have sent the reset email to ${email}`}
        </p>
        <form onSubmit={""}>
          {!emailSent && (
            <label className="w-full">
              <p className="mt-2 text-[1.1rem] leading-[2.3rem] text-black mb-1">
                Email Address <sup className="text-[#dc2626]">*</sup>
              </p>
              <input
                required
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email Address"
                className="form-style w-full h-[40px] rounded-md bg-[#d1d5db] text-black px-3"
              />
            </label>
          )}
          <button
            type="submit"
            className="w-full mt-6 rounded-[6px] px-[12px] bg-[#eab308] py-[10px] font-medium text-black border"
          >
            {!emailSent ? "Submit" : "Resend email"}
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to={"/"}>
            <p className="flex items-center gap-x-2 text-black">
              <BiArrowBack /> Back To Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
