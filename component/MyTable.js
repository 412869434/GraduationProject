import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { info, idFilter, phylumFilter, genusFilter, speciesFilter } from "../public/info";

function MyTable(props) {
  const { data, rangeValue } = props;
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "类别ID",
      dataIndex: "ID",
      key: "ID",
      filters: idFilter,
      onFilter: (value, record) => record.ID.indexOf(value) === 0,
    },
    {
      title: "藻类门",
      dataIndex: "Phylum",
      key: "Phylum",
      filters: phylumFilter,
      onFilter: (value, record) => record.Phylum.indexOf(value) === 0,
    },
    {
      title: "藻类属",
      dataIndex: "Genus",
      key: "Genus",
      filters: genusFilter,
      onFilter: (value, record) => record.Genus.indexOf(value) === 0,
    },
    {
      title: "藻类种",
      dataIndex: "Species",
      key: "Species",
      filters: speciesFilter,
      onFilter: (value, record) => record.Species.indexOf(value) === 0,
    },
    {
      title: "概率",
      key: "score",
      dataIndex: "score",
      sorter: (a, b) => a.score - b.score,
      render: (score) => {
        const color = Number(score) >= rangeValue[0] / 100 ? "green" : "red";
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

  useEffect(() => {
    if (data.length) {
      const tmp = data.map((item) => {
        const algae = info.find((i) => i.ID === item.label);
        const { ID, Phylum, Genus, Species } = algae;
        const key = ID + item.label + item.x + item.y + Math.random() * 100;
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
    } else {
      setTableData([]);
    }
  }, [data]);

  return (
    <>
      <Table columns={columns} dataSource={tableData} pagination={{ pageSize: 5, showSizeChanger: false }} />
    </>
  );
}

export default MyTable;
