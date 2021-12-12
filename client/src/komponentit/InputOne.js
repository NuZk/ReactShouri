/* Basic Header html structure */

//import { useState } from 'react';
import { useForm } from "react-hook-form";

function InputOne({lisaaTiedotInput}) {
  //{/* future hook logic will go here */}

  const { register, handleSubmit } = useForm();
  // lisaaTiedotInput kommunikoi bodyn funktion kanssa
  const onSubmit = (data) => {lisaaTiedotInput(data)};
  
  // onSubmit kutsuu useFormi funktiota
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <input {...register("pelinumero")} placeholder="Pelinumero" />
      <input type="submit" />
    </form>
  );
}

export default InputOne;