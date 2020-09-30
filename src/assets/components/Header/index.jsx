import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default () => {
    const state = useSelector(state => state.test);
    const dispatch = useDispatch();

    const changeSearch = () => {
        dispatch({
            type: 'SEARCH_DATA_VALUE',
            payload: ''
        });
        dispatch({
            type: 'SEARCH_DATA_FIND',
            payload: []
        });
    };

    return (
        <main>
            {
                state.currentUser !== '' &&
                <>
                    <div className="row mx-0 mb-5">
                        <nav className="col-4 px-0">
                            <h6>Навигация:</h6>
                            <ul style={{listStyle: 'none'}} className='px-0'>
                                <li>
                                    <Link to='/Drivers' onClick={changeSearch}>Водители</Link>
                                </li>
                                <li>
                                    <Link to='/Users' onClick={changeSearch}>Пользователи</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="col-4 px-0 offset-4 d-flex flex-column">
                            <p className='text-center'>Добрый день, {state.currentUser}</p>
                            <button className='btn btn-danger w-100' onClick={() => { 
                                dispatch({
                                    type: 'USER_LOG',
                                    payload: ''
                                });
                                dispatch({
                                    type: 'LOGGED',
                                    payload: false
                                })
                            }}>Выйти</button>
                        </div>
                    </div>
                </>
            }
        </main>
    );
}