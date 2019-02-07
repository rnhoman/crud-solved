import gql from 'graphql-tag'

export const createClient = gql`
mutation createClient (
    $company: String
){
    createClient( data: {
        company: $company
    }) {
        company
    }
}`

export const updateClient = gql`
mutation updateClient (
    $id: Int!, $company: String
    ) {
    updateClient(
        where: {
            id: $id
        }, 
        data: {
            company: $company
        }
    ) {
        company
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
    }
}`