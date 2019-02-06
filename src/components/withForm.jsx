import React from 'react';
import { Formik } from 'formik';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const withForm = (WrappedComponent, functionProps) => {
  console.log(WrappedComponent)
  return (
    props => { console.log(props) ;return (<Formik 
      initialValues={functionProps.initialValues}
      validationSchema={null}
      onSubmit={(values, actions) => {
        console.log(encode(JSON.stringify(values)));
        /* fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': [functionProps.formName],
          }),
        })
          .then(() => {
            alert('Your message was sent!');
            actions.setSubmitting(false);
            // navigate('/');
          })
          .catch(() => {
            actions.setSubmitting(false);
            return error => alert(error);
          }); */
      }}
      render={props => <WrappedComponent {...props} />}
    />)}
  )
}

export default withForm;