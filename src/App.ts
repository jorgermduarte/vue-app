import {defineComponent} from 'vue';
import MyComponent from './components/MyComponent.vue';
import CustomScene from './components/CustomScene.vue';


export default defineComponent({
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  components: {
    MyComponent,
    CustomScene,
  },
});
