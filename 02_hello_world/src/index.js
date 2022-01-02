import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './ClassComponent';
import StatelessFunctionComponent from './StatelessFunctionComponent';
import CreateElementFunctionComponent from './CreateElementFunctionComponent';

ReactDOM.render(<React.StrictMode>
    <div>
        <ClassComponent/>
        <StatelessFunctionComponent/>
        <CreateElementFunctionComponent/>
    </div>
</React.StrictMode>, document.getElementById('root'));