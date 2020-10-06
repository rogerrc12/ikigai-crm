import React from "react";
import Moment from "react-moment";
import { graphql, useStaticQuery, Link } from "gatsby";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost(limit: 5, sort: { fields: [createdAt], order: DESC }) {
        nodes {
          title
          slug
          createdAt
        }
      }
    }
  `);

  const allPosts = data.allContentfulPost.nodes;

  return (
    <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
      <aside className="sidebar sticky-top">
        {/* Popular Posts */}
        <div className="sidebar-widget popular-posts">
          <div className="sidebar-title">
            <h5>Posteos recientes</h5>
          </div>
          {allPosts.map((post) => (
            <article className="post" key={post.title}>
              <div className="text">
                <Link to={"/" + post.slug}>{post.title}</Link>
              </div>
              <div className="post-info">
                <Moment format="DD MMM [del] YYYY">{post.createdAt}</Moment>
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
