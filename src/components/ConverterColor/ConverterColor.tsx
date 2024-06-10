import Color from "../../models/Color"

function hexToRgb(color: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

interface ConverterColorProps {
    converterColor: (color: Color | null) => void
}

export default function ConverterColor({converterColor} : ConverterColorProps) {
    const onChange = (value: string) => {
        if (value.length === 7) converterColor(hexToRgb(value));
    }
    return (
        <input maxLength="7" onChange={event => onChange(event.target.value)} placeholder="#121212"/>
    )
}