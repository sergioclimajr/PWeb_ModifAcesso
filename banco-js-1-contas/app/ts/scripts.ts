//import {Conta} from '../ts/modelo';

const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);


const pessoa01 = new Pessoa('Clovis', '35', "17/7/1987");
const pessoa02 = new PessoaFisica('Sergio', '27', "02/01/1996", '073.816.601-22');
const pessoa03 = new PessoaJuridica('Itaú Unibanco', '14', "04/11/2008", '60.701.190/0001-04');

console.log(`Seu nome é ${pessoa01.nome}, sua idade é ${pessoa01.idade} e sua data de nascimento é ${pessoa01.dataNasc}.\n`)
console.log(`Seu nome é ${pessoa02.nome}, sua idade é ${pessoa02.idade}, sua data de nascimento é ${pessoa02.dataNasc} e seu CPF é ${pessoa02.cpf}.\n`)
console.log(`Seu nome é ${pessoa03.nome}, sua idade é ${pessoa03.idade}, sua data de nascimento é ${pessoa03.dataNasc} e seu CNPJ é ${pessoa03.cnpj}.\n`)
