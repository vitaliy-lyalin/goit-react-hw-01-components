import styled from 'styled-components';

export const Section = styled.div`
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
  margin: 20px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: rgb(80, 80, 80);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`;

export const Label = styled.span`
  color: rgb(250, 250, 250);
`;
export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: rgb(250, 250, 250);
`;
