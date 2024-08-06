import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

const components = import.meta.glob('./components/**/*.vue');

for (const path in components) {
  const componentName = path
    .split('/')
    .pop()
    .replace('.vue', '');
  app.component(componentName, defineAsyncComponent(components[path]));
}

app.use(router);
app.use(pinia);
app.mount('#app');
