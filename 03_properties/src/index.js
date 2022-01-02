import React from 'react';
import ReactDOM from 'react-dom';
import PropsComponent from "./PropsComponent";

ReactDOM.render(<React.StrictMode>
    <div>
        <PropsComponent txt1="txtProperty-001" num1={1} />
    </div>
</React.StrictMode>, document.getElementById('root'));