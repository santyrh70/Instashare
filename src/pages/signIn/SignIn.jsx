import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/logo/Logo';
import { logIn } from '../../actions/actions';
import './signIn.scss'
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { links } from '../../constants/links';
import { texts } from '../../constants/texts';

const SignIn = () => {

  const dispatch = useDispatch();
  const errorCode = useSelector(store => store.fireBase.errorCode);
  const errorMssg = useSelector(store => store.fireBase.errorMssg);
  const navigate = useNavigate();
  const location = useLocation();
  const userStatus = useSelector(store => store.fireBase.userStatus);


  return (
    <div>
      <div className='main-login'>
        <Link to={links.HOME}><Logo className='logo' /></Link>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(logIn(values.email, values.password))
            setSubmitting(false);
            navigate('/')
            /* if (location.state?.from) {
             navigate('/')
            }else{
             navigate('/');
            } */
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
          }) => (
            <form className='login-form' onSubmit={handleSubmit}>
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
              {!!errorCode && <div className='register-error'>{errorCode}</div>}
              <button className='submit-button' type="submit" disabled={isSubmitting}>
                Login
              </button>
            </form>
          )}
        </Formik>
        <Link to={links.REGISTER}>{texts.REGISTER}</Link>
      </div>
    </div>
  )
}

export default SignIn;
