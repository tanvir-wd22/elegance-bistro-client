import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  // captcha hooks
  const captchaInputRef = useRef(null);
  const [disabledLoginBtn, setDisabledLoginBtn] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // auth redirect hooks
  const { googleUser, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await signInUser(email, password);
      console.log(result);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await googleUser();
      console.log(result.user);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCaptchaInput = () => {
    const userCaptchaValue = captchaInputRef.current.value;
    if (validateCaptcha(userCaptchaValue) === true) {
      setDisabledLoginBtn(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8">
        <div className="w-full max-w-sm lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="py-4">
            <p>
              New to this website?{" "}
              <Link to="/register" className="link text-blue-500">
                Register
              </Link>{" "}
              Now.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm lg:w-1/2 card bg-base-100 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              {/* input email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && <p role="alert">{errors.email.message}</p>}

              {/* input password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password", { required: "password is required" })}
              />
              {errors.password && <p role="alert">{errors.password.message}</p>}

              {/* captcha input */}
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaInputRef}
                name="captcha"
                type="text"
                className="input"
                placeholder="Enter the text you see above"
              />
              <button
                onClick={handleCaptchaInput}
                className="btn btn-success w-11/12 mx-auto mt-4"
                type="button"
              >
                Validate Captcha
              </button>

              {/* login btn */}
              <button
                disabled={disabledLoginBtn}
                className="btn btn-neutral mt-4"
                type="submit"
              >
                Login
              </button>
            </fieldset>
          </form>
          {/* google login outside form */}
          <button
            onClick={handleGoogleSignin}
            className="btn btn-info w-4/5 mx-auto mb-4"
            type="button"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
