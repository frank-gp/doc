Cloudflare Turnstile

### Cloudflare’s smart CAPTCHA alternative.

[Cloudflare Docs](https://developers.cloudflare.com/turnstile/) |
[Cloudflare Price](https://www.cloudflare.com/es-es/application-services/products/turnstile) |
[Testing secret keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing) |
[Community resources](https://developers.cloudflare.com/turnstile/community-resources) |
[React Turnstile Demo](https://react-turnstile.vercel.app) |
[React Turnstile Docs](https://docs.page/marsidev/react-turnstile) |

### Install React Turnstile

```sh
npm i @marsidev/react-turnstile

```

### React | Turnstile Docs | Custom props

```ts
import { Turnstile } from "@marsidev/react-turnstile";

export default function Widget() {
  return (
    <Turnstile
      as="aside"
      siteKey="3x00000000000000000000FF"
      className="fixed bottom-4 right-4"
      options={{
        action: "submit-form",
        theme: "light",
        size: "compact",
        language: "es",
      }}
      scriptOptions={{
        appendTo: "body",
      }}
    />
  );
}
```

### HTML | Turnstile Docs

```html
<div
  class="cf-turnstile"
  data-sitekey="3x00000000000000000000FF"
  data-callback="javascriptCallback"
  data-theme="light"
  data-size="normal"
  data-language="es"
></div>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```
