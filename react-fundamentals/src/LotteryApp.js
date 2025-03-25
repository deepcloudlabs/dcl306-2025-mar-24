import React from "react";

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
        let lotteryNumbers = [];
        for (let i = 0; i < this.state.column; i++) {
            lotteryNumbers.push(this.drawNumber(1, 60, 6));
        }
        this.setState({lotteryNumbers});
    }
    // [View] Model <- two-way binding -> View
    // state -> programmatically changed (js) -> View
    //  /\                                         |
    //   |_____________Event_______________________|
    render = () => {
        return ( // View -> ReactDOM -> reconciliation(heuristic alg.) -- update --> Real DOM
            <>
                <p/>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Lottery Application</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor={"column"} className={"form-label"}>Column:</label>
                                    <input className={"form-control"} type={"number"}
                                           name={"column"}
                                           id={"column"}
                                           min={1}
                                           max={10}
                                           placeholder={"Enter how many columns you want"}
                                           value={this.state.column}
                                           onChange={this.handleColumnChange}
                                    />
                                    <button className="btn btn-success" onClick={this.drawLotteryNumbers}>Draw</button>
                                </div>
                            </div>
                            <div className="row">
                                <table className="table table-striped table-bordered table-hover table-responsive">
                                    <thead>
                                    <tr>
                                        <th>First Column</th>
                                        <th>Second Column</th>
                                        <th>Third Column</th>
                                        <th>Fourth Column</th>
                                        <th>Fifth Column</th>
                                        <th>Sixth Column</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.lotteryNumbers.map((numbers, rowIndex) =>
                                                <tr key={rowIndex}>
                                                    {
                                                        numbers.map(number =>
                                                                <td key={number}>{number}</td>

                                                        )
                                                    }
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LotteryApp;
