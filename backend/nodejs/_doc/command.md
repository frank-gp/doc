```sh

# Muestra una lista de paquetes que pueden ser actualizados
npm outdated

# Actualización de Paquetes Automáticamente
npm update
npm update --force

# Actualización Forzada (a la Última Versión)
npm install  axios@latest dotenv@latest 

# Solucionar Vulnerabilidades: para intentar corregirlas automáticamente.
npm audit fix

# Si persisten vulnerabilidades críticas:
npm audit fix --force
