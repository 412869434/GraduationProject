import ReactECharts from "echarts-for-react";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { id2name } from "../public/info";

function MyPieCharts(props) {
  const { data, rangeValue } = props;
  const [chartsData, setChartsData] = useState([{ value: 1, name: "default" }]);
  const options = {
    title: {
      text: "藻类面积占比图",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: chartsData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          normal: {
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)", //带当前图例名 + 百分比
              //   formatter: "{d}%", //只要百分比
            },
            labelLine: { show: true },
          },
        },
      },
    ],
  };

  useEffect(() => {
    if (data.length) {
      //   console.log(data);
      const obj = {};
      for (const item of data) {
        const { score, label, width, height } = item;
        if (score >= rangeValue[0] / 100 && score <= rangeValue[1] / 100) {
          if (!obj[label]) obj[label] = 0;
          const w = parseFloat(width) / 100,
            h = parseFloat(height) / 100;
          obj[label] += w * h;
        }
      }
      const tmp = Object.keys(obj).map((item) => {
        return {
          value: parseFloat(obj[item].toFixed(3)),
          name: id2name[item],
        };
      });
      setChartsData(tmp);
    } else {
      setChartsData([{ value: 1, name: "default" }]);
    }
  }, [data, rangeValue]);

  return (
    <>
      <Row align="center" justify="center">
        <Col>
          <ReactECharts option={options} style={{ height: "600px", width: "1400px" }} />
        </Col>
      </Row>
    </>
  );
}

export default MyPieCharts;
