import React from "react";
import { Link } from "gatsby";
import Moment from "react-moment";
import Pager from "./pager";

const PostList = (props) => {
  return (
    <div className="content-side col-lg-9 col-md-12 col-sm-12">
      <div className="news-classic">
        <div className="classic-inner">
          {/* News Block */}

          {props.posts.map((post) => (
            <div className="news-block" key={post.createdAt}>
              <div className="inner-box">
                <div className="image">
                  <Link to={"/" + post.slug}>
                    <img src={post.image ? post.image.fluid.src : ""} alt={props.title} />
                  </Link>
                </div>
                <div className="lower-content">
                  <h3>
                    <Link to={"/" + post.slug}>{post.title}</Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <span className="icon fa fa-clock-o" />
                      <Moment format="DD [de] MMM [del] YYYY">{post.createdAt}</Moment>
                    </li>
                  </ul>
                  <div className="text">{post.subtitle}</div>
                  <Link className="read-more" to={"/" + post.slug}>
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/*Styled Pagination*/}
          <Pager pageContext={props.pageContext} />
          {/*End Styled Pagination*/}
        </div>
      </div>
    </div>
  );
};

export default PostList;
