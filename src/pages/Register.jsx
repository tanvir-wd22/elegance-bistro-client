import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo, email, password } = data;
    console.log(data);
    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {/* name input */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && <p role="alert">{errors.name.message}</p>}

            {/* photo input */}
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="Photo"
              {...register("photo", { required: "photo is required" })}
            />
            {errors.photo && <p role="alert">{errors.photo.message}</p>}

            {/* email input */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}

            {/* password input */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}

            <button className="btn btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </form>
        <p className="text-center mt-4 text-xl font-medium">
          Go to{" "}
          <Link to="/" className="link text-blue-500">
            Home
          </Link>{" "}
          page
        </p>
      </div>
    </div>
  );
};

export default Register;
