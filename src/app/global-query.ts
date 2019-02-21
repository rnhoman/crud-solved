import gql from 'graphql-tag'

export const createClient = gql`
mutation createClient (
    $company: String,
    $client_alias: String
){
    createClient( data: {
        company: $company,
        client_alias: $client_alias
    }) {
        company
        client_alias
    }
}`

export const updateClient = gql`
mutation updateClient (
    $id: Int!, $company: String, $client_alias: String
    ) {
    updateClient(
        where: {
            id: $id
        }, 
        data: {
            company: $company,
            client_alias: $client_alias
        }
    ) {
        company
        client_alias
    }
}`

export const deleteClient = gql`
mutation deleteClient ( 
    $id: Int!
) {
    deleteClient(
        where: {
            id: $id
        }
    ) {
        id
        company
        client_alias
    }
}`