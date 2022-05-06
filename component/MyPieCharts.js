import ReactECharts from "echarts-for-react";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { id2name, info } from "../public/info";

function MyPieCharts(props) {
  const { data, rangeValue } = props;
  const [chartsData, setChartsData] = useState([{ value: 1, name: "default" }]);
  const [classData, setClassData] = useState([{ value: 1, name: "default" }]);
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
        type: "pie",
        radius: "50%",
        data: classData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          normal: {
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)",
            },
            labelLine: { show: true },
          },
        },
        center: ["25%", "60%"],
      },
      {
        type: "pie",
        radius: "50%",
        center: ["75%", "60%"],
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
              formatter: "{b} : {c} ({d}%)",
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
      const cobj = {};
      for (const item of data) {
        const { score, label, width, height } = item;
        if (score >= rangeValue[0] / 100 && score <= rangeValue[1] / 100) {
          if (!obj[label]) obj[label] = 0;
          const w = parseFloat(width) / 100,
            h = parseFloat(height) / 100;
          obj[label] += w * h;
          const phylum = info.find((i) => i.ID === label).Phylum;
          if (!cobj[phylum]) cobj[phylum] = 0;
          cobj[phylum] += w * h;
        }
      }
      const tmp = Object.keys(obj).map((item) => {
        return {
          value: parseFloat(obj[item].toFixed(3)),
          name: id2name[item],
        };
      });
      const ctmp = Object.keys(cobj).map((item) => {
        return {
          value: parseFloat(cobj[item].toFixed(3)),
          name: item,
        };
      });
      setChartsData(tmp);
      setClassData(ctmp);
    } else {
      setChartsData([{ value: 1, name: "default" }]);
      setClassData([{ value: 1, name: "default" }]);
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
