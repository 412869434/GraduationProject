import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import info from "../public/info";

const columns = [
  {
    title: "类别ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "藻类门",
    dataIndex: "Phylum",
    key: "Phylum",
  },
  {
    title: "藻类属",
    dataIndex: "Genus",
    key: "Genus",
  },
  {
    title: "藻类种",
    dataIndex: "Species",
    key: "Species",
  },
  {
    title: "概率",
    key: "score",
    dataIndex: "score",
    render: (score) => {
      const color = Number(score) >= 0.8 ? "green" : "red";
      return (
        <>
          <Tag color={color} key={score}>
            {score}
          </Tag>
        </>
      );
    },
  },
];

function MyTable(props) {
  const { data } = props;
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tmp = data.map((item) => {
      const algae = info.find((i) => i.ID === item.label);
      const { ID, Phylum, Genus, Species } = algae;
      const key = ID + item.label + item.x;
      return {
        key: key,
        Phylum: Phylum,
        Genus: Genus,
        Species: Species,
        ID: item.label,
        score: item.score,
      };
    });
    setTableData(tmp);
  }, [data]);

  return (
    <>
      <Table columns={columns} dataSource={tableData} pagination={{ pageSize: 5 }} />
    </>
  );
}

export default MyTable;
