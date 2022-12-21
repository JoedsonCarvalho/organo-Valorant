import { Button } from '../Button/Button';
import { DropdownList } from '../DropdownList/DropdownList';
import ImageField from '../ImageField';
import { TextField } from '../TextField/TextField';
import './Form.css';

export const Form = (props) =>{
    const agentType = [
        'Duelista',
        'Iniciador',
        'Controlador',
        'Sentinela'
    ]

    return( 
        <section className="form">
            <form>
                <h3>Preencha as informações de seu Squad</h3>

                <TextField label='Nome' required={true} placeholder='Digite o nome do participante:'/>
                <ImageField label='Imagem' imgId='image' placeholder='Insira a imagem de seu companheiro:' />
                <DropdownList list={agentType} label='Selecione o tipo do agente' />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}