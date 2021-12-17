<template>
  <div id="page">
  
    <header id="home">
      <div class="header-top bg-translucent text-white py-2">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <div class="header-top-contact" data-aos="fade-right">
                <ul>
                  <li>
                    <i class="fas fa-phone"></i><span>Phone:</span> +31 (0)
                    208087079
                  </li>

                  <li>
                    <i class="far fa-envelope"></i
                    ><span>Email:</span> csc@fundstrans.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="header-top-social" data-aos="fade-left">
                <ul>
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-rss"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-spy="affix" data-offset-top="50" data-offset-bottom="50">
        <nav
          class="
            navbar
            funds
            navbar-expand-lg navbar-dark
            bg-translucent
            py-md-4
            navbar-fixed-top
          "
        >
          <div class="container">
            <a class="navbar-brand p-0 d-flex" href="#" data-aos="flip-up">
              <img
                src="@/assets/images/logo.png"
                class="img-responsive"
                alt="Fundstrans"
              />
            </a>

            <button
              class="navbar-toggle collapsed navbar-toggler navbar-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="toggle"
              data-name="show"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <!--nav bar links-->
              <ul
                class="nav navbar-nav navbar-right ms-auto"
                data-aos="zoom-in"
              >
                <li class="nav-item" >
                  <a
                    class="nav-link "
                    href="#home"
                    data-mdb-smooth-scroll="smooth-scroll"
                 style="font-weight:900; font-size: 1.5rem;
    padding: 0.75rem 0;"
                    ><span >Home</span></a
                  >
                </li>
                <li class="nav-item" >
                  <a
                    class="nav-link"
                    href="#howitworks"
                    data-mdb-smooth-scroll="smooth-scroll"
                     style="font-weight:900;"
                    >How it works</a
                  >
                </li>
                <li class="nav-item" >
                  <a
                    class="nav-link"
                    href="#faq"
                    data-mdb-smooth-scroll="smooth-scroll"
                     style="font-weight:900;"
                    >Help</a>
                </li>
                <li class="nav-item" >
                  <a
                    class="nav-link"
                    href="#contactus"
                    data-mdb-smooth-scroll="smooth-scroll"
                     style="font-weight:900;"
                    >Contact Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#aboutus"
                    data-mdb-smooth-scroll="smooth-scroll"
                    style="display: none"
                    
                    >About Us</a
                  >
                </li>
                <li class="nav-item" style="display: none">
                  <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item" style="display: none">
                  <a  class="nav-link" href="#" style="color: white">Signup</a>
                </li>



  



                <li class="nav-item dropdown">
                  <a
                    class="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    
                  >
                    <img src="@/assets/images/usa-flag.png" class="img-sm" alt=""
                  /> 
                  <span class="ti-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu " aria-labelledby="navbarDropdown" 
                  style=" border: 1px solid #ddd; padding:10px; ">
                   
                   <!-- English -->
                   <li translate="no" style=" border-bottom: 1px solid #ddd; padding-right: 20px !important;">
<a href="#" onclick="doGTranslate('ru|en');return false;" title="English" class="country-flag dropdown-item"
   ><img src="@/assets/images/English.png"  style="height: 40px; width: 40px;"
    class="img-sm me-2 img-responsive"
                                               alt="English"/> English</a>

</li>



    <!-- Dutch -->

                    <li style=" border-bottom: 1px solid #ddd; " translate="no" >
                      <a class="country-flag dropdown-item" href="#"
                        onclick="doGTranslate('en|nl');return false;" title="Nederlands">
                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/Dutch.png"
                          class="img-sm me-2"
                          alt="Nederlands"
                        />
                        Nederlands 
                      </a>
                    </li>
                   
                   
                   <!-- french -->
                    <li translate="no" style=" border-bottom: 1px solid #ddd; padding-right: 20px !important;">
                    
                      <a class="country-flag dropdown-item" href="#" 
                      onclick="doGTranslate('en|fr');return false;" title="français">
                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/French.png"
                          class="img-sm me-2 img-responsive"
                          alt="français"
                        />
                        français
                      </a>
                    </li>

<!-- Spanish -->

                    <li translate="no" style=" border-bottom: 1px solid #ddd;">
                      <a class="country-flag dropdown-item" href="#"
                        onclick="doGTranslate('en|es');return false;" title="Español">
                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/Spanish.png"
                          class="img-sm me-2"
                          alt="Español"
                        />
                        Español
                      </a>
                    </li>

                
<!-- Germany -->

                    <li translate="no" style=" border-bottom: 1px solid #ddd;">
                      <a class="country-flag dropdown-item" href="#"
                        onclick="doGTranslate('en|de');return false;" title="Deutsch">
                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/German.png"
                          class="img-sm me-2"
                          alt="Deutsch"
                        />
                       Deutsch
                      </a>
                    </li>
<!-- chinese -->



                    <li  style=" ">
                      <a class="country-flag dropdown-item" href="#"
                        onclick="doGTranslate('en|zh-CN');return false;" title="中国人">
                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/Chinese.png"
                          class="img-sm me-2"
                          alt="中国人"
                        />
                       中国人
                      </a>
                    </li>




                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          class="text-white text-center p-3 shadow"
          style="background-color: #2295ed"
        >
          <p style="font-size: 18px">
            <a 
              href="https://myaccount.fundstrans.net/"
              class="link card-link text-white text-decoration-underline"
              >Signup</a
            >
            today and get your first transfer fee-free!
          </p>
        </div>
      </div>
    </header>

<!-- <fake3d-image-effect
v-once
    style="height: auto"
    centered
    fill-height-content
      tag="div"
      class="banner"
    image="~@/assets//images/bg/banner-bg.jpg" 
    image-map="~@/assets/images/bg/banner-map.jpg"

  > -->



			
		


 <div class="hero-section banner " style="height: auto; text-align: center ">
      <div class="container ">
        <div class="row ">


 
<!-- exchange rate table -->
          <div
            class="col-12 col-lg-4 col-xl-5 spacing"
           
          >
            <div
              class="hero-image-container card shadow text-center border-0"
              style="float: left; "
              data-aos="zoom-in"
            >
              <div
                class="card-header text-white"
                style="background-color: #2295ed;  border-radius: 2.25rem 2.25rem 0rem 0rem;"
              >
                <div class="card-title">
                  <span class="ti-gift text-white d-block fs-2 mb-2"></span>
                  Exchange Rate
                </div>
              </div>

              <div class="card-body" style=" margin: 20px; ">
                <div class="card card-body px-0 shadow-sm text-start">
                  <div class="text-center text-muted"><h6>You send</h6></div>
                  <div class="dropdown d-flex row m-0">
                    <div class="col-6">
                      

  <input @input="onchange($event.target.value)" v-model="inputed" :rules="[rules.onlyNumbers]"
  class="form-control"
  type="number" style="color: #2295ed"/>



                    </div>
 <div
                   
                      class="col-6"
                      id="oDest"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    
                  <!-- <select @change="onchange" v-model="currency_from" :items="countries" label="I have">
                    <option selected disabled>Choose Currency</option>
      <option v-for="(item,id) in fetchedData" :key="id" :value="item.currency_from">{{item.currency_from}}</option>
    </select> -->
 
 <select class="form-control " @change="onchange" v-model="currency_from" data-show-subtext="false" data-live-search="true">
       
        <option value='UGX'> UGX</option>
        <option value='EUR'>EUR</option>
        <option value='GBP'>GBP</option>
         <option value='KES'>KES</option>
         <option value='USD'>USD</option>
      
      </select>
      </div>



                    <div
                    style="display:none"
                      class="col-6"
                      id="oDest"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button class="btn btn-xl d-block w-100 dropdown-toggle" translate="no">
                        <img
                          src="@/assets/images/usa-flag.png"
                          class="img-sm me-3"
                          alt=""
                        />
                        USD
                      </button>
                    </div>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end
                        shadow
                        w-100
                        fs-3
                        mt-2
                        pt-0
                      "
                      aria-labelledby="oDest"
                    >
                      <li class="input-group">
                        <span class="input-group-text">
                          <i class="fa fa-search text fs-4"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control p-3"
                          placeholder="search"
                        />
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                          
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/usa-flag.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            United States
                          </span>
                          <span translate="no">USD</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/frn-flag.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            France
                          </span>
                          <span translate="no">EUR</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/nl.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            Netherlands
                          </span>
                          <span translate="no">EUR</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/nl.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            Netherlands
                          </span>
                          <span>EUR</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="py-2 rate">
                  <svg
                    class="svg-inline--fa fa-long-arrow-alt-up fa-w-8"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-up"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M88 166.059V468c0 6.627 
                                  5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"
                    ></path>
                  </svg>
                  <!-- <i class="fas fa-long-arrow-alt-up" >
                                      </i> Font Awesome fontawesome.com -->
                  <svg
                    class="svg-inline--fa fa-long-arrow-alt-down fa-w-8"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"
                    ></path>
                  </svg>

                  1 EUR = UGX 4920.2594
                </div>

                <div class="card card-body px-0 shadow-sm text-start">
                  <div class="text-center text-muted"><h6>They get</h6></div>
                  <div class="dropdown d-flex row m-0">
                    <div class="col-6">
                      

 <input v-model="result" type="number" @input="onchange2($event.target.value)" 
  class="form-control " style="color: #2295ed"/>




                    </div>

 <div
                   
                      class="col-6"
                      id="oDest"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    
                
 
 
 <select class="form-control" @change="onchange" v-model="currency_to"  data-show-subtext="false" data-live-search="true">
        
        <option value='EUR'>EUR</option>
        <option value='KES'>KES</option>
        <option value='GBP'>GBP</option>
       
         <option value='KES'>KES</option>
         <option value='USD'>USD</option>
       
       
      </select>
      </div>




                    <div
                    style="display:none"
                      class="col-6"
                      id="oDest"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button class="btn btn-xl d-block w-100 dropdown-toggle">
                        <img
                          src="@/assets/images/frn-flag.png"
                          class="img-sm me-3"
                          alt=""
                        />
                        EUR
                      </button>
                    </div>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end
                        shadow
                        w-100
                        fs-3
                        mt-2
                        pt-0
                      "
                      aria-labelledby="oDest"
                    >
                      <li class="input-group">
                        <span class="input-group-text">
                          <i class="fa fa-search text fs-4"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control p-3"
                          placeholder="search"
                        />
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/usa-flag.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            United States
                          </span>
                          <span translate="no">USD</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/frn-flag.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            France
                          </span>
                          <span>EUR</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/nl.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            Netherlands
                          </span>
                          <span>EUR</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <span class="text-muted">
                            <img
                              src="@/assets/images/nl.png"
                              class="img-sm me-3"
                              alt=""
                            />
                            Netherlands
                          </span>
                          <span>EUR</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row my-3" >
                 
                  <label style="display:none;" class="col-4 text-start fs-3" for="">Pay using</label>
                  <div class="col-8">
                    <select style="display:none;" class="form-select form-select-lg">
                      <option value="">Mobile Money</option>
                      <option value="">iDeal</option>
                    </select>
                  </div>
                </div>
                <button 
              
                  type="button"
                  class="effect effect-5 btn btn-xl w-100 mt-3"
                  style="background-color: #2295ed; display:none;"
                  
                >
                  Continue
                </button>

                  <a 
              href="https://myaccount.fundstrans.net/"
              target="_blank" >
                  <button 
                  type="button"
                  class="effect effect-5 btn btn-xl w-100 mt-3"
                  style="background-color: #2295ed;"
                >
                  Proceed
                </button></a>
                
              </div>
            </div>
          </div>
        









        <!-- intro text -->
          <div class="col-12 col-lg-8 col-xl-7" 
        style="margin-top: 5%;"
          >
            <div id="hero-content-container" class=" text-left" >
              <center>
                
                 <h3 style=' color:rgb(255, 255, 255); font-weight:900; font-display: swap;'
                  data-aos="fade-right" class="combined my-3 lead"> Welcome to FundsTrans</h3>
                <h3 data-aos="fade-right" class='combined lead' 
                style=' color:rgb(255, 255, 255);  font-weight:900; font-display: swap;'>Your</h3>
                 <v-row align="center" justify="center">
        <vue-typed-js 
        :strings="['Reliable, Secure,  Fast and Easy' ]" 
        :showCursor="false" 
        :typeSpeed="80"
        :backDelay="5000"
        :backSpeed="100"
        fadeOut="true"
        :loop="true"
       
        translate="yes"
        
        
        >
        
          <h3  class="typing text" style="font-weight:900;"></h3>
        </vue-typed-js>
      </v-row>

 <h3 class="combined my-3 lead" style=' color:rgb(255, 255, 255); font-weight:900; 
                '>Money Transfer Partner</h3>



                
              </center>
            </div>

            <div></div>
          </div>





</div>
<!-- <Translator @on-country-click="customEvent" :countries="arrayOfCountries"  /> -->
      </div>
    </div>
<!-- </fake3d-image-effect> -->

</div>
</template>

<script>
// import { Translator } from 'vue-google-translate';
 import axios from 'axios';
export default {
  name: "Header",
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
   created: function() {
    this.grabData()
  },
  props: 
[
  {
    code: 'en|af',
    title: 'Afrikaans',
  },
  {
    code: 'en|sq',
    title: 'Albanian',
  },
  {
    code: 'en|ar',
    title: 'Arabic',
  },
  {
    code: 'en|hy',
    title: 'Armenian',
  },
  {
    code: 'en|az',
    title: 'Azerbaijani',
  },
  {
    code: 'en|eu',
    title: 'Basque',
  },
  {
    code: 'en|be',
    title: 'Belarusian',
  },
  {
    code: 'en|bg',
    title: 'Bulgarian',
  },
  {
    code: 'en|ca',
    title: 'Catalan',
  },
  {
    code: 'en|zh-CN',
    title: 'Chinese (Simplified)',
  },
  {
    code: 'en|zh-TW',
    title: 'Chinese (Traditional)',
  },
  {
    code: 'en|hr',
    title: 'Croatian',
  },
  {
    code: 'en|cs',
    title: 'Czech',
  },

  {
    code: 'en|da',
    title: 'Danish',
  },
  {
    code: 'en|nl',
    title: 'Dutch',
  },
  {
    code: 'en|en',
    title: 'English',
  },
  {
    code: 'en|et',
    title: 'Estonian',
  },
  {
    code: 'en|tl',
    title: 'Filipino',
  },
  {
    code: 'en|fi',
    title: 'Finnish',
  },
  {
    code: 'en|fr',
    title: 'French',
  },

  {
    code: 'en|de',
    title: 'German',
  },
  {
    code: 'en|el',
    title: 'Greek',
  },
  {
    code: 'en|hu',
    title: 'Hungarian',
  },
  {
    code: 'en|id',
    title: 'Indonesian',
  },
  {
    code: 'en|ga',
    title: 'Irish',
  },
  {
    code: 'en|it',
    title: 'Italian',
  },
  {
    code: 'en|ja',
    title: 'Japanese',
  },
  {
    code: 'en|ko',
    title: 'Korean',
  },
  {
    code: 'en|lt',
    title: 'Lithuanian',
  },
  {
    code: 'en|ms',
    title: 'Malay',
  },
  {
    code: 'en|no',
    title: 'Norwegian',
  },
  {
    code: 'en|pl',
    title: 'Polish',
  },
  {
    code: 'en|pt',
    title: 'Portuguese',
  },
  {
    code: 'en|ro',
    title: 'Romanian',
  },
  {
    code: 'en|ru',
    title: 'Russian',
  },
  {
    code: 'en|es',
    title: 'Spanish',
  },
  {
    code: 'en|sv',
    title: 'Swedish',
  },
  {
    code: 'en|th',
    title: 'Thai',
  },
  {
    code: 'en|tr',
    title: 'Turkish',
  },
  {
    code: 'en|uk',
    title: 'Ukrainian',
  }
]

  ,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

 .spacing{
     margin-top: 18%; margin-bottom: 5%
  }

@media screen and (max-width: 768px) {
  .spacing{
     margin-top: 55%; margin-bottom: 5%
  }
}

a {
  color: black;
}

body{
  font-family: 'Raleway', sans-serif;
}



.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  /* background-color: - add your own background-color */
  font-family: "Roboto", sans-serif;
  /* put your font-family */
  font-size: 18px;
  padding: 5px 0px;
  width: 150px;
  border-radius: 6px;
}

/* effect-5 styles */
.effect.effect-5 {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-5:before {
  content: "\f054";
  font-family: FontAwesome;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0 50% 50% 0;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-5:hover {
  text-indent: 30px;
}
.effect.effect-5:hover:before {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  text-indent: 0;
}


h2 {
  color: #d5e6fb;

  font-weight: bold;
  font-style: normal;
  margin-bottom: 0;

  max-width: 85vw;
  margin: 0 auto 0.25rem auto;
}

h1 {
  font-size: 50px;
  display: inline;
  text-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
}

.content {
  display: flex;
  align-content: center;
  justify-content: center;
}

.rate {
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: #2295ed;
  font-size: 14px;
}

.text {
  color: #2295ed; /* Fallback */
  /* text-transform: uppercase; */
  -webkit-text-fill-color: #2295ed;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  letter-spacing: 3px;

}

.combined {
   -webkit-text-stroke: 1px black;
   color: white;
   text-shadow:
       2px  2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
}





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

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
*,
:after,
:before {
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: border-box;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 2.25rem;
  width: auto;
}










 .ml7 {
        position: relative;
        font-weight: 900;
        font-size: 3.7em;
      }
      .ml7 .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .ml7 .letter {
        transform-origin: 0 100%;
        display: inline-block;
        line-height: 1em;
      }



      
</style>


