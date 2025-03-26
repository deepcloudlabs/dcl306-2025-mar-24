import Container from "./components/common/container";
import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";

function Hr() {
    return (
        <>
            <p/>
            <Container>
                <Card>
                    <CardHeader title={"Employee"}/>
                    <CardBody></CardBody>
                </Card>
                <p/>
                <Card>
                    <CardHeader title={"Employees"}/>
                    <CardBody></CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Hr;
