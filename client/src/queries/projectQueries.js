import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const GET_PROJECTS_BY_CLIENT = gql`
  query projectsByClient($clientId: ID!) {
    projectsByClient(clientId: $clientId) {
      id
      name
      status
    }
  }
`

export { GET_PROJECTS, GET_PROJECT , GET_PROJECTS_BY_CLIENT};
