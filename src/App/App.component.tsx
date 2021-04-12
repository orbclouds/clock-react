import React from 'react';
import type { FC } from 'react';

import Orb from '@app/Orb';

import Hands from './Hands';
import Numbers from './Numbers';
import OuterRim from './OuterRim';

import useHooks from './App.hooks';

const App: FC = () => {
  const { time } = useHooks();

  return (
    <>
      <Orb />
      <main>
        <OuterRim>
          <Numbers />
          <Hands time={time} />
        </OuterRim>
      </main>
    </>
  );
};

export default App;
