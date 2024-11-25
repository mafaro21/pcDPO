import { useState } from "react";
import "./App.css";
import "./index.css";
import { useForm, Controller } from "react-hook-form";
import logo from "./img/PrivacyCureLogo.png";
import axios from "axios";
import {
  Button,
  InputText,
  Dropdown,
  InputNumber,
  FileUpload,
} from "primereact";

export default function App() {
  // const [loading, setLoading] = useState(false);

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
      type: "name",
      label: "Gender",
      register: "gender",
      required: " true",
      minLength: 4,
    },
    {
      type: "number",
      label: "Phone number",
      register: "phone",
      required: " true",
      minLength: 10,
    },
    {
      type: "email",
      label: "Email",
      register: "email",
      required: "true",
      minLength: 13,
    },
    {
      type: "checkbox",
      label: "Are you employed?",
      register: "employed",
      required: "true",
      minLength: 2,
    },
    {
      type: "file",
      label: "Upload Document",
      register: "file",
      required: "true",
    },
  ];

  const genderOptions = [{ name: "Male" }, { name: "Female" }];

  return (
    <>
      <h1 className="flex justify-content-center mt-6">Sign Up</h1>

      <form
        style={{
          // maxWidth: "80vw",
          backgroundColor: "#083D77",
          margin: "0 auto",
          borderRadius: "8px",
        }}
        className="w-full md:w-10 lg:w-6 mt-4 p-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-5 card flex justify-content-center flex-column">
          <InputText
            className="mt-5"
            placeholder="First name"
            {...register("firstname")}
          />
          <InputText
            className="mt-5"
            placeholder="Last name"
            {...register("lastname")}
          />
          <Dropdown
            className="mt-5"
            placeholder="Gender"
            {...register("gender")}
            options={genderOptions}
            optionLabel="name"
          />

          <InputNumber
            className="mt-5"
            placeholder="Phone number"
            useGrouping={false}
            {...register("phone")}
          />

          <InputText
            className="mt-5"
            placeholder="Email"
            type="email"
            {...register("email")}
          />

          <Dropdown
            className="mt-5"
            placeholder="Are you currently employed?"
            {...register("employed")}
          />

          <h3 className="text-white mt-5">Select your document below:</h3>

          {/* <Controller
            name="file"
            control={control}
            rules={{ required: "Please select a file" }} // Validation rule for the file field
            render={({ field }) => ( */}
          <FileUpload
            // className="bg-red-400"
            // {...field}
            mode="basic"
            // name="demo[]"
            // url="/api/upload"
            accept="pdf/*"
            maxFileSize={8000000}
            {...register("file")}
            customUpload
          />
          {/* )}
          /> */}
        </div>

        <Button
          type="submit"
          className="mt-4 mb-4 mx-auto flex justify-content-center"
          label="Sign Up"
          raised
        />
      </form>
    </>
  );
}
