/**
 * IMPORTS
 */
import { IRequestTrack } from 'state/utils/trackrequest.d';


/**
 * User status types.
 */
export enum userStatus {
  AVAILABLE = 'available',
  BLOCKED = 'blocked',
  PENDING = 'pending'
}


/**
 * User state interface.
 */
export interface IUserState extends IRequestTrack {
  id: boolean
  email: string
  status: userStatus | null
  token?: string
  username: string
}


/**
 * User slice name.
 */
export const NAME = 'user';
