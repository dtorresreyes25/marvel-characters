import { Container, LoadingText, Spinner } from './LoadingSpinner.styles';

const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner />
      <LoadingText variant="xl">Loading...</LoadingText>
    </Container>
  );
};

export default LoadingSpinner;
