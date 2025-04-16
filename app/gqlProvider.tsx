'use client';
import { PropsWithChildren, useMemo } from "react";
import { UrqlProvider, ssrExchange, fetchExchange, createClient, gql } from '@urql/next';
// used for normalized caching of data
import { cacheExchange } from "@urql/exchange-graphcache";
// Urql calls plugins "exchanges"
import { url } from "@/utils/url";
import { getToken } from "@/utils/token";
//
// this component is just so that we can leverage Urql's caching layer in our requests
export const GQLProvider = ({ children }: PropsWithChildren) => {
  // memoize things so that we don't reinit the client or ssr values
  // if we don't memoize this the client cache gets purged on every rerender
  // if this was a server component this would be a massive security hole because
  // then every request would share the same cache, which is badbadbad
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });

    const client = createClient({
      url,
      exchanges: [cacheExchange({}), ssr, fetchExchange],
      fetchOptions: () => {
        const token = getToken();

        return token ? {
          headers: { authorization: `Bearer ${token}` }
        } : {};
      }
    });
    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
