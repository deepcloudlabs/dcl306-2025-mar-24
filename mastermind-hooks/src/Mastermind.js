import {useEffect, useState} from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import Row from "./components/common/row";
import Display from "./components/game/display";
import ProgressBar from "./components/common/progress-bar";

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
        maxCounter: 60,
        maxNumberOfMoves:10
    })
    const countDown = () => {
            let newConstraints = {...constraints};
            constraints.counter--;
            setConstraints(newConstraints);
    }

    useEffect(() => {
        const timer = setInterval(countDown, 1_000);
        return () => clearInterval(timer);
    }, []);

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
                <ProgressBar value={constraints.counter}
                             max={constraints.maxCounter}/>
            </CardBody>
        </Card>
    </Container>
  );
}

export default Mastermind;
