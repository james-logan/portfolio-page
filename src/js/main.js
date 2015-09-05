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
    console.log('kitten')
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
      project: 550,
      skills: 1740,
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
      if ($win.scrollTop() > 520) {
        if (vm.menu !== false)
          return;
        vm.menu = true;
        $scope.$apply();
      } else {
        if (vm.menu !== true)
          return;
        vm.menu = false;
        $scope.$apply();
      }
    });

    vm.scroll = function (string) {
      // window.scrollBy(0, 500);
      $.smoothScroll(vm.index[string])
    }

    vm.yCheck = function () {
      return $('bod').scrollTop()
    }

    vm.check;

    vm.color = function () {
      $('ul.titles li h2').addClass('black');
      $('.' + vm.check).removeClass('black');
    }

  })
