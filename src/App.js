import React from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'





const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',

    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, 'Must be 15 characters or less').required('enter a firstName'),
      lastName: yup.string().max(15, 'Must be 15 characters or less').required('enter a lastName'),
      email: yup.string().email('Invail email').required('enter a email')


    })
  });


 
  return (<>

<div className="container  mt-5 text-danger radios bg-body-tertiary ">
{formik.touched.firstName && formik.errors.firstName ?
          (<div>{formik.errors.firstName}</div>) : null}

{formik.touched.lastName && formik.errors.lastName ?
          (<div >{formik.errors.lastName}</div>) : null}

{formik.touched.email && formik.errors.email ?
        (<div>{formik.errors.email}</div>) : null}
</div>


    <form className="container mt-5 " onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">firstName</label>
        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp"
        placeholder="example hamed"
          {...formik.getFieldProps('firstName')} />
       




        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">lastName</label>
          <input type="" className="form-control" id="lastName"
          placeholder="example mohamadi"
            {...formik.getFieldProps('lastName')} />
        </div>
      




        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input type="email" className="form-control" id="email"
          placeholder="example hamedd09013236346@gamil.com"
            {...formik.getFieldProps('email')} />
        </div>
      </div>
   





      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
















  </>)
}

export default App