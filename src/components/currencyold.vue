<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col bg--light mx-auto" cols="10" md="12" lg="9" xl="6" >
          <h1 class="text-center mb-4">Currency Converter</h1>
          <div class="row" justify="space-between" no-gutters>
            <div class="col" cols="12" md="5">
              <div class="row" no-gutters>
                <div class="col px-1" cols="3">
                  <select @change="convert" v-model="selected[0]" :items="countries" label="I have">
      <option v-for="(item,id) in fetchedData" :key="id">{{item.currency_from}}</option>
    </select>
                </div>

                <div class="col px-1"  cols="9">
                  <input @input="convert" v-model="inputed" :rules="[rules.onlyNumbers]"/>
                </div>
              </div>
      </div>

            <div class="col d-flex justify-center align-center" cols="2" offset="5" offset-md="0" >
              <img class="exchange" :src="require('@/assets/images/exchange.png')" alt="Exchange">
            </div>

            <div class="col" cols="12" md="5">
              <div class="row" no-gutters>
                <div class="col px-1"  cols="9">
                  <input v-model="result" type="number" readonly/>
                </div>

                <div class="col px-1" cols="3">
                  <select @change="convert" v-model="selected[1]" :items="countries" label="I want to buy">
                     <option v-for="(item,id) in fetchedData" :key="id">{{item.currency_to}}</option>
                  </select>
                </div>
              </div>
        </div>
      </div>
    </div>
      </div>
    </div>  </div>

</template>

<script>
import axios from 'axios';
// const axios = require('axios').default;
export default {
  name: 'App',
  data() {
    
    return {
       fetchedData: [],
      valutes: {},
      selected: ['RUB', 'USD'],
      inputed: "",
      result: null,
      countries: ['RUB'],
      rules: {
        onlyNumbers: (value) => {
          const pattern = /^\d+$/.test(value);
          if (!pattern) this.inputed = this.inputed.replace(/\D/g, '');
          return true;
        }
      }
    }
  },
  methods: {
  grabData: function() {
      let that = this
      
      axios.get('http://fundstrans.net/api/rates')
        .then(function (response) {
          that.fetchedData = response.data
          console.log(that.fetchedData)
        })
      
    },

    
    convert() {
      // Default valute values / RUB
      let defaultValute = {
        Value: 1,
        Nominal: 1
      };
      // First selected valute details
      let firstValute = this.valutes[this.selected[0]] ?? defaultValute,
          firstValuteValue = firstValute.Value * Number(this.inputed),
          firstValuteNominal = firstValute.Nominal;
          console.log("first input is"+this.inputed);
          console.log("first selection is"+this.selected[0]);
      // Second selected valute details
      let secondValute = this.valutes[this.selected[1]] ?? defaultValute,
          secondValuteValue = secondValute.Value,
          secondValuteNominal = secondValute.Nominal;
           console.log("second selection is"+ this.selected[1] );
            
      // Result calculating
      let result = (firstValuteValue / firstValuteNominal) / (secondValuteValue / secondValuteNominal);
       console.log("second input"+ result );
      // Rounding to ten thousandths
      this.result = result ? Math.floor(result * 10000) / 10000 : null;
    }
  },
   created: function() {
    this.grabData()
  },
  // mounted() {
  //   // Request to API URL, getting response
  //   axios
  //     .get('https://www.cbr-xml-daily.ru/daily_json.js')
  //     .then(response => {
  //       this.valutes = response.data.Valute;
  //       // Adding all charCodes to array
  //       for (let code in response.data.Valute) {
  //         this.countries.push(code);
  //        console.log(this.countries);


  //       }
  //     })
  //     .catch(error => {
  //       console.log("error in currency is"+error)


  //     })
  // },
};
</script>
<style >

.bg--light {
  background: #fcfcfc;
}
.exchange {
  max-width: 50px;
}
</style>