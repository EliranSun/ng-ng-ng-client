import React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

/**
 * @function
 * @template {object} P
 * @param {import('react').ComponentType<P>} Component
 * @param {boolean} withDevtools - whether to append React-Query Devtools
 * @returns {import('react').FC<P>}
 */
const withQueryClient = (Component, withDevtools = true) => {
  const WithQueryClient = (props) => {
    try {
      useQueryClient();

      return <Component {...props} />;
    } catch (error) {
      if (error.message.match(/(QueryClient|QueryClientProvider)/i)) {
        return (
          <QueryClientProvider client={client}>
            <Component {...props} />
            {withDevtools && process.env.NODE_ENV !== "production" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </QueryClientProvider>
        );
      }

      throw error;
    }
  };

  return WithQueryClient;
};

export default withQueryClient;
