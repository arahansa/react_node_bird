const dummyUser = {
    nickname: '아라한사',
    Post:[],
    Followings:[],
    Followers:[],
    signUpData : {}
};

export const initialState = {
    isLoggedIn: false,
    user: null,
};


export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const SIGN_UP = "SIGN_UP";


export const LOG_OUT = "LOG_OUT";

export const loginAction = {
    type:LOG_IN,
    data:{
        nickname: "아라한사",
    },
};

export const logoutAction = {
    type:LOG_OUT,
};

export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP :{
            return {
                ...state,
                signUpData : action.data,
            }
        }
        default:{
            return {
                ...state,
            }
        }
    }
};

export default reducer;
