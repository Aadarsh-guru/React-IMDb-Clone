import React, {useState} from 'react'
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material'
import { logoURL } from '../constants/constants'
import {Menu} from '@mui/icons-material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../constants/route';
// components
import HeaderMenu from './HeaderMenu';


const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height:56px ! important;
    padding: 0 115px ! important;
    justify-content: space-between;
    & > * {
      padding: 0 14px;
    }
    & > div {
      display : flex;
      align-items: center;
      cursor : pointer;
      & > p {
        font-size: 14px;
        font-weight: 600;
      }
    }
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
`

const InputSeach = styled(InputBase)`
    background : #FFFFFF;
    height : 30px;
    width: 55%;
    border-radius: 5px;
`


const Logo = styled('img')({
  width: 64,
  cursor: 'pointer'
})

const Header = () => {

  const [open,setOpen] = useState(null)

  const navigate = useNavigate()

  const handleClick = (e)=>{
    setOpen(e.currentTarget)
  }

  const handleClose = ()=>{
    setOpen(null)
  }

  return (
    <AppBar position='static'>
        <StyledToolbar>
            <Logo src={logoURL} alt="logo" onClick={()=>navigate(routePath.home)} />
            <Box onClick={handleClick}>
              <Menu/>
              <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose} />
            <InputSeach/>
            <Typography>IMDb<Box component='span'>Pro</Box></Typography>
            <Box>
              <BookmarkAddIcon/>
              <Typography>Warchlist</Typography>
            </Box>
            <Typography>Sign In</Typography>
            <Box>
              <Typography>EN</Typography>
              <ExpandMoreIcon/>
            </Box>
        </StyledToolbar>
    </AppBar>
  )
}

export default Header