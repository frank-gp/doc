# Mostrar SHA-1 de la clave

```sh
# keytool
keytool --version

keytool -list -v -keystore android/app/debug.keystore -keypass android
# 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

keytool -list -v -keystore my_keystore.jks -storepass my_key_store_password
# 8D:4A:3C:B3:02:C2:1C:29:0A:D0:18:A3:DB:16:5F:30:DD:EA:F7:AD

keytool -list -v \
    -keystore my_keystore.jks \
    -keypass my_key_password \
    -alias my_key_alias \
    -storepass my_key_store_password

# mostrar el contenido del keystore
./gradlew signingReport

# eas
eas credentials

```

```
| Parámetro                   | Significado                            | Ejemplo                                |
| --------------------------- | -------------------------------------- | -------------------------------------- |
| `-keystore my_keystore.jks` | Nombre del archivo que se creará       | `my_keystore.jks`                      |
| `-keyalg RSA`               | Algoritmo de clave                     | `RSA`                                  |
| `-keysize 2048`             | Tamaño de clave (seguro y recomendado) | `2048` bits                            |
| `-validity 10000`           | Días de validez (~27 años)             | `10000`                                |
| `-alias my_key_alias`       | Alias de la clave                      | lo usas luego en tu `credentials.json` |
| `-keypass MY_KEY_PASSWORD`  | Contraseña específica para la clave    | puede ser distinta o igual al keystore |
| `-dname "..."`              | Datos de identidad del certificado     | correcto                               |
```
