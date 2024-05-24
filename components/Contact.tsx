"use client";

import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import ButtonMailto from "./MailLink";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export default function Contact() {
  const myRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      name: null,
      email: null,
      message: null,
    });

    if (inputs.name.length < 3) {
      setErrors({
        ...errors,
        name: "Name must be at least 3 characters long",
      });
      return;
    }

    if (inputs.email.length < 11) {
      setErrors({
        ...errors,
        email: "Enter a valid email",
      });
      return;
    }

    if (inputs.message.length < 5) {
      setErrors({
        ...errors,
        message: "Message must be at least 5 characters long",
      });
      return;
    }

    setShowModal(true);
    setInputs({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  return (
    <>
      <div
        id="contact"
        ref={myRef}
        className="flex flex-col items-center w-6/12 max-md:w-full mx-auto mt-[200px] gap-4 mb-20"
      >
        <p
          className={`text-violet-500 text-center text-lg ${
            inViewport && leaveCount === 0 && "animate-fadeUp1"
          }`}
        >
          04. What&apos;s Next?
        </p>
        <h3
          className={`text-gray-200 text-6xl font-bold max-md:text-5xl ${
            inViewport && leaveCount === 0 && "animate-fadeUp2"
          }`}
        >
          Get In Touch
        </h3>
        <p
          className={`text-gray-300 text-center max-md:text-sm ${
            inViewport && leaveCount === 0 && "animate-fadeUp3"
          }`}
        >
          I’m currently looking for any new opportunities, so get in touch if
          you have something for me, Thanks.
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={onChange}
            className="w-full outline-none rounded-md placeholder:text-slate-600 p-3 mt-7"
          />
          {errors.name && (
            <label htmlFor="name" className="text-red-500 text-xs pl-2">
              {errors.name}
            </label>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={inputs.email}
            onChange={onChange}
            className="w-full outline-none rounded-md placeholder:text-slate-600 p-3 mt-7"
          />
          {errors.email && (
            <label htmlFor="email" className="text-red-500 text-xs pl-2">
              {errors.email}
            </label>
          )}
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={inputs.message}
            onChange={onChange}
            className="w-full outline-none rounded-md placeholder:text-slate-600 p-3 mt-7"
          ></textarea>
          {errors.message && (
            <label htmlFor="message" className="text-red-500 text-xs pl-2">
              {errors.message}
            </label>
          )}
          <button
            type="submit"
            className="w-full py-3 mt-7 disabled:brightness-50 disabled:cursor-not-allowed font-medium border-[1.5px] rounded-md border-violet-500 text-violet-500"
          >
            Send
          </button>
        </form>
      </div>
      {/* ///////////////// Success Modal  /////////////////// */}
      <div className={`${showModal ? "block" : "hidden"}`}>
        <div
          onClick={() => setShowModal(false)}
          className="fixed w-screen h-screen inset-0 backdrop-blur-xl z-[50]"
        ></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-[400px] bg-darkGrey z-[100] rounded-xl p-3 border-box"
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-5 rounded-md">
            <HiOutlineBadgeCheck className="text-violet-500 text-[100px]" />
            <p className="text-2xl font-bold text-slate-200">
              Thanks for getting in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
