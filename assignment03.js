import React from "react"
import  ReactDOM from "react-dom/client";

const sample1 = React.createElement("div",{class : "title"},[
    React.createElement("h1",{},"heading1"),
    React.createElement("h2",{},"heading2"),
    React.createElement("h3",{},"heading3"),
]
    );
    
    //JSx
    const jsxsample = (<div class = "title">
            <h1> heading from jsx</h1>
            <h2>heading from jsx</h2>
            <h3>heading from jsx</h3>
    </div>);
 

    //jsx functinal component
    //adding component into another
    //paas attribute to tag in jsx
    const name = "rajesh";
    const Title = () => {
        return (<h1>hello</h1>);
    };
    const FunctComponent = () => 
         (
        <div className = "title">
            <Title/>
            <h1> heading from jsxComponent {name}</h1>
            <h2>heading from jsxComponent</h2>
            <h3>heading from jsxComponent</h3>
        </div>)
    ;
  const HeaderComponent = () => (
    <div>
        <img className = "image" align = "left" src = "C:\Users\rajesh\Desktop\Namaste React\dog.png" alt = "dogpic"/>
        <input className = "searchbar" type = "search" placeholder = "search anything"/>

        <img className = "image" align = "right" src = "C:\Users\rajesh\Desktop\Namaste React\dog.png" alt = "icon"/>
    </div>

  );
    

    const boot = ReactDOM.createRoot(document.getElementById("ran"));
    boot.render(<HeaderComponent/>);