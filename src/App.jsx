import { useState } from "react";
import "./App.css";
import "./index.css";
import { useForm } from "react-hook-form";
import logo from "./img/PrivacyCureLogo.png";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);

    // axios
    //   .post("api", data)
    //   .then((res) => {})
    //   .then((err) => {});
  };

  const input = [
    {
      type: "name",
      label: "First name",
      register: "firstname",
      required: " true",
      minLength: 4,
    },
    {
      type: "name",
      label: "Last name",
      register: "lastname",
      required: " true",
      minLength: 4,
    },
    {
      type: "email",
      label: "Email",
      register: "email",
      required: "true",
      minLength: 13,
    },
    {
      type: "file",
      label: "Upload Document",
      register: "file",
      required: "true",
    },
  ];

  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <img src={logo} class="h-20 mx-auto" />
        <h1 class=" mx-auto flex text-xl justify-center mt-4 mb-4">Sign up</h1>
        <div
          class="max-w-4xl bg-blue-700 mx-auto flex justify-center"
          style={{ marginTop: "2px", borderRadius: "20px" }}
        >
          <form
            class="flex flex-col p-7 md:w-3/4 lg:w-2/3 sm:w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {input.map((input) => (
              <div>
                <div class="flex">
                  {input.type === "file" ? (
                    <p
                      class=" text-white rounded w-1/2"
                      style={{ marginTop: "10px", padding: 0 }}
                    >
                      Choose your file blah blah blah
                    </p>
                  ) : null}
                  <input
                    type={input.type}
                    placeholder={input.label}
                    class="mt-6 w-90 border focus:border-sky-500 focus:ring-sky-500"
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      padding: "6px",
                      outline: "none",
                    }}
                    {...register(input.register, {
                      required: input.required
                        ? "This field is required"
                        : false,
                      minLength: input.minLength
                        ? {
                            value: input.minLength,
                            message: `Minimum length is ${input.minLength} characters`,
                          }
                        : undefined,
                    })}
                    aria-invalid={!!errors[input.register]}
                  />
                </div>
                {errors[input.register] && (
                  <p role="alert" className="text-red-400 text-sm">
                    <b>{errors[input.register]?.message}</b>
                  </p>
                )}
              </div>
            ))}

            {/* <input
              placeholder="tet"
              class="mt-6"
              style={{ borderRadius: "5px", width: "100%", padding: "6px" }}
            />
            <input
              placeholder="tet"
              class="mt-6"
              style={{ borderRadius: "5px", width: "100%", padding: "6px" }}
            /> */}
            <button
              class="mx-auto bg-blue-950 p-2 mt-6 text-white hover:bg-blue-500"
              style={{ borderRadius: "5px" }}
              // {...(loading ? "disabled" : "none")}
            >
              {loading ? "Signing You Up....." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
