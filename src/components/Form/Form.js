import { useState } from 'react';
import { Button } from '../Button/Button';
import { DropdownList } from '../DropdownList/DropdownList';
import ImageField from '../ImageField';
import { TextField } from '../TextField/TextField';
import './Form.css';

export const Form = (props) =>{
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [agentType, setAgentType] = useState('');

    const agentTypeList = [
        'Duelista',
        'Iniciador',
        'Controlador',
        'Sentinela'
    ]

    const whenSave = (e) => {
        e.preventDefault();
        console.log(name, ' ',image, ' ', agentType)

        // setName('');
        // setImage('');
        // setAgentType('');
    }

    return( 
        <section className="form">
            <form onSubmit={whenSave}>
                <h3>Preencha as informações de seu Squad</h3>

                <TextField whenChanging={value => setName(value)} value={name} label='Nome' required={true} placeholder='Digite o nome do participante:'/>
                <TextField whenChanging={value => setImage(value)} value={image} label='Imagem' required={true} placeholder='Digite o link da imagem:'/>
                {/* <ImageField label='Imagem' required={true} imgId='image' placeholder='Insira a imagem de seu companheiro:' /> */}
                <DropdownList whenChanging={value => setAgentType(value)} value={agentType} list={agentTypeList} label='Selecione o tipo do agente' />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}