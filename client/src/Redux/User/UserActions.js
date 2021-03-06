import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  FACEBOOK_SIGN_IN_START,
  GITHUB_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
  CLEAR_AUTH_ERROR
} from './UserTypes';

export const EmailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const GoogleSignInStart = () => ({ type: GOOGLE_SIGN_IN_START });
export const FacebookSignInStart = () => ({ type: FACEBOOK_SIGN_IN_START });
export const GithubSignInStart = () => ({ type: GITHUB_SIGN_IN_START });

export const CheckUserSession = () => ({ type: CHECK_USER_SESSION });

export const SignInSuccess = user => ({ type: SIGN_IN_SUCCESS, payload: user });
export const SignInFail = error => ({ type: SIGN_IN_ERROR, payload: error });

export const SingUpStart = user => ({ type: SIGN_UP_START, payload: user });
export const SingUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
export const SingUpFail = error => ({ type: SIGN_UP_ERROR, payload: error });

export const SignOutStart = () => ({ type: SIGN_OUT_START });
export const SignOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });
export const SignOutFail = error => ({ type: SIGN_OUT_ERROR, paymoad: error });

export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });
