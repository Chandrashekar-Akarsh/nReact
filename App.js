const heading = React.createElement('h1',{id:"heading"},"I am an h1 tag");

const div = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},heading));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

console.log("div === ",div);

