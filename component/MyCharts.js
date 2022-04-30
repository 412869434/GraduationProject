import ReactECharts from "echarts-for-react";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";

function MyCharts(props) {
  const { data } = props;
  const [series, setSeries] = useState([]);
  const options = {
    xAxis: {
      data: ["总计", "1-0.9", "0.9-0.8", "0.8-0.7", "0.7-0.6", "0.6-0.5", "0.5-0"],
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
  };

  useEffect(() => {
    if (data.length) {
      console.log(data);
      const obj = {};
      for (const item of data) {
        const { score, label } = item;
        if (!obj[label]) obj[label] = new Array(7).fill(0);
        let key = Math.ceil((1 - Number(score)) * 10);
        if (key === 0) key = 1;
        else if (key >= 6) key = 6;
        obj[label][key] += 1;
        obj[label][0] += 1;
      }
      const tmp = Object.keys(obj).map((item) => {
        return {
          type: "bar",
          name: item,
          data: obj[item],
        };
      });
      setSeries(tmp);
    }
  }, [data]);

  return (
    <>
      <Row align="center" justify="center">
        <Col>
          <ReactECharts option={options} style={{ height: "300px", width: "800px", marginTop: "-100px" }} />
        </Col>
      </Row>
    </>
  );
}

export default MyCharts;
