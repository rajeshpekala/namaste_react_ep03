import React from "react"
import  ReactDOM from "react-dom/client";

//React Element
//React.createElement => object => HTML Element(render)

const heading = React.createElement("h1",{id : "root"},"Rajesh coming from react element");

console.log(heading);


//Jsx
//JSX => React.createElement-JSobject => HTML Element(render)
//Babel is a package in parcel which is responsible for transpil the code from JSX to JS

const elem = (<span>Something</span>);

const Title = (<h1 className = "head" tabIndex ="5">

    Rajesh coming from JSX</h1>
    );

//React component
//React components are created in two ways
//ClassBased and Functional Reactcomponent(this is we are using and it is latest)

/*const HeadComponent = () => {
    return <h1 className = >Rajesh coming from React Component</h1>;
};
*/
const HeadingComponent = () => (
    <div id = "container">
  
    <h1 className = "heading">Rajesh coming from React Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);

