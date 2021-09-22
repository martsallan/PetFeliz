<template>
  <div class="pageContainer">
    <div class="messageContainer">
      <div class="messageContent">
        <h1>Pedido aprovado! ✅</h1>
        <h3>Verifique os detalhes de sua compra em seu email.</h3>
        <div class="backButton">
          <router-link to="/">
            <button>
              <img src="/arrow-back.svg" width="40" height="40" alt="Voltar" />
              <span>Voltar para a página principal</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    
}
</script>


<style lang="scss">
.pageContainer {
  padding-top: 10rem;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .messageContainer {
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .messageContent {
      .backButton {
        padding-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;

          span {
            padding-left: 0.5rem;
            font-weight: bold;
          }

          &:hover {
            filter: invert(65%) sepia(93%) saturate(7428%) hue-rotate(241deg)
              brightness(86%) contrast(106%);
          }
        }
      }
    }
  }
}
</style>
