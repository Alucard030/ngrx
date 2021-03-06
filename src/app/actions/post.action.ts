import { Action } from '@ngrx/store';

export const EDIT_TEXT  = 'This is just a description';
export const UPVOTE     = '[Post] Upvote';
export const DOWNVOTE   = '[Post] Downvote';
export const RESET      = '[Post] Reset';


export class EditText {
  readonly type = EDIT_TEXT;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}


export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Upvote
  | Downvote
  | Reset
  | EditText;