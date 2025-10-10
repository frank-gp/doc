```json
{
  "android": {
    "keystore": {
      "keystorePath": "_credentials/frankgp/dev/keystore.jks",
      "keystorePassword": "my_key_store_password",
      "keyAlias": "my_key_alias",
      "keyPassword": "my_key_password"
    }
  }
}
```

```sh
# Generar un par de claves
keytool -genkeypair \
  -v \
  -keystore my_keystore.jks \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -alias my_key_alias \
  -keypass MY_KEY_PASSWORD \
  -dname "CN=Frank GP, OU=Dev, O=FrankGP, L=Lima, ST=Lima, C=PE"

# Verificar el contenido del keystore
keytool -list -v -keystore my_keystore.jks
keytool -list -v -keystore my_keystore.jks -storepass my_key_store_password

# Cómo generar el .pem desde tu .jks
keytool -export -rfc -alias my_key_alias -file upload_certificate.pem -keystore my_keystore.jks

```
