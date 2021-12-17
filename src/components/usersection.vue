<template>

     
                  
            
   <div  id="page mt-8 py-2" data-aos="flip-left">
      
     <div class="container" >
        <div class="row" >
          <div >
       
     
           
        <div id="our-users-section" style="padding:15px; height: auto; " >
            <div>

  <div class="col-xs-12" >
                  <div class="section-heading">
                   
                 <h2>TRUSTPILOT <span style="color: #2295ED!important;">RATE</span> US 5 STAR</h2>
        <p>REVIEW FROM GREAT CUSTOMERS</p>
                  
                  </div>
                </div>


              
                <div style="height: auto; width:80%; ">
                    <div class="images-container" data-step="1" style=" width:100%; ">
                        <img src="@/assets/img/face2.jpg"  v-on:click="sweetAlertmaria"/>
                        <img src="@/assets/img/stella.jpg" v-on:click="sweetAlertstella"/>
                        <img src="@/assets/img/face4.jpg" v-on:click="sweetAlertfreeman"/>
                        <img src="@/assets/img/face5.jpg" v-on:click="sweetAlertdavid"/>
                        <img src="@/assets/img/mukasa.jpg" v-on:click="sweetAlertmukasa"/>
                    </div>
                    <div class="text-container" style="height: auto; width:90%; " >
                        <div>
                            <h4>

                        <img style="height: 40px; width: 40px;"
                          src="@/assets/images/Dutch.png"
                          class="img-sm me-2"
                          alt="Nederlands"
                        />
                              maria Racquel</h4>
                            <h5 style="display:none"><a href="#" target="_blank">@rmaria</a></h5>
                                 <h5 ><a href="#" target="_blank">5 days ago</a></h5>
                            <div >
                                <p  >It was so easy to send money using FundsTrans. I didnt know it was that easy. 
                                    I just registered everything and it's good to go. 
                                    So convenient.</p>
                            </div>
                        </div>
                        <div>
                            <h4 >
                              <img style="height: 40px; width: 40px;"
                          src="@/assets/images/uganda2.png"
                          class="img-sm me-2"
                          alt="Uganda"
                        />
                              Mukasa Shadrach</h4>
                            <h5 style="display:none" ><a href="#" target="_blank">@mshadrach</a></h5>
                             <h5 ><a href="#" target="_blank">3 days ago.</a></h5>
                            <div>
                                <p>I have used this service in the past and there was no trouble. 
                                    if I have to transfer any money 
                                    anytime soon, i would go back with this service. 
                                    FundsTrans is so easy and
                                     convenient</p>
                            </div>
                        </div>
                        <div>
                            <h4 ><img src="@/assets/images/English.png"  style="height: 40px; width: 40px;"
    class="img-sm me-2 img-responsive"
                                               alt="English"/>
                              Mark David</h4>
                            <h5 style="display:none;"><a href="#" target="_blank">@dmark</a></h5>
                             <h5 ><a href="#" target="_blank">1 week ago</a></h5>
                            <div>
                                <p>Great service. Quick and no issues at all.</p>
                            </div>
                        </div>
                        <div>
                            <h4 > <img style="height: 40px; width: 40px;"
                          src="@/assets/images/French.png"
                          class="img-sm me-2 img-responsive"
                          alt="français"
                        />Liezel Freeman</h4>
                            <h5 style="display:none;"><a href="#" target="_blank">@lfreeman</a></h5>
                            <h5 ><a href="#" target="_blank">8 days ago</a></h5>
                            <div>
                                <p>Excellent services from FundsTrans. I use FundsTrans and i have  never faced any problem. 
                                    I strongly recommend FundsTrans for all your money transfer services.
                                     Their services are 
                                    really excellent and super fast!! Use FundsTrans for fastest services.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 ><img style="height: 40px; width: 40px;"
                          src="@/assets/images/nigeria.jpg"
                          class="img-sm me-2 img-responsive"
                          alt="Nigeria"
                        />
                              Stellah Abiola</h4>
                            <h5 style="display:none;" ><a href="#" target="_blank">skarungi</a></h5>
                            <h5 ><a href="#" target="_blank">2 weeks ago</a></h5>
                            <div>
                                <p>I had such a great experience sending money to my family with FundsTrans. 
                                    Money arrived fast. Will be doing it again.
                                </p>
                            </div>
                        </div>
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
import './../assets/css/review/style.css'; 
 
import './../assets/css/review/lg.css'; 
import './../assets/css/review/md.css'; 
import './../assets/css/review/xl.css'; 
import './../assets/css/review/xxl.css'; 
import swal from 'sweetalert2';


window.swal = swal;
export default {
  name: 'usersection',
  props: {
   
  },

  watch: {
    showError(value) {
      if (value) {
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        });
        this.showError = false;
      }
    }
  },
  
  methods: {
    toggleShowError() {
      this.showError = !this.showError;
    },
    show() {
      console.log('test');
      // this.$notify({ group: 'auth', text: 'aaa' });
      this.$snotify.success('Example body content');
    },
    sweetAlertmaria() {
    
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'maria Racquel',
        text: 'It was so easy to send money using FundsTrans. I didnt know it was that easy.I just registered everything and its good to go. So convenient.',
        showConfirmButton: true,
        showLoaderOnConfirm: 'true',
        confirmButtonColor: '#2295ed',
        animation: 'true',
        
        imageUrl: require('./../assets/img/face2.jpg'),
        timerProgressBar:'true',
        timer:30000,
        customClass: {

 
}

      })
    },


sweetAlertstella() {
     
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Stellah Abiola',
        text: 'I had such a great experience sending money to my family with FundsTrans. Money arrived fast. Will be doing it again.',
        showConfirmButton: true,
        showLoaderOnConfirm: 'true',
        confirmButtonColor: '#2295ed',
        animation: 'true',
        
 



        imageUrl: require('./../assets/img/stella.jpg'),
        timerProgressBar:'true',
        timer:30000
      
  })
},

sweetAlertfreeman() {
     
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Liezel Freeman',
        text: 'Excellent services from FundsTrans. I use FundsTrans and i have  never faced any problem. I strongly recommend FundsTrans for all your money transfer services.Their services are  really excellent and super fast!! Use FundsTrans for fastest services.',
        showConfirmButton: true,
        showLoaderOnConfirm: 'true',
        confirmButtonColor: '#2295ed',
        animation: 'true',
        
        imageUrl: require('./../assets/img/face4.jpg'),
        timerProgressBar:'true',
        timer:30000
      
  })
},
sweetAlertdavid() {
     
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Mark David',
        text: 'Great service. Quick and no issues at all.',
        showConfirmButton: true,
        showLoaderOnConfirm: 'true',
        confirmButtonColor: '#2295ed',
        animation: 'true',
        
        imageUrl: require('./../assets/img/face5.jpg'),
        timerProgressBar:'true',
        timer:30000
      
  })
},
sweetAlertmukasa() {
     
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Mukasa Shadrach',
        text: 'I have used this service in the past and there was no trouble.if I have to transfer any money anytime soon, i would go back with this service. FundsTrans is so easy and convenient',
        showConfirmButton: true,
        showLoaderOnConfirm: 'true',
        confirmButtonColor: '#2295ed',
        animation: 'true',
        
         imageUrl: require('./../assets/img/mukasa.jpg'),
        timerProgressBar:'true',
        timer:30000
      
  })
}



}
,



  mounted() {


  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{color: #48484D;
    font-size: 18px;
    margin: 1.5rem 1vw 3rem 1vw;
    line-height: 2.5rem;}
    h4{
    font-size: 24px;
    font-weight: 500 !important;}
    h5{font-size: 20px;}

  .swal-title {
  margin: 0px;
  font-size: 16px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
  margin-bottom: 28px;
}

.swal-text {
  background-color: #FEFAE3;
  padding: 17px;
  border: 1px solid #F0E1A1;
  display: block;
  margin: 22px;
font-size: 16px;
  text-align: center;
  color: #61534e;
}
 
 
.swal2-popup {
  font-size: 1.25rem !important;
}



</style>
