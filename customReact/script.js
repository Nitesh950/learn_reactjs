function customRender(reactElement, root){
    let newElement = document.createElement(reactElement.type);
    newElement.setAttribute('href', reactElement.props.href);
    newElement.setAttribute('target', reactElement.props.target);

    newElement.innerText = reactElement.displayText;

    root.append(newElement);

}

const reactElement = {
    type : 'a',
    props : {
        href : "www.facebook.com",
        target : "_blank",
        
    },
    displayText : "Login to Facebook",
}

let root = document.querySelector("#root");

customRender(reactElement, root);



