
import React from 'react'
import { Box, Typography } from '@mui/material'
import { navData } from '../../constants/data'
import { styled } from '@mui/material'

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1280px',
  width: '100%',
  margin: '55px auto 0',
  padding: '0 24px',
  boxSizing: 'border-box',
  gap: '20px',

  [theme.breakpoints.down('lg')]: {
    marginTop: '20px',
    padding: '0 16px',
    gap: '12px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '12px 4px',
    padding: '0 8px',
  },
}))

const Container = styled(Box)(({ theme }) => ({
  padding: '12px 8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1 0',
  minWidth: 0,

  '& img': {
    width: '64px',
    height: '64px',
    objectFit: 'contain',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '8px 2px',

    '& img': {
      width: '48px',
      height: '48px',
    },
  },
}))

const Text = styled(Typography)({
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'inherit',
  textAlign: 'center',
  lineHeight: 1.4,
  marginTop: '6px',
})

const NavBar = () => {
  return (
    <Box sx={{ background: '#fff', width: '100%' }}>
      <Component>
        {navData.map(data => (
          <Container key={data.text}>
            <img src={data.url} alt={data.text} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  )
}

export default NavBar
