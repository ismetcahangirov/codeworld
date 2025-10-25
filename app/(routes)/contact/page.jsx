import ContactDetails from "@/app/_components/Contact/ContactDetails.jsx";
import ContactForm from "@/app/_components/Contact/ContactForm";
import Hero from "@/app/_components/Contact/Hero";
import SocialMedia from "@/app/_components/Contact/SocialMedia";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Hero />
      <ContactDetails />
      <ContactForm />
      <SocialMedia />
    </>
  );
};

export default ContactPage;
