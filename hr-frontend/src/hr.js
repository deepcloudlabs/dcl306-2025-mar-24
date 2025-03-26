import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import InputText from "./components/common/input-text";
import {useDepartments, useEmployee, useHrDispatch} from "./provider/hr-provider";
import Row from "./components/common/row";
import Column from "./components/common/column";
import SelectBox from "./components/common/select-box";

function Hr() {
    const employee = useEmployee();
    const hrDispatch = useHrDispatch();
    const departments = useDepartments();
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
            </CardBody>
        </Card>
    );
}

export default Hr;
