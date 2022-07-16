<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, inject } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
const locale = ref("en");
const updateValidationLocale = inject("updateValidationLocale");
function updateLocale() {
  if (locale.value === "ja") {
    locale.value = "en";
  } else {
    locale.value = "ja";
  }
  updateValidationLocale(locale.value);
}
// import { Button } from '@ulissesferreira/moon'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Button label="hey" />
  <Input label="email" fieldId="123" />
  <Alert />
  <Button label="change locale" @click="updateLocale" />
  {{ locale }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
