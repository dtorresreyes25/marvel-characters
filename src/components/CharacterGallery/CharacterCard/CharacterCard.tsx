import {
  Description,
  Name,
  Picture,
  Container,
  Divider,
  FavoriteIcon,
  RouterLink,
} from './CharacterCard.styles.ts';
import { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as HeartOutlinedIcon } from '@/assets/heart_outlined.svg';
import { Character } from '../../../types';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore.ts';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, thumbnail } = character;
  const characterImageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  const { toggleCharacterFavorite, isCharacterFavorite } =
    useFavoriteCharactersStore();

  const onToggleFavorite = () => {
    toggleCharacterFavorite(character);
  };

  const FavoriteIconComponent = isCharacterFavorite(character.id)
    ? HeartFilledIcon
    : HeartOutlinedIcon;

  const ariaLabel = isCharacterFavorite(character.id)
    ? `Remove ${name} from favorites`
    : `Add ${name} to favorites`;

  return (
    <Container>
      <RouterLink to={`/character/${id}`}>
        <Picture src={characterImageUrl} alt={name} />
        <Divider />
        <Description>
          <Name variant="sm">{name}</Name>
          <FavoriteIcon
            size="sm"
            aria-label={ariaLabel}
            icon={FavoriteIconComponent}
            onClick={onToggleFavorite}
          />
        </Description>
      </RouterLink>
    </Container>
  );
};

export default CharacterCard;
