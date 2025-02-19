'use client';
import React, { useEffect, useState } from 'react';
import {
  Button,
  HorizontalRoad,
  Intersection,
  Light,
  PedestrianSignal,
  TrafficContainer,
  TrafficLight,
  TrafficLightContainer,
  VerticalRoad,
} from '@/components/traffic-element';
import Link from 'next/link';

export default function TrafficIntersection() {
  //   const [streetA, setStreetA] = useState(true);

  //   const toggleLights = () => {
  //     setStreetA(!streetA);
  //   };

  const [state, setState] = useState('greenA');
  const [isRuning, setIsRuning] = useState(false);

  useEffect(() => {
    if (!isRuning) return;
    let timer: ReturnType<typeof setTimeout>;

    if (state === 'greenA') {
      timer = setTimeout(() => setState('yellow'), 10000);
    } else if (state === 'yellow') {
      timer = setTimeout(() => {
        setState((prev) => (prev === 'yellow' ? 'greenB' : 'greenA'));
      }, 5000);
    } else if (state === 'greenB') {
      timer = setTimeout(() => setState('yellow'), 10000);
    }

    return () => clearTimeout(timer);
  }, [state, isRuning]);

  const start = () => {
    setIsRuning(true);
  };

  const reset = () => {
    setIsRuning(false);
    setState('greenA');
  };

  return (
    <TrafficContainer>
      <Link href={'/dashboard'}>
        <Button>Go to Dashboard</Button>
      </Link>

      {/* <div className='  overflow-x-hidden'></div> */}
      <Intersection>
        {/* Vertical Road */}
        <VerticalRoad
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
        >
          <TrafficLightContainer>
            <TrafficLight>
              <Light color={state === 'greenA' ? 'red' : '#555'} />
              <Light color={state === 'yellow' ? 'orange' : '#555'} />
              <Light color={state === 'greenB' ? 'green' : '#555'} />
            </TrafficLight>

            <TrafficLight>
              <Light color={state === 'greenA' ? 'red' : '#555'} />
              <Light color={state === 'yellow' ? 'orange' : '#555'} />
              <Light color={state === 'greenB' ? 'green' : '#555'} />
            </TrafficLight>
          </TrafficLightContainer>
        </VerticalRoad>

        {/* Horizontal Road */}
        <HorizontalRoad
          style={{ top: '50%', left: 0, transform: 'translateY(-50%)' }}
        >
          <TrafficLightContainer
            style={{
              flexDirection: 'row',
              padding: '0px 100px',
            }}
          >
            <TrafficLight>
              <Light color={state === 'greenB' ? 'red' : '#555'} />
              <Light color={state === 'yellow' ? 'orange' : '#555'} />
              <Light color={state === 'greenA' ? 'green' : '#555'} />
            </TrafficLight>

            <TrafficLight>
              <Light color={state === 'greenB' ? 'red' : '#555'} />
              <Light color={state === 'yellow' ? 'orange' : '#555'} />
              <Light color={state === 'greenA' ? 'green' : '#555'} />
            </TrafficLight>
          </TrafficLightContainer>
        </HorizontalRoad>

        {/* Pedestrian Signals */}
        <PedestrianSignal
          style={{ position: 'absolute', top: '50%', left: '20%' }}
        >
          {state === 'greenA' ? '🚶‍♂️' : '✋'}
        </PedestrianSignal>
        <PedestrianSignal
          style={{ position: 'absolute', top: '50%', right: '20%' }}
        >
          {state === 'greenA' ? '🚶‍♂️' : '✋'}
        </PedestrianSignal>

        {/* Control Buttons */}
        <Button
          onClick={start}
          style={{
            position: 'absolute',
            top: '45%',
            transform: 'translateY(-50%)',
          }}
        >
          Start
        </Button>
        <Button
          onClick={reset}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          Reset
        </Button>
      </Intersection>
    </TrafficContainer>
  );
}
