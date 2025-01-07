import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value, // Aggiorna il valore del campo corrispondente
    });
  };

  return {
    values, // Lo stato corrente del modulo
    handleChange, // Gestore per aggiornare i campi
  };
}
