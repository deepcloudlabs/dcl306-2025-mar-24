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
import {useNavigate} from "react-router";

const initialGameState = {
    secret: createSecret(3),
    level: 3,
    moves: [],
    guess: 123,
    lives: 3,
    numberOfMoves: 0
};

// 25min -> 14:30
function Mastermind() {
    const [game, setGame] = useState(initialGameState);
    const [counter, setCounter] = useState(60);
    const [constraints, setConstraints] = useState({
        maxCounter: 60,
        maxNumberOfMoves: 10
    })
    const navigate = useNavigate();
    const countDown = () => {
        if (counter <= 0) {
            let newGame = {...game};
            let newConstraints = {...constraints};
            newGame.lives--;
            if (newGame.lives === 0){
                navigate("/loses");
                return;
            }
            initializeGame(newGame, newConstraints);
            setGame(newGame);
            setConstraints(newConstraints);
            setCounter(newConstraints.maxCounter);
        } else {
            setCounter(counter - 1);
        }
    }

    useEffect(() => {
        const state = localStorage.getItem("game");
        if (state) {
            const parsedState = JSON.parse(state);
            setGame(parsedState.game);
            setConstraints(parsedState.constraints);
        }
    }, []);
    useEffect(() => {
        const timer = setInterval(countDown, 1_000);
        return () => clearInterval(timer);
    }, [counter]);
    const handleGuess = (event) => {
        setGame({...game, guess: event.target.value});
    }
    const initializeGame = (game, constraints) => {
        game.secret = createSecret(game.level);
        game.moves = [];
        constraints.counter = constraints.maxCounter;
        game.numberOfMoves = 0;
        setCounter(60);
    }
    const evaluateMove = (guess, secret) => {
        let perfectMatch = 0;
        let partialMatch = 0;
        let secretAsString = secret.toString();
        let guessAsString = guess.toString();
        for (let i = 0; i < secretAsString.length; i++) {
            let s = secretAsString.charAt(i);
            for (let j = 0; j < guessAsString.length; j++) {
                let g = guessAsString.charAt(j);
                if (s === g) {
                    if (i === j) perfectMatch++;
                    else partialMatch++;
                }
            }
        }
        return new Move(guess, perfectMatch, partialMatch);
    }
    const play = () => {
        let newGame = {...game};
        let newContraints = {...constraints};
        const {secret, guess} = game;
        newGame.numberOfMoves++;
        if (Number(secret) === Number(guess)) {
            newGame.level++;
            if (newGame.level > 10) {
                navigate("/wins");
                return;
            }
            initializeGame(newGame, newContraints);
        } else {
            const move = evaluateMove(guess, secret);
            newGame.moves.push(move);
        }
        if (newGame.numberOfMoves >= newContraints.maxNumberOfMoves) {
            newGame.lives--;
            if (newGame.lives === 0) {
                navigate("/loses");
                return;
            } else {
                initializeGame(newGame, newContraints);
            }
        }
        localStorage.setItem("game", JSON.stringify({game: newGame, constraints: newContraints}));
        setGame(newGame);
        setConstraints(newContraints);
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
                             value={counter}
                             color={"bg-danger"}/>
                    <ProgressBar value={counter}
                                 max={constraints.maxCounter}/>
                    <InputNumber value={game.guess}
                                 label={"Guess"}
                                 id={"guess"}
                                 placeholderText={"Enter your guess"}
                                 min={123}
                                 max={9876543210}
                                 handleChange={handleGuess}/>
                    <Button click={play} label="Play" color={"bg-success"}/>
                </CardBody>
            </Card>
            <Card>
                <CardHeader title={"Moves"}/>
                <CardBody>
                    <Table>
                        <TableHead columns={["Guess", "Message"]}/>
                        <TableBody values={game.moves}
                                   fields={["guess", "message"]}/>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Mastermind;
