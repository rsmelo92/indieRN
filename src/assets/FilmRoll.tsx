import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';

export const FilmRoll = (props: SvgProps) => (
  <Svg
    testID="film-roll-svg"
    width={150}
    height={150}
    viewBox="0 0 600 600"
    {...props}>
    <Path
      fill="#fff"
      strokeMiterlimit={10}
      d="M517.65 471.019C557.231 425.044 581.25 365.287 581.25 300c0 -144.741 -117.759 -262.5 -262.5 -262.5v0.281h-41.156C134.813 39.656 18.75 157.219 18.75 300c0 144.563 117.656 262.219 262.219 262.219 0 0 14.813 1.875 37.781 0.281 65.231 0 124.931 -23.972 170.888 -63.488 21.984 38.494 64.584 63.488 112.65 63.488v-37.5c-38.156 0 -71.334 -21.712 -84.638 -53.981m-51.984 -0.825 -83.447 -114.75a83.906 83.906 0 0 0 20.878 -55.425 84.375 84.375 0 0 0 -0.384 -7.613l132.684 -52.997A224.297 224.297 0 0 1 543.75 300c0 67.941 -30.319 128.906 -78.084 170.194m56.55 -266.128 -131.166 52.697a84.445 84.445 0 0 0 -53.569 -38.953V75.844c81.741 6.778 151.2 57.375 184.734 128.222m-203.494 49.078c25.866 0 46.875 21.009 46.875 46.875 0 25.875 -21.009 46.875 -46.875 46.875 -25.875 0 -46.875 -21 -46.875 -46.875 0 -25.866 21 -46.875 46.875 -46.875m-18.759 -177.009v141.675a84.422 84.422 0 0 0 -53.616 39.009L110.025 216.216c31.097 -76.969 103.659 -132.881 189.938 -140.081M93.75 300c0 -16.491 1.838 -32.55 5.231 -48.047l135.75 40.519a84.375 84.375 0 0 0 -0.384 7.547c0 21.262 7.931 40.631 20.916 55.472L174.009 472.031C124.988 430.697 93.75 368.897 93.75 300m110.803 193.716 81 -116.119a83.906 83.906 0 0 0 33.178 6.797c11.784 0 23.006 -2.438 33.197 -6.806l83.456 114.769A223.711 223.711 0 0 1 318.75 525a223.43 223.43 0 0 1 -114.197 -31.284"
    />
  </Svg>
);
