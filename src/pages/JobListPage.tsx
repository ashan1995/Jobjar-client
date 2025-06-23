import { Grid } from '@mui/material'
import React from 'react'
import PriorityList from './JobListPageComponents/PriorityList'
import RegularList from './JobListPageComponents/RegularList'

function JobListPage() {
  return (
    <div>
        <Grid container spacing={2} >
            <PriorityList />
            <RegularList/>
        </Grid>
    </div>
  )
}

export default JobListPage