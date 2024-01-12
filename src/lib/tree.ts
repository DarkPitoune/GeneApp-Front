import fetchApi from "./strapi";
import { Profile, ProfileResponse } from "@interfaces/profile";

export default class Tree extends HTMLElement {
  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    const idPersonne = urlParams.get("idPersonne");
    if (!idPersonne) throw new Error("idPersonne is required");
    this.init(idPersonne);
  }

  async init(idPersonne: string) {
    return this.getPerson(idPersonne).then((person) => {
      this.drawPerson(person.attributes);
    });
  }

  async getPerson(id: string) {
    return fetchApi({
      endpoint: `/personnes/${id}`,
      wrappedByKey: "data",
    }) as Promise<ProfileResponse>;
  }

  drawPerson(profile: Profile) {
    const canvas = this.querySelector("canvas");
    var ctx = canvas.getContext("2d");

    var boxWidth = 100;
    var boxHeight = 100;
    var x = (canvas.width - boxWidth) / 2;
    var y = (canvas.height - boxHeight) / 2;
    var radius = 10; // radius for rounded corners

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + boxWidth - radius, y);
    ctx.arcTo(x + boxWidth, y, x + boxWidth, y + radius, radius);
    ctx.lineTo(x + boxWidth, y + boxHeight - radius);
    ctx.arcTo(
      x + boxWidth,
      y + boxHeight,
      x + boxWidth - radius,
      y + boxHeight,
      radius,
    );
    ctx.lineTo(x + radius, y + boxHeight);
    ctx.arcTo(x, y + boxHeight, x, y + boxHeight - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.fill();

    ctx.strokeStyle = "black"; // set border color
    ctx.stroke(); // draw border

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(profile.Nom, x, y + boxHeight / 2);
  }
}
