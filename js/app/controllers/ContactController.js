function ContactController() {

  vm = this;

  vm.name = "Bob";
  vm.email = "Bob@yahoo.com";
  vm.phone = "408-200-3000";

  this.changeName = function(){
    vm.name = 'Sam';
  }
}

angular.module('app').controller('ContactController', ContactController);
