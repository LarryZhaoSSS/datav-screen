import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCountTo from "./components/count-to/count-to.vue";
createApp(App)
  .use(router)
  .use(store)
  .component("count-to", VueCountTo)
  .mount("#app");
