import React from 'react';
import ReactDOM from 'react-dom';

import UpdatesFromEndpoint from './Updates/UpdatesFromEndpoint';

const loadUpdates = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-colby-updates]'),
    (container) => {
      ReactDOM.render(
        <UpdatesFromEndpoint {...container.dataset} />,
        container
      );
    }
  );
};

window.addEventListener('load', loadUpdates);
