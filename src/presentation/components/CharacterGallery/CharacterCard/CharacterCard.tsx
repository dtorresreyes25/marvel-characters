import {
  Description,
  Name,
  Picture,
  Container,
  Divider,
  FavoriteIcon,
  RouterLink,
} from './CharacterCard.styles';
import { FC, useCallback } from 'react';
//import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
import { ReactComponent as HeartOutlinedIcon } from '@/assets/heart_outlined.svg';
import { Character } from '@/domain/model';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, thumbnail } = character;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  const handleFavoriteClick = useCallback(() => {
    // TODO: Implement favorite functionality
  }, []);

  return (
    <Container>
      <RouterLink to={`/characters/${id}`}>
        <Picture src={imageUrl} alt={name} />
        <Divider />
        <Description>
          <Name $variant="md">{name}</Name>
          <FavoriteIcon
            size="sm"
            icon={<HeartOutlinedIcon />}
            onClick={handleFavoriteClick}
            aria-label={`Add ${name} to favorites`}
          />
        </Description>
      </RouterLink>
    </Container>
  );
};

export default CharacterCard;
