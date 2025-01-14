import React from "react";
import "./table.scss";
import { Table } from "antd";

export default function Tablee() {
  const columns = [
    {
      title: "#",
      key: "place",
      dataIndex: "place",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Pace",
      dataIndex: "pace",
      key: "pace",
    },
    {
      title: "Kick off date",
      dataIndex: "kick",
      key: "kick",
    },
    {
      title: "Intra link",
      key: "action",
      render: () => (
        <a className="table-link" href="/">
          link intra
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      pace: 32,
      level: "12.1",
      place: 1,
      kick: "12.10.2003",
    },
    {
      key: "1",
      name: "John Brown",
      pace: 32,
      level: "12.1",
      place: 1,
      kick: "12.12.2021",
    },
    {
      key: "1",
      name: "John Brown",
      pace: 32,
      level: "12.1",
      kick: "12.12.1023",
      place: 1,
    },
  ];
  return (
    <div className="table-holder">
      <Table className="custom-table" columns={columns} dataSource={data} />
    </div>
  );
}
