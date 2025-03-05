import { useState, useEffect, ChangeEvent } from 'react';
import { useDebouncedValue } from '@/infraestructure/hooks/useDebouncedValue';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import {
  SearchBar,
  Input,
  ResultsText,
  Container,
} from './SearchFilter.styles';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(50);
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    setResults(Math.max(50 - debouncedQuery.length * 2, 0));
  }, [debouncedQuery]);

  return (
    <Container>
      <SearchBar>
        <SearchIcon size={20} color="gray" />
        <Input
          type="text"
          placeholder="Search a character..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </SearchBar>
      <ResultsText $variant="sm">{results} RESULTS</ResultsText>
    </Container>
  );
};

export default SearchFilter;
