import React from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import CardHeader from "./components/common/card-header";
import CardBody from "./components/common/card-body";
import Row from "./components/common/row";
import InputNumber from "./components/common/input-number";
import Column from "./components/common/column";
import Button from "./components/common/button";
import Table from "./components/common/table";
import TableHead from "./components/common/table-head";
import TableBody from "./components/common/table-body";

// Component -> Tag: View
// 1. Class-Based Component -> Stateful Component
// 2. Function-Based Component -> Stateless Component
// 3.                             Stateful Component -> with Hooks
class LotteryApp extends React.PureComponent {
    constructor(context, props) {
        super(context, props);
        this.state = {
            column: 5,
            lotteryNumbers: []
        }
    }

    // 1. functional programming 2. immutable
    handleColumnChange = (event) => {
        const newColumn = Number(event.target.value);
        this.setState({ // asynchronous?
            column: newColumn
        }, () => {
            console.log(this.state);
        });
    }
    drawNumber = (min = 1, max = 60, size = 6) => {
        let randomNumbers = []
        while (randomNumbers.length < size) {
            let candidate = Math.floor(Math.random() * (max - min + 1)) + min;
            if (randomNumbers.includes(candidate)) continue;
            randomNumbers.push(candidate);
        }
        randomNumbers.sort((a, b) => a - b);
        return randomNumbers;
    }

    drawLotteryNumbers = () => {
        let lotteryNumbers = [...this.state.lotteryNumbers];
        for (let i = 0; i < this.state.column; i++) {
            lotteryNumbers.push(this.drawNumber(1, 60, 6));
        }
        this.setState({lotteryNumbers});
    }

    resetLotteryNumbers = () => {
        this.setState({lotteryNumbers: []});
    }
    removeRow = (rowIndex) => {
        //let lotteryNumbers = this.state.lotteryNumbers.filter((u,i) => i !== rowIndex);
        //let lotteryNumbers = [...this.state.lotteryNumbers];
        //lotteryNumbers.splice(rowIndex, 1);
        this.setState({lotteryNumbers: this.state.lotteryNumbers.filter((u, i) => i !== rowIndex)});
    }
    // [View] Model <- two-way binding -> View
    // state -> programmatically changed (js) -> View
    //  /\                                         |
    //   |_____________Event_______________________|
    render = () => {
        return ( // View -> ReactDOM -> reconciliation(heuristic alg.) -- update --> Real DOM
            <>
                <p/>
                <Container>
                    <Card>
                        <CardHeader title={"Lottery Application"}></CardHeader>
                        <CardBody>
                            <Row>
                                <Column className="col-6">
                                    <InputNumber label={"Column"}
                                                 id={"column"}
                                                 min={1}
                                                 max={10}
                                                 placeholderText={"Enter how many columns you want"}
                                                 value={this.state.column}
                                                 handleChange={this.handleColumnChange}
                                    />
                                    <Button color="btn-success" click={this.drawLotteryNumbers} label={"Draw"}></Button>
                                    <Button color="btn-warning" click={this.resetLotteryNumbers}
                                            label={"Reset"}></Button>
                                </Column>
                            </Row>
                            <Row>
                                <Table>
                                    <TableHead>
                                        {
                                            Array.from(Array(6).keys()).map(i =>
                                                <th key={i}>Column #{i + 1}</th>
                                            )
                                        }
                                        <th>Operations</th>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        this.state.lotteryNumbers.map((numbers, rowIndex) =>
                                            <tr key={rowIndex}>
                                                {
                                                    numbers.map(number =>
                                                        <td key={number}>{number}</td>
                                                    )
                                                }
                                                <td>
                                                    <Button color="btn-danger"
                                                            click={() => this.removeRow(rowIndex)}
                                                            label={"Remove"} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </TableBody>
                                </Table>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }
}

export default LotteryApp;
