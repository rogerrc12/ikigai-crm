import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Moment from "react-moment";

import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import Sidebar from "../components/blog/sidebar";

const Post = (props) => {
  const post = props.data.contentfulPost;
  const { next, prev } = props.pageContext;

  return (
    <Layout>
      <PageHeader title={post.title} />

      <div className='sidebar-page-container'>
        <div className='auto-container'>
          <div className='row clearfix'>
            {/* Content Side */}
            <div className='content-side col-lg-9 col-md-12 col-sm-12'>
              <div className='news-single'>
                <div className='inner-box'>
                  <div className='image'>
                    {post.image ? <img src={post.image ? post.image.fluid.src : ""} alt={post.title} /> : null}
                    <div className='post-date'>
                      <Moment format='DD MMM [del] YYYY'>{post.createdAt}</Moment>
                    </div>
                  </div>
                  <div className='lower-content'>
                    <h3>{post.title}</h3>
                    <div className='text'>{documentToReactComponents(post.content.json)}</div>
                  </div>
                  {/* More Projects */}
                  <div className='blog-more-projects clearfix'>
                    <div className='pull-left'>
                      {prev && (
                        <Link to={"/" + prev.slug} className='more' rel='prev'>
                          <span className='arrow fa fa-arrow-left' /> &nbsp; Anterior
                        </Link>
                      )}
                    </div>
                    <div className='pull-right'>
                      {next && (
                        <Link to={"/" + next.slug} className='more'>
                          Siguiente &nbsp; <span className='arrow fa fa-arrow-right' />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Side */}
            <Sidebar />
          </div>
        </div>
      </div>

      <section className='call-to-action-section-two'>
        <div className='pattern-layer titlt' data-tilt data-tilt-max={2} style={{ backgroundImage: "url(images/background/pattern-24.png)" }} />
        <div className='auto-container'>
          <div className='inner-container'>
            <h4>Partner with Pixeld to succeed online</h4>
            <div className='text'>Getting started is easy, obligation and cost free.</div>
            <a href='#' className='theme-btn btn-style-four'>
              <span className='txt'>Get Started free</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query contenful($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt
      content {
        json
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`;
