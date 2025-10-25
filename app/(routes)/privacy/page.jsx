import DataCollection from "@/app/_components/Privacy/DataCollection";
import DataProtection from "@/app/_components/Privacy/DataProtection";
import Hero from "@/app/_components/Privacy/Hero";
import PrivacyPrinciples from "@/app/_components/Privacy/PrivacyPrinciples";
import UserRights from "@/app/_components/Privacy/UserRights";
import ForContact from "@/app/_components/Privacy/ForContact";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-dark/20">
      <Hero />
      <PrivacyPrinciples />
      <DataCollection />
      <DataProtection />
      <UserRights />
      <ForContact />
    </div>
  );
};

export default PrivacyPage;
