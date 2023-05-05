/* eslint-disable @typescript-eslint/ban-ts-comment */
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'CustomScene',
  mounted() {
    const fireflies = document.querySelectorAll('.firefly');

    fireflies.forEach((firefly) => {
      const duration = Math.random() * 2;
      const delay = Math.random() * 2;
      // @ts-ignore
      firefly.style.animationDuration = `${duration}s, ${duration * 2}s`;
      // @ts-ignore
      firefly.style.animationDelay = `${delay}s, ${delay * 2}s`;
      // @ts-ignore
      firefly.style.left = `${Math.random() * 80}vw`;
      // @ts-ignore
      firefly.style.top = `${Math.random() * 80}vh`;
    });
  },
});
