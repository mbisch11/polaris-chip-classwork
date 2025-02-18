import { LitElement, html, css } from 'lit';


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.name = "Bryan...";
    this.img = "https://assets.powerplaystats.com/medias/4838.jpg";
    this.height = "6'10";
    this.weight = "205 lbs";
    this.details = "https://hax.psu.edu/";
    this.fancy = false;
    this.scary = false;
  }

  static get styles() {
    return css`
      :host {
        display : inline-block;
      }
      :host([fancy]) .card{
        background-image: url("https://t3.ftcdn.net/jpg/03/11/16/14/360_F_311161460_0Uw0qieFHNarQfTU5OR9MKdYAETt13Rs.jpg");
        width: 400px;
      }
      :host([fancy]) .name{
        color: wheat;
        text-shadow: 2px 2px 4px;
      }
      :host([fancy]) ::slotted(p){
        color: wheat;
        text-shadow: 1px 1px 2px;
      }
      :host([scary]) .card{
        background-image: url("https://media.istockphoto.com/id/849048646/photo/zombies-hand-silhouette.jpg?s=612x612&w=0&k=20&c=eCh_1bI-uvQh0Af2lXXH_xPToAJydbdyMwMOvndkD1U=")
      }
      :host([scary]) .name{
        color: maroon;
        text-shadow: 2px 2px black;
      }
      :host([scary]) ::slotted(p){
        color: maroon;
        text-shadow: 1px 1px black;
      }
      .card{
        background-image: url("https://t4.ftcdn.net/jpg/11/41/18/39/360_F_1141183983_gfTMXnyOToTayLmNmvXgfvD6sok94hRL.jpg");
        width: 400px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 10px;
        border: 5px solid #333333;
        overflow : hidden;
      }
      .name{
        font-family : 'Courier New', Courier, monospace;
      }
      .content{
        margin-left: 5px;
      }
      .details {
        border-radius: 25px;
        margin-top: 10px;
        display: none;
      }
      th,td {
        border: 1px solid black;
        background: white;
      }
      .details:hover{
        color:white;
        background:black;
      }
      .details:active{
        color:white;
        background:fuchsia;
      }
      .bryan{
        border: 3px solid #333333;
        border-radius:10px;
        margin: 10px 10px;
        max-width: 150px;
        max-height: 150px;
      }
      @media (max-width:800px) and (min-width:500px){
        .details{
          display: block;
        }
      }
      @media (max-width: 500px) {
        .card {
          width: 300px;
          align-items: center;
          padding: 10px;
        }
        .bryan {
          max-width: 100px;
          max-height: 100px;
          margin: 0 10px
        }
        .content {
          margin-left: 5px;
          text-align: center;
        }
        .details {
          margin-top: 10px;
        }
      }  
    `;
  }

  openChanged(e){
    console.log(e);
    if(e.target.getAttribute('open') !== null){
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div class="container">
  <div class="card">
    <img class="bryan" src="${this.img}"/>
    <div class="content">
      <h2 class="name">${this.name}</h2>
      <table class="stats">
        <tr>
          <th>Height</th>
          <th>Weight</th>
        </tr>
        <tr>
          <td>${this.height}</td>
          <td>${this.weight}<br> (pure muscle)</td>
        </tr>  
      </table>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot name="description">Bryan</slot>  
          <button class="details" ><a href="${this.details}" target="_blank">Details</a></button>
        </div>
        </details>    
    </div>
  </div>
  </div>`;
  }

  static get properties() {
    return {
      fancy : {type : Boolean, reflect : true},
      name : {type : String},
      img : {type : String},
      height : {type : String},
      weight : {type : String},
      details : {type : String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
