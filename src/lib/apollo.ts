import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4szsmn02owl01zc2sbz5tjr/master',
    cache: new InMemoryCache()

})