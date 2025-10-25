"use client";

import React, { useState } from "react";
import Container from "../../Container";
import Input from "./Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(
      `Name: ${formData.name}\nSurname: ${formData.surname}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="px-7 py-24">
      <Container className={"!max-w-[1048px]"}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full bg-sky px-20 py-8 rounded-tr-[80px] rounded-bl-[80px]"
        >
          <h4 className="text-2xl lg:text-4xl font-semibold text-center mb-5">
            Email göndər
          </h4>

          <div className="flex gap-3 w-full justify-between flex-wrap lg:flex-nowrap">
            <Input
              inp={true}
              name="name"
              placeholder="Name"
              value={formData.name}
              action={handleChange}
              error={errors.name}
            />
            <Input
              inp={true}
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              action={handleChange}
              error={errors.surname}
            />
          </div>

          <Input
            inp={true}
            name="email"
            placeholder="Email"
            value={formData.email}
            action={handleChange}
            error={errors.email}
          />

          <Input
            inp={false}
            name="message"
            placeholder="Message"
            value={formData.message}
            action={handleChange}
            error={errors.message}
          />

          <button
            style={{ boxShadow: "inset 0 -4px 6px rgba(0,0,0,0.3)" }}
            type="submit"
            className="text-base lg:font-medium lg:text-2xl mt-2 w-full bg-secondary text-white py-2.5 rounded-lg hover:bg-secondary/90 transition-all cursor-pointer"
          >
            Göndər
          </button>
        </form>
      </Container>
    </section>
  );
};

export default ContactForm;
