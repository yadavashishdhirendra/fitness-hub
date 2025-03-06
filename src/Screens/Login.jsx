import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Styles/login.scss';

const roles = ["Admin", "User"];

const Login = () => {
    const [selectedRole, setSelectedRole] = React.useState("");

    const handleChange = (event) => {
        const role = event.target.value;
        setSelectedRole(role);
        localStorage.setItem("gym__user", role);
        window.location.href = "/";
    };

    return (
        <div className='login__container'>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="role-label">Choose Role</InputLabel>
                <Select
                    labelId="role-label"
                    id="role-select"
                    value={selectedRole}
                    onChange={handleChange}
                    input={<OutlinedInput label="Role" />}
                >
                    {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                            {role}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Login;
