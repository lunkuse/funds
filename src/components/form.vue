<template>
  <div class="card sendMoney" >
      <div class="card-body sendMoneyWidget" >
          <div class="col-md-12 mt-3" >
              <div class="card inputCard" >
                  <div class="card-body" >
                      <h6 >You Send</h6><div class="sending text-center" >
                          <input id="currencyInput" class="currency-input text-primary" type="text" 
                          inputmode="decimal" >
                          
                          <img class="country-flag" src="/img/nl.1f96343b.png" >
                          <h6 class="country-name" >EUR</h6>
                          </div></div></div></div>
                          <div class="col-md-12 input1 mt-2 mb-3" >
                              <div class="rate text-center" >
                                  <svg class="svg-inline--fa fa-long-arrow-alt-up fa-w-8"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                                  <path fill="currentColor" d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path></svg>
                                  <!-- <i class="fas fa-long-arrow-alt-up" >
                                      </i> Font Awesome fontawesome.com -->
                                  <svg class="svg-inline--fa fa-long-arrow-alt-down fa-w-8"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""
                                  ><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg>
                                  <!-- <i class="fas fa-long-arrow-alt-down" ></i> Font Awesome fontawesome.com --> 1 EUR = UGX 4920.2594</div><div class="card inputCard" >
                                      <div class="card-body" >
                                      <h6 >They get</h6><div class="sending" >
                                          <input class="currency-input text-primary" type="text" inputmode="decimal" >
                                          <img class="country-flag" src="/img/Ug-flag.967e7ecc.png" >
                                          <h6 class="country-name" >UGX</h6>
                                          <div class="search-container" id="search" >
                                              <div class="search-button" >
                                                  <svg role="button" class="svg-inline--fa fa-chevron-down fa-w-14 search-label" 
                                                  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg><!-- <i role="button" class="fas fa-chevron-down search-label" ></i> Font Awesome fontawesome.com -->
                                          </div><!----></div></div></div></div><!----><!----><!----></div></div>
                                          </div>
</template>

<script>
export default {
  name: 'form',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg:not(:root).svg-inline--fa {
    overflow: visible;
}

.svg-inline--fa.fa-w-8 {
    width: 0.5em;
}

.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
</style>
