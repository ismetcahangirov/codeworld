import React from "react";
import Container from "../../Container";
import ContactCard from "./ContactCard";

const details = [
  {
    name: "Telefon:",
    text: "+9123456798 +9123307588",
  },
  {
    name: "Email:",
    text: "mrsmith1739@gmail.com",
  },
  {
    name: "Ünvan:",
    text: "Smith st, 6654 29C",
  },
];

const ContactDetails = () => {
  return (
    <section id="contact" className="px-7">
      <Container
        className={
          " flex justify-center lg:justify-between gap-3.5 items-center flex-wrap"
        }
      >
        {details.map((detail) => (
          <ContactCard key={detail.name} {...detail} />
        ))}
      </Container>
    </section>
  );
};

export default ContactDetails;
