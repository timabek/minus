import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#1a083d',
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;