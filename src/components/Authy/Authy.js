import { React } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { toLogIn } from '../../store/Authy/action';
import { TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import '../CSS/App.css';

const MyButton = styled(Button)({
    background: 'linear-gradient(20deg, #61dafb 25%, #16424f 95%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: 20,
    // height: 48,
    padding: '0 30px',
});

function AuthForm({ LogIn, sysLogIn, sysPwd }) {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    function changeLogin(e) {
        setLogin(e.target.value)
    }
    function changePassword(e) {
        setPassword(e.target.value)
    }
    return (
        <div className={'authy'}>
            <h4>Let's log-in</h4>
            <TextField
                TextField id="filled-basic" label='Please txt your login' type='login' variant="filled" className='inp'
                value={login} onChange={(e) => changeLogin(e)} >
            </TextField>
            <TextField
                TextField id="filled-basic" label='Please txt your password' type='password' variant="filled" className='inp'
                value={password} onChange={(e) => changePassword(e)}>
            </TextField>
            <MyButton variant="contained" color="primary" href="#contained-buttons" onClick={LogIn} disabled={!((login === sysLogIn) && (password === sysPwd))}>Войти</MyButton>
        </div >
    )
}
function mapStateToProps(state) {
    return {
        session: state.session,
        sysLogIn: state.sysLogIn,
        sysPwd: state.sysPwd,
    }
};
function mapDispatchToProps(dispatch) {
    return {
        LogIn: () => dispatch(toLogIn())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);