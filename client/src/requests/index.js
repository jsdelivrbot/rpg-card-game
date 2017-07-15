/**
 * Here you add all the apis urls defenition
 */

import request from '../base/api/requests';
import { config } from '../config';

export default (baseURL = config.ROOT_SERVRE_URL) => {

    return {

        login: (data) => {
            return request.call({
                method: 'post',
                baseURL: baseURL,
                url: 'users/login',
                data: data
            });
        },

        createUser: (data) => {
            return request.call({
                method: 'post',
                baseURL: baseURL,
                url: '/users',
                data: data
            });
        }

    }

};