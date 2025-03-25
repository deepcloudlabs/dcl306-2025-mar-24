import CardHeader from "./components/common/card-header";
import Container from "./components/common/container";
import Card from "./components/common/card";
import CardBody from "./components/common/card-body";
import {Link} from "react-router-dom";

export default function PlayerWins(){
    return(
        <Container>
            <Card>
                <CardHeader title={"Game Console"}></CardHeader>
                <CardBody>
                    <Link to={"/"}>Would you like to play again?</Link>
                </CardBody>
            </Card>
        </Container>
    );
}