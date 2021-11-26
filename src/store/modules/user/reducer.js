const initialState = {name: ""};

const userReducer = (state= initialState, action) => {
    console.log(action)
    switch(action.type){
        case "CHANGE_NAME":
            const {name} = action;
    return {name: name};
    default:
        return state;
    }
}

export default userReducer;
