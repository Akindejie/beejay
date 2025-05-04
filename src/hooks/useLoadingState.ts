import { useState, useCallback } from 'react';

/**
 * A custom hook for managing loading states
 * @template T The type of data being loaded
 * @returns An object with loading state, data, error, and a wrapper function
 */
export function useLoadingState<T>() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  /**
   * A wrapper function that handles loading state for async operations
   * @param asyncFunction The async function to execute
   * @returns The result of the async function
   */
  const withLoading = useCallback(
    async <R>(asyncFunction: () => Promise<R>): Promise<R | null> => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunction();
        setData(result as unknown as T);
        return result;
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, data, error, withLoading };
}
