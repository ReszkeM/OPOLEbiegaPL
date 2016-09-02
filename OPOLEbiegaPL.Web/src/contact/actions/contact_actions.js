import * as ActionTypes from '../../shared/constants/action_types';
import * as requestTypes from '../../shared/constants/request_types';

export function submit(entry) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/Email/SendEmail',
            method: requestTypes.POST
        },
        type: ActionTypes.SUBMIT_CONTACT_FORM,
        entry
    };
}