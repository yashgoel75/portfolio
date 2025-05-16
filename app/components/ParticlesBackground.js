'use client';

import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import config from '../../public/particlesjs-config.json';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
  <div className="particles-wrapper">
    <Particles id="tsparticles" init={particlesInit} options={config} />
  </div>
);

};

export default ParticlesBackground;
