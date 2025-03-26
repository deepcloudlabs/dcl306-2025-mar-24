import Container from "./common/container";
import CardHeader from "./common/card-header";
import Card from "./common/card";
import CardBody from "./common/card-body";
import Column from "./common/column";
import Row from "./common/row";
import SelectBox from "./common/select-box";
import {useState} from "react";
import Button from "./common/button";

function App() {
    const [windowSize, setWindowSize] = useState(25);
    const [symbol, setSymbol] = useState("BTCUSDT");
    const [connected, setConnected] = useState(false);
    const connect = () => {
        setConnected(true);
    }
    const disconnect = () => {
        setConnected(false);
    }
    return (
        <Container>
            <Card>
                <CardHeader title={"Market"}></CardHeader>
                <CardBody>
                    <Row>
                        <Column>
                            <SelectBox label={"Window Size"}
                                       options={[25,50,100,250]}
                                       id={"window-size"}
                                       value={windowSize}
                                       handleChange={(event) => setWindowSize(Number(event.target.value))}></SelectBox>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <SelectBox label={"Market"}
                                       options={["BTCUSDT","ETHBTC","LTCBTC"]}
                                       id={"market"}
                                       value={symbol}
                                       handleChange={(event) => setSymbol(event.target.value)}></SelectBox>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            {connected && <Button color={"bg-danger"} click={disconnect} label={"Disconnect"}></Button>}
                            {!connected && <Button color={"bg-success"} click={connect} label={"Connect"}></Button>}
                        </Column>
                    </Row>
                </CardBody>
            </Card>

        </Container>
    );
}

export default App;
