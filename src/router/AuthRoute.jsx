import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function LoginProdtector({ Component }) {
  const [{ token }] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return <div>{Component}</div>;
}

export function ProtectedRoute({ Component }) {
  const [{ token }] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return <div>{Component}</div>;
}
