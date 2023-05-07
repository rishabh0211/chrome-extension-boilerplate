import React from 'react';
import { createRoot } from 'react-dom/client';

import './popup.css';

const rootEl = document.createElement('div');
document.body.append(rootEl);
const root = createRoot(rootEl);

const Test = <img src="icon.png" />

root.render(Test);