import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

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
    this.details = "https://hax.psu.edu/"
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container{
        display: flex;
      }
      .card{
        background-image: url("https://t4.ftcdn.net/jpg/11/41/18/39/360_F_1141183983_gfTMXnyOToTayLmNmvXgfvD6sok94hRL.jpg");
        width: 400px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 10px;
        border: 5px solid #333333;
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
      <button class="details" ><a href="${this.details}">Details</a></button>
    </div>
  </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
