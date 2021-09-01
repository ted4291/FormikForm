import React from "react";
import { FormikContext, useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
     {
      emailField:'',
      pswField:'',
      completenessErrorVisible:0,
      emailErrorVisible:0
      
    },
    onSubmit: fields => {
      formik.values.emailErrorVisible=0
      formik.values.completenessErrorVisible=0
      if(fields.emailField=='' || fields.pswField==''){
        fields.completenessErrorVisible=1}
      else if(fields.emailField.match("[.]")==null || fields.emailField.match("@")==null){
        fields.emailErrorVisible=1}
      else {alert(JSON.stringify("Login Successful"), null, 2)}
    },
  }
  )
return(
  <form onSubmit={formik.handleSubmit}>
    Username
  <input
  id='emailField'
  type='text'
  onChange={formik.handleChange}
  value={formik.values.emailField}
  >
    
  </input>
  <div id='emailError' style={{ display: (formik.values.emailErrorVisible ? 'block' : 'none') }} >Username should be an email</div>
    Password
  <input
  id='pswField'
  onChange={formik.handleChange}
  value={formik.values.pswField}>
  </input>
  <div id='pswError' style={{ display: (formik.values.completenessErrorVisible ? 'block' : 'none') }} >Field Required</div>
  <button id="submitBtn" type="submit">
    Submit
  </button>
  </form>
)
}

export default App;
