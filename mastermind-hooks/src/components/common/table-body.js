import React from "react";

export default function TableBody({values,fields}) {
    return (
        <tbody>
            {values.map((value, valueIndex) => (
                <tr key={valueIndex}>
                    {
                        fields.map((field, index) => (
                            <td key={index}>{value[field]}</td>
                        ))
                    }
                </tr>
            ))}
        </tbody>
    );
}