const isValidTimestamp = (timestamp) => {
    if (typeof timestamp !== "number") {
      console.log("El valor no es un número:", timestamp);
      return false;
    }
  
    return timestamp > 0 && !isNaN(new Date(timestamp).getTime());
  };
  
  // Ejemplo de uso
  const value = "1741983442523"; // String en lugar de número
  const numericValue = Number(value); // Convertir a número
  
  if (isValidTimestamp(numericValue)) {
    const date = new Date(numericValue); // Usar el número convertido
    const dateString = date.toLocaleString("es-ES");
    console.log({ date, dateString });
  } else {
    console.log("El valor no es un timestamp válido");
    console.log("timestamp:", value);
  }
  