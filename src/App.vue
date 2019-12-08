<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Resize 
      @resize="handleResize" 
      :identity="+new Date()" 
      class="resize"
      width="300px"
      height="300px"
      maxHeight="500px" 
      maxWidth="800px" 
      minHeight="200px" 
      minWidth="200px">
      <div class="resize-box">
        dsdddd
      </div>
    </Resize> 
  </div>
</template>

<script>

export default {
  name: 'app',
  
  methods: {
    handleResize({ event, ui }) {
      console.log(event, ui)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.resize-box{
  width: 800px;
  /* height: 300px; */
  /* background-color: bisque */

}
.resize {
  /* min-width: 500px; */
  /* height: 400px; */
  /* background-color: aquamarine; */
}
.resizable {
  background-color: bisque
}
.box {
  min-width: 100px;
  min-height: 100px;
  max-width: 800px;
  max-height: 800px
}
</style>
