
const ProductController = require('../../controllers/ProductController.js')

function createHiElement(i, text){
    var h = document.createElement(i);
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
    return h;
} 

function createProductView(product){
    var div = document.createElement('div');
    div.id = product.pid;
    div.className =  'product';

    var text = createHiElement("H3",product.pname)
    div.appendChild(text);

    // add div to the document
    document.body.appendChild(div);

    div.style.height = "300px";
    div.style.width = "250px";
    div.style.backgroundColor = "white";
    div.style.margin = "10px"
    div.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    div.style.textAlign = "center"
    div.style.flexWrap = "wrap";
    return div;
}

var section = document.createElement('section');
section.id = "product-view"
section.className =  'product-view';
section.style.display = 'flex';
section.style.justifyContent = 'center'
section.style.padding = "10px"
section.style.flexWrap = "wrap"

var Products = ProductController.index
console.log(Products)

var product  = {pid: "p123",pname: "Laptop"}
document.body.appendChild(section)
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))
section.appendChild(createProductView(product))

