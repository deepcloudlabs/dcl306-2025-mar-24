import {useState} from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import Row from "./components/common/row";
import Display from "./components/game/display";

function Mastermind() {
    const [game, setGame] = useState({
        secret: 549,
        level: 3,
        moves: [],
        guess: 123,
        lives: 3,
        numberOfMoves: 0
    })
    const [constraints, setConstraints] = useState({
        counter: 60,
        maxNumberOfMoves:10
    })

    return (
    <Container>
        <Card>
            <CardHeader title={"Game Console"}></CardHeader>
            <CardBody>
                <Display label={"Game Level"}
                         size={5}
                         value={game.level}
                         color={"bg-success"}/>
                <Display label={"Lives"}
                         size={5}
                         value={game.lives}
                         color={"bg-warning"}/>
                <Display label={"Time Left"}
                         size={5}
                         value={constraints.counter}
                         color={"bg-danger"}/>
            </CardBody>
        </Card>
    </Container>
  );
}

export default Mastermind;
