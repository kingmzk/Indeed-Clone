import { Select, MenuItem ,FormControl,InputLabel} from '@mui/material';


const Dropdown = ({label, id, value, handleChange,name,options,...props}) => {
    const selectedValue = Array.isArray(value) ? value : [value];

    return (

        <FormControl>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={selectedValue}
                label={label}
                onChange={handleChange}
                name={name}
                {...props}
            >
                {
                    options.map(option =>(
                        <MenuItem value={option}>{option}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown;