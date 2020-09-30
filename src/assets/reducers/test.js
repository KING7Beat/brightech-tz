const initial = {
    searchValue: '',
    searchArr: [],
    users: [],
    drivers: [],
    currentUser: '',
    logged: false
};


export default function (state=initial, action) {
    switch (action.type)
    {
        case 'SEARCH_DATA_VALUE':
            return {
                ...state,
                searchValue: action.payload
            };
        case 'SEARCH_DATA_FIND':
            return {
                ...state,
                searchArr: action.payload
            };
        case 'ADD_DATA_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'ADD_DATA_DRIVERS':
            return {
                ...state,
                drivers: action.payload
            };
        case 'USER_LOG':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGGED':
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }
}