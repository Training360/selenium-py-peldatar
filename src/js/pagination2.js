angular.module('DemoPagineo', [])
  .controller('tablaUsuarios', ['$scope',
    function($scope) {
      $scope.currentPage = 0;
      $scope.pageSize = 10;
      $scope.pages = [];
      $scope.usuarios = [{
        id: 1,
        primernombre: 'Juan',
        segundonombre: 'Mario',
        primerapellido: 'Pérez',
        segundoapellido: 'Maldonado',
        fechanacimiento: '23-12-1985'
      }, {
        id: 2,
        primernombre: 'Jorge',
        segundonombre: 'Alfonzo',
        primerapellido: 'Quinto',
        segundoapellido: 'Marroquín',
        fechanacimiento: '15-01-1988'
      }, {
        id: 3,
        primernombre: 'Carlos',
        segundonombre: 'Alberto',
        primerapellido: 'Vargas',
        segundoapellido: 'Martínez',
        fechanacimiento: '09-03-1990'
      }];

      $scope.configPages = function() {
        $scope.pages.length = 0;
        var ini = $scope.currentPage - 4;
        var fin = $scope.currentPage + 5;
        if (ini < 1) {
          ini = 1;
          if (Math.ceil($scope.usuarios.length / $scope.pageSize) > 10)
            fin = 10;
          else
            fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
        } else {
          if (ini >= Math.ceil($scope.usuarios.length / $scope.pageSize) - 10) {
            ini = Math.ceil($scope.usuarios.length / $scope.pageSize) - 10;
            fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
          }
        }
        if (ini < 1) ini = 1;
        for (var i = ini; i <= fin; i++) {
          $scope.pages.push({
            no: i
          });
        }

        if ($scope.currentPage >= $scope.pages.length)
          $scope.currentPage = $scope.pages.length - 1;
      };

      $scope.setPage = function(index) {
        $scope.currentPage = index - 1;
      };
    }
  ])

.filter('startFromGrid', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});