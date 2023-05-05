/* eslint-disable @typescript-eslint/ban-ts-comment */
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'CustomScene',
  data() {
    return {
      fireflies: Array(50).fill(0).map(() => ({
        duration: Math.random() * 2,
        delay: Math.random() * 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    };
  },
  mounted() {
    setInterval(() => {
      this.fireflies = this.fireflies.map((firefly) => ({
        ...firefly,
        left: Math.random() * 95,
        top: Math.random() * 95,
      }));
    }, 2000); // Muda a posição dos pirilampos a cada 2 segundos
  },
});
