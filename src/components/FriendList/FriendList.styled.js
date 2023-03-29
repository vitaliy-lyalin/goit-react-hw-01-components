import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  width: 300px;
  height: 80px;
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: rgb(128, 128, 128);
`;
