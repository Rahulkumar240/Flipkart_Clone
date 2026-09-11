import React from 'react'
import { InputBase, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearchBase = styled(InputBase)`
  padding-left:20px;
  width: 100%;
`

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase
        placeholder='Search for products, brands and more'
         />
         <Box>
            <SearchIcon />
         </Box>
    </SearchContainer>
  )
}

export default Search;