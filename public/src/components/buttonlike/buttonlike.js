class buttonlike extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    static get observedAttributes(){
        return ["message"]
    }

    attributeChangedCallback(propName, oldValue,NewValue) {
        this[propName] = NewValue;
        this.mount();
    }

    connectedCallback() {
        this.mount();
    }

    mount() {
        this.render();
        this.addListeners();
    }

    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener('click',this.onButtonClicked);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <section>
            <p>${this.message}</p>
            <button>Dar like</button>
            </section>
        `
    }

    onButtonClicked(){
        const currentValue = this.getAttribute("message"); //Obtener valor actual
        this.setAttribute("message", "Gracias por dar like"); //Cambiar el valor actual por uno nuevo
    }
}

customElements.define("my-button",buttonlike);
export default buttonlike;