<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="clickHandler">Click me</button>
  </div>
</template>

<script lang="ts" src="./MyComponent.ts"></script>

<style scoped>
  h1 {
    color: blue;
  }
</style>
