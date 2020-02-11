export const fetchUserFulfilled = payload => ({type: "FETCH_USER_FULFILLED", payload});

const getCoin = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_USER_FULFILLED":
            return {
                ...state,
                // `login` is the username
                data: action.payload
            };

        default:
            return state;
    }
};

export default getCoin;