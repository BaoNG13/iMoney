import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "./utils/import";
import { auth } from "./configs/firebase";

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        registerGlobalComponent(app);
        
        app.use(router);
        
        app.mount("#app");
        
    }
});
