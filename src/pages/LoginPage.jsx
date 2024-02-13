import React from "react";
import { Link } from "react-router-dom";
import SpotifyWhiteLogo from "../assets/Spotify_Logo_RGB_White.png";
import LoginForm from "../features/auth/components/LoginForm";
import Container from "../features/auth/components/Container";

export default function LoginPage() {
  return (
    <>
      <Container>
        <h1 className="text-white font-bold text-5xl my-12">
          Log in to Spotify
        </h1>
        <LoginForm />
        <hr className="w-[70%] border border-gray012 m-8" />
        <div className="flex gap-2">
          <span className="text-gray05">Don&apos;t have an account?</span>
          <Link to="/register" className="text-white underline">
            Sign up for Spotify
          </Link>
        </div>
      </Container>
    </>
  );
}
