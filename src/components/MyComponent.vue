<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="clickHandler">Click me</button>
  </div>
</template>

<script lang="ts" src="./MyComponent.ts"></script>

<style scoped>
  button{
    background-color: #41b883;
    border: none;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  button:hover{
    background-color: #3f8fba;
  }
</style>
