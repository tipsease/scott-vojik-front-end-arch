import React from "react";
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  margin: 0 0 64px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
`

const SearchForm = styled.form`
  width: 33%;
  margin: 0 auto;
`

const SearchInput = styled.input`
  margin-top: 16px;
  padding: 6px 20px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
`


function SearchBar(props) {
  return (
    <SearchContainer>
      
      <SearchForm onSubmit={props.search}>
        <SearchInput name="searchText" onChange={props.handleSearch} type="text" placeholder="Search" />
      </SearchForm>
      
    </SearchContainer>
  )
}

export default SearchBar