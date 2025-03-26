import Row from "../common/row";

export default function Display({size,label,color,value,children}) {
    return (
        <Row>
            { size === 3 && <h3>{label}: <span className={"badge ".concat(color)}>{value}</span></h3>}
            { size === 4 && <h4>{label}: <span className={"badge ".concat(color)}>{value}</span></h4>}
            { size === 5 && <h5>{label}: <span className={"badge ".concat(color)}>{value}</span></h5>}
            {children}
        </Row>
    );
}