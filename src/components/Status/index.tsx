import styled from "styled-components";

type Props = {
  statusNumber: number;
};

const statuses = ["new", "reading", "finished"];

export default function Status({ statusNumber }: Props) {
  const statusType = statuses[statusNumber];

  const statusColor: { [key: string]: string } = {
    new: "red",
    reading: "yellow",
    finished: "green",
  };

  const StatusEl = styled.div`
    background-color: ${statusColor[statusType]};
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 800;
    padding: 2px 10px;
    border-radius: 12px;
  `;

  return <StatusEl>{statusType}</StatusEl>;
}
