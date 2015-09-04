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
      "Frustrated Writer",
      "Awesome Software Developer",
      "Casual Bug Photographer",
      "Cat Savior",
      "Weightlifting Noob",
      "Recovering Netflix-aholic",
      "Gamer Without a Rig",
      "Apprentice Costume Crafter",
      "Dog Snuggler",
      "Sf Nerd",
      "Reformed Bio-major",
      "Sleep Enthusiast",
      "Caffeine Powered",
      "Devilishly Handsome",
      "Food Eater",
      "Lego Engineer",
      "Amateur Beardsman",
      "Microwave Chef",
      "Tennessee Native",
      "Book Reader",
      "Tom-fooler"
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

  })

