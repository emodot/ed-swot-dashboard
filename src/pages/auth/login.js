import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
import Logo from "assets/images/logo-main.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import PasswordInput from "components/Inputs/PasswordInput";
import Input from "components/Inputs/Input";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const step = queryParams.get("step") || "";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation function to check form fields and show toast messages
  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.password.trim()) {
      toast.error("Please enter your password");
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-[900px] m-auto">
      {(step === "" || step === "signup-2") && (
        <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
          <img src={Logo} alt="logo" className="w-[4rem]" />
          <div className="pt-8">
            <h2 className="text-[34px] font-albra_sans_sb text-brand_secondary mb-2">
              Log In
            </h2>
            <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
              Pick up right where you left off
            </p>
            {step === "" && (
              <form className="">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  showError={false}
                />
                <PasswordInput
                  label="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                  showError={false}
                />
                <p
                  className="font-aileron_sb text-14 cursor-pointer hover:underline w-fit"
                  onClick={() => {
                    navigate("/auth/forgot-password");
                  }}
                >
                  Forgot password?
                </p>

                <button
                  type="submit"
                  className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!validateForm()) {
                      return;
                    }
                    toast.success("Login Succesful");
                    navigate("/dashboard");
                  }}
                >
                  Log In
                </button>
              </form>
            )}

            <div className="w-full">
              <div className="flex items-center my-[24px]">
                <div className="flex-1 h-[1px] bg-neutral_stroke_1" />
                <span className="px-[10px] text-[#575757] text-10 font-aileron_r">
                  OR
                </span>
                <div className="flex-1 h-[1px] bg-neutral_stroke_1" />
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-[10px] border border-[#DADCE0] rounded-[8px] py-[10px] mb-[12px] hover:bg-neutral_gray_6 transition-all duration-200"
                onClick={() => {
                  toast.info("Google sign-in coming soon!");
                }}
              >
                <GoogleIcon className="w-[20px]" />
                <span className="text-neutral_black text-14 font-aileron_r">
                  Continue with Google
                </span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-[10px] border border-[#1877F2] rounded-[8px] py-[10px] hover:bg-[#1877F2]/10 transition-all duration-200"
                onClick={() => {
                  toast.info("Facebook sign-in coming soon!");
                }}
              >
                <FacebookIcon className="w-[20px]" />
                <span className="text-neutral_black text-14 font-aileron_r">
                  Continue with Facebook
                </span>
              </button>

              {/* Terms and Privacy */}
              <p className="text-[#575757] text-14 font-aileron_r mt-[16px]">
                By creating an account, you agree to{" "}
                <span className="font-aileron_sb text-14 cursor-pointer underline">
                  Edswot Terms
                </span>{" "}
                and{" "}
                <span className="font-aileron_sb text-14 cursor-pointer underline">
                  Privacy Policy
                </span>
                .
              </p>
              <p className="text-neutral_black text-14 font-aileron_r mt-[12px]">
                Don’t have an account?{" "}
                <span
                  className="font-aileron_sb text-14 cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/auth/signup");
                  }}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
