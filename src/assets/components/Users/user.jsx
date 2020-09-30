import React, { useEffect, useState } from 'react';

export default (props) => {
    const [phone, Setphone] = useState(props.phone);
    const [email, Setemail] = useState(props.email);

    useEffect(()=>{
        Setphone(props.phone);
        Setemail(props.email);
    }, [props.phone, props.email]);

    return (
        <div className='row mx-0 text-center'>
            <p className="col-4 px-0 px-md-3 border mb-0">{props.name}</p>
            <p className="col-4 px-0 px-md-3 border mb-0">{props.surname}</p>
            {
                props.email && 
                <p className="col-4 px-0 px-md-3 border mb-0" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{email}</p>
            }
            {
                props.phone && 
                <p className="col-4 px-0 px-md-3 border mb-0" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{phone}</p>
            }
        </div>
    );
}