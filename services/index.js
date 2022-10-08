import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async() => {
    const query = gql`
        query Assets {
            assets {
              createdAt
              id
              publishedAt
              fileName
              url
              updatedAt
            }
            postsConnection {
              edges {
                node {
                  createdAt
                  slug
                  title
                  excerpt
                  category {
                    name
                    slug
                  }
                }
              }
            }
          }`
    const results = await request(graphqlAPI,query);
    return results.postsConnection.edges
}

export const getPostDetails = async(slug) => {
  const query = gql`
    query GetPostDetails($slug: String!){
      post(where: {slug: $slug}){
        query Assets {
          assets {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
          }
          postsConnection {
            edges {
              node {
                createdAt
                slug
                title
                excerpt
                category {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
      `
  const results = await request(graphqlAPI,query, {slug});
  return results.post
}

export const getRecentPost = async() => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC
        last: 3
        ){
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
    }  
  `
  const result = await request(graphqlAPI,query);
  return result.posts;
}

export const getSimilarPosts = async({categories, slug}) => {
  const query = gql`
  query GetPostDetails($slug: String!, $categories: [String!]){
    posts(
      where: { slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
      last: 3
      ){
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  `
  const result = await request(graphqlAPI, query, {categories, slug});
  return result.posts
}

export const getCategories = async()=> {
  const query = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
  `
  const result = request(graphqlAPI, query);
  return result.categories;
}

export const submitComment = async (obj) =>{
  const result = await fetch('/api/commetns',{
    method: 'POST',
    body: JSON.stringify(obj),
  });
  return result.json;
}