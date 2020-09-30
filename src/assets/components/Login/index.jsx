import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.test);
    const formLogin = useRef(null);
    const formPassword = useRef(null);

    const submitFunc = (e) => {
        e.preventDefault();
        if (formLogin.current.value.trim() !== '' && formPassword.current.value.trim() !== '')
        {
            dispatch({
                type: 'LOGGED',
                payload: true
            });

            dispatch({
                type: 'USER_LOG',
                payload: formLogin.current.value.trim()
            });
        }
        else if (formLogin.current.value.trim() === '') {
            alert('Введите корректный логин');
        }
        else {
            alert('Введите корректный пароль');
        }
    }

    return (
        <>
            {
                state.logged && 
                <Redirect exact to="/Users" />
            }
            {
                <>
                    <h2 className='text-center mb-4'>Форма входа</h2>
                    <form className='border w-md-50 mx-md-auto border-primary py-4 px-4' onSubmit={(e) => { submitFunc(e) }}>
                        <div className="row align-items-center">
                            <div className="col-12 px-0 text-center text-sm-left col-sm-2">Логин:</div>
                            <div className="col-12 mt-3 mt-sm-0 col-sm-10">
                                <input type="text" className='form-control' ref={formLogin} placeholder='Введите логин...' name="form-login" />
                            </div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-12 px-0 text-center text-sm-left col-sm-2">Пароль:</div>
                            <div className="col-12 mt-3 mt-sm-0 col-sm-10">
                                <input type="password" className='form-control' ref={formPassword} placeholder='Введите пароль...' name="form-password" />
                            </div>
                        </div>
                        <input type="submit" className='btn btn-primary d-block mx-auto mt-4' value="Войти" />
                    </form>
                </>
            }
        </>
    );
}