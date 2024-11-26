import { useState, useRef } from "react";
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
  ProgressSpinner,
  Toast,
} from "primereact";
import API from "./ApiConfig";

export default function App() {
  const toast = useRef(null);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onFileSelect = (e) => {
    const selectedFile = e.files[0];
    setFile(selectedFile); // Update the file state
    setValue("file", selectedFile); // Update React Hook Form state and trigger validation
  };

  const onSubmit = (data) => {
    if (!file) {
      toast.current.show({
        severity: "warn",
        summary: "Missing File",
        detail: "Please select a file before submitting.",
        life: 8000,
      });
      setLoading(false);
    }

    const capitalizedFirstname =
      data.firstname.charAt(0).toUpperCase() + data.firstname.slice(1);

    const capitalizedLastname =
      data.lastname.charAt(0).toUpperCase() + data.lastname.slice(1);

    const formData = {
      first_name: capitalizedFirstname,
      last_name: capitalizedLastname,
      gender: data.gender,
      phone: data.phone,
      email: data.email,
      employeed: data.employed,
      supporting_documents: file,
    };

    // console.log(formData);
    setLoading(true);

    // axios
    //   .post(`${API}/applicant`, formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     toast.current.show({
    //       severity: "success",
    //       detail: "Your application has been sent successfully",
    //       life: 5000,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.current.show({
    //       severity: "error",
    //       detail: "There has been an error processing your application",
    //       life: 5000,
    //     });
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const genderOptions = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
  ];

  const employedOptions = [
    { name: "Yes", value: "Yes" },
    { name: "No", value: "No" },
  ];

  return (
    <>
      <img
        src={logo}
        height={"100px"}
        className="flex justify-content-center mx-auto mt-3"
      />
      <h1 className="flex justify-content-center mt-2">Sign Up</h1>
      <Toast ref={toast} />

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
        <div className="p-4 card flex justify-content-center flex-column">
          <InputText
            className="mt-2"
            placeholder="First name"
            {...register("firstname", { required: "First name is required" })}
          />
          {errors.firstname && (
            <p className="text-red-500">
              <b>{errors.firstname.message}</b>
            </p>
          )}

          <InputText
            className="mt-5"
            placeholder="Last name"
            {...register("lastname", { required: "Last name is required" })}
          />
          {errors.lastname && (
            <p className="text-red-500">
              <b>{errors.lastname.message}</b>
            </p>
          )}

          <Controller
            name="gender"
            control={control}
            defaultValue={null} // Initial value
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Dropdown
                id="gender"
                className="mt-5"
                placeholder="Gender"
                value={field.value}
                options={genderOptions}
                optionLabel="name"
                onChange={(e) => field.onChange(e.value)}
              />
            )}
          />
          {errors.gender && (
            <p className="text-red-500">
              <b>{errors.gender.message}</b>
            </p>
          )}

          <Controller
            name="phone"
            control={control}
            defaultValue={null}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <InputNumber
                className="mt-5 w-full"
                placeholder="Phone number"
                useGrouping={false}
                // prefix="+263"
                onChange={(e) => field.onChange(e.value)}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500">
              <b>{errors.phone.message}</b>
            </p>
          )}

          <InputText
            className="mt-5"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">
              <b>{errors.email.message}</b>
            </p>
          )}

          <Controller
            name="employed"
            control={control}
            defaultValue={null} // Initial value
            rules={{ required: "Employment status is required" }}
            render={({ field }) => (
              <Dropdown
                id="employed"
                className="mt-5"
                placeholder="Are you currently employed?"
                value={field.value} // Bind value from React Hook Form
                options={employedOptions}
                optionLabel="name"
                onChange={(e) => field.onChange(e.value)}
              />
            )}
          />
          {errors.employed && (
            <p className="text-red-500">
              <b>{errors.employed.message}</b>
            </p>
          )}

          <h3 className="text-white mt-5">Select your document below:</h3>

          <Controller
            name="file"
            control={control}
            defaultValue={null}
            rules={{
              validate: (value) => (value ? true : "Please select a file"),
            }} // Validation rule for the file field
            render={({ field }) => (
              <FileUpload
                className="mt-3"
                {...field}
                mode="basic"
                accept="application/pdf"
                maxFileSize={8000000}
                // {...register("file")}
                onSelect={onFileSelect}
                customUpload
                uploadLabel="Upload"
                auto={false}
              />
            )}
          />
          {errors.file && (
            <p className="text-red-500">
              <b>{errors.file.message}</b>
            </p>
          )}
        </div>

        {loading ? (
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="3"
            className="flex justify-content-center mb-4"
          />
        ) : (
          <Button
            type="submit"
            className="mt-4 mb-4 mx-auto flex justify-content-center"
            label="Sign Up"
            raised
          />
        )}
      </form>
    </>
  );
}
