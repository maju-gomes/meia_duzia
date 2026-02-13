<template>
  <div class="container">

    <form>
      <label>E-mail:</label> <br>
      <input type="text" class="input" /> <br>

      <label>Senha:</label> <br>
      <input type="password" class="input" />

      <input type="submit" value="Entrar" />

      <p>
        Não tem uma conta?
        <a href="#">Cadastre-se</a>
      </p>
    </form>

  </div>
</template>
<!--------------JS-------------->

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 600px;
  height: 350px;
}

form {
  margin-top: 30px;
  font-family: 'League Spartan';
}

.input {
  width: 400px;
  height: 25px;
  padding-inline: 5px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid black;
}

input[type="submit"]{
  font-family: 'League Spartan';
  display: block;
  margin: 3rem auto 0;
  height: 30px;
  width: 60px;
  border: none;
  border-radius: 10px;
  background-color: #992525;
  color: white;
}

p {
  margin-top: 10px;
  font-size: small;
  text-align: center;
}

a {
  color:blue;
  text-decoration: underline;
}
</style>
