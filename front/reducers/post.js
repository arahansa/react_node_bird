export const initialState = {
    mainPosts: [{
        User:{
            id:1,
            nickname:'아라한사',
        },
        content:'첫번째 게시글',
        img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        createdAt : '1',
    }],
    imagePaths: [],
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
        default:{
            return {
                ...state,
            }
        }
    }
};

export default reducer;




