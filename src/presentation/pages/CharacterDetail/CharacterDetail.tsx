import { FC } from 'react';
import { useParams } from 'react-router-dom';

type CharacterParams = {
  id: string;
};

const CharacterDetail: FC = () => {
  const { id } = useParams<CharacterParams>();
  return <h1>CharacterDetail: {id}</h1>;
};

export default CharacterDetail;
