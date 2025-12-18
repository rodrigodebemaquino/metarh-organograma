
import React, { useState } from 'react';
import { AreaType, OrgArea, Committee } from './types';
import { MACRO_AREAS, STRATEGIC_AREAS, COMMITTEES, COLORS } from './constants';

const Logo = ({ color = "#fff" }: { color?: string }) => (
  <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1304.54 394.27" className="h-14 w-auto">
    <g id="Camada_1-2" data-name="Camada 1">
      <g>
        <path fill={color} d="M1020.65,271.61c-1.34-.7-4.2-1.4-7.15-1.4-6.3,0-12.39,3.64-12.39,10.78,0,3.85,2.17,6.37,7.77,8.47,2.03.77,2.73,1.96,2.73,3.36,0,3.22-2.87,5.25-6.79,5.25-3.43,0-5.88-.7-8.12-2.1v6.02c2.1.98,4.34,1.47,7.49,1.47,8.54,0,13.86-5.11,13.86-11.06,0-4.27-2.1-6.79-8.12-9.03-1.89-.7-2.73-1.68-2.73-3.29,0-2.66,2.66-4.76,5.95-4.76,2.8,0,4.97.42,6.37,1.19l1.12-4.9ZM984.93,283.79c0,7.63-6.23,14.07-12.39,14.07-4.41,0-7.14-2.59-7.14-7.98,0-7.56,6.16-14.07,12.39-14.07,4.34,0,7.14,2.66,7.14,7.98M991.37,283.23c0-8.19-5.39-13.02-12.95-13.02-10.43,0-19.53,9.03-19.53,20.3,0,8.19,5.39,12.95,12.95,12.95,10.43,0,19.53-8.96,19.53-20.23M950.96,278.82c0-5.18-4.48-8.61-8.96-8.61-6.16,0-9.38,2.73-12.18,6.79l-.14-.07.7-5.95h-5.25l-5.6,31.71h6.37l1.96-11.13c2.17-12.32,8.12-16.1,12.95-16.1,2.52,0,3.71,1.82,3.71,3.85,0,.35,0,.63-.07.98l-3.92,22.4h6.37l3.92-22.26c.07-.56.14-1.12.14-1.61M906.98,276.09l-1.61,8.82c-1.54,8.26-7.21,13.3-11.34,13.3-3.01,0-4.97-1.75-4.97-5.6,0-9.52,7.63-16.66,15.47-16.66,1.05,0,1.96.07,2.45.14M914.19,271.33c-2.03-.35-5.18-.63-9.1-.63-10.78,0-22.4,8.19-22.4,22.33,0,6.79,4.9,10.43,10.01,10.43,4.34,0,8.61-1.68,11.27-6.79l.14.07-.7,5.95h5.25l5.53-31.36ZM875.05,278.75c0-5.11-4.41-8.54-8.82-8.54-5.95,0-9.94,3.36-12.32,6.86l-.14-.07v-.63c0-3.85-4.13-6.16-7.56-6.16-5.88,0-8.54,2.73-11.34,6.79l-.14-.07.7-5.95h-5.25l-5.6,31.71h6.37l1.96-11.13c2.17-12.32,7.49-16.1,12.32-16.1,2.45,0,3.43,1.75,3.43,3.71-.07.35-.07.77-.14,1.12l-3.92,22.4h6.37l1.96-11.13c2.17-12.32,7.49-16.1,12.32-16.1,2.45,0,3.43,1.75,3.43,3.71-.07.35-.07.77-.14,1.12l-3.92,22.4h6.37l3.92-22.26c.07-.56.14-1.12.14-1.61M819.31,270.98h-6.37l-1.96,11.13c-2.17,12.32-8.12,16.1-12.95,16.1-2.52,0-3.71-1.82-3.71-3.85,0-.35,0-.63.07-.98l3.92-22.4h-6.37l-3.92,22.26c-.07.56-.14,1.12-.14,1.61,0,5.18,4.48,8.61,8.96,8.61,6.16,0,9.38-2.73,12.18-6.79l.14.07-.7,5.95h5.25l5.6-31.71ZM779.53,278.82c0-5.18-4.48-8.61-8.96-8.61-6.16,0-9.03,2.73-11.34,5.67l-.14-.07,4.2-22.96h-6.37l-8.82,49.84h6.37l1.96-11.13c2.17-12.32,8.12-16.1,12.95-16.1,2.52,0,3.71,1.75,3.71,3.78,0,.35,0,.7-.07,1.05l-3.92,22.4h6.37l3.92-22.26c.07-.56.14-1.12.14-1.61M719.18,271.61c-1.33-.7-4.2-1.4-7.14-1.4-6.3,0-12.39,3.64-12.39,10.78,0,3.85,2.17,6.37,7.77,8.47,2.03.77,2.73,1.96,2.73,3.36,0,3.22-2.87,5.25-6.79,5.25-3.43,0-5.88-.7-8.12-2.1v6.02c2.1.98,4.34,1.47,7.49,1.47,8.54,0,13.86-5.11,13.86-11.06,0-4.27-2.1-6.79-8.12-9.03-1.89-.7-2.73-1.68-2.73-3.29,0-2.66,2.66-4.76,5.95-4.76,2.8,0,4.97.42,6.37,1.19l1.12-4.9ZM683.46,283.79c0,7.63-6.23,14.07-12.39,14.07-4.41,0-7.14-2.59-7.14-7.98,0-7.56,6.16-14.07,12.39-14.07,4.34,0,7.14,2.66,7.14,7.98M689.9,283.23c0-8.19-5.39-13.02-12.95-13.02-10.43,0-19.53,9.03-19.53,20.3,0,8.19,5.39,12.95,12.95,12.95,10.43,0,19.53-8.96,19.53-20.23M650.82,271.61c-1.33-.7-4.2-1.4-7.14-1.4-6.3,0-12.39,3.64-12.39,10.78,0,3.85,2.17,6.37,7.77,8.47,2.03.77,2.73,1.96,2.73,3.36,0,3.22-2.87,5.25-6.79,5.25-3.43,0-5.88-.7-8.12-2.1v6.02c2.1.98,4.34,1.47,7.49,1.47,8.54,0,13.86-5.11,13.86-11.06,0-4.27-2.1-6.79-8.12-9.03-1.89-.7-2.73-1.68-2.73-3.29,0-2.66,2.66-4.76,5.95-4.76,2.8,0,4.97.42,6.37,1.19l1.12-4.9ZM624.63,275.88l-1.26-5.32c-5.81,0-10.57,3.22-12.53,9.17l-.14-.07,1.12-8.68h-5.25l-5.6,31.71h6.3l1.61-9.17c1.96-11.34,8.96-17.64,14.35-17.64h1.4ZM595,270.98h-6.37l-1.96,11.13c-2.17,12.32-8.12,16.1-12.95,16.1-2.52,0-3.71-1.82-3.71-3.85,0-.35,0-.63.07-.98l3.92-22.4h-6.37l-3.92,22.26c-.07.56-.14,1.12-.14,1.61,0,5.18,4.48,8.61,8.96,8.61,6.16,0,9.38-2.73,12.18-6.79l.14.07-.7,5.95h5.25l5.6-31.71ZM558.16,270.77c-1.4-.42-3.22-.56-5.04-.56-11.13,0-22.61,8.61-22.61,21,0,8.4,6.93,12.25,12.67,12.25,3.92,0,7.14-.84,9.38-2.73l1.54-6.72c-2.59,2.59-6.44,3.85-9.87,3.85-4.34,0-7.21-3.08-7.21-7.28,0-7.42,7.49-14.91,15.61-14.91,1.96,0,3.01,0,4.41.35l1.12-5.25ZM517.54,278.96c0,3.64-6.65,7.84-15.47,7.84,1.26-7.07,7.84-10.99,12.18-10.99,2.59,0,3.29,1.4,3.29,3.15M523.91,277.98c0-4.55-3.22-7.77-9.1-7.77-9.1,0-19.67,8.19-19.67,19.74,0,8.75,5.81,13.51,13.86,13.51,2.94,0,6.09-.77,8.19-2.17l1.61-6.86c-2.59,2.17-5.88,3.43-9.31,3.43-4.69,0-7.28-2.52-7.7-6.09,12.32,0,22.12-5.04,22.12-13.79M490.3,275.88l-1.26-5.32c-5.81,0-10.57,3.22-12.53,9.17l-.14-.07,1.12-8.68h-5.25l-5.6,31.71h6.3l1.61-9.17c1.96-11.34,8.96-17.64,14.35-17.64h1.4Z" />
        <path fill={color} d="M1178.68,221.77V85.77c0-4.45,1.55-8.18,4.63-11.27,3.09-3.09,6.86-4.63,11.27-4.63h15.45v56.52h62.7v-56.52h31.8v151.9h-31.8v-67.56h-62.7v67.56h-31.35Z" />
        <path fill={color} d="M1154.52,211.59c-.3-1.73-.45-3.66-.45-5.73v-5.72l-.9-18.13c-.57-10.59-2.19-18.09-4.86-22.5-2.64-4.71-7.35-8.25-14.13-10.62,7.69-2.64,13.26-6.9,16.8-12.77,4.11-6.22,6.18-14.02,6.18-23.44,0-14.13-4.14-24.87-12.36-32.22-7.95-7.09-20.16-10.59-36.66-10.59h-57.84c-4.41,0-8.18,1.55-11.27,4.64-3.09,3.09-4.64,6.82-4.64,11.27v136h31.36v-59.16h33.12c8.25,0,13.98,1.62,17.22,4.86,2.94,3.8,4.71,10.14,5.31,18.95l.41,16.35c0,1.77.3,5.01.91,9.72.3,3.24,1.17,6.33,2.64,9.27h34.44c-2.64-1.47-4.4-4.86-5.27-10.18M1120.05,131.25c-3.81,3.24-9.69,4.86-17.64,4.86h-36.66v-40.2h38.43c7.05,0,12.36,1.77,15.87,5.31,3.84,3.24,5.77,8.25,5.77,15s-1.92,11.8-5.77,15.03" />
        <path fill={color} d="M960.15,69.87h-24.76c-7.35,0-12.36,3.39-15,10.14l-50.34,141.76h33.12l9.72-31.35h59.16l10.18,31.35h33.09l-55.17-151.9ZM921.26,164.79l21.21-64.48,21.18,64.48h-42.4Z" />
        <path fill={color} d="M807.31,221.77v-124.96h-45.03v-11.04c0-4.45,1.54-8.18,4.64-11.27,3.09-3.09,6.86-4.63,11.27-4.63h105.09v26.94h-44.61v124.96h-31.36Z" />
        <path fill={color} d="M633.89,221.77V85.77c0-4.45,1.54-8.18,4.63-11.27,3.09-3.09,6.86-4.63,11.27-4.63h94.51v26.04h-79.51v32.67h59.2v10.18c0,4.41-1.54,8.18-4.63,11.27-3.09,3.09-6.86,4.64-11.27,4.64h-43.3v38.85h79.51v28.26h-110.41Z" />
        <path fill={color} d="M460.89,221.77V85.77c0-4.45,1.54-8.18,4.63-11.27,3.09-3.09,6.86-4.78,11.27-5.08h30.45l30.04,116.14,30.03-116.14h46.39v152.35h-29.16v-122.77l-30.9,122.77h-32.26l-31.35-122.77v122.77h-29.13Z" />
        <g>
          <path fill={color} d="M57.11,282.98c6.46,2.3,9.14,3.16,12.87.85,1.95-1.29,4.22-3.46,7.59-6.79,7.15-7.06,8.68-9.18,7.3-14.57-1.68-3.63-2.92-7.43-3.65-11.32-.05-.24-.08-.49-.13-.73-.2-1.15-.35-2.31-.47-3.47-.03-.32-.07-.65-.1-.97-.1-1.34-.16-2.69-.16-4.03,0-.37.03-.74.04-1.11.03-.96.08-1.92.16-2.88.05-.59.12-1.17.19-1.76.09-.73.21-1.46.33-2.18.46-2.72,1.17-5.41,2.11-8.03.04-.11.07-.22.11-.34h.02c2.37-6.51,6.13-12.62,11.39-17.82.1-.1.21-.19.31-.29,0,0,0,0,0,0,.02-.02.04-.03.06-.05.66-.64,1.34-1.26,2.03-1.85.6-.53,1.22-1.03,1.84-1.52.01,0,.03-.02.04-.03,6.17-4.86,13.29-8.02,20.72-9.42.24-.05.49-.08.73-.13,1.15-.2,2.31-.35,3.47-.47.32-.03.65-.07.97-.1.87-.07,1.74-.08,2.62-.1.23,0,.45-.03.68-.03.1,0,.19,0,.29,0,.15,0,.3-.02.45-.02.06,0,.11,0,.17,0,.05,0,.1,0,.15,0,1.3.01,2.59.07,3.88.18.57.05,1.13.14,1.7.21.68.09,1.35.18,2.03.29.81.13,1.61.29,2.42.46.19.04.38.09.57.14,8.44,1.96,16.43,6.16,22.91,12.73.43.44.82.9,1.23,1.35.43.46.85.92,1.26,1.39.17.2.33.39.49.59,3.96,4.76,6.88,10.1,8.76,15.71h.01c.02.07.04.14.06.2.29.87.56,1.74.8,2.62.2.72.36,1.44.52,2.16.13.6.28,1.19.39,1.79.22,1.2.39,2.41.52,3.61.04.39.07.79.1,1.18.09,1.07.14,2.13.15,3.2,0,.35.02.7.02,1.06,0,1.3-.07,2.59-.18,3.88-.05.57-.14,1.13-.2,1.7-.09.68-.18,1.35-.29,2.03-.13.81-.29,1.61-.46,2.42-.04.19-.09.38-.14.57-.79,3.41-1.97,6.75-3.51,9.94-.73,2.92-.61,4.95.91,7.4,1.29,1.95,3.46,4.22,6.79,7.6,8.11,8.22,9.7,9.01,17.24,6.49,3.75-1.5,7.63-2.48,11.57-2.99.36-.05.73-.08,1.09-.12,1-.11,2.01-.2,3.01-.24,1.19-.06,2.39-.06,3.58-.03.23,0,.46.02.69.03,5.76.24,11.48,1.52,16.87,3.82,4.18,1.36,6.55,1.58,9.56-.28,1.95-1.29,4.22-3.46,7.59-6.79,8.9-8.79,9.1-9.91,5.8-19.24-1.58-4.45-2.45-9.09-2.67-13.75-.03-.27-.09-.53-.11-.8-.04-.42-.08-.84-.11-1.27-.09-1.15-.15-2.3-.17-3.45,0-.38-.02-.75-.02-1.13,0-1.39.07-2.79.19-4.18.05-.61.14-1.22.22-1.83.09-.73.19-1.45.31-2.17.14-.87.31-1.74.49-2.6.05-.21.1-.41.15-.61,2.08-9.08,6.55-17.66,13.54-24.63,4.13-4.11,8.78-7.35,13.73-9.76,12.4-6.19,26.62-6.98,39.44-2.33,6.88,2.48,9.73,3.4,13.71.93,2.08-1.39,4.49-3.72,8.08-7.3,9.48-9.44,9.69-10.65,6.16-20.68-6.44-18.32-2.19-39.51,12.39-54.04,2.47-2.46,5.15-4.59,7.97-6.43C337.23,42.26,273.26.83,199.33.01,90.46-1.2,1.22,86.08.01,194.94c-.36,32.33,7.09,62.93,20.58,90,11.52-5.54,24.65-6.22,36.51-1.97Z" />
          <path fill={color} d="M381.61,195.26c-6.88-2.48-9.73-3.4-13.71-.93-2.08,1.39-4.49,3.72-8.08,7.3-9.48,9.44-9.69,10.65-6.16,20.68,6.44,18.32,2.19,39.51-12.39,54.04-7.41,7.38-16.62,12-26.28,13.83-.26.05-.52.09-.78.14-1.23.21-2.46.38-3.69.5-.35.03-.69.08-1.04.11-.57.04-1.14.04-1.71.07-7.08.77-14.27,0-21.06-2.42-6.46-2.3-9.14-3.16-12.87-.85-1.95,1.29-4.22,3.46-7.6,6.79-7.74,7.63-8.9,9.49-6.9,15.96,1.36,3.2,2.36,6.53,3,9.92.05.24.08.49.13.73.2,1.15.35,2.31.47,3.47.03.32.07.65.1.97.03.37.02.73.04,1.1.02.33.02.66.04.98.02.65.08,1.3.08,1.95,0,.17-.01.33-.02.5-.11,12.31-4.94,24.59-14.39,33.91-6.96,6.87-15.61,11.17-24.68,12.88-.24.05-.49.08-.73.13-1.15.2-2.31.35-3.47.47-.32.03-.65.07-.97.1-1.34.1-2.69.16-4.03.16-.1,0-.2,0-.3-.01-.09,0-.18,0-.27,0-1.3-.01-2.59-.07-3.88-.18-.57-.05-1.13-.14-1.7-.21-.68-.09-1.35-.18-2.02-.29-.81-.13-1.62-.29-2.42-.46-.19-.04-.38-.09-.57-.14-8.44-1.96-16.43-6.16-22.91-12.73-3.83-3.88-6.84-8.25-9.09-12.9-2.56-5.18-4.08-10.7-4.65-16.28,0-.08-.03-.16-.03-.24-.01-.13-.02-.25-.03-.38-.09-.98-.15-1.96-.17-2.95-.01-.35-.05-.71-.05-1.06,0-.35-.02-.7-.02-1.05,0-.31.04-.62.04-.93,0-.15.02-.31.02-.46.03-.83.04-1.66.12-2.48.05-.57.14-1.13.21-1.7.09-.68.18-1.35.29-2.02.13-.81.29-1.62.46-2.42.04-.19.09-.38.14-.57.68-2.93,1.65-5.8,2.88-8.58,1.14-3.72,1.21-5.95-.54-8.77-1.29-1.95-3.46-4.22-6.79-7.59-7.72-7.82-9.52-8.92-16.16-6.84-5.48,2.3-11.26,3.55-17.07,3.71-1.06.04-2.11.05-3.17.03-.11,0-.22-.01-.32-.01-6.19-.2-12.35-1.59-18.11-4.17-3.57-1.06-5.76-1.09-8.52.61-1.95,1.29-4.22,3.46-7.6,6.79-8.9,8.79-9.1,9.91-5.8,19.24,5.11,14.42,3,30.74-6.07,43.61,32.04,23.47,71.44,37.51,114.18,37.99,108.87,1.21,198.1-86.06,199.31-194.93,0-.45,0-.89,0-1.33-4.29-.37-8.54-1.24-12.64-2.73Z" />
        </g>
      </g>
    </g>
  </svg>
);

const Grafismo = () => (
  <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1022.05 976.54" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] opacity-[0.03] pointer-events-none z-0">
    <g id="c"><path d="M529.54,839.43c41,73.85,116.43,124.96,203.04,133.37.25.02.49.05.74.08,3.46.33,6.94.58,10.43.77,1.09.06,2.16.12,3.25.16,2.79.12,5.59.19,8.39.22,1.79.02,3.59.02,5.38,0,2.25-.03,4.5-.07,6.77-.15,2.29-.08,4.57-.2,6.86-.35,1.21-.08,2.41-.09,3.63-.18.75-.06,1.48-.16,2.23-.23,2.37-.2,4.74-.46,7.1-.72,2.01-.22,4.02-.44,6.02-.71,1.97-.27,3.94-.59,5.9-.9,2.44-.39,4.87-.77,7.29-1.22,1.15-.22,2.3-.47,3.45-.71,127.55-25.67,218.91-142.96,208.77-276.01-10.98-143.94-136.57-251.73-280.51-240.76-1.38.11-2.74.29-4.12.42-1.59.14-3.17.32-4.76.48-2.15.24-4.3.46-6.44.75-3.53.46-7.04,1.01-10.54,1.62-.3.05-.6.09-.9.15-25.58,4.5-50.61,12.76-74.14,24.87-37.39,9.41-52.16-5.75-84.71-35.35-38.8-35.37-57.04-52.16-40.81-107.44,27.23-92.8,1.88-197.27-74.84-267.21C330.88-26.37,167.12-18.79,70.37,87.34-26.37,193.47-18.79,357.23,87.34,453.98c75.45,68.77,181.57,85.91,270.53,49.94,50.93-19.65,74.04-5.09,111.57,29.13,31.88,29.06,48.7,46.71,44.49,83.53-27.19,68.87-23.39,146.46,10.15,212.48.84,1.69,1.68,3.38,2.55,5.05.96,1.78,1.91,3.56,2.91,5.32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5" /></g>
  </svg>
);

const getStrategicIcon = (id: string) => {
  switch (id) {
    case 'mkt': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>;
    case 'bi': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    case 'gg': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case 'fin': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'jur': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;
    case 'comp': return <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    default: return <div className="w-2 h-2 rounded-full bg-slate-400" />;
  }
};

const getCommitteeIcon = (id: string) => {
  if (id === 'metarh-institucional') {
    return (
      <div className="w-full h-full rounded-full bg-[#441176] flex items-center justify-center p-4 shadow-inner transition-transform duration-500 icon-animate">
        <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.26 394.27" className="w-full h-full">
          <g id="Camada_1-2" data-name="Camada 1">
            <g>
              <path fill="#fff" d="M84.87,262.47c-1.68-3.63-2.92-7.43-3.65-11.32-.05-.24-.08-.49-.13-.73-.2-1.15-.35-2.31-.47-3.47-.03-.32-.07-.65-.1-.97-.1-1.34-.16-2.69-.16-4.03,0-.37.03-.74.04-1.11.03-.96.08-1.92.16-2.88.05-.59.12-1.17.19-1.76.09-.73.21-1.46.33-2.18.46-2.72,1.17-5.41,2.11-8.03.04-.11.07-.22.11-.34h.02c2.37-6.51,6.13-12.62,11.39-17.82.1-.1.21-.19.31-.29,0,0,0,0,0,0,.02-.02.04-.03.06-.05.66-.64,1.34-1.26,2.03-1.85.6-.53,1.22-1.03,1.84-1.52.01,0,.03-.02.04-.03,6.17-4.86,13.29-8.02,20.72-9.42.24-.05.49-.08.73-.13,1.15-.2,2.31-.35,3.47-.47.32-.03.65-.07.97-.1.87-.07,1.74-.08,2.62-.1.23,0,.45-.03.68-.03.1,0,.19,0,.29,0,.15,0,.3-.02.45-.02.06,0,.11,0,.17,0,.05,0,.1,0,.15,0,1.3.01,2.59.07,3.88.18.57.05,1.13.14,1.7.21.68.09,1.35.18,2.03.29.81.13,1.61.29,2.42.46.19.04.38.09.57.14,8.44,1.96,16.43,6.16,22.91,12.73.43.44.82.9,1.23,1.35.43.46.85.92,1.26,1.39.17.2.33.39.49.59,3.96,4.76,6.88,10.1,8.76,15.71h.01c.02.07.04.14.06.2.29.87.56,1.74.8,2.62.2.72.36,1.44.52,2.16.13.6.28,1.19.39,1.79.22,1.2.39,2.41.52,3.61.04.39.07.79.1,1.18.09,1.07.14,2.13.15,3.2,0,.35.02.7.02,1.06,0,1.3-.07,2.59-.18,3.88-.05.57-.14,1.13-.2,1.7-.09.68-.18,1.35-.29,2.03-.13.81-.29,1.61-.46,2.42-.04.19-.09.38-.14.57-.79,3.41-1.97,6.75-3.5,9.94-.73,2.92-.61,4.95.91,7.4,1.29,1.95,3.46,4.22,6.79,7.6,8.11,8.22,9.7,9.01,17.24,6.49,3.75-1.5,7.63-2.48,11.57-2.99.36-.05.73-.08,1.09-.12,1-.11,2.01-.2,3.01-.24,1.19-.06,2.39-.06,3.58-.03.23,0,.46.02.69.03,5.76.24,11.48,1.52,16.87,3.82,4.18,1.36,6.55,1.58,9.56-.28,1.95-1.29,4.22-3.46,7.59-6.79,8.9-8.79,9.1-9.91,5.8-19.24-1.58-4.45-2.45-9.09-2.67-13.75-.03-.27-.09-.53-.11-.8-.04-.42-.08-.84-.11-1.27-.09-1.15-.15-2.3-.17-3.45,0-.38-.02-.75-.02-1.13,0-1.39.07-2.79.19-4.18.05-.61.14-1.22.22-1.83.09-.73.19-1.45.31-2.17.14-.87.31-1.74.49-2.6.05-.21.1-.41.15-.61,2.08-9.08,6.55-17.66,13.54-24.63,4.13-4.11,8.78-7.35,13.73-9.76,12.4-6.19,26.62-6.98,39.44-2.33,6.88,2.48,9.73,3.4,13.71.93,2.08-1.39,4.49-3.72,8.08-7.3,9.48-9.44,9.69-10.65,6.16-20.68-6.44-18.32-2.19-39.51,12.39-54.04,2.47-2.46,5.15-4.59,7.97-6.43C337.23,42.26,273.26.83,199.33.01,90.46-1.2,1.22,86.08.01,194.94c-.36,32.33,7.08,62.93,20.58,90,11.52-5.54,24.65-6.22,36.52-1.97,6.46,2.3,9.14,3.16,12.87.85,1.95-1.29,4.22-3.46,7.59-6.79,7.15-7.06,8.68-9.18,7.3-14.57Z" />
              <path fill="#fff" d="M394.26,197.99c-4.29-.37-8.54-1.24-12.64-2.73-6.88-2.48-9.73-3.4-13.71-.93-2.08,1.39-4.49,3.72-8.08,7.3-9.48,9.44-9.69,10.65-6.16,20.68,6.44,18.32,2.19,39.51-12.39,54.04-7.41,7.38-16.62,12-26.28,13.83-.26.05-.52.09-.78.14-1.23.21-2.46.38-3.69.5-.35.03-.69.08-1.04.11-.57.04-1.14.04-1.71.07-7.08.77-14.27,0-21.06-2.42-6.46-2.3-9.14-3.16-12.87-.85-1.95,1.29-4.22,3.46-7.6,6.79-7.74,7.63-8.9,9.49-6.9,15.96,1.36,3.2,2.36,6.53,3,9.92.05.24.08.49.13.73.2,1.15.35,2.31.47,3.47.03.32.07.65.1.97.03.37.02.73.04,1.1.02.33.02.66.04.98.02.65.08,1.3.08,1.95,0,.17-.01.33-.02.5-.11,12.31-4.94,24.59-14.39,33.91-6.96,6.87-15.61,11.17-24.68,12.88-.24.05-.49.08-.73.13-1.15.2-2.31.35-3.47.47-.32.03-.65.07-.97.1-1.34.1-2.69.16-4.03.16-.1,0-.2,0-.3-.01-.09,0-.18,0-.27,0-1.3-.01-2.59-.07-3.88-.18-.57-.05-1.13-.14-1.7-.21-.68-.09-1.35-.18-2.02-.29-.81-.13-1.62-.29-2.42-.46-.19-.04-.38-.09-.57-.14-8.44-1.96-16.43-6.16-22.91-12.73-3.83-3.88-6.84-8.25-9.08-12.9-2.56-5.18-4.08-10.7-4.65-16.28,0-.08-.03-.16-.03-.24-.01-.13-.02-.25-.03-.38-.09-.98-.15-1.96-.17-2.95-.01-.35-.05-.71-.05-1.06,0-.35-.02-.7-.02-1.05,0-.31.04-.62.04-.93,0-.16.02-.31.02-.46.03-.83.04-1.66.12-2.49.05-.57.14-1.13.21-1.7.08-.68.18-1.35.29-2.02.13-.81.29-1.62.46-2.42.04-.19.09-.38.14-.57.68-2.93,1.65-5.8,2.88-8.58,1.14-3.72,1.21-5.95-.54-8.77-1.29-1.95-3.46-4.22-6.79-7.59-7.71-7.82-9.52-8.92-16.16-6.84-5.48,2.3-11.26,3.55-17.07,3.71-1.06.04-2.11.05-3.17.03-.11,0-.21-.01-.32-.02-6.19-.2-12.35-1.59-18.11-4.17-3.57-1.06-5.76-1.09-8.52.61-1.95,1.29-4.22,3.46-7.6,6.79-8.9,8.79-9.1,9.91-5.8,19.24,5.11,14.42,3,30.74-6.07,43.61,32.04,23.47,71.44,37.51,114.18,37.99,108.87,1.21,198.1-86.06,199.31-194.93,0-.45,0-.89,0-1.33Z" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  switch (id) {
    case 'c-cobranca': return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case 'c-riscos': return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
    case 'c-lgpd': return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>;
    case 'e-tatica': return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'c-deip': return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    default: return <svg className="w-8 h-8 transition-transform duration-500 icon-animate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  }
};

const App: React.FC = () => {
  const [expandedMacroId, setExpandedMacroId] = useState<string | null>(null);
  const [activeStrategicPopupId, setActiveStrategicPopupId] = useState<string | null>(null);
  const [showCommittees, setShowCommittees] = useState(false);

  const toggleMacro = (id: string) => {
    setExpandedMacroId(prev => (prev === id ? null : id));
  };

  const closePopups = () => {
    setActiveStrategicPopupId(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F5F5F7] font-['Barlow'] overflow-x-hidden selection:bg-[#470082]/10 relative" onClick={closePopups}>

      <Grafismo />

      {/* Fixed Header - Increased height to ~104px (h-[104px]) */}
      <header className="w-full h-[104px] bg-[#470082] shadow-lg z-50 flex items-center px-6 md:px-12 fixed top-0">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="cursor-pointer transition-transform hover:scale-105" onClick={(e) => { e.stopPropagation(); setShowCommittees(false); setExpandedMacroId(null); }}>
            <Logo color="#fff" />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setShowCommittees(!showCommittees); }}
            className="group relative px-10 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 flex items-center gap-3 overflow-hidden shadow-sm active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              {showCommittees ? 'Organograma' : 'Comitês & Grupos'}
            </span>
            <div className={`transition-transform duration-500 ${showCommittees ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area - pt-[180px] to increase space from the menu */}
      <main className="flex-1 w-full max-w-7xl flex flex-col items-center pt-[180px] pb-12 px-6 md:px-12 relative z-10">

        {!showCommittees ? (
          <>
            {/* MOBILE VIEW (List) */}
            <div className="md:hidden w-full flex flex-col items-center gap-12">
              <div className="w-full grid grid-cols-1 gap-6">
                {MACRO_AREAS.map(area => {
                  const isExpanded = expandedMacroId === area.id;
                  return (
                    <div
                      key={area.id}
                      onClick={(e) => e.stopPropagation()}
                      className={`
                          relative flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 transition-all duration-500
                          ${isExpanded ? 'ring-1 ring-[#470082]/10' : ''}
                        `}
                    >
                      <div
                        onClick={() => toggleMacro(area.id)}
                        className="p-8 relative overflow-hidden flex items-center justify-between min-h-[120px]"
                        style={{ backgroundColor: area.color }}
                      >
                        <h3 className="text-xl font-black text-white z-10">{area.name}</h3>
                        <div className={`w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center z-10 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                      </div>
                      {isExpanded && (
                        <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                          <p className="text-[#6E6E73]">{area.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="w-full grid grid-cols-2 gap-4">
                {STRATEGIC_AREAS.map(area => (
                  <div key={area.id} onClick={() => setActiveStrategicPopupId(area.id)} className="bg-white p-6 rounded-[24px] border border-slate-100 flex flex-col items-center text-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-[16px] bg-slate-50 text-slate-400 flex items-center justify-center">
                      {getStrategicIcon(area.id)}
                    </div>
                    <h5 className="font-bold text-[#1D1D1F] text-sm">{area.name}</h5>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP VIEW (Orbit System) */}
            <div className="hidden md:flex relative w-full min-h-[950px] items-center justify-center overflow-visible">

              {/* Decorative Orbits */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
                <div className="absolute w-[500px] h-[500px] rounded-full border border-[#470082]" />
                <div className="absolute w-[850px] h-[850px] rounded-full border border-[#470082] opacity-60" />
              </div>

              {/* Strategic Areas (Orbit) */}
              <div className="absolute inset-0 pointer-events-none">
                {STRATEGIC_AREAS.map((area, index) => {
                  const total = STRATEGIC_AREAS.length;
                  const angleDeg = index * (360 / total); // 0, 60, 120...
                  const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 (Top start)
                  const radius = 420;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;

                  return (
                    <div
                      key={area.id}
                      className="absolute pointer-events-auto flex flex-col items-center justify-center"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveStrategicPopupId(prev => prev === area.id ? null : area.id); }}
                        className={`
                          w-36 h-36 bg-white rounded-full p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500
                          hover:shadow-[0_20px_50px_rgba(71,0,130,0.1)] hover:scale-110 flex flex-col items-center justify-center text-center relative z-10 group
                          ${activeStrategicPopupId === area.id ? 'border-[#470082] ring-4 ring-[#470082]/10 scale-110' : ''}
                        `}
                      >
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2 text-slate-400 group-hover:text-[#470082] group-hover:bg-[#470082]/10 transition-colors">
                          {getStrategicIcon(area.id)}
                        </div>
                        <h5 className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#470082] transition-colors uppercase tracking-wide leading-tight">
                          {area.name}
                        </h5>
                      </button>

                      {activeStrategicPopupId === area.id && (
                        <div className={`
                          absolute w-[300px] bg-[#470082] text-white p-6 rounded-[24px] shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-300
                          ${[0, 1, 5].includes(index) ? 'top-full mt-4' : 'bottom-full mb-4'}
                        `}>
                          <p className="text-sm font-medium leading-relaxed opacity-90">"{area.description}"</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Macro Areas (Center Triangle) */}
              <div className="relative z-20 flex flex-col items-center gap-6">

                {/* Top Item */}
                <div onClick={(e) => e.stopPropagation()} className="relative">
                  {(() => {
                    const area = MACRO_AREAS[0];
                    const isExpanded = expandedMacroId === area.id;
                    return (
                      <div
                        onClick={() => toggleMacro(area.id)}
                        className={`
                          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white rounded-[36px] overflow-hidden shadow-xl border border-slate-100 cursor-pointer relative group
                          ${isExpanded ? 'w-[450px] h-auto z-50' : 'w-[280px] h-[160px] hover:-translate-y-1'}
                        `}
                      >
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-black/5 mix-blend-overlay" />
                        <div className="p-8 h-full flex flex-col items-center justify-center text-center gap-4 transition-colors duration-500" style={{ backgroundColor: isExpanded ? 'white' : area.color }}>
                          <h3 className={`text-2xl font-black transition-colors duration-500 ${isExpanded ? 'text-[#470082]' : 'text-white'}`}>{area.name}</h3>
                          {isExpanded && (
                            <p className="text-sm text-slate-500 font-medium animate-in fade-in slide-in-from-bottom-2">
                              {area.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Bottom Row */}
                <div className="flex items-start gap-6">
                  {MACRO_AREAS.slice(1).map(area => {
                    const isExpanded = expandedMacroId === area.id;
                    return (
                      <div key={area.id} onClick={(e) => e.stopPropagation()} className="relative">
                        <div
                          onClick={() => toggleMacro(area.id)}
                          className={`
                              transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white rounded-[36px] overflow-hidden shadow-xl border border-slate-100 cursor-pointer relative group
                              ${isExpanded ? 'w-[450px] z-50' : 'w-[280px] h-[160px] hover:-translate-y-1'}
                            `}
                        >
                          <div className="p-8 h-full flex flex-col items-center justify-center text-center gap-4 transition-colors duration-500" style={{ backgroundColor: isExpanded ? 'white' : area.color }}>
                            <h3 className={`text-2xl font-black transition-colors duration-500 ${isExpanded ? 'text-[#470082]' : 'text-white'}`}>{area.name}</h3>
                            {isExpanded && (
                              <div className="py-4">
                                <p className="text-sm text-slate-500 font-medium animate-in fade-in slide-in-from-bottom-2">
                                  {area.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </>
        ) : (
          /* Committees & Groups View */
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="mb-20 text-center">
              <h2 className="text-5xl font-black text-[#1D1D1F] tracking-tighter">Grupos e Comitês</h2>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
              {COMMITTEES.map(committee => (
                <div key={committee.id} className="group bg-white p-12 rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 flex flex-col items-start text-left relative overflow-hidden h-full">
                  <div className="w-20 h-20 rounded-[28px] bg-[#470082]/5 flex items-center justify-center mb-8 group-hover:bg-[#470082]/10 transition-all duration-500 text-[#470082] shadow-sm relative z-10">
                    {getCommitteeIcon(committee.id)}
                  </div>
                  <h3 className="text-2xl font-black text-[#1D1D1F] mb-4 tracking-tight leading-[1.1] group-hover:text-[#470082] transition-colors relative z-10">
                    {committee.name}
                  </h3>
                  <p className="text-[#6E6E73] text-lg font-medium leading-relaxed flex-1 relative z-10">
                    {committee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer - Redesigned to be "Organograma  |  METARH" in specified color and 20% smaller font */}
      <footer className="w-full py-6 flex flex-col items-center bg-white border-t border-slate-100 mt-auto relative z-20">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 text-[#441176]">
            {/* text-[19px] is ~20% smaller than 24px (text-2xl) */}
            <span className="text-[19px] font-bold tracking-tight">Organograma  |  METARH</span>
            <span className="text-[19px] font-black tracking-tight">®</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
