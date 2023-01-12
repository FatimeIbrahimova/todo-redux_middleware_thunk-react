const init={
    loading:false,
    data:[],
    error:null
}

export const fetchReducer = (state=init, action) => {
    switch (action.type) {
        case "GET_FETCH":
            return {...state,data:action.payload};

        default: return state;
    }
}