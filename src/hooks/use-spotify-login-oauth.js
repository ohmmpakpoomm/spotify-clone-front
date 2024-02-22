import { useEffect } from "react";
import { getLocalCode, setLocalSpotifyToken } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

export const useSpotifyLoginOAuth = () => {
  const navigate = useNavigate();
  const codeForOAuth = getLocalCode();
  const clientId = "902b87520c3343e5a9c83e332e45784d";
  const redirect_uri = "http://localhost:5173";
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const generateRandomString = (length) => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };

  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  };

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  // Req for OAuth2.0 Token
  useEffect(() => {
    async function login() {
      const codeVerifier = generateRandomString(64);
      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);
      window.localStorage.setItem("code_verifier", codeVerifier);
      const params = {
        response_type: "code",
        client_id: clientId,
        scope,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        redirect_uri: redirect_uri,
      };

      authUrl.search = new URLSearchParams(params).toString();
      window.location.href = authUrl.toString();
    }
    if (!localStorage.getItem("code_verifier")) login();
  }, []);

  const getToken = async (code) => {
    // stored in the previous step
    let codeVerifier = localStorage.getItem("code_verifier");
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirect_uri,
        code_verifier: codeVerifier,
      }),
    };
    const url = "https://accounts.spotify.com/api/token";
    const body = await fetch(url, payload);
    const response = await body.json();
    await setLocalSpotifyToken(response.access_token);
    await navigate("/");
  };

  useEffect(() => {
    if (codeForOAuth) {
      getToken(codeForOAuth);
    }
  }, [codeForOAuth]);
  return;
};
