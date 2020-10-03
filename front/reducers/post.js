export const initialState = {
    mainPosts: [],
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: "Hello",
        UserId: 1,
        User:{
            nickname:"아라한사",
        },
    },
};

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        case ADD_DUMMY:{
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
    }
};

export default reducer;




