import * as ActionTypes from '../constants/action_types';

export function submit(entry) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/Email/SendEmail',
            method: 'POST'
        },
        type: ActionTypes.SUBMIT_CONTACT_FORM,
        entry
    };
}