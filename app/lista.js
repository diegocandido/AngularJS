function ListaController($scope) {
    $scope.itens = [
        {empresa: 'Acesso', nome: 'Diego', cpf: '000.000.000-00'},
        {empresa: 'Casa', nome: 'Cassiano', cpf: '000.000.000-00'},
		{empresa: 'Acesso', nome: 'Pedro', cpf: '000.000.000-00'},
		{empresa: 'Casa', nome: 'Joao', cpf: '000.000.000-00'},
		{empresa: 'Casa', nome: 'Maria', cpf: '000.000.000-00'}
    ];
	$scope.dados2 = [
		  {cnpj: '1', empresa: 'Empresa A'},
		  {cnpj: '2', empresa: 'Empresa B'},
		  {cnpj: '3', empresa: 'Empresa C'}
   ];

    $scope.adicionaCPF = function () {
        $scope.itens.push({
						  nome: $scope.item.nome,
                          cpf: $scope.item.cpf,
						  empresa: $scope.item.empresa
						  });
    };
	$scope.adicionaCNPJ = function () {
        $scope.dados2.push({
                          empresa: $scope.dados2.empresa,
						  cnpj: $scope.dados2.cnpj
						  });
    };
}
