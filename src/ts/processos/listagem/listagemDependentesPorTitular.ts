import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ListagemDependentesPorTitular extends Processo {
    processar(): void {
        console.log('Listagem de Dependentes')
        
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes


        console.log('Selecione o Titular:')
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })

        let index = this.entrada.receberNumero('Digite o índice do titular: ')
        
        if (index >= 0 && index < clientes.length) {
            let titular = clientes[index]
            
            if (titular.Dependentes.length === 0) {
                console.log('Este cliente não possui dependentes.')
            } else {
                console.log(`Dependentes de ${titular.Nome}:`)
                titular.Dependentes.forEach(dependente => {
                    console.log(`- Nome: ${dependente.Nome} | Nasc: ${dependente.DataNascimento.toLocaleDateString()}`)
                })
            }
        } else {
            console.log('Índice inválido.')
        }
    }
}