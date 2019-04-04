function validationCtrl($scope) {
   var validpassword = "12347928safsaf";
   
   $scope.reset = function(){
		$scope.password = validpassword;
   }   
   
   $scope.checkData = function() {
		if ($scope.password != validpassword) {
			alert("Предоставленные данные не совпадают с владельцем по умолчанию");
		} else {
			alert("Вроде нормально!");
		}
	}
}