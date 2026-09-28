import React from 'react';
import { createRoot } from 'react-dom/client';
import dicodingLogo from './dicoding-logo.png';

// const heading = React.createElement('h1', null, 'Biodata Perusahaan');

// const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indoenesia');
// const listItem2 = React.createElement('li', null, 'Biodata: Education');
// const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover');

// const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

// const container = React.createElement('div', null, [heading, unorderedList]);

// const root = createRoot(document.getElementById('root'));

// root.render(container);

const element = (
  <div>
    <h1>Biodate Perusahaan</h1>
    <ul>
      <li>Nama : Dicoding</li>
      <li>Bidang : Education</li>
      <li>Tagline : Decode Ideas, Discover Potential</li>
      {/* <img src="dicoding-logo.png" alt="Dicoding Logo" /> */}
      <img src={dicodingLogo} alt="Dicoding Logo"/>
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));

root.render(element);
