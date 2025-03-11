import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';
import { server } from './src/tests/mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
