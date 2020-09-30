import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
    const dispatch = useDispatch();
    const searchBox = useRef(null);
    const state = useSelector(state => state.test);

    useEffect(()=>{
        if (state.searchValue === '')
        {
            searchBox.current.value='';
        }
    },[state.searchValue])

    return (
        <>
            <input type="search" name="form-search" className='form-control' ref={searchBox} onChange={(e)=>{
                dispatch({
                    type: 'SEARCH_DATA_VALUE',
                    payload: e.target.value.toLowerCase()
                });
            }} placeholder='Поиск по фамилии...'/>
        </>
    );
}