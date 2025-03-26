import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import InputText from "./components/common/input-text";
import {useDepartments, useEmployee, useHrDispatch} from "./provider/hr-provider";
import Row from "./components/common/row";
import Column from "./components/common/column";
import SelectBox from "./components/common/select-box";
import CheckBox from "./components/common/check-box";
import Photo from "./components/common/photo";
import Button from "./components/common/button";

function Hr() {
    const employee = useEmployee();
    const hrDispatch = useHrDispatch();
    const departments = useDepartments();

    const hireEmployee = () => {
        fetch("http://localhost:4001/employees",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(res => res.json())
        .then(res => hrDispatch({type: "HIRE_EMPLOYEE", status: res.status}));
    };

    const updateEmployee = () => {
        fetch("http://localhost:4001/employees",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(res => res.json())
            .then(res => hrDispatch({type: "UPDATE_EMPLOYEE", status: res.nModified > 0}));
    };

    const findEmployee = () => {
        fetch(`http://localhost:4001/employees/${employee.identityNo}`,{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
        .then(employee => hrDispatch({type: "FIND_EMPLOYEE", data: employee}));
    }

    const fireEmployee = () => {
        fetch(`http://localhost:4001/employees/${employee.identityNo}`,{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
        .then(firedEmployee => hrDispatch({type: "FIRE_EMPLOYEE", data: firedEmployee}));
    }

    return (
        <Card>
            <CardHeader title={"Employee"}/>
            <CardBody>
                <Row>
                    <Column>
                        <InputText id={"identityNo"}
                                   label={"Identity No"}
                                   value={employee.identityNo}
                                   placeholderText={"Enter a valid identity no"}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "identityNo",
                                       value: event.target.value
                                   })}></InputText>
                        <Button label={"Find Employee"}
                                color={"bg-success"}
                                click={findEmployee}></Button>
                        <Button label={"Fire Employee"}
                                color={"bg-danger"}
                                click={fireEmployee}></Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputText id={"fullName"}
                                   label={"Full name"}
                                   value={employee.fullname}
                                   placeholderText={"Enter a valid full name"}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "fullname",
                                       value: event.target.value
                                   })}></InputText>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputText id={"salary"}
                                   label={"Salary"}
                                   value={employee.salary}
                                   placeholderText={"Enter a salary"}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "salary",
                                       value: event.target.value
                                   })}></InputText>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputText id={"iban"}
                                   label={"IBAN"}
                                   value={employee.iban}
                                   placeholderText={"Enter a valid IBAN"}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "iban",
                                       value: event.target.value
                                   })}></InputText>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputText id={"birthYear"}
                                   label={"Birth Year"}
                                   value={employee.birthYear}
                                   placeholderText={"Enter a valid birth year"}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "birthYear",
                                       value: event.target.value
                                   })}></InputText>
                    </Column>
                </Row>
                <p/>
                <Row>
                    <Column>
                        <SelectBox id={"department"}
                                   label={"Department"}
                                   value={employee.department}
                                   options={departments}
                                   handleChange={(event) => hrDispatch({
                                       type: "INPUT_CHANGED",
                                       name: "department",
                                       value: event.target.value
                                   })}></SelectBox>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <CheckBox id={"fulltime"}
                                  label={"Full-time"}
                                  value={employee.fulltime}
                                  handleChange={(event) => hrDispatch({
                                      type: "INPUT_CHANGED",
                                      name: "fulltime",
                                      value: event.target.checked
                                  })}></CheckBox>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Photo id={"photo"}
                               label={"Photo"}
                               value={employee.photo}
                               handleChange={(data) => hrDispatch({
                                   type: "INPUT_CHANGED",
                                   name: "photo",
                                   value: data
                               })}
                        ></Photo>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button label={"Hire Employee"}
                                color={"bg-success"}
                                click={hireEmployee}></Button>
                        <Button label={"Update Employee"}
                                color={"bg-warning"}
                                click={updateEmployee}></Button>
                    </Column>
                    <Column>
                    </Column>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Hr;
