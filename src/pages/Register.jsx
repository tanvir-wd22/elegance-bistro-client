import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

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
      <form onSubmit={handleSignUpForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo Url</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
