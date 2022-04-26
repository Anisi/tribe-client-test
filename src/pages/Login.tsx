import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "@tribeplatform/gql-client/types";
import { useLogin, useNetwork } from "@tribeplatform/react-sdk/hooks";
import Button from "components/ui/Button";
import Input from "components/ui/form/Input";
import ContainerNoHeaderLayout from "layouts/ContainerNoHeaderLayout";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import reactPaths from "routes/reactPaths";
import AuthContext from "store/auth-context";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const AuthCtx = useContext(AuthContext);
  const authContextLogin = AuthCtx.login;

  const { login } = useLogin();
  const { data: network } = useNetwork();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: "all" });
  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    login({
      variables: {
        input: { usernameOrEmail: data.email, password: data.password },
      },
    })
      .then((data) => {
        console.log(authContextLogin)
        setIsLoading(false);
        authContextLogin(data.accessToken);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.response.errors[0].message);
        setIsLoading(false);
      });
  });

  return (
    <ContainerNoHeaderLayout>
      <div className="justify-center flex">
        <div className="w-full sm:max-w-sm flex flex-col items-center bg-white border border-gray-300 p-4">
          <Link to={reactPaths.home} className="max-h-14">
            <img src={(network?.logo as Image)?.url} alt={network?.name} className="h-full" />
          </Link>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-2 w-full mt-4 mb-10"
          >
            <Input
              {...register("email")}
              placeholder="Email"
              error={errors.email}
            />

            <Input
              {...register("password")}
              placeholder="Password"
              error={errors.password}
              type="password"
            />

            <Button type="submit" disabled={isLoading || !isValid}>
              Log In
            </Button>
            <p className="text-red-600 text-center mt-2">{error}</p>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to={reactPaths.home} className="font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </ContainerNoHeaderLayout>
  );
};

export default Login;
