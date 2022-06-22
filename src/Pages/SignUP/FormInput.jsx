import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        // onblur help check if we clicked on the input without any value
        // typed and the we go click on another input or a place different from this input
        onBlur={handleFocus}
        onFocus={() =>
          // this one will only work for confirm password bcos it's our last child
          // so as to make the focus true when we click on confirm pass and the click elsewhere
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        // focus let us know we focused or have click on this particular input
        // but Note: we need it to be a string .toString(convert it) and not the boolean value
        focused={focused.toString()}
        // what the onBlur and focused help us do here is we we click on a particular input and then go click somewhere else
        // the focused true let know the input was clicked on
        // input:invalid[focused="true"] {
        //   border: 1px solid red;
        // }
        //
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
