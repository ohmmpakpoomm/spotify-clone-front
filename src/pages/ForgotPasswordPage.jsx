import React from "react";
import Container from "../features/auth/components/Container";
import ChangePasswordForm from "../features/auth/components/ChangePasswordForm";

export default function ForgotPasswordPage() {
  return (
    <Container>
      <h1 className="text-white font-bold text-5xl my-12">Change password</h1>
      <ChangePasswordForm />
    </Container>
  );
}
