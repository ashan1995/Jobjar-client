import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState, type ChangeEvent } from 'react'

function SaveJobPage() {
  const [platform, setPlatform] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [priority, setPriority] = useState(false);

    const options = [
        { label: 'Frontend Developer', id: 1 },
        { label: 'Backend Developer', id: 2 },
        { label: 'Full Stack Developer', id: 3 },
        { label: 'Software Engineer', id: 4 },
        { label: 'QA Engineer', id: 5 },
        { label: 'Software Developer', id: 6 },
        { label: 'Cloud Engineer', id: 7 },
        { label: 'Security Engineer', id: 8 },
        { label: 'Machine Learning Engineer', id: 9 },
        { label: 'System Administrator', id: 10 },
        { label: 'Network Engineer', id: 11 },
        { label: 'Technical Support Engineer', id: 12 },
        { label: 'Software Architect', id: 13 },
        { label: 'IT Support Specialist', id: 14 },
        { label: 'Help Desk Technician', id: 15 },
    ];
  
    function handlePositonChange(
        event: React.SyntheticEvent<Element, Event>,
        value: { label: string; id: number } | null
    ): void {
        setPosition(value ? value.label : '');
    }

    function handleCompanyChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setCompany(event.target.value);
    }
    function handlePriorityChange(event: ChangeEvent<HTMLInputElement>): void {
        setPriority(event.target.checked);
    }

    function onSubmit() {
        // Handle form submission logic here
        console.log("Position:", position);
        console.log("Company:", company);
        console.log("Platform:", platform);
        console.log("Priority:", priority);

        // Reset form fields after submission
        setPosition('');
        setCompany('');
        setPlatform('');
        setPriority(false);
    }

  return (
    <div>
        <h2>Save Job</h2>
        <Grid container spacing={2} className='shadowbox'>
             <Grid size={12}>
                <Autocomplete
                    disablePortal
                    options={options}
                    value={options.find(option => option.label === position) || null}
                    onChange={handlePositonChange}
                    renderInput={(params) => <TextField {...params} name='position' required size='small' label="Position" />}
                />
        
              
            </Grid>
            <Grid size={12}>
                <TextField value={company} required name='company' onChange={handleCompanyChange} id="addjob-company" 
                    label="Company" variant="outlined" size='small'/>
            </Grid>
            <Grid size={12}>
                <FormControl fullWidth>
                    <InputLabel size='small' id="demo-simple-select-label">Job Platform</InputLabel>
                    <Select
                        size='small'
                        required
                        labelId="addjob-platform-label"
                        value={platform}
                        label="Job Platform"
                        onChange={(e) => setPlatform(e.target.value)}
                    >
    
                        <MenuItem value="linkedin">LinkedIn</MenuItem>
                        <MenuItem value="seek">Seek</MenuItem>
                        <MenuItem value="indeed">Indeed</MenuItem>
                        <MenuItem value="company">Company Site</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={priority}
                            onChange={handlePriorityChange}
                            name="priority"
                        />
                    }
                    label="Priority"
                />
            </Grid>
            <Grid size={12}>
                    <Button variant="contained" size="small" onClick={onSubmit}>Submit</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default SaveJobPage