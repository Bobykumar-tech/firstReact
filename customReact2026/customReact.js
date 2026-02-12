function customRender(ReactElement,container){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for (const prop in ReactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,ReactElement.props[prop])
        
    }
    container.appendChild(domElement)
}



const ReactElement = {
    type: 'a',
    props:{
      href: "https\\google.com",
      target: '-blanck'
    },
    children: 'visit this web'
}
const maincontainer = document.getElementById("root");
customRender(ReactElement,maincontainer);

