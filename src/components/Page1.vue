<template>
  <div>
    <p v-for="datum of data" :key="datum.SiteName">{{ datum.SiteName }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Page1",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    document.title = "Page1"
    
    // Test for API
    let api = "http://opendata2.epa.gov.tw/AQI.json";
    Vue.axios.get(api).then((response) => {
      //response is an JSON object
      console.log(Array.isArray(response.data));
      this.data = response.data;
    });
  },
};
</script>