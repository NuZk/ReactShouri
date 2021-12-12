/* Basic Header html structure */

import { useState } from 'react';
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
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default InputOne;