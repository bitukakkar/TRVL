import React, { useEffect } from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import AgentProfile from './AgentProfile/index'
import AgentDetails from './AgentDetails/index'
import { useForm, FormProvider } from 'react-hook-form'
import useNavBg from './../../../Hooks/useNavBg'
import Grid from '@material-ui/core/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import './styles.css'
import Offers from '../Offers'
function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
const DigitalAgent = () => {
  const classes = useStyles()
  const methods = useForm()
  const [setIsNavBgShow] = useNavBg()
  const [value, setValue] = React.useState(0)

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <FormProvider {...methods}>
      <Box className={classes.boxWidth + ' digital-agent'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            className={classes.agenttabs}
          >
            <Tab label='Agent setup' {...a11yProps(0)} />
            <Tab label='Offers' {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container>
            <Grid item sm={12} md={4}>
              <h2 className={classes.title_top}>Digital agent</h2>
              <section className={classes.leftContainer}>
                <h3 className={classes.title}>Agent profile</h3>
                <AgentProfile />
              </section>
            </Grid>
            <Grid item sm={12} md={8}>
              <section className={classes.rightContainer}>
                <AgentDetails />
              </section>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container>
            <Offers />
          </Grid>
        </TabPanel>
      </Box>
    </FormProvider>
  )
}

export default DigitalAgent
