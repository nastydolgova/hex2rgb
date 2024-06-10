import ConverterColor from "./components/ConverterColor/ConverterColor";
import {useState} from "react";
import Color from "./models/Color"

export default function App() {
  const [color, setColor] = useState('#ffffff');
  const [colorLegend, setColorLegend] = useState('#ffffff');

  const converterColor = (color: Color | null) => {
    if (color === null) {
      setColor('#DD3227');
      setColorLegend('#691B16')
    } else {
      const {r, g, b} = color;
      setColor(`rgb(${r}, ${g}, ${b})`);
      setColorLegend(`rgb(${r + 20}, ${g + 20}, ${b + 20})`)
    }
  }

  const legendText = color === '#DD3227' ? 'Ошибка!' : color;
  const legendStyle = color === '#DD3227' ? {'color': '#ffffff'} : {'filter': 'invert(0.5)', 'color': color};

  return (
    <div className="wrap" style={{'backgroundColor': color}}>
      <div className="container">
        <ConverterColor converterColor={converterColor}/>
        <div className="legend" style={{'backgroundColor': colorLegend, 'filter': 'invert(0.1)'}}>
          <span style={legendStyle}>{legendText}</span>
        </div>
      </div>
    </div>
  );
}