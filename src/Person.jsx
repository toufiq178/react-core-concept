import React, { use } from 'react';
import P from './P';


const Person = ({Persons}) => {

    
    const personData = use(Persons);
    
    console.log(personData);
    return (
        <div>
            
            {
                personData.map(person => <P key={person.id} person = {person}></P>)
            }
        </div>
    );
};

export default Person;