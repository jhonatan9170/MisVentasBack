import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  RadialChart,
} from "react-vis";

const Chart2 = () => {
  const data = [
    { angle:1,label:'Smartphone',color:'blue'},
    { angle:5,label:'otro'},
    { angle:2,label:'Cereal'},
  ];
  return (
    <div style={{ marginTop: "15px" }}>
      <RadialChart
      labelsAboveChildren={true}
      data={data}
      width={300}
      height={300} />
    </div>
  );
};

export default Chart2;
