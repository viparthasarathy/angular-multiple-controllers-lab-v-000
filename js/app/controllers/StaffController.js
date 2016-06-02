function StaffController() {
  var vm = this;

  vm.name = "John";
  vm.email = "John@gmail.com";
  vm.phone = "408-304-9320";
}

angular.module('app').controller('StaffController', StaffController);
