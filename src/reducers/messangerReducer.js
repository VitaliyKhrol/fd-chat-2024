import CONSTANTS from '../constants';

const {LOAD, ERRROR, ADD} = CONSTANTS.CHAT_MESSAGES;


function reducer(state, action) {
    switch (action.type) {
        case LOAD: {
            const { comments } = action.data
            const newState = {
                ...state,
                messages: comments
            }
            return newState;
        }
        case ERRROR: {
            const { error } = action
            return {
                ...state,
                error
            }
        }
        case ADD: {
            const { message: { body, user } } = action;
            const newArrayMessage = [...state.messages,{
                body,
                user,
                id: (state.messages.length+1)
            }]
            const newState = {
                ...state,
                messages: newArrayMessage 
            }
            return newState;
        }

        default: {
            return state
        }
    }
}

export default reducer