import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

export default function Login() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  type TFormData = {
    id: string;
    password: string;
  };

  const onSubmit = async (data: TFormData) => {
    const result = await login(data).unwrap();

    const user = verifyToken(result?.data?.accessToken);
    console.log(user);

    dispatch(setUser({ user: user, token: result?.data?.accessToken }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            {...register("id")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
