import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import Button from "./components/common/button";
import {useEmployees, useHrDispatch} from "./provider/hr-provider";
import Table from "./components/common/table";
import TableHead from "./components/common/table-head";
import TableBody from "./components/common/table-body";

function HrEmployees() {
    let employees = useEmployees();
    const hrDispatch = useHrDispatch();

    const fireEmployee = (identityNo) => {
        fetch(`http://localhost:4001/employees/${identityNo}`,{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(firedEmployee => hrDispatch({type: "FIRE_EMPLOYEE", data: firedEmployee}));
    }

    const retrieveEmployees = () => {
        fetch(`http://localhost:4001/employees`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(employees => hrDispatch({type: "RETRIEVE_EMPLOYEES", data: employees}));
    };
    return (
        <Card>
            <CardHeader title={"Employees"}>
                <Button color={"bg-primary"}
                        click={retrieveEmployees}
                        label={"Retrieve Employees"}></Button>
            </CardHeader>
            <CardBody>
                <Table>
                    <TableHead
                        columns={["Photo","Identity No", "Full Name", "Salary", "IBAN", "Birth Year", "Fulltime?", "Department","Operations"]}/>
                    <tbody>
                    {
                        employees.map((employee) =>
                            <tr key={employee.identityNo}
                                onClick={() => hrDispatch({type: "COPY_ROW", data: employee})}>
                                <td><img className={"img-thumbnail"}
                                         style={{width: "64px",height: "64px"}}
                                         src={employee.photo}
                                         alt={""}></img></td>
                                <td>{employee.identityNo}</td>
                                <td>{employee.fullname}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.iban}</td>
                                <td>{employee.birthYear}</td>
                                <td>{employee.fulltime ? 'FULL-TIME' : 'PART-TIME'}</td>
                                <td>{employee.department}</td>
                                <td><Button color={"bg-danger"}
                                            click={() => fireEmployee(employee.identityNo)}
                                            label={"Fire Employee"}></Button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default HrEmployees;
