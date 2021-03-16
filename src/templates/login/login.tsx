/**
 * IMPORTS
 */
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/button';
import { Field } from 'components/form/field';
import { Input } from 'components/form/input';
import { Toast } from 'components/toast';
import { actions } from 'features/user/';
import { userIsLoading, userIsLogged } from 'features/user/selectors';
import { useNotify } from 'infra/notify';
import { loginErrors } from './errors';
import { schema } from './schema';
import {
  $Actions,
  $Form,
  $Login,
  $Title,
  $Welcome
} from './styles';


/**
 * I am a login template.
 */
const Login = (): React.ReactElement => {
  // get dispatch
  const dispatch = useDispatch();

  // use form
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  });

  // check if user is loading and logged
  const isLoading = useSelector(userIsLoading);
  const isLogged = useSelector(userIsLogged);

  // get error notifications
  const [error, resetError] = useNotify(loginErrors);
  const hasError = Object.keys(error).length > 0;

  // handle form submit
  const onSubmit = (data): void => {
    // dispatch action to login user
    dispatch(actions.login(data));
  };

  return (
    <$Login>
      <$Welcome>Bem-vindo</$Welcome>
      <$Title>Entre no seu perfil</$Title>

      <$Form onSubmit={handleSubmit(onSubmit)}>
        {hasError && <Toast {...error} onClose={resetError} />}

        <Field error={errors.username?.message} label="Usuário">
          <Input name="username" innerRef={register} />
        </Field>

        <Field error={errors.password?.message} label="Senha">
          <Input name="password" innerRef={register} type="password" />
        </Field>

        <$Actions>
          <Link href="/join">Criar minha conta</Link>
          <Button disabled={isLoading || isLogged}>
            {isLoading || isLogged ? 'Entrando...' : 'Entrar'}
          </Button>
        </$Actions>
      </$Form>
    </$Login>
  );
};


/**
 * EXPORTS
 */
export { Login };
