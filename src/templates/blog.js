import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import SEO from "../components/seo";
import PostList from "../components/blog/postList";
import Sidebar from "../components/blog/sidebar";

const Blog = (props) => {
  const posts = props.data.allContentfulPost.nodes;

  return (
    <Layout>
      <SEO title='Blog - Ikigai CRM' />
      <PageHeader title='Blog' />

      <div className='sidebar-page-container'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Content Side */}
            <PostList posts={posts} pageContext={props.pageContext} />
            {/* Sidebar Side */}
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const useQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }, skip: $skip, limit: $limit) {
      nodes {
        title
        subtitle
        slug
        image {
          fluid {
            src
          }
        }
        createdAt
      }
    }
  }
`;

export default Blog;
