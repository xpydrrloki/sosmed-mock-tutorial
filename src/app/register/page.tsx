"use client";

import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { appConfig } from "@/utils/config";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );

        if (data.length) {
          return toast.error("email already exist");
        }

        await axios.post(baseUrl + `/users`, {
          username: values.username,
          email: values.email,
          password: values.password,
          isVerified: false,
        });

        toast.success("register success");
        router.push("/login");
      },
    });
  return (
    <main className="container mx-auto px-4">
      <div className="mt-16 flex justify-center">
        <Card className="w-[350px] ">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-2xl ">Sign-Up!</CardTitle>
            <CardDescription>
              Sign-up and join us feel the joy of sharing thoughts!{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="username"
                  error={errors.username}
                  isError={!!touched.username && !!errors.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Type your username here"
                  type="text"
                  value={values.username}
                />

                <FormInput
                  name="email"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  type="email"
                  value={values.email}
                />

                <FormInput
                  name="password"
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="password"
                  type="password"
                  value={values.password}
                />

                <Button type="submit" className=" mt-6 w-full text-white">
                  Register
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button className=" text-white">Register</Button> */}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Register;
