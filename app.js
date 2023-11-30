{/*
<div id="parent">
    <div id="child">
        <h1 id=child2>I am h1 tag</h1>
        <h2 id=child3>I am h3 tag</h2>
    </div>
</div> */
}

const parent=React.createElement("div",
{id:"parent",},
React.createElement("div",{id:"child",},[
    React.createElement("h1",{id:"child2"},"I am h1 tag"),
    React.createElement("h2",{id:"child3"},"I am h2 tag")
])
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);