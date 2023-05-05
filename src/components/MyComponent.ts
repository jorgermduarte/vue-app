import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const message = ref('Hello, Vue!');
    const clickHandler = () => {
      alert('You clicked me!');
    };

    return {
      message,
      clickHandler,
    };
  },
});
