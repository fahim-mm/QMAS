import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const inputClass = "h-[5%] w-[60%] p-4 border border-blue-300 rounded-md m-1";
const inputClasses = "h-[5%] w-[40%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-1xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 4) {
    errors.name = "Name must be 4 characters";
  }
  if (!values.father_name) {
    errors.father_name = "Required";
  } else if (values.father_name.length < 4) {
    errors.father_name = "Name must be 4 characters";
  }
  if (!values.mather_name) {
    errors.mather_name = "Required";
  } else if (values.mather_name.length < 4) {
    errors.m = "Name must be 4 characters";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.nid) {
    errors.nid = "Required";
  } else if (values.nid.length < 8) {
    errors.nid = "number must be 9 characters";
  }

  if (!values.mobile) {
    errors.mobile = "Required";
  }
  if (!values.previous_academic_year) {
    errors.previous_academic_year = "Required";
  }
  if (!values.previous_class) {
    errors.previous_class = "Required";
  }
  if (!values.mark) {
    errors.mark = "Required";
  }
  if (!values.birth) {
    errors.birth = "Required";
  }
  if (!values.guardian_number) {
    errors.guardian_number = "Required";
  }
  if (!values.adderess) {
    errors.adderess = "Required";
  }

  console.log(JSON.stringify(errors));
  return errors;
};
const onSubmit = (values, { setSubmitting }) => {
  fetch("http://localhost:3001/studentAdmission", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(values),
  }).then((response) => 
    alert(JSON.stringify(values, null, 2))
  );
  setSubmitting(false);
};

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  /* and other goodies */
}) => (
  <div className="w-full h-full flex bg-yellow-100 mt-20 mb-56">
    <div className="w-[20%] h-full"></div>

    <div className="w-[80%] h-full bg-red-200">
      <p className="mt-5 mb-10 text-5xl text-blue-900 font-bold font-serif  text-center underline underline-offset-8">
        Old Student's Admission Form
      </p>
      <p className="mt-5 mb-10 text-5xl text-blue-700 font-bold font-serif  text-center underline underline-offset-8">
        2023
      </p>

      <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
        <div className="mt-1 flex flex-col w-full h-full">
          <form onSubmit={handleSubmit}>
            <div className="text-left">
              <label className={lableClass}>
                <p className="p-4">Name Of The Applicant :</p>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="w-[80%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <span className="text-red-500">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <br></br>
            <div className="flex flex-row">
              <div className="text-left">
                <label className={lableClass}>
                  <p className=" p-4">previous Academic Year:</p>
                </label>
                <input
                  type="number"
                  name="previous_academic_year"
                  placeholder="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.previous_academic_year}
                  className="w-[50%] h-[36%]  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.previous_academic_year &&
                    touched.previous_academic_year &&
                    errors.previous_academic_year}
                </span>
              </div>

              <div className="text-left">
                <label className={lableClass}>
                  <p className="p-4">previous Class:</p>
                </label>
                <input
                  type="name"
                  name="previous_class"
                  placeholder="class name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.previous_class}
                  className="w-[50%] h-[36%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.previous_class &&
                    touched.previous_class &&
                    errors.previous_class}
                </span>
              </div>
              <div className="text-left">
                <label className={lableClass}>
                  <p className="p-4">Previous year exam average:</p>
                </label>
                <input
                  type="name"
                  name="mark"
                  placeholder="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mark}
                  className="w-[50%] h-[36%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500 ">
                  {errors.mark && touched.mark && errors.mark}
                </span>
              </div>
            </div>
            <br></br>
            <div className="flex flex-row m-2">
              <div className="text-left">
                <label className={lableClass}> Father's Name:</label>
                <input
                  type="name"
                  name="father_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.father_name}
                  className={inputClass}
                />
                <span className="text-red-500">
                  {errors.father_name &&
                    touched.father_name &&
                    errors.father_name}
                </span>
              </div>
              <div className="text-left">
                <label className={lableClass}> Mother's Name:</label>
                <input
                  type="name"
                  name="mather_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mather_name}
                  className={inputClass}
                />
                <span className="text-red-500">
                  {errors.mather_name &&
                    touched.mather_name &&
                    errors.mather_name}
                </span>
              </div>
            </div>
            <br></br>
            <div className="flex flex-row m-2">
              <div className="text-left">
                <label className={lableClass}> Dath Of Birth:</label>
                <input
                  type="text"
                  name="birth"
                  placeholder="mm/dd/yyyy"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birth}
                  className="w-[50%] h-[70%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.birth && touched.birth && errors.birth}
                </span>
              </div>
              <div className="text-left">
                <label className={lableClass}> Birth/Nid Number :</label>
                <input
                  type="number"
                  name="nid"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nid}
                  className="w-[50%] h-[70%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.nid && touched.nid && errors.nid}
                </span>
              </div>
            </div>
            <br></br>
            <div className="text-left m-2">
              <label className={lableClass}> adderess :</label>
              <input
                type="text"
                name="adderess"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adderess}
                className="w-[80%] h-[10%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
              />
              <span className="text-red-500">
                {errors.adderess && touched.adderess && errors.adderess}
              </span>
            </div>
            <br></br>
            <div className="text-left m-2">
              <label className={lableClass}> E-mail :</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-[50%] h-[50%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
              />
              <span className="text-red-500">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <br></br>
            <div className="flex flex-row m-2">
              <div className="text-left">
                <label className={lableClass}>Guardian Number :</label>
                <input
                  type="number"
                  name="guardian_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guardian_number}
                  className="w-[50%] h-[80%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.guardian_number &&
                    touched.guardian_number &&
                    errors.guardian_number}
                </span>
              </div>

              <div className="text-left">
                <label className={lableClass}>Student Mobile Number :</label>
                <input
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  className="w-[50%] h-[80%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                />
                <span className="text-red-500">
                  {errors.adderess && touched.adderess && errors.adderess}
                </span>
              </div>
            </div>
            <br></br>
            <div className="text-left m-2">
              <label className={lableClass}> Image :</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <br></br>
            <div className="text-left text-lg m-2">
              <Link
                to="/rules"
                className="  select-all text-4xl  bg-blue-400 hover:bg-orange-200 rounded-2xl border-4"
              >
                Student Affidavit
              </Link>
            </div>
            <br></br>
            <p className="text-2xl ">are you agree this Affidavit?</p>
            <br></br>
            <div className="flex flex-row justify-center">
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton1"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  Yes
                </label>
              </div>

              <div className="flex items-center m-2">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton2"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  No
                </label>
              </div>
            </div>
            <div className={divClassRight}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-center text-2xl text-white font-bold h-[10%] w-[50%] p-4 border border-blue-300 rounded-md ml-32 mb-5 mr-3 mt-12 bg-green-600 hover:text-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="w-[20%] h-full bg-red-400"></div>
  </div>
);
const iValue = {
  name: "",
  father_name: "",
  mother_name: "",
  previous_academic_year: "",
  mark: "",
  previous_class: "",
  email: "",
  nid: "",
  adderess: "",
  guardian_number: "",
  birth: "",
  image: "",
};
const Oldstudentregi = () => (
  <div>
    <Formik
      initialValues={iValue}
      validate={validate}
      onSubmit={onSubmit}
      component={Form}
    ></Formik>
  </div>
);

export default Oldstudentregi;
