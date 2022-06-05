const API_URL = 'https://api.mercadolibre.com'
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');
        //console.log(data);
        //const tpl = data.results.map((results) => `<li>${results.title}</li>`);
        const tpl = data.results.map((results) => `<li>Product: ${results.title}</li>
                                                    <li>Price: ${results.price} COP</li>
                                                    <li>Quantity: ${results.available_quantity}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load",onRequestHandler);
xhr.open('GET',`${API_URL}/sites/MCO/search?q=${'Iphone%13Pro'}`,true);
xhr.send();

