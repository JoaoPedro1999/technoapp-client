// import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

// import { SignInSagaAction, SignUpSagaAction, PersistSagaAction } from './types';

// import history from '../../../services/history';
// import api from '../../../services/api';

// import { signInSuccess, signFailure } from './actions';

export function* signIn() {
  // try {
  //   const { email, password } = payload;
  //   const response = yield call(api.post, 'sessions', {
  //     email,
  //     password,
  //   });
  //   const { token, user } = response.data;
  //   api.defaults.headers.Authorization = `Bearer ${token}`;
  //   yield put(signInSuccess(token, user));
  //   history.push('/dashboard');
  // } catch (err) {
  //   toast.error('Falha na autenticação, verifique seus dados');
  //   yield put(signFailure());
  // }
}
