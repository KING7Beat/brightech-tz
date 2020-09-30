import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../Users/user';
import Search from '../Search/search';
import { Redirect } from 'react-router-dom';

export default () => {

    const state = useSelector(state => state.test);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (state.searchValue !== '')
        {
            const res = state.drivers.filter(item => item.surname.toLowerCase().includes(state.searchValue));
            dispatch({
                type: 'SEARCH_DATA_FIND',
                payload: res
            });
        }
    },[state.searchValue])

    return (
        <>
            {
                !state.logged &&
                <Redirect exact to="/" />
            }
            {
                state.logged &&
                <>
                    <Search></Search>
                    <div className="row mx-0 bg-primary" style={{ color: '#FFF' }}>
                        <p className="col-4 mb-0 border border-light">Имя:</p>
                        <p className="col-4 mb-0 border border-light">Фамилия:</p>
                        <p className="col-4 mb-0 border border-light">Телефон:</p>
                    </div>
                    {
                        state.searchValue === '' && state.drivers.length > 0 &&
                        state.drivers.map(item => <User key={item.id} name={item.name} surname={item.surname} phone={item.phone}></User>)
                    }
                    {
                        state.searchArr.length > 0 && state.searchValue !== '' &&
                        state.searchArr.map(item => <User key={item.id} name={item.name} surname={item.surname} phone={item.phone}></User>)
                    }
                </>
            }
        </>
    );
}