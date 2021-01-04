const template = document.createElement('template');

template.innerHTML = `
<style> p{color:blue; font-family:"fantasy";} </style>
<p>
<slot>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, architecto! Facilis ab quos sapiente, laborum inventore laboriosam porro harum magni quibusdam libero officiis, nesciunt odit repellat iste magnam placeat enim.
</slot>
</p>`

class CommentElement extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {

        const text = template.content.cloneNode((true));
        this.shadowRoot.appendChild(text);
        // this.shadowRoot.innerHTML = 
    }


}

window.customElements.define('comment-blog', CommentElement);