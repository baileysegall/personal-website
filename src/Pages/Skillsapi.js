import Airtable from 'airtable'
import React, { useEffect, useState} from 'react';
import Skills from './Skills';

const base = new Airtable( {apiKey:'keyyGSmV5MS8h310O'}).base('appFWztQ2fhWRzICb')

function Skillsapi(){
    const [skills, setSkills]=useState([]);

    useEffect(()=>{
        base("skills")
            .select({view: "Grid view"})
            .eachPage((records, fetchNextPage) => {
                setSkills(records);
                fetchNextPage();
            });
    },[])
    return (
        <>
            
            {skills.map(skill => (
            <Skills
                key={skill.id}
                skill={skill}/>
            
            ))}
        </>
        );
    }

    export default Skillsapi;