import React from "react";
import { graphql, Link } from "gatsby";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Moment from "react-moment";

import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import Sidebar from "../components/blog/sidebar";

const options = {
  renderNode: {
    "embedded-asset-block": (node) => {
      const alt = node.data.target.fields.title["en-US"];
      const url = node.data.target.fields.file["en-US"].url;
      return <img alt={alt} src={url} style={{ maxWidth: 500 }} />;
    },
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes("youtube.com")) {
        return <iframe title='Post video' width='560' height='315' src={node.data.uri} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>;
      }
    },
  },
};

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
                    <div className='text'>{documentToReactComponents(post.content.json, options)}</div>
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
            <h4>Quiero aumentar mis ventas, quiero fidelizar mis clientes</h4>
            <div className='text'>Empieza ahora con nosotros.</div>
            <a className='theme-btn btn-style-four' href='https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10' target='_blank' rel='noopener noreferrer'>
              <span className='txt'>Obtener una demostración</span>
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
