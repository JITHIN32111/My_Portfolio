import React, { useState } from 'react';
import User from './User';

function NewHead() {
    const [show, setShow] = useState(false);

    console.log('show state:', show); // Debugging
 const onChangeBtn=()=>{}
    return (
        <div className='w-full z-10 sticky top-0 left-0   h-[70px] text-white bg-slate-950'>
            <input type="checked " value="" onChange={onChangeBtn}/>
            <div>
                <h1 className='xl:hidden' onClick={() => setShow(true)}>Open User</h1>
            </div>
            <div>hallo</div>
            <User show={show} />
        </div>
    );
}

export default NewHead;
