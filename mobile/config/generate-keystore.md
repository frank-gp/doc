# Verify and Export the Certificate

```sh
# Verify the contents of the keystore
keytool -list -v -keystore my_keystore_pkcs12.jks
keytool -list -v -keystore my_keystore_pkcs12.jks -storepass my_key_store_password

# Export the PEM certificate from your .jks
keytool -export -rfc -alias my_key_alias -file upload_certificate.pem -keystore my_keystore_pkcs12.jks
```

# PKCS12 (PFX) `.jks` or `.p12`

The modern format.
Android Gradle supports it, **but the store and key passwords must be the same**.

```sh
# PKCS12
keytool -genkeypair \
  -v \
  -keystore my_keystore_pkcs12.jks \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -alias my_key_alias \
  -keypass my_key_store_password \
  -dname "CN=Frank GP, OU=Dev, O=FrankGP, L=Lima, ST=Lima, C=PE"
```

---

# JKS (Java KeyStore)

The legacy Java format.
Expo can generate this type and **allows different storePassword and keyPassword**.

```sh
keytool -genkeypair \
  -v \
  -keystore my_keystore_legacy.jks \
  -storetype JKS \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -storepass my_store_password \
  -alias my_key_alias \
  -keypass my_key_password \
  -dname "CN=Frank GP, OU=Dev, O=FrankGP, L=Lima, ST=Lima, C=PE"
```

---
