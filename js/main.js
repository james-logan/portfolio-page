'use strict';

angular.module('portfolio', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'Main',
    controllerAs: 'main'
  });
}).controller('Main', function ($scope, $window) {
  console.log('kitten');
  var vm = this;

  vm.qualities = [{
    name: "Frustrated Writer",
    cat: "hobbies"
  }, {
    name: "Awesome Software Developer",
    cat: "care"
  }, {
    name: "Casual Bug Photographer",
    cat: "animal"
  }, {
    name: "Weightlifting Noob",
    cat: "hobbies"
  }, {
    name: "Recovering Netflix-aholic",
    cat: "hobbies"
  }, {
    name: "Dog Snuggler",
    cat: "animal"
  }, {
    name: "Gamer Without a Rig",
    cat: "hobbies"
  }, {
    name: "Apprentice Costume Crafter",
    cat: "hobbies"
  }, {
    name: "Sf Nerd",
    cat: "hobbies"
  }, {
    name: "Reformed Bio-major",
    cat: "hobbies"
  }, {
    name: "Sleep Enthusiast",
    cat: "hobbies"
  }, {
    name: "Caffeine Powered",
    cat: "hobbies"
  }, {
    name: "Devilishly Handsome",
    cat: "care"
  }, {
    name: "Food Eater",
    cat: "hobbies"
  }, {
    name: "Lego Engineer",
    cat: "hobbies"
  }, {
    name: "Amateur Beardsman",
    cat: "hobbies"
  }, {
    name: "Microwave Chef",
    cat: "hobbies"
  }, {
    name: "Tennessee Native",
    cat: "hobbies"
  }, {
    name: "Cat Savior",
    cat: "animal"
  }, {
    name: "Book Reader",
    cat: "hobbies"
  }];

  vm.jump = function () {
    console.log('jump');
    window.scrollBy(1300, 0);
  };

  vm.index = {
    top: 0,
    project: 500,
    skills: 1300,
    about: 2300
  };

  vm.yScroll = Object.defineProperties({}, {
    val: {
      get: function get() {
        return $('body').scrollTop();
      },
      configurable: true,
      enumerable: true
    }
  });
  vm.menu = false;
  var $win = $($window);

  $win.on('scroll', function () {
    vm.fade('in', '.nav', $win.scrollTop(), 400, 520);
    // vm.fade('out', '.hr_holder', $win.scrollTop(), 400, 520);
    vm.drop($(".project_title"), $('.project_button'), $('.hr_holder'), $win.scrollTop(), 350, 470, 160);
    vm.lastY = $win.scrollTop();
  });
  vm.lastDirection = 'up';

  vm.fade = function (direction, object, current, start, end) {
    var value = (current - start) / (end - start);
    value *= direction === 'in' ? 1 : -1;
    $(object).css('opacity', value);
  };
  vm.drop = function (object, object2, object3, current, start, end, distance) {
    if (start < current && vm.lastY < current && vm.lastDirection === 'up') {
      vm.lastDirection = 'down';
      console.log('going down');
      var options1;
      var options = options1 = {
        "margin-top": "160px",
        "margin-bottom": "-160px",
        "background-color": "transparent"
      };
      var options2 = {
        opacity: 0
      };

      var options3 = {
        "margin-left": "-1500px",
        "margin-right": "0px",
        "color": "rgb(251,126,41)"
      };

      var options4 = {
        "z-index": "-10",
        "margin-left": "0px",
        "margin-top": "230px",
        "margin-bottom": "-230px"
      };
      // $('.hr_holder').animate(options2, 800)
    } else if (vm.lastY > current && current < end && vm.lastDirection === 'down') {
        vm.lastDirection = 'up';
        console.log('going uip');
        var options = {
          "margin-top": "0px",
          "margin-bottom": "0px",
          "background-color": "rgb(251,126,41)"
        };
        var options1 = {
          "margin-top": "0px",
          "margin-bottom": "0px"
        };
        var options2 = {
          opacity: 1
        };
        var options3 = {
          "margin-left": "10px",
          "color": "black"
        };
        var options4 = {
          "z-index": "0",
          "margin-top": "0px",
          "margin-bottom": "0px",
          "margin-left": "194px"
        };
      }

    object.animate(options, 1000);
    object2.animate(options4, 1000);
    object3.animate(options2, 600);
    $('.project_button .left_triangle').animate(options2, 600);
    // $('.project_button .rocket').animate()
    $(object.children('h1:first-child')[0]).animate(options2, 800);
    $(object.children('h1:last-child')[0]).animate(options3, 800);
  };

  vm.scroll = function (string) {
    // window.scrollBy(0, 500);
    $.smoothScroll({ speed: 2000 }, vm.index[string]);
  };

  //code for filter

  vm.check;

  vm.emailSwitch = false;

  vm.emailShow = function () {
    vm.emailSwitch = true;
  };

  vm.color = function () {
    $('ul.titles li h2').addClass('black');
    $('.' + vm.check).removeClass('black');
  };

  vm.email = {
    email: "",
    subject: "",
    text: ""
  };

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
        "to": [{
          "email": "jamesblogan20@gmail.com",
          "name": "James Logan",
          "type": "to"
        }]
      }
    };

    $.post(api_url, email, function (data) {
      console.log(data);
    });
  };
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3JDLGFBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDbEIsQ0FBQyxDQUFBO0dBQ0gsQ0FBQTtDQUVGLENBQUMsQ0FBQSIsImZpbGUiOiJzcmMvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgncG9ydGZvbGlvJywgWyduZ1JvdXRlJ10pXG4gIC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDonaW5kZXguaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNYWluJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICAgIH0pXG4gIH0pXG4gIC5jb250cm9sbGVyKCdNYWluJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xuICAgIGNvbnNvbGUubG9nKCdraXR0ZW4nKVxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5xdWFsaXRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiRnJ1c3RyYXRlZCBXcml0ZXJcIixcbiAgICAgICAgY2F0OiBcImhvYmJpZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJBd2Vzb21lIFNvZnR3YXJlIERldmVsb3BlclwiLFxuICAgICAgICBjYXQ6IFwiY2FyZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNhc3VhbCBCdWcgUGhvdG9ncmFwaGVyXCIsXG4gICAgICAgIGNhdDogXCJhbmltYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIldlaWdodGxpZnRpbmcgTm9vYlwiLFxuICAgICAgICBjYXQ6IFwiaG9iYmllc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOlwiUmVjb3ZlcmluZyBOZXRmbGl4LWFob2xpY1wiLFxuICAgICAgICBjYXQ6IFwiaG9iYmllc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOlwiRG9nIFNudWdnbGVyXCIsXG4gICAgICAgIGNhdDogXCJhbmltYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIkdhbWVyIFdpdGhvdXQgYSBSaWdcIixcbiAgICAgICAgY2F0OiBcImhvYmJpZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIkFwcHJlbnRpY2UgQ29zdHVtZSBDcmFmdGVyXCIsXG4gICAgICAgIGNhdDogXCJob2JiaWVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJTZiBOZXJkXCIsXG4gICAgICAgIGNhdDogXCJob2JiaWVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJSZWZvcm1lZCBCaW8tbWFqb3JcIixcbiAgICAgICAgY2F0OiBcImhvYmJpZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIlNsZWVwIEVudGh1c2lhc3RcIixcbiAgICAgICAgY2F0OiBcImhvYmJpZXNcIlxuICAgICAgfSx7XG4gICAgICAgIG5hbWU6XCJDYWZmZWluZSBQb3dlcmVkXCIsXG4gICAgICAgIGNhdDogXCJob2JiaWVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJEZXZpbGlzaGx5IEhhbmRzb21lXCIsXG4gICAgICAgIGNhdDogXCJjYXJlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJGb29kIEVhdGVyXCIsXG4gICAgICAgIGNhdDogXCJob2JiaWVzXCJcbiAgICAgIH0se1xuICAgICAgICBuYW1lOlwiTGVnbyBFbmdpbmVlclwiLFxuICAgICAgICBjYXQ6IFwiaG9iYmllc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOlwiQW1hdGV1ciBCZWFyZHNtYW5cIixcbiAgICAgICAgY2F0OiBcImhvYmJpZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIk1pY3Jvd2F2ZSBDaGVmXCIsXG4gICAgICAgIGNhdDogXCJob2JiaWVzXCJcbiAgICAgIH0se1xuICAgICAgICBuYW1lOlwiVGVubmVzc2VlIE5hdGl2ZVwiLFxuICAgICAgICBjYXQ6IFwiaG9iYmllc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOlwiQ2F0IFNhdmlvclwiLFxuICAgICAgICBjYXQ6IFwiYW5pbWFsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJCb29rIFJlYWRlclwiLFxuICAgICAgICBjYXQ6IFwiaG9iYmllc1wiXG4gICAgICB9XG4gICAgXVxuXG4gICAgdm0uanVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdqdW1wJylcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgxMzAwLCAwKTtcbiAgICB9XG5cbiAgICB2bS5pbmRleCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHByb2plY3Q6IDUwMCxcbiAgICAgIHNraWxsczogMTMwMCxcbiAgICAgIGFib3V0OiAyMzAwXG4gICAgfVxuXG4gICAgdm0ueVNjcm9sbCA9IHtcbiAgICAgIGdldCB2YWwgKCkge1xuICAgICAgICByZXR1cm4gJCgnYm9keScpLnNjcm9sbFRvcCgpXG4gICAgICB9XG4gICAgfVxuICAgIHZtLm1lbnUgPSBmYWxzZTtcbiAgICB2YXIgJHdpbiA9ICQoJHdpbmRvdyk7XG5cbiAgICAkd2luLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2bS5mYWRlKCdpbicsICcubmF2JywgJHdpbi5zY3JvbGxUb3AoKSwgNDAwLCA1MjApO1xuICAgICAgLy8gdm0uZmFkZSgnb3V0JywgJy5ocl9ob2xkZXInLCAkd2luLnNjcm9sbFRvcCgpLCA0MDAsIDUyMCk7XG4gICAgICB2bS5kcm9wKCQoXCIucHJvamVjdF90aXRsZVwiKSwgJCgnLnByb2plY3RfYnV0dG9uJyksICQoJy5ocl9ob2xkZXInKSwgJHdpbi5zY3JvbGxUb3AoKSwgMzUwLCA0NzAsIDE2MClcbiAgICAgIHZtLmxhc3RZID0gJHdpbi5zY3JvbGxUb3AoKTtcbiAgICB9KTtcbiAgICB2bS5sYXN0RGlyZWN0aW9uID0gJ3VwJ1xuXG4gICAgdm0uZmFkZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9iamVjdCwgY3VycmVudCwgc3RhcnQsIGVuZCkge1xuICAgICAgdmFyIHZhbHVlID0oY3VycmVudC1zdGFydCkvKGVuZC1zdGFydCk7XG4gICAgICB2YWx1ZSAqPSAoZGlyZWN0aW9uPT09J2luJykgPyAxOi0xO1xuICAgICAgJChvYmplY3QpLmNzcygnb3BhY2l0eScsIHZhbHVlKVxuICAgIH1cbiAgICB2bS5kcm9wID0gZnVuY3Rpb24gKG9iamVjdCwgb2JqZWN0Miwgb2JqZWN0MywgY3VycmVudCwgc3RhcnQsIGVuZCwgZGlzdGFuY2UpIHtcbiAgICAgIGlmIChzdGFydCA8IGN1cnJlbnQgJiYgdm0ubGFzdFkgPCBjdXJyZW50ICYmIHZtLmxhc3REaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgdm0ubGFzdERpcmVjdGlvbiA9ICdkb3duJ1xuICAgICAgICBjb25zb2xlLmxvZygnZ29pbmcgZG93bicpXG4gICAgICAgIHZhciBvcHRpb25zMVxuICAgICAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnMxID0ge1xuICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjE2MHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiLTE2MHB4XCIsXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIgOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9uczIgPSB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMzID0ge1xuICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCItMTUwMHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKDI1MSwxMjYsNDEpXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zNCA9IHtcbiAgICAgICAgICBcInotaW5kZXhcIjogXCItMTBcIixcbiAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMjMwcHhcIixcbiAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCItMjMwcHhcIlxuICAgICAgICB9XG4gICAgICAgIC8vICQoJy5ocl9ob2xkZXInKS5hbmltYXRlKG9wdGlvbnMyLCA4MDApXG4gICAgICB9IGVsc2UgaWYgKHZtLmxhc3RZID4gY3VycmVudCAmJiBjdXJyZW50IDwgZW5kICYmIHZtLmxhc3REaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICB2bS5sYXN0RGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgY29uc29sZS5sb2coJ2dvaW5nIHVpcCcpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIwcHhcIixcbiAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIwcHhcIixcbiAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIiA6IFwicmdiKDI1MSwxMjYsNDEpXCJcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9uczEgPSB7XG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wdGlvbnMyID0ge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9uczMgPSB7XG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIixcbiAgICAgICAgICBcImNvbG9yXCI6IFwiYmxhY2tcIlxuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zNCA9IHtcbiAgICAgICAgICBcInotaW5kZXhcIjogXCIwXCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjE5NHB4XCIsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0LmFuaW1hdGUob3B0aW9ucywgMTAwMClcbiAgICAgIG9iamVjdDIuYW5pbWF0ZShvcHRpb25zNCwgMTAwMClcbiAgICAgIG9iamVjdDMuYW5pbWF0ZShvcHRpb25zMiwgNjAwKVxuICAgICAgJCgnLnByb2plY3RfYnV0dG9uIC5sZWZ0X3RyaWFuZ2xlJykuYW5pbWF0ZShvcHRpb25zMiwgNjAwKTtcbiAgICAgIC8vICQoJy5wcm9qZWN0X2J1dHRvbiAucm9ja2V0JykuYW5pbWF0ZSgpXG4gICAgICAkKG9iamVjdC5jaGlsZHJlbignaDE6Zmlyc3QtY2hpbGQnKVswXSkuYW5pbWF0ZShvcHRpb25zMiwgODAwKVxuICAgICAgJChvYmplY3QuY2hpbGRyZW4oJ2gxOmxhc3QtY2hpbGQnKVswXSkuYW5pbWF0ZShvcHRpb25zMywgODAwKVxuICAgIH1cblxuICAgIHZtLnNjcm9sbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIC8vIHdpbmRvdy5zY3JvbGxCeSgwLCA1MDApO1xuICAgICAgJC5zbW9vdGhTY3JvbGwoe3NwZWVkOiAyMDAwfSwgdm0uaW5kZXhbc3RyaW5nXSlcbiAgICB9XG5cbiAgICAvL2NvZGUgZm9yIGZpbHRlclxuXG4gICAgdm0uY2hlY2s7XG5cbiAgICB2bS5lbWFpbFN3aXRjaCA9IGZhbHNlO1xuXG4gICAgdm0uZW1haWxTaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdm0uZW1haWxTd2l0Y2ggPSB0cnVlO1xuICAgIH1cblxuICAgIHZtLmNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgJCgndWwudGl0bGVzIGxpIGgyJykuYWRkQ2xhc3MoJ2JsYWNrJyk7XG4gICAgICAkKCcuJyArIHZtLmNoZWNrKS5yZW1vdmVDbGFzcygnYmxhY2snKTtcbiAgICB9XG5cbiAgICB2bS5lbWFpbCA9IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgc3ViamVjdDogXCJcIixcbiAgICAgIHRleHQ6IFwiXCJcbiAgICB9XG5cbiAgICB2bS5zZW5kRW1haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvL2RvIHN0dWZmIHdpdGggbWFuZHJpbGxcbiAgICAgIHZtLmVtYWlsU3dpdGNoID0gZmFsc2U7XG4gICAgICB2YXIgYXBpX3VybCA9IFwiaHR0cHM6Ly9tYW5kcmlsbGFwcC5jb20vYXBpLzEuMC9tZXNzYWdlcy9zZW5kLmpzb25cIjtcbiAgICAgIHZhciBlbWFpbCA9IHtcbiAgICAgICAgXCJrZXlcIjogXCJPWGNqRTFNR3BIZDViN3lzSVFXckdnXCIsXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJodG1sXCI6IFwiPHA+RnJvbSB5b3VyIHBvcnRmb2xpbzo8L3A+XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IHZtLmVtYWlsLnRleHQsXG4gICAgICAgICAgXCJzdWJqZWN0XCI6IHZtLmVtYWlsLnN1YmplY3QsXG4gICAgICAgICAgXCJmcm9tX2VtYWlsXCI6IHZtLmVtYWlsLmVtYWlsLFxuICAgICAgICAgIFwiZnJvbV9uYW1lXCI6IHZtLmVtYWlsLmVtYWlsLFxuICAgICAgICAgIFwidG9cIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBcImphbWVzYmxvZ2FuMjBAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFtZXMgTG9nYW5cIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQucG9zdChhcGlfdXJsLCBlbWFpbCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuXG4gIH0pXG4iXX0=