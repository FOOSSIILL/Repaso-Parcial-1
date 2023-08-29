class profile extends HTMLElement {

    static get observedAttributes() {
        return ["name", "id", "city"]
    }

    constructor(){
        super();
        this.attachShadow ({mode: "open"});
    }

    //Que va a pasar cuando mi componente se incruste en el HTML
    connectedCallback(){
        this.render();
    }

    //Escuchar los cambios en nuestras variables
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        <section>
        <h1>${this.name}</h1>
        <p>ID: ${this.id}</p>
        <p><strong>From:${this.city}</strong></p>
        </section>
        `
    }
}

customElements.define("my-profile",profile);
export default profile;