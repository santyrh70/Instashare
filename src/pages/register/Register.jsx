import './register.scss';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../../actions/actions';
import Logo from '../../components/logo/Logo';

const Register = () => {
  const dispatch = useDispatch();
  const errorCode = useSelector(store => store.fireBase.errorCode);
  const errorMssg = useSelector(store => store.fireBase.errorMssg);
   
  return (
    <div>
      <div className='main-register'>
      <Logo className='logo'/>
      <Formik
       initialValues={{ email: '', password: '', rePassword: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           dispatch(registerNewUser(values.email, values.password))
           setSubmitting(false);
         }, 400);
       }}
      >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className='register-form' onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             placeholder='email'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             className='email-input'
           />
           <input
             type="password"
             name="password"
             placeholder='password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             className='password-input'
           />
           <input
             type="password"
             name="rePassword"
             placeholder='repeat password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.rePassword}
             className='re-password-input'
           />
           {!!errorCode && <div className='register-error'>{errorCode}</div>}
           <button className='submit-button' type="submit" disabled={isSubmitting}>
             Registrarse
           </button>
         </form>
       )}
     </Formik>
      </div>
    </div>
  );
}

export default Register;