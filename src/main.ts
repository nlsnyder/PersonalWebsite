import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import PrimeVue from "primevue/config";
import router from "./router/router.ts";
import {
  faUser,
  faBars,
  faCircleXmark,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faUser, faBars, faCircleXmark, faSchool, faLinkedin, faGithub);

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
