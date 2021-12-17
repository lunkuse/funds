<template>

<div  id="page" >
 
    <!-- Contact -->
    <div class="mt-8 " >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="section-heading">
              <h2>Looking for <span style="color: #2295ED!important;">Help?</span></h2>
              <p>At Fundstrans, we are always here to assist and guide you, doing all we can to help you succeed. Our client support team is available to assist you 24 hours a day, 7 days a week.</p>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class=" col-md-3 col-sm-6 " data-aos="flip-up" id="contactus" >

            <div class="address-box">
              <h5 class="address-title">NETHERLANDS OFFICE</h5>
              <p class="contact-by">Open from 9am to 6pm, <br> Central European Time (CET)</p>
              <span class="contact-number">TEL: +31 208 087 079</span>
            </div>
          </div>
          <div class=" col-md-3 col-sm-6" data-aos="flip-up">
            <div class="address-box">
              <h5 class="address-title">LONDON OFFICE</h5>
              <p class="contact-by">Open from 8.30am to 5.30pm, <br> Central European Time (CET)</p>
              <span class="contact-number">TEL : +44 203 868 0207</span>
            </div>
          </div>
          <div class="col-md-3 col-sm-6"  data-aos="flip-up">
            <div class="address-box">
              <h5 class="address-title">US OFFICE</h5>
              <p class="contact-by">Open from 9:00am to 12pm, <br> Greenwich Mean Time (GMT +5)</p>
              <span class="contact-number">TEL : +12 026 431 907</span>
            </div>
          </div>
          <div class="cardcontact col-md-3 col-sm-6" data-aos="flip-up">
            <div class="address-box">
              <h5 class="card-title address-title">NETHERLANDS OFFICE</h5>
              <p class="card-text contact-by" >Open from 9am to 6pm, <br> Central European Time (CET)</p>
              <span class="contact-number">TEL: +31 208 087 079</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact End -->

 

    <div class="contact mt-8 ">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="section-heading text-center" data-aos="fade-down-right">
              <h2>Get in <span style="color: #2295ED!important;">Touch</span></h2>
              <p>At Fundstrans, we are always here to assist and guide you, doing all we can to help you succeed. Our client support team is available to assist you 24 hours a day, 7 days a week.</p>
            </div>
          </div>
        </div>
        
        <div class="row" data-aos="zoom-in"  >

          <div class="">
            <div class="contact-form" >
              <form action="#" method="post" >
                <div class="row">
                  <div class="col-sm-5">
                    <div class="form-group">
                      <input id="name" type="text" class="form-control" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                      <input id="email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="form-group">
                      <textarea id="message" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <button  type="submit" class="button button-2x btn-block primary-bg" >Send Message</button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    </div>

    </div>
</template>

<script>

export default {
  name: 'Contactus',
  
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  /* background-color: - add your own background-color */
  font-family: 'Roboto', sans-serif;
  /* put your font-family */
  font-size: 18px;
 

  border-radius: 6px;

}



/* effect-3 styles */
.effect.effect-3 {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-3:before {
  content: "\f178";
  font-family: FontAwesome;
  position: absolute;
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
  top: 100%;
  left: 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-3:hover {
  text-indent: -9999px;
}
.effect.effect-3:hover:before {
  top: 0;
  text-indent: 0;
}


form {
    margin-left: 10%;
    margin-right:10%;
   
}

</style>
