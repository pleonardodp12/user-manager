import React from 'react';
import { ImSearch } from 'react-icons/im';
import { SearchInputContainer, Input, ButtonSearch } from './styles';

export default function SearchInput({ search }) {
  return (
    <SearchInputContainer>
      <Input type="search" placeholder="procurar..." autoFocus onChange={search}></Input>
      <ButtonSearch type="submit"><ImSearch size={20} color={"#fff"}/></ButtonSearch>
    </SearchInputContainer>
  );
};
