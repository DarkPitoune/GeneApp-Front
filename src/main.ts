import { createApp } from "vue";
import App from "./App.vue";
import { Markdown } from "vue3-markdown-it";
import router from "./router";

createApp(App).use(router).use(Markdown).mount("#app");
