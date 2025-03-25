import {useEffect, useState} from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import Display from "./components/game/display";
import ProgressBar from "./components/common/progress-bar";
import InputNumber from "./components/common/input-number";
import Button from "./components/common/button";
import {createSecret} from "./utils/game-utils";
import Move from "./model/move";
import Table from "./components/common/table";
import TableHead from "./components/common/table-head";
import TableBody from "./components/common/table-body";
// 25min -> 14:30
function Mastermind() {
    const [game, setGame] = useState({
        secret: createSecret(3),
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
    const handleGuess = (event) => {
        setGame({...game, guess: event.target.value});
    }
    const initializeGame = (game) => {
        // TODO
    }
    const evaluateMove = (guess, secret) => {
        let perfectMatch = 0;
        let partialMatch = 0;
        let secretAsString = secret.toString();
        let guessAsString = guess.toString();
        for (let i=0;i<secretAsString.length;i++) {
            let s = secretAsString.charAt(i);
            for (let j=0;j<guessAsString.length;j++) {
                let g = guessAsString.charAt(j);
                if (s === g) {
                    if (i === j) perfectMatch++;
                    else partialMatch++;
                }
            }
        }
        return new Move(guess,perfectMatch,partialMatch);
    }
    const play = () => {
        let newGame = {...game};
        const {secret,guess} = game;
        if (Number(secret) === Number(guess)){
            newGame.level++;
            initializeGame(newGame);
        } else {
            const move = evaluateMove(guess,secret);
            newGame.moves.push(move);
        }
        setGame(newGame);
    }
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
                <InputNumber value={game.guess}
                             label={"Guess"}
                             id={"guess"}
                             placeholderText={"Enter your guess"}
                             min={123}
                             max={9876543210}
                             handleChange={handleGuess} />
                <Button click={play} label="Play" color={"bg-success"}/>
            </CardBody>
        </Card>
        <Card>
            <CardHeader title={"Moves"} />
            <CardBody>
                <Table>
                    <TableHead columns={["Guess","Message"]} />
                    <TableBody values={game.moves}
                               fields={["guess","message"]}/>
                </Table>
            </CardBody>
        </Card>
    </Container>
  );
}

export default Mastermind;
