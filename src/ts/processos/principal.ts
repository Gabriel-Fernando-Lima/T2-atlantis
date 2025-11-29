import Processo from "../abstracoes/processo";
import MenuPrincipal from "../menus/menuPricipal"; 
import TipoCadastroCliente from "./cadastro/tipoCadastroCliente";
import TipoListagemClientes from "./listagem/tipoListagemClientes";
import EditarCliente from "./editar/editarCliente";
import ExcluirCliente from "./excluir/excluirCliente"; 

export default class Principal extends Processo {
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new ExcluirCliente() 
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}