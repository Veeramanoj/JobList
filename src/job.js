import React from 'react';

const Job=(props)=>{
    const {logo,company,position,postedAt,contract,location,level,languages,isNew,featured,role}=props.data
    const skills=[role,level,...languages]

    return (
        <div className={`card ${featured && 'condstyle'}`} >
            <div>
                <img src={logo} alt={company}/>
            </div>
            <div className='cardbody' >
                <h5>{company}
                {isNew && <span className='new'>NEW!</span>}
                {featured && <span className='featured'>FEATURED</span>}
                </h5>
                <h4>{position}</h4>
                <p>{`${postedAt} · ${contract} · ${location}`}</p>
            </div>
            <div className='tools'>
                {skills.map(skill=>{
                    return <span onClick={()=>props.handleTag(skill)}>{skill}</span>
                })}
            </div>
        </div>
    )
}

export default Job;
