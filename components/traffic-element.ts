import styled from 'styled-components';

export const TrafficContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 50px;
  overflow-x: hidden;
`;

export const Intersection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 900px;
  background-color: white;
`;

export const Road = styled.div`
  position: absolute;
  background-color: black;
  border: 2px solid yellow;
`;

export const VerticalRoad = styled(Road)`
  width: 150px;
  height: 100%;
`;

export const TrafficLightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const HorizontalRoad = styled(Road)`
  width: 100%;
  height: 150px;
`;

export const TrafficLight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  padding: 10px;
  border-radius: 10px;
`;

export const Light = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px 5px;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#555'};
`;

export const PedestrianSignal = styled.div`
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;
