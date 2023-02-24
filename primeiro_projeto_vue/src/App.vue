<script>
export default {
  data() {
    return {
      num1:0,
      num2: 0,
      operacao:'soma',
      resultado: 0,
    };
  },
  methods: {
    calcular(){
      switch (this.operacao) {
        case 'soma':
          this.resultado = this.num1 + this.num2;
          break;
        case 'subtracao':
            this.resultado = this.num1 - this.num2;
            break;
        case 'divisao':
            this.resultado = this.num1 / this.num2;
            break;
        case 'multiplicacao':
            this.resultado = this.num1 * this.num2;
            break;
      }
    },
  },
};
</script>

  <template>
  <div>
    <h1>Calculadora Aritmética</h1>
    <input v-model.number = "num1" type="number" placeholder="Número 1"> 
    <select v-model = "operacao" @change="calcular">
      <option value="soma">+</option>
      <option value="subtracao">-</option>
      <option value="divisao">/</option>
      <option value="multiplicacao">*</option>
    </select>
    <input v-model.number="num2" type="number" placeholder="Número 2">
    <h2>Resultado: {{ resultado }}</h2>
  </div>
</template>

