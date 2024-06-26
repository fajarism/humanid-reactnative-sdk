import { Action, WebLoginRequest } from './models.interface';
import { Dispatch } from 'react';
export declare const WEB_LOGIN_REQUEST = "WEB_LOGIN_REQUEST";
export declare const WEB_LOGIN_CALLBACK = "WEB_LOGIN_CALLBACK";
export declare const webLoginAction: {
    webLoginRequest: (dispatch: Dispatch<Action>, params: WebLoginRequest) => Promise<void>;
};
