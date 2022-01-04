import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./Clock";
import Counter from "./Counter";

ReactDOM.render(<React.StrictMode>
    <div>
        <Clock />
        <Counter />
    </div>
</React.StrictMode>, document.getElementById('root'));