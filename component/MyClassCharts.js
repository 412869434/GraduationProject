import ReactECharts from "echarts-for-react";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";

function MyClassCharts(props) {
  const { data, rangeValue } = props;
  const [series, setSeries] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  const options = {
    xAxis: {
      data: xAxis,
    },
    yAxis: {},
    series: series,
    tooltip: {
      trigger: "axis",
    },
    title: {
      show: true,
      text: "藻类数量柱状图",
    },
    notMerge: true,
  };

  useEffect(() => {
    if (data.length) {
      const obj = {};
      for (const item of data) {
        const { score, label } = item;
        if (score >= rangeValue[0] / 100 && score <= rangeValue[1] / 100) {
          if (!obj[label]) obj[label] = 0;
          obj[label] += 1;
        }
      }
      //   console.log(obj);
      const tmp = Object.keys(obj).map((item) => obj[item]);
      setXAxis(Object.keys(obj));
      setSeries({
        type: "bar",
        data: tmp,
      });
    } else {
      setSeries({ type: "bar", name: "", data: [] });
    }
  }, [data, rangeValue]);

  return (
    <>
      <Row align="center" justify="center">
        <Col>
          <ReactECharts option={options} style={{ height: "400px", width: "1400px", marginTop: "-100px" }} />
        </Col>
      </Row>
    </>
  );
}

export default MyClassCharts;
