import { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as HeartOutlinedIcon } from '@/assets/heart_outlined.svg';
import Typography from '@/components/Typography';
import {
  Header,
  Avatar,
  Summary,
  Content,
  Title,
  Actions,
} from './CharacterProfile.styles.ts';
import { Character } from '../../types';
import ButtonWithIcon from '@/components/ButtonWithIcon';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore.ts';

export interface CharacterProfileProps {
  character: Character;
}

const CharacterProfile: FC<CharacterProfileProps> = ({ character }) => {
  const { toggleCharacterFavorite, isCharacterFavorite } =
    useFavoriteCharactersStore();

  const handleFavoriteClick = () => {
    toggleCharacterFavorite(character);
  };

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
              icon={
                isCharacterFavorite(character.id)
                  ? HeartFilledIcon
                  : HeartOutlinedIcon
              }
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
