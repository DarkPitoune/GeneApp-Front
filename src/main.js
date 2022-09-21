import { createApp } from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import { Markdown } from "vue3-markdown-it";
import router from "./router";

import { uniSearch } from "vue-unicons/dist/icons";

Unicon.add([uniSearch]);

createApp(App).use(router).use(Unicon).use(Markdown).mount("#app");
