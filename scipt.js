$(document).ready(function () {
    let index = 1;

    $('nav').hide();




    //
    //    $(".mute-video").click(function () {
    //        if ($("video").prop('muted')) {
    //            $("video").prop('muted', false);
    //            $(this).addClass('unmute-video');
    //
    //        } else {
    //            $("video").prop('muted', true);
    //            $(this).removeClass('unmute-video');
    //        }
    //        console.log($("video").prop('muted'))
    //    });


    //navigation
    $('.fa-bars').click(function () {
        console.log('clicked');
        $('.mobileNav').slideToggle();
        $('body').addClass('mobileOpen');
        $('.fa-times-circle').css('display', 'block');
        $('.fa-bars').css('display', 'none');

    });


    $('.fa-times-circle').click(function () {
        $('.fa-times-circle').css('display', 'none');
        $('.fa-bars').css('display', 'block');
    });


    $('main, .mobileNav, img, .fa-times-circle').click(function () {
        if ($('body').hasClass('mobileOpen')) {
            console.log('mobile dropdown is closed');
            $('.mobileNav').slideUp();
            $('body').removeClass('mobileOpen');
            $('.fa-times-circle').css('display', 'none');
            $('.fa-bars').css('display', 'block');
        }
    });



    if ($('body').hasClass('mobileOpen')) {
      console.log('x');
    }
    else {
      $('.fa-times-circle').css('display' , 'none');
      $('.fa-bars').css('display' , 'block');
    }


    //box opening
    $(".box").click(function () {
        if ($(".lid").hasClass("opened")) {
            $('#signUp').css('display', 'none');
            $(".lid").removeClass("opened");
        } else {
            $(".lid").addClass("opened");
        }


        if ($(".inside").hasClass("show")) {
            $(".inside").removeClass("show");
        } else {
            $(".inside").addClass("show");
        }


        if ($(".box").hasClass("s")) {
            $(".box").removeClass("s");
        } else {
            $(".box").addClass("s");
        }

    });



    //Interaction of the SignUp modal window

    $('.box').click(function () {
        $('#signUp').css('display', 'block');
    });

    $('#closeModal').click(function () {
        $('#signUp').css('display', 'none');
        //$('#signUp').css('animation', 'scale-down-center .8s ease-in-out');
        $(".lid").removeClass("opened");
        $(".inside").removeClass("show");
        $(".box").removeClass("s");
    });

//submitting the form

$('#submitBtn').click(function() {
  $('#form1').submit();
  $('#form1').reset();
  console.log('submitted');
})

//do submit function (inputs field empty) + alert:succesful

    $('input[name=consent]').click(function () {
        if ($(this).is(":checked")) {
            console.log('checked');
            $('#submitBtn').css({
                'color': 'white',
                'cursor': 'pointer'
            });
            $('#submitBtn').attr('disabled', 'false');
        } else {
            console.log('unchecked');
            $('#submitBtn').css({
                'color': 'rgba(0,0,0,0.1)',
                'cursor': 'not-allowed'
            });
            $('#submitBtn').attr('disabled', 'true');

        }
    });


    //    slideshow animation

    //    setInterval(function () {
    //
    //
    //        for (let i = 0; i < 3; i++) { //hide all images
    //            document.querySelectorAll(".slide-img")[i].classList.remove("shown");
    //        }
    //        document.querySelectorAll(".slide-img")[index].classList.add("shown");
    //
    //
    //        index === 3 ? index = 0 : index++;
    //    }, 4000);
    //





    // FAQ slider


    // version 2
    var action = "click";
    var speed = "500";

    $(document).ready(function () {
        //question handler
        $('li.q').on(action, function () {
            //get next element
            $(this).next()
                .slideToggle(speed)
                //select all other answers
                .siblings('li.a')
                .slideUp();
            //get image for active question
            var img = $(this).children('img');
            //remove the 'rotate class for all images except the active
            $('img').not(img).removeClass('rotate');
            //Toggle rotate class
            img.toggleClass('rotate');

        });
    });

});

//Carousel

var i = 0; 			// Start Point
var images = [];	// Images Array
var images2 = [];
var time = 3000;	// Time Between Switch


// Image List
images[0] = "images/frame1.png";
images[1] = "images/frame2.png";

images2[0] = "images/frame3.png";
images2[1] = "images/frame4.png"

// Change Image
function changeImg(){
	document.slide.src = images[i];
  document.slide2.src = images2[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;




//sending e-mail from contact form---elasticemail API  --- //setup from documentation
var name = $('#contactName').val();
var email = $('#contactEmail').val();
var subject = $('#contactSubject').val();

$('#sendMail').click(function() {

 Email.send({
     Host : "smtp.elasticemail.com",
     Username : "sogor.jozsef98@gmail.com",
     Password : "1bc29a1d-a738-478d-a863-a12e75ab7963",
     To : email,
     From : "sogor.jozsef98@gmail.com",
     Subject : subject + "verification",
     Body :  "Dear" + name + "we have recieved your inqury. We'll get back to you as soon as possible. Best regards, GoSee"
 }).then(
   message => alert("message")
 );


});
