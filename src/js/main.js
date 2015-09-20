angular
  .module('portfolio', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:'index.html',
        controller: 'Main',
        controllerAs: 'main'
      })
  })
  .controller('Main', function ($scope, $window) {
    var vm = this;

    vm.qualities = [
      {
        name: "Frustrated Writer",
        cat: "hobbies"
      },
      {
        name: "Awesome Software Developer",
        cat: "care"
      },
      {
        name: "Casual Bug Photographer",
        cat: "animal"
      },
      {
        name:"Weightlifting Noob",
        cat: "hobbies"
      },
      {
        name:"Recovering Netflix-aholic",
        cat: "hobbies"
      },
      {
        name:"Dog Snuggler",
        cat: "animal"
      },
      {
        name:"Gamer Without a Rig",
        cat: "hobbies"
      },
      {
        name:"Apprentice Costume Crafter",
        cat: "hobbies"
      },
      {
        name:"Sf Nerd",
        cat: "hobbies"
      },
      {
        name:"Reformed Bio-major",
        cat: "hobbies"
      },
      {
        name:"Sleep Enthusiast",
        cat: "hobbies"
      },{
        name:"Caffeine Powered",
        cat: "hobbies"
      },
      {
        name:"Devilishly Handsome",
        cat: "care"
      },
      {
        name:"Food Eater",
        cat: "hobbies"
      },{
        name:"Lego Engineer",
        cat: "hobbies"
      },
      {
        name:"Amateur Beardsman",
        cat: "hobbies"
      },
      {
        name:"Microwave Chef",
        cat: "hobbies"
      },{
        name:"Tennessee Native",
        cat: "hobbies"
      },
      {
        name:"Cat Savior",
        cat: "animal"
      },
      {
        name:"Book Reader",
        cat: "hobbies"
      }
    ]

    vm.jump = function () {
      console.log('jump')
      window.scrollBy(1300, 0);
    }

    vm.index = {
      top: 0,
      project: 500,
      skills: 1300,
      about: 2300
    }

    vm.yScroll = {
      get val () {
        return $('body').scrollTop()
      }
    }
    vm.menu = false;
    var $win = $($window);

    $win.on('scroll', function () {
      vm.fade('in', '.nav', $win.scrollTop(), 400, 520);
      // vm.fade('out', '.hr_holder', $win.scrollTop(), 400, 520);
      vm.drop($(".project_title"), $('.project_button'), $('.hr_holder'), $win.scrollTop(), 350, 470, 160)
      vm.lastY = $win.scrollTop();
    });

    vm.tripWire = false;
    vm.lastDirection = 'up'

    vm.fade = function (direction, object, current, start, end) {
      vm.tripWire = (current < 400 || $win.width() < 1050) ? false: true;
      var value =(current-start)/(end-start);
      value *= (direction==='in') ? 1:-1;
      $(object).css('opacity', value);
      $scope.$apply()
    }
    vm.drop = function (projTitle, rocketTris, hrsArrow, current, start, end, distance) {
      if (start < current && vm.lastY < current && vm.lastDirection === 'up') {
        vm.lastDirection = 'down'
        console.log('going down')
        var options = {
          "margin-top": "180px",
          "margin-bottom": "-180px",
          "background-color" : "transparent",
        }
        var options2 = {
          opacity: 0,
        }
        var oLeftTriangle = {
          opacity: 0
        }
        var options3 = {
          "margin-left": "-1150px",
          "color": "rgb(251,126,41)"
        }

        var options4 = {
          "z-index": "-10",
          "margin-left": "0px",
          "margin-top": "250px",
          "margin-bottom": "-250px"
        }
      } else if (vm.lastY > current && current < end && vm.lastDirection === 'down') {
        vm.lastDirection = 'up';
        console.log('going uip');
        var options = {
          "margin-top": "5px",
          "margin-bottom": "0px",
          "background-color" : "rgb(251,126,41)",
          "width": "88%"
        }
        var options1 = {
          "margin-top": "0px",
          "margin-bottom": "0px",
        }
        var options2 = {
          opacity: 1,
        }
        var oLeftTriangle = {
          opacity: 1
        }
        var options3 = {
          "color": "black",
          "margin-left" : "10px"
        }
        var options4 = {
          "z-index": "0",
          "margin": "auto",
          "margin-top": "0px",
          "margin-bottom": "0px",
          // "margin-left": "194px"

        }
      }

      projTitle.animate(options, 1000)
      rocketTris.animate(options4, 1000)
      hrsArrow.animate(options2, 1000)
      $('.project_button .left_triangle').animate(oLeftTriangle, 600);
      $(projTitle.children('h1:first-child')[0]).animate(options2, 800)
      $(projTitle.children('h1:last-child')[0]).animate(options3, 800)
    }

    vm.scroll = function (string) {
      $.smoothScroll({speed: 2000}, vm.index[string])
    }

    vm.sixhundred = true;
    //responsiveness code
    $win.on('resize load', function () {
      vm.sixhundred = ($win.innerWidth() >1040) ? true: false;
      var width = $win.innerWidth();
      $('.name h1').css('font-size', parseInt(width/9.2).toString())
      $('.name h1').css('line-height', parseInt(width/11.5).toString() + "px")
      $('.name h1').css('letter-spacing', "-" + parseInt(width/80).toString() + "px")


      $('.project_title h1').css('font-size', parseInt(width/18.4).toString())
      $('.project_button .left_triangle').css('border-right-width', parseInt(width/2.7).toString() + "px")
      $('.project_button .right_triangle').css('border-left-width', parseInt(width/2.7).toString() + "px")
      $('.project_button .left_triangle').css('border-top-width', parseInt(width/18).toString() + "px")
      $('.project_button .right_triangle').css('border-top-width', parseInt(width/18).toString() + "px")
      $('.project_title h1').css('letter-spacing', "-" + parseInt(width/200).toString() + "px")
      $scope.$apply()
    })










    //code for filter

    vm.check;

    vm.emailSwitch = false;

    vm.emailShow = function () {
      vm.emailSwitch = true;
    }

    vm.color = function () {
      $('.titles h2').addClass('black');
      $('.' + vm.check).removeClass('black');
    }

    vm.email = {
      email: "",
      subject: "",
      text: ""
    }

    vm.sendEmail = function () {
      //do stuff with mandrill
      vm.emailSwitch = false;
      var api_url = "https://mandrillapp.com/api/1.0/messages/send.json";
      var email = {
        "key": "OXcjE1MGpHd5b7ysIQWrGg",
        "message": {
          "html": "<p>From your portfolio:</p>",
          "text": vm.email.text,
          "subject": vm.email.subject,
          "from_email": vm.email.email,
          "from_name": vm.email.email,
          "to": [
              {
                "email": "jamesblogan20@gmail.com",
                "name": "James Logan",
                "type": "to"
              }
            ]
          }
        }

      $.post(api_url, email, function (data) {
        console.log(data)
      })
    }

  })
