import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { ICreateBoxProps } from "./interfaces";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height: number, width: number, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

const INITIAL_DATA = {height: "100", width: "100", backgroundColor: ""};

function NewBoxForm({ createBox }: ICreateBoxProps) {
  const [formData, setFormData] = useState(INITIAL_DATA);

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) : void {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }
  console.log("handleChange= ", formData)

  // function handleNumericChange(evt: React.ChangeEvent<HTMLInputElement>) : void {
  //   const input = evt.target;
  //   setFormData(formData => ({
  //     ...formData,
  //     [input.name]: Number(input.value),
  //   }));
  // }
  // console.log("handleNumericChange= ", formData)

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const alteredFormData = {
      height: Number(formData.height),
      width: Number(formData.width),
      backgroundColor: formData.backgroundColor
    }
    createBox({ ...alteredFormData, id: uuid() });
    setFormData(INITIAL_DATA);
  }

  return (
      <div className="NewBoxForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newBox-height">Height</label>
            <input
                id="newBox-height"
                onChange={handleChange}
                name="height"
                value={formData.height}
                type="number"
            />
          </div>
          <div>
            <label htmlFor="newBox-width">Width</label>
            <input
                id="newBox-width"
                onChange={handleChange}
                name="width"
                value={formData.width}
                type="number"
            />
          </div>
          <div>
            <label htmlFor="newBox-backgroundColor">Background Color</label>
            <input
                id="newBox-backgroundColor"
                onChange={handleChange}
                name="backgroundColor"
                value={formData.backgroundColor}
            />
          </div>
          <button className="NewBoxForm-addBtn">Add a new box!</button>
        </form>
      </div>
  );
}

export default NewBoxForm;
