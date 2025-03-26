import NO_IMAGE from "../utils";

export default function HrReducer(hrState, action) {
    const newHrState = {...hrState};
    switch (action.type) {
        case "INPUT_CHANGED":
            newHrState.employee[action.name] = action.value;
            break;
        case "HIRE_EMPLOYEE":
            alert(`Employee Hired: ${action.status}`);
            break;
        case "UPDATE_EMPLOYEE":
            alert(`Update Employee successful?: ${action.status}`);
            break;
        case "FIRE_EMPLOYEE":
            for (let field in newHrState.employee) {
                if (action.data.hasOwnProperty(field)) {
                    newHrState.employee[field] = action.data[field];
                }
            }
            newHrState.employees = hrState.employees.filter( emp => emp.identityNo !== action.data.identityNo);
            break;
        case "RETRIEVE_EMPLOYEES":
            newHrState.employees = action.data;
            break;
        case "FIND_EMPLOYEE":
            for (let field in newHrState.employee) {
                if (action.data.hasOwnProperty(field)) {
                    newHrState.employee[field] = action.data[field];
                }
            }
            if (!newHrState.employee.photo) {
                newHrState.employee.photo = NO_IMAGE;
            }
            break;
            case "COPY_ROW":
            for (let field in newHrState.employee) {
                if (action.data.hasOwnProperty(field)) {
                    newHrState.employee[field] = action.data[field];
                }
            }
            if (!newHrState.employee.photo) {
                newHrState.employee.photo = NO_IMAGE;
            }
            break;
        default:
            throw "Unknown action type";
    }
    return newHrState;
}