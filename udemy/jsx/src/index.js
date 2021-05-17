// Import the React and ReactDOM libararies
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';

    return (
    <div>
        <label class="label" htmlFor="name">
            PUBG Stats: 
        </label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor: 'black', color: 'yellow'}}>
            {buttonText}
        </button>

    </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);