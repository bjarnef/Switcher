angular.module("umbraco").controller("Our.SwitcherController", function ($scope) {

    $scope.switchStyle = ($scope.model.config.switchClass != undefined || $scope.model.config.switchClass == "") ? $scope.model.config.switchClass : "";
    $scope.showLabel = $scope.model.config.hideLabel == false || $scope.model.config.hideLabel == undefined;
    $scope.statusLeftRight = $scope.model.config.statusLeftRight == true;
    
    if($scope.model.config.onLabelText === null || $scope.model.config.onLabelText === "") {
        $scope.onLabelText = "On";
    } else {
        $scope.onLabelText = $scope.model.config.onLabelText;
    }

    if($scope.model.config.offLabelText === null || $scope.model.config.offLabelText === "") {
        $scope.offLabelText = "Off";
    } else {
        $scope.offLabelText = $scope.model.config.offLabelText;
    }

    $scope.model.textLeft = "";
    $scope.model.textRight = "";

    if ($scope.model.value === null || $scope.model.value === "") {
        $scope.enabled = $scope.model.config.switchOn == true;
    } else {
        $scope.enabled = $scope.model.value == 1;
    }

    $scope.$watch('enabled', function (newval, oldval) {
        //console.log(newval, oldval);
        $scope.model.value = newval === true ? 1 : 0;

        if ($scope.model.value == 1) {
            $scope.model.textRight = $scope.onLabelText;

            if ($scope.statusLeftRight) {
                $scope.model.textLeft = $scope.offLabelText;
            }
        }
        else {
            $scope.model.textRight = $scope.offLabelText;

            if ($scope.statusLeftRight) {
                $scope.model.textLeft = $scope.offLabelText;
                $scope.model.textRight = $scope.onLabelText;
            }
        }

    }, true);

});