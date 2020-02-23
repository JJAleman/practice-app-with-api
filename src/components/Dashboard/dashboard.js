import React from 'react';

function Dashboard(props) {
    const handleLogout = () => {
        props.history.push('/login');
    }

    return (
        <div>
            Welcome User!
            <input 
            type='button'
            onClick={handleLogout}
            value='Logout'
            />
        </div>
    );
}

export default Dashboard;