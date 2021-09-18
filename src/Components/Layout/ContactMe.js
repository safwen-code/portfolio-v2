import React, { useState } from "react";

const ContactMe = (props) => {
  const [FromData, setFromData] = useState({
    //checking if the book prop is passed or not
    name: props.FromData ? props.FromData.name : "",
    email: props.FromData ? props.FromData.email : "",
    description: props.FromData ? props.FromData.description : "",
  });
  const [Error, setError] = useState("");
  const { name, email, description } = FromData;
  const onChangeHundler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        if (
          value === "" ||
          value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          setFromData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }

        break;

      default:
        setFromData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const hundelSubmit = (e) => {
    e.preventDefault();
    const values = [name, email, description];
    let errorMsg = "";
    const allFieldFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });
    if (allFieldFilled) {
      const formdata = {
        name,
        description,
        email,
        date: new Date(),
      };

      console.log("form data", formdata);
    } else {
      errorMsg = "please fill out all the field";
    }
    setError(errorMsg);
    setTimeout(() => setError(""), 5000);
  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?q=ben%20arous%20nassen%20&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Ben Arous Nassen. <br />
                tunisie, NY 10007
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed text-xs">
                safwendjebbi1234@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">26 705 692</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onSubmit={hundelSubmit}
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Name
            </label>
            <input
              value={name}
              onChange={onChangeHundler}
              type="text"
              id="name"
              name="name"
              className="w-full bg-blue-200 rounded border border-blue-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={onChangeHundler}
              type="email"
              id="email"
              name="email"
              className="w-full bg-blue-200 rounded border border-blue-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              value={description}
              onChange={onChangeHundler}
              id="message"
              name="description"
              className="w-full bg-blue-200 rounded border border-blue-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
