import React, { useEffect } from 'react';
import User from './user';
import Search from '../Search/search';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.test);

    useEffect(()=>{
        if (state.searchValue !== '')
        {
            const res = state.users.filter(item => item.surname.toLowerCase().includes(state.searchValue));
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
                        <p className="col-4 mb-0 border border-light">E-mail:</p>
                    </div>
                    {
                        state.searchValue === '' && state.users.length > 0 &&
                        state.users.map(item => <User key={item.id} name={item.name} surname={item.surname} email={item.email}></User>)
                    }
                    {
                        state.searchArr.length > 0 && state.searchValue !== '' &&
                        state.searchArr.map(item => <User key={item.id} name={item.name} surname={item.surname} email={item.email}></User>)
                    }
                </>
            }
        </>
    );
}