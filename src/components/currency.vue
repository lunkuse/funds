<template>
  <div>






  
    <div class="container">
      <div class="row">
        <div class="col bg--light mx-auto" cols="10" md="12" lg="9" xl="6" >
         
          <div class="row" justify="space-between" no-gutters>
            <div class="col" cols="12" md="5">
              <div class="row" no-gutters>
                <div class="col px-1" cols="3">
                  
                  <select @change="onchange" v-model="currency_from" :items="countries" label="I have">
                    <option selected disabled>Choose Currency</option>
      <option v-for="(item,id) in fetchedData" :key="id" :value="item.currency_from">{{item.currency_from}}</option>
    </select>
    
                </div>

                <div class="col px-1"  cols="9">
                  <input @input="onchange($event.target.value)" v-model="inputed" :rules="[rules.onlyNumbers]"/>
                </div>
              </div>
      </div>

            <div class="col d-flex justify-center align-center" cols="2" offset="5" offset-md="0" >
              <img class="exchange" :src="require('@/assets/images/exchange.png')" alt="Exchange">
            </div>

            <div class="col" cols="12" md="5">
              <div class="row" no-gutters>
                <div class="col px-1"  cols="9">
                  <input v-model="result" type="number" @input="onchange2($event.target.value)" />
                </div>

                <div class="col px-1" cols="3">
                  <select @change="onchange" v-model="currency_to" :items="countries" label="I want to buy">
                     <option v-for="(item,id) in fetchedData" :key="id" :value="item.currency_to">{{item.currency_to}}</option>
                  </select>
                </div>
              </div>
        </div>
      </div>
    </div>
      </div>
    </div> 
    
    
    
    
    
    
    
    
    
    
    
    
     </div>

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

      inputed: "",
      currency_to:"EUR",
      currency_from:"UGX",
      result: null,
     
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
      
      axios.get('http://fundstrans.net/api/rates')
        .then( (response) =>{
          this.fetchedData = response.data
          console.log(this.fetchedData)
        })
      
    },

    onchange(){
    
    const exchange = this.fetchedData.filter((element) =>(element.currency_from == this.currency_from && element.currency_to == this.currency_to) )[0];
    
      this.result = this.inputed * exchange.rate;
      // this.result = this.inputed * exchange.rate;
    },
     onchange2(){
    
    const exchange = this.fetchedData.filter((element) =>(element.currency_from == this.currency_from && element.currency_to == this.currency_to) )[0];
    
      this.inputed = this.result / exchange.rate;
      // this.result = this.inputed * exchange.rate;
    },
     
    convert() {
       
    }
  },
  mounted() {









  },

 
   created: function() {
    this.grabData()
  },
 
};
</script>
<style >

.bg--light {
  background: #fcfcfc;
}
.exchange {
  max-width: 50px;
}

/*
Make bootstrap-select work with bootstrap 4 see:
https://github.com/silviomoreto/bootstrap-select/issues/1135
*/

:focus{
  outline:none;
}

.bootstrap-select .dropdown-toggle:focus{
  outline:none !important;
  box-shadow:none;
}

.dropdown-toggle.btn-default {
  color: #292b2c;
  background-color: #fff;
  border-color: #ccc;
}
.bootstrap-select.show > .dropdown-menu > .dropdown-menu {
  display: block;
  height:100%;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li.hidden {
  display: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a {
  display: block;
  width: 100%;
  padding: 3px 1.5rem;
  clear: both;
  font-weight: 400;
  color: #292b2c;
  text-align: inherit;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  text-decoration: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a:hover {
  background-color: #f4f4f4;
}
.bootstrap-select > .dropdown-toggle {
  width: 100%;
}
.dropdown-menu > li.active > a {
  color: #fff !important;
  background-color: #337ab7 !important;
}
.bootstrap-select .check-mark {
  line-height: 14px;
}


.bootstrap-select .check-mark::after {
  font-family: "FontAwesome";
  content: "\f00c";
}
.bootstrap-select button {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Make filled out selects be the same size as empty selects */
.bootstrap-select.btn-group .dropdown-toggle .filter-option {
  display: inline !important;
}

/*customized*/

 .img-flag {
    height: 26px;
    width: 26px;
   margin-top:-4px;
   margin-right:5px;
}

.bootstrap-select.btn-group > .dropdown-menu {
    width: calc(100% + 14px);
    margin-left: -7px;
    height:200px;
}

.bootstrap-select > .dropdown-menu > .dropdown-menu li.selected a{
    background-color:#810102;
    color:white;
}

.bootstrap-select > .dropdown-menu > .dropdown-menu li a:hover{
    background-color:#da7e01;
    color:white;
}

.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark{
  display:none;
}

.dropdown-menu, .bootstrap-select.form-control{
  border:none;
 padding-top: 0px;
  padding-bottom:0px;
  /*max-height:200px !important;*/
    border-radius: 0;
  font-weight:400;
        border-style: solid;
    border-width: 7px 7px 7px 7px;
    -moz-border-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/scrolldown.png) 7 7 7 7 fill stretch repeat;
    -webkit-border-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/scrolldown.png) 7 7 7 7 fill stretch repeat;
    -o-border-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/scrolldown.png) 7 7 7 7 fill stretch repeat;
    border-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/scrolldown.png) 7 7 7 7 fill stretch repeat;
    background:none;
}

.bootstrap-select > .dropdown-menu > .dropdown-menu li a{
    color:#b3a684;
}

.bootstrap-select > .dropdown-menu > .dropdown-menu li a{
  padding:6px;
  
}

.bootstrap-select.form-control{
  height:44px;
}

.bootstrap-select.form-control .btn{
  background:none;
  color:white;
  border:none;
  padding:3px;
  padding-right:25px;
  font-size:18px;
}

.bootstrap-select.btn-group .dropdown-toggle .bs-caret{
  position:absolute;
   top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    margin-right: -1px;
    width: 32px;
    height: 32px;
    background: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/ScrolldownButton.png);
    background-position: left top;
}

.bootstrap-select.btn-group .dropdown-toggle:hover .bs-caret{
   background-position: left center;
}

.bootstrap-select.btn-group .dropdown-toggle:active .bs-caret{
   background-position: left bottom;
}

.bootstrap-select.show .dropdown-toggle .bs-caret{
   background-position: center top;
}

.bootstrap-select.show .dropdown-toggle:hover .bs-caret{
   background-position: center center;
}

.bootstrap-select.show .dropdown-toggle:active .bs-caret{
   background-position: center bottom;
}


/*scroll*/

.mCSB_inside>.mCSB_container{
        margin-right:38px;
    }

   .mCSB_inside>.mCSB_container{
    margin-right:34px;
   }

   .mCSB_scrollTools{
        width:33px;
        min-height:10px;
        opacity:1;
    }

     .mCSB_scrollTools .mCSB_buttonUp{
        background-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/ScrollArrowBottom.png);
        width:33px;
        height:33px;
        left:0;
        right:0;
        margin:auto;
        background-position:right top !important;
        opacity:1;
    }


     .mCSB_scrollTools .mCSB_buttonDown{
        background-image: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/ScrollArrowBottom.png);
        width:33px;
        height:33px;
        left:0;
        right:0;
        margin:auto;
        background-position:left top !important;
        opacity:1;
    }

   .mCSB_scrollTools .mCSB_buttonUp:hover{
        background-position:right -33px !important;
    }

    .mCSB_scrollTools .mCSB_buttonDown:hover{
        background-position:left -33px !important;
    }

    .mCSB_scrollTools .mCSB_buttonUp:active{
        background-position:right -66px !important;
    }

   .mCSB_scrollTools .mCSB_buttonDown:active{
        background-position:left -66px !important;
    }

     .mCSB_scrollTools a+.mCSB_draggerContainer{
        margin-top:35px;
        margin-bottom:33px;
    }

     .mCS-light-2.mCSB_scrollTools .mCSB_draggerRail{
        width:100%;
        background:url("https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/scrollbar-vertical.png");
    }

.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    width: 100%;
    background: url(https://raw.githubusercontent.com/cromartie1984/diablo3-project/master/ScrollButton.png);
    background-position: left top !important;
}
     .mCSB_scrollTools .mCSB_dragger{
        width:25px;
        height: 35px;
        left:0;
        right:0;
        margin:auto;
    }
</style>