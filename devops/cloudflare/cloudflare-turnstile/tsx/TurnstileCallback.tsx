import React, { useState } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export default function TurnstileCallback() {
  const [tokenTurnstile, setTokenTurnstile] = useState<string | null>(null);
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

    if (!tokenTurnstile) {
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
          token: tokenTurnstile,
        }),
      });

      const data = await response.json();
      ref.current?.reset();
      if (!response.ok) {
        alert(data.message || "Error en el login");
        return;
      }

      alert(data.message);
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
    }
  }

  return (
    <form>
      <input type="text" name="email" placeholder="username" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />
      <Turnstile ref={ref} siteKey="3x00000000000000000000FF" onSuccess={setTokenTurnstile} />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
