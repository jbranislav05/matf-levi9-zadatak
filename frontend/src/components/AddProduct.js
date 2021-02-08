import React, {useState} from 'react';

function AddProduct(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            'name': name,
            'description': description
        }
        fetch('http://localhost:3001/admin/unos-novog-proizvoda', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data),
        }).then(response => response.json())
        .catch(error => console.error('error', error))
        .then(() => {
            setName('');
            setDescription('');
        });
    }

        return(
            <div id="id">

                <form id="td" onSubmit={(e) => handleSubmit(e)}>
                    
                    Proizvod:
                    <input type="text" value={name} onChange={(e) => handleNameChange(e)} />
                    <br></br>
                    Opis:   
                    <input type="text" value={description} onChange={(e) => handleDescriptionChange(e)} />
                    <br></br>
                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        )
}

export default AddProduct;