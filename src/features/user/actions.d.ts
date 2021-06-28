/**
 * IMPORTS
 */
import { IUserState, NAME } from './index.d';


/**
 * Login request interface.
 */
export interface ILoginRequest {
  password: string
  username: string
}


/**
 * Login response interface.
 */
export type ILoginResponse = IUserState


/**
 * User action types.
 */
export const types = {
  LOGIN: `${NAME}/login`
};
