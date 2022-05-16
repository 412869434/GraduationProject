import ReactECharts from "echarts-for-react";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { id2name } from "../public/info";

function MyClassCharts(props) {
  const { data, rangeValue } = props;
  const [series, setSeries] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  const options = {
    xAxis: {
      type: "category",
      data: xAxis,
    },
    yAxis: {},
    series: { type: "bar", data: series },
    tooltip: {
      trigger: "axis",
    },
    title: {
      show: true,
      text: "藻类数量柱状图",
      left: "center",
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
      const tmp = Object.keys(obj).map((item) => obj[item]);
      const name = Object.keys(obj).map((item) => id2name[item]);
      setXAxis(name);
      setSeries(tmp);
    } else {
      setXAxis([]);
      setSeries([]);
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
