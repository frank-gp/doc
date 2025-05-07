import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import React, { useState } from "react";

export default function TurnstileHTMLinput() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Record<string, string>>({
    email: "test@demo.com",
    password: "QWER_123456",
  });
  const ref = React.useRef<TurnstileInstance | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Completa todos los campos");
      return;
    }

    if (!formRef.current) return;
    const formDataObj = new FormData(formRef.current);
    const token = formDataObj.get("cf-turnstile-response");
    console.log({ token });

    if (!token) {
      alert("Completa el captcha primero");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          token,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Error en el login");
        return;
      }

      alert(data.message);
      ref.current?.reset();
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <form ref={formRef}>
      <input type="text" name="email" placeholder="username" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />
      <Turnstile
        ref={ref}
        options={{ refreshExpired: "manual" }}
        siteKey="3x00000000000000000000FF"
        onExpire={() => ref.current?.reset()}
      />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
