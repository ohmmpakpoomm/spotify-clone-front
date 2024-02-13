import React from "react";
import Container from "../features/auth/components/Container";
import RegisterForm from "../features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <Container>
      <h1 className="text-white font-bold text-5xl my-12">Register</h1>
      <RegisterForm />
    </Container>
  );
}
