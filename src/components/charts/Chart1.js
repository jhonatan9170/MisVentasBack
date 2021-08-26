import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

const Chart1 = () => {
  const data = [
    { x: 'Mayo', y: 7 },
    { x: 'Junio', y: 6 },
    { x: 'Julio', y: 3 },
    { x: 'Agosto', y: 2 },
    { x: 'Setiembre', y:  3},
    { x: 'Octubre', y: 6 },
    { x: 'noviembre', y: 3 },
    { x: 'diciembre', y: 2 },
    { x: 'enero', y:  3},
    { x: 'febrero', y:  5},
    { x: 'marzo', y:  7},
  ];
  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={300} width={600} xType="ordinal"
          stackBy="y">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} color="#ff941A" />
      </XYPlot>
    </div>
  );
};

export default Chart1;
