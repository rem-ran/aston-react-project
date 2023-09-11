// импорты
import { useForm } from 'react-hook-form';
import { inputConfig, loginTxt, inputLabelTxt } from '../../utils/constants';

// импорт компонент
import LoginInput from '../LoginInput/LoginInput';
import CommonSignPage from '../CommonSignPage/CommonSignPage';

//импорт стилей
import './Login.css';
import '../CommonSignPage/CommonSignPage.css';

const { heading, btnTxt, linkRoute, questionTxt, linkTxt } = loginTxt;

// компонет авторизации //////////////////////////////////////////////////////
const Login = ({ isLoading }) => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  // метод обработки сабмита формы
  function onSubmit(inputData) {
    console.log(inputData);
  }

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <section className="login">
      <CommonSignPage
        isLoading={isLoading}
        heading={heading}
        btnTxt={btnTxt}
        linkRoute={linkRoute}
        questionTxt={questionTxt}
        linkTxt={linkTxt}
        handleSubmit={handleSubmit(onSubmit)}
        buttonDisabled={
          (errors?.email || errors?.password || isLoading) &&
          'sign__submit-btn_disabled'
        }
        inputs={
          <>
            <LoginInput
              labelTxt={inputLabelTxt.email}
              register={register('email', inputConfig.email)}
              error={errors?.email && errors.email.message}
              type={'email'}
              errorBool={errors?.email}
            ></LoginInput>

            <LoginInput
              labelTxt={inputLabelTxt.password}
              register={register('password', inputConfig.password)}
              error={errors?.password && errors.password.message}
              type={'password'}
              errorBool={errors?.password}
            ></LoginInput>
          </>
        }
      ></CommonSignPage>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Login;
