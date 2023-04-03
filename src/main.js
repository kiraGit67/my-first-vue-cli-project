import { createApp } from "vue";
import App from "./App.vue";

import BaseButton from "@/components/BaseButton";
import HelloWorld from "@/components/HelloWorld";
import router from "./router";

const app = createApp(App).use(router);
app.component("BaseButton", BaseButton);
app.component("HelloWorld", HelloWorld);
app.mount("#app");
