const initialState = {
    email: '',
    username: ''
}

const UserReducer = (state = initialState, action) => {

    switch(action.type){
        case("SET_EMAIL"):
            return {...state, email: action.payload.email};
        case("SET_USERNAME"):
            return {...state, username: action.type.username};
        default:
            return state;
    }

}

export default UserReducer;