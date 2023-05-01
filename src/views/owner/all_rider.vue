<template>
  <div class="member">
    <h3>
        All Rider
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member :"",
      list: [],
    }
  },
  created () {
    this.getRead()  
  },
  methods: {
    getRead() {
      console.log(18)
      let uri = "http://localhost:3000/member";
      this.axios.get(uri,{})
      .then((response) => {
        console.log(response.data)
        if(response.data.status == 'success'){
          this.list =response.data
        }
      })
      // if(this.email === 'admin'&&this.password === '1234')this.$router.push("/");
    },
  },
}
</script>

<style>

</style>