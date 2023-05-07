import React from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.createElement('div');
document.body.append(rootEl);
const root = createRoot(rootEl);

const Test = <h1>Hello!</h1>

root.render(Test);