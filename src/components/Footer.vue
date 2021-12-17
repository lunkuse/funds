<template>
<div  id="page" >










<!-- new video -->
<div class="mt-8 ">
  <div  style="position:relative;padding-top:56.25%;"  data-aos="flip-left">
    <iframe src="https://player.vimeo.com/video/648534477" frameborder="0" allowfullscreen
    
      style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
  </div>
</div>


<!-- video -->
  <div class="promo promo-bg mt-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     style="display:none;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="promo-area">
              <h6>Faster, safer money transfer</h6>
              <h2>THE EASIER WAY TO SEND MONEY</h2>
              <p>Thousands of transfers are made with FundsTrans every day.</p>
              <a
                href="https://www.youtube.com/watch?v=q1Ksc19vp4U"
                cl
                ass="play-button"
                ><i class="fas fa-play"></i
              ></a>





            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="call-to-action primary-bg  text-white" data-aos="fade-right"
    
     data-aos-easing="ease-in-sine">
      <div class="container py-5">
        <form class="row g-3 align-items-center">
          <div class="col-md-2">
            <label for="inputPassword6" class="col-form-label">
              <h5 class="pt-3">EXCHANGE RATE ALERT</h5>
              <p>Get rate alerts straight to your email inbox</p>
            </label>
          </div>
          <div class="col-md-6">
            <div class="input-group input-group-lg">
             
              <input @input="onchange($event.target.value)" v-model="inputed" :rules="[rules.onlyNumbers]"
              class="form-control" id="basic-addon1"  size="9"/>
              
              
                <select class="form-select" @change="onchange" v-model="currency_from" :items="countries" label="I have">
                    <option selected disabled>Choose Currency</option>
      <option v-for="(item,id) in fetchedData" :key="id" :value="item.currency_from">{{item.currency_from}}</option>
    </select>
               <input v-model="result" type="number" @input="onchange2($event.target.value)" 
               class="form-control" size="9"/>
              
              <select class="form-select" @change="onchange" v-model="currency_to" :items="countries" label="I want to buy">
                     <option v-for="(item,id) in fetchedData" :key="id" :value="item.currency_to">{{item.currency_to}}</option>
                  </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group input-group-lg">
              <input type="text" class="form-control" />
              <button
                type="button"
                class="effect effect-4 btn btn-dark btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#subModal"
              >
                Get email
              </button>



            </div>
          </div>
        </form>
        <!-- Subscription -->
        <div
          class="modal fade"
          id="subModal"
          tabindex="-1"
          aria-labelledby="subModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content text-dark">
              <div class="modal-header border-0">
                <h4 class="card-title">Get rate alerts</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-start">
                Rate alerts wil be sent straight to your email inbox
                <form class="my-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <div class="form-check my-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Sign me up to get my first transfer fee-free
                    </label>
                  </div>
                  <button class="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>














    <footer >
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h4>FundsTrans</h4>
            <ul class="nav flex-column">
              <li class="nav-item" data-aos="fade-up"
     >
                <a class="nav-link" href="#" data-aos="fade-up"
     >About us</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
    >
                <a class="nav-link" href="#" data-aos="fade-up"
     >Stories</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
     >
                <a class="nav-link" href="#" data-aos="fade-up"
     >Careers</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
     >
                <a class="nav-link" href="#" data-aos="fade-up"
     >Sitemap</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 >Help & Support</h4>
            <ul class="nav flex-column">
              <li class="nav-item" data-aos="fade-up"
     >
                 
                  <a class="nav-link" href="#faq" data-mdb-smooth-scroll="smooth-scroll">FAQ</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
     >
                
                 <a class="nav-link" href="#contactus" data-mdb-smooth-scroll="smooth-scroll">Contact us</a>
              </li>
              <li class="nav-item"  data-aos="fade-up"
     >
                <a class="nav-link" href="#">Partners and affiliates</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h4 
     data-aos-anchor-placement="center-center">Legal</h4>
            <ul class="nav flex-column">
              <li class="nav-item" data-aos="fade-up"
    >
                <a class="nav-link" href="terms.php">Terms & Conditions</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
     >
                <a class="nav-link" href="privacypolicy.php">Privacy Policy</a>
              </li>
              <li class="nav-item" data-aos="fade-up"
    >
                <a class="nav-link" href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Follow us</h4>
            <ul class="social-links" data-aos="fade-up"
    >
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-google-plus-g"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-pinterest"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-rss"></i></a>
              </li>
            </ul>
            <a class="nav-link" href="#"  data-aos="fade-up"
     >
              <img
                src="@/assets/images/netherlands.png"
                class="img-responsive"
                alt=""
              />
              Proudly a Dutch Fintech
            </a>
            <p class=" nav-link" data-aos="fade-up"
 >
              FundsTrans is the trading name of FundsTrans Corp, which is
              authorised by the Dutch Financial Conduct Authority under the
              Electronic Money Regulations 2011, Firm Reference 900507, for the
              issuing of electronic money.
            </p>
          </div>
        </div>
        <hr />
        <div class="container py-5 text-center " data-aos="zoom-in-right" >
          <img src="@/assets/images/logo.png" alt="" class="logo" />
          <div class="d-block py-4">
  <p class="copyright-text">&copy; Copyright {{ new Date().getFullYear() }}. All Rights Reserved.</p>
    
          </div>

        </div>
        <div >
         

 <button type="button" class="float btn btn-primary btn-floating btn-lg" id="myBtn" @click="backtotop">
  <i class="fas fa-arrow-up "></i>
</button>


        </div>
      
      </div>
     
    </footer>  


</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Footer',
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
  props: {
   
  },

  methods: {

grabData: function() {
      
      axios.get('https://fundstrans.net/api/rates')
      
      // new api
      // axios.get('https://fundstrans.net/api/v2/mobile/rates')
        .then( (response) =>{
          // new api
          // this.fetchedData = response.data.payload

          
          this.fetchedData = response.data
          console.log(this.fetchedData)
        })
      
    },

   onchange(){
    if(this.currency_from==this.currency_to){
      console.log('they are equal');
      
      // this.result = this.inputed * 1;
      // Rounding to ten thousandths
      this.result =(this.inputed * 1) ? Math.floor((this.inputed * 1) * 10000) / 10000 : null;
      // this.result = this.inputed * exchange.rate;
    }
       else{
    const exchange = this.fetchedData.filter((element) =>(element.currency_from == this.currency_from && element.currency_to == this.currency_to) )[0];
    
      // this.result = this.inputed * exchange.rate;
      // Rounding to ten thousandths
      this.result =(this.inputed * exchange.rate) ? Math.floor((this.inputed * exchange.rate) * 10000) / 10000 : null;
      // this.result = this.inputed * exchange.rate;
    }},
     onchange2(){
        if(this.currency_from==this.currency_to){
           this.inputed = (this.result / 1) ? Math.floor((this.result / 1) * 10000) / 10000 : null;
        }
       else{
    
    const exchange = this.fetchedData.filter((element) =>(element.currency_from == this.currency_from && element.currency_to == this.currency_to) )[0];
    
      // this.inputed = this.result / exchange.rate;
         this.inputed = (this.result / exchange.rate) ? Math.floor((this.result / exchange.rate) * 10000) / 10000 : null;
      // this.result = this.inputed * exchange.rate;
    }},
     



  backtotop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

},},
 mounted() {




 },
  created: function() {
    this.grabData()
  },
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group-lg>.btn, .btn-lg {
   
    font-size: 1.25rem;
    border-radius: .3rem;
}
.btn {
     margin: 0rem;}


.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  /* background-color: black - add your own background-color */
  font-family: 'Roboto', sans-serif;
  /* put your font-family */
  font-size: 18px;
  padding: 5px 0px;
  width: 150px;
  border-radius: 6px;
 
}



/* effect-4 styles */
.effect.effect-4 {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-4:before {
  content: "\f178";
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
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  -webkit-transform: scale(0, 1);
          transform: scale(0, 1);
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-4:hover {
  text-indent: -9999px;
}
.effect.effect-4:hover:before {
  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
  text-indent: 0;
}


.float{
 
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;

  color:#FFF;
  border-radius:50px;
  text-align:center;
  position: absolute;
bottom: 10px;
right: 10px;
}

a:hover {
   text-decoration: underline;
     
     
}

footer ul li a {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.5rem;
   
    text-decoration: none;
    clear: both;
    padding-left: 0;
    padding-right: 0;
   
}




.text-muted {
    color: #6c757d!important;
}
.small, small {
    font-size: .875em;
}

footer .nav-link {
    padding-left: 0;
    padding-right: 0;
    color: #a1adb2;
}

.nav-link {
    display: block;
    padding: .5rem 1rem;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}


footer>div>div:first-child>div:first-child {
    display: block;
    justify-content: flex-start;
    align-items: flex-start;
}


</style>
