export default function HrReducer(hrState, action){
    const newHrState = {...hrState};
    switch(action.type){
        case "INPUT_CHANGED":
            newHrState.employee[action.name] = action.value;
            break;
        default:
            throw "Unknown action type";
    }
    return newHrState;
}