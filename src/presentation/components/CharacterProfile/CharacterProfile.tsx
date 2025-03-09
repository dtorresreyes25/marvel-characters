import { FC } from 'react';
import { ReactComponent as HeartFilled } from '@/assets/heart_filled.svg';
import Typography from '@/presentation/components/Typography';
import {
  Header,
  Avatar,
  Summary,
  Content,
  Title,
  Actions,
} from './CharacterProfile.styles';
import { Character } from '@/domain/model';
import ButtonWithIcon from '@/presentation/components/ButtonWithIcon';

export interface CharacterProfileProps {
  character: Character;
}

const CharacterProfile: FC<CharacterProfileProps> = ({ character }) => {
  const handleFavoriteClick = () => {};

  return (
    <Header>
      <Content>
        <Avatar
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`$ Thumbnail for character ${character.name}`}
        />

        <Summary>
          <Actions>
            <Title variant="xxxl">{character.name}</Title>
            <ButtonWithIcon
              icon={<HeartFilled />}
              onClick={handleFavoriteClick}
              size={'md'}
            />
          </Actions>
          <Typography variant="md">{character.description}</Typography>
        </Summary>
      </Content>
    </Header>
  );
};

export default CharacterProfile;
