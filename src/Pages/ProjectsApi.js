//curl https://api.airtable.com/v0/appFWztQ2fhWRzICb/Table%201?api_key=YOUR_API_KEY
//import '.ProjectsApi.css';
import Airtable from 'airtable'
import React, { useEffect, useState} from 'react';
import Projects from './Projects';

const base = new Airtable( {apiKey:'keyyGSmV5MS8h310O'}).base('appFWztQ2fhWRzICb')

function Projectsapi() {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        base("projects")
            .select({view: "Grid view"})
            .eachPage((records, fetchNextPage) => {
                setProjects(records);
                fetchNextPage();
            });
    },[])

    return (
    <>
        
        {projects.map(project => (
        <Projects 
            key={project.id}
            project={project}/>
        ))}
    </>
    );
}

export default Projectsapi