import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const UserDescription = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  color: rgb(80, 80, 80);
`;

export const Tag = styled.p`
  color: rgb(128, 128, 128);
`;
export const Location = styled.p`
  color: rgb(128, 128, 128);
`;

export const Avatar = styled.img`
  width: 120px;
  border-radius: 50%;
  border: 1px solid rgb(224, 224, 224);
  background-color: rgb(250, 250, 250);
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid rgb(224, 224, 224);
  background-color: rgb(240, 240, 240);
`;

export const Label = styled.span`
  color: rgb(128, 128, 128);
`;
export const Quantity = styled.span`
  color: rgb(80, 80, 80);
  font-weight: 700;
`;
