import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement('div', {id : "parant"},
[React.createElement('div', {id : "child"}, 
    [React.createElement('h1', {} , "I'm H1 tag"), 
     React.createElement('h2', {} , "I'm H2 tag")]),
     React.createElement('div', {id : "child2"}, 
    [React.createElement('h1', {} , "I'm H1 tag"), 
     React.createElement('h2', {} , "I'm H2 tag")])
    ]                
)


const heading = React.createElement('h1', {id:"head-element"}, "HelloWorld From React");

const root = ReactDOM.createRoot(document.getElementById('Main-div'));

root.render(parent)