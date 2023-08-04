
import { useRef } from "react";
import FormInput from "./FormInput";

function FormLayout(){
let titleRef = useRef();
let dateRef = useRef();
let priceRef = useRef();
let descriptionRef = useRef();
  let onSubmitHandler =(event) =>{ event.preventDefult();}
    return(
       <form className="row" onSubmit={onSubmitHandler}>

<FormInput title="title" type="text" inputClass="addTitle" ref={titleRef}/>
<FormInput title="Date" type="date" inputClass="addDate" ref={dateRef}/>
<FormInput title="Value" type="number" inputClass="addValue" ref={priceRef}/>
<FormInput title="Description" type="text" inputClass="addDescription" ref={descriptionRef}/>
 
   
  
  <div className="mb-3 col-md-12 text-right">
    <button type="submit" className="btn btn-primary addBtn">Add</button>
    </div>
  </form>);
}
export default FormLayout;