// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});


const nearby_details = [
  { "duration": 4, "desc": "minutes to the Finch subway station", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 2, "desc": "minute to the Finch bus stop", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 2, "desc": "minute walk to Hendon Park", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 7, "desc": "minute walk to Edithvale Community Centre",
  "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 7, "desc": "minute bike ride to Yound & sheppard", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 5, "desc": "minutes walk to shops & restaurants", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 16, "desc": "minute drive to York University", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 40, "desc": "minute subway ride downtown", "img": "images/demo-page-assets/img-block-1.png" },
]

nearby_details.forEach(item => {
  let elem = document.getElementById("id-block-minutes-from"),
  addAdditionalPadding = item.duration > 10 ? "additional-padding" : "";

  let desc = item.desc.replace(/minute/, "minute <br>");

  elem.insertAdjacentHTML("beforeend",`
                            <div class="col-lg-4 col-md-5 col-sm-8 block">
                                <div class="p-4 pe-2">
                                    <div class="row">
                                        <div class="col-2 sec-left">
                                            <span class="text-pri">${item.duration}</span>
                                        </div>
                                        <div class="col-8 sec-right">
                                          <div class=" ${addAdditionalPadding}">
                                            <span class="text-sec fs-4">
                                                ${desc}
                                            </span>
                                          </div>
                                          <img src="${item.img}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                  `);  
});

const connectivity_details = [
  { "duration": 60, "desc": "Bike Score", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 96, "desc": "Transit Score", "img": "images/demo-page-assets/img-block-1.png" },

  { "duration": 64, "desc": "Walk Score", "img": "images/demo-page-assets/img-block-1.png" },
]

connectivity_details.forEach(item => {
  let elem = document.getElementById("id-block-connectivity"),
  addAdditionalPadding = item.duration > 10 ? "additional-padding" : "";

  let desc = item.desc.replace(/$/, "<br><br>");

  elem.insertAdjacentHTML("beforeend",`
                            <div class="col-lg-4 col-md-5 col-sm-8 block">
                                <div class="p-4 pe-2">
                                    <div class="row">
                                        <div class="col-2 sec-left">
                                            <span class="text-pri">${item.duration}</span>
                                        </div>
                                        <div class="col-8 sec-right">
                                          <div class=" ${addAdditionalPadding}">
                                            <span class="text-sec fs-4">
                                                ${desc}
                                            </span>
                                          </div>
                                          <img src="${item.img}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                  `);  
});
