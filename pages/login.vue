<template>
<div class="centering_parent">
  <div  class="centering_item">
  <h1>ログインユーザ</h1>
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="user.email">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" v-model="user.password">
    </div>
    <button type="submit">ログイン</button>
  </form>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      loginUser(){
        this.$auth.loginWith('local',{
          data:this.user
        })
      },
    }
  }
</script>

<style scoped>
.centering_parent {
    padding: 20px;              /* 余白指定 */
}

.centering_item {
    display: block;
    width: 700px;               /* 幅指定 */
    margin:  0 auto;            /* 中央寄せ */
    background-color:  #ddd;    /* 背景色指定 */

}
</style>