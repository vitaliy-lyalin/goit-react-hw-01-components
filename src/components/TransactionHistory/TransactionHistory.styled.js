import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 768px;
  text-align: center;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;
export const Head = styled.thead`
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(250, 250, 250);
`;

export const HeadRow = styled.tr`
  background-color: rgb(128, 128, 128);
`;

export const HeadCell = styled.th`
  padding: 10px 0;
  color: rgb(250, 250, 250);
`;

export const Body = styled.tbody`
  font-size: 16px;
  color: rgb(128, 128, 128);
`;

export const BodyRow = styled.tr`
  :nth-child(odd) {
    background: rgb(250, 250, 250);
  }
  :nth-child(even) {
    background: rgb(240, 240, 240);
  }
`;
export const BodyCell = styled.td`
  padding: 10px 0;
  border: 1px solid rgb(224, 224, 224);
`;
