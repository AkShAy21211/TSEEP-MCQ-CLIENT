import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation";
function Login() {
  const [countryCode, setCountryCode] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(countryCode);
    data.phone = `+${countryCode} ${data.phone}`;

    console.log("Form Submitted:", data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-[2.1rem]  text-poppins font-semibold text-center mb-6 relative z-100">
          login
          <span className="absolute -z-10 left-1/2 transform -translate-x-1/2 bottom-2  w-32 h-[3px] bg-yellow-500 mt-1"></span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-md">
              <PhoneInput
                country={"in"}
                onChange={(value) => setCountryCode(value)}
                value={countryCode}
                enableSearch={true}
                containerStyle={{ width: "120px", height: "40px" }}
                inputStyle={{ width: "110px", height: "40px" }}
              />
              <input
                type="text"
                placeholder="Enter your phone number"
                {...register("phone")}
                className="px-2 outline-none w-full"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

       

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter Password"
              className="w-full mt-1 px-3 py-2 border rounded-md  outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-casal text-white py-2 rounded-md  transition"
          >
            Save
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
