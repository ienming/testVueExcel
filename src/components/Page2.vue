<template>
  <div>
    <p v-for="datum of data" :key="datum.SiteName">{{ datum.County }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Page2",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    document.title = "Page2"

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