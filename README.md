# AngularJS

Trabalho com arquivos fixos, SEM USO DE API.

Estou colocando os dados em um array, no scope da lista. 

1) Aqui estou salvando as "pessoas":
   $scope.itens = [
    {empresa: 'Acesso', nome: 'Diego', cpf: '000.000.000-00'},
    {empresa: 'Casa', nome: 'Cassiano', cpf: '000.000.000-00'},
		{empresa: 'Acesso', nome: 'Pedro', cpf: '000.000.000-00'},
		{empresa: 'Casa', nome: 'Joao', cpf: '000.000.000-00'},
		{empresa: 'Casa', nome: 'Maria', cpf: '000.000.000-00'}
];

2) Aqui estou salvando as "empresas":
	$scope.dados2 = [
		  {cnpj: '1', empresa: 'Empresa A'},
		  {cnpj: '2', empresa: 'Empresa B'},
		  {cnpj: '3', empresa: 'Empresa C'}
];

3) Neste ponto estou salvando os dados nos respectivos arrays:
 
 3.1) Array dos CPF:
 $scope.adicionaCPF = function () {
        $scope.itens.push({
						  nome: $scope.item.nome,
                          cpf: $scope.item.cpf,
						  empresa: $scope.item.empresa
						  });
    };
    
  3.2) Array dos CNPJ:  
	$scope.adicionaCNPJ = function () {
        $scope.dados2.push({
                          empresa: $scope.dados2.empresa,
						  cnpj: $scope.dados2.cnpj
						  });
};

4) Usei a biblioteca do JqueryMask, para fazer a formatação do input dos campos, CNPJ e CPF:
  $(function() {
    $('.cpf').mask('000.000.000-00', {reverse: true});
	  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  });



