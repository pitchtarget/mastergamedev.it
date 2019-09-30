import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-vcenered is-centered blog-roll">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-6-desktop is-4-fullhd" key={post.id}>
              <article className="postCard">
                <div className="columns is-gapless is-desktop">
                    {post.frontmatter.featuredimage ? (
                      <div className="postCard--image column is-one-third-desktop "
                      style={{
                        backgroundImage: `url(${
                          !!post.frontmatter.featuredimage.childImageSharp
                          ? post.frontmatter.featuredimage.childImageSharp.fluid.src
                          : post.frontmatter.featuredimage.image
                        })`
                      }}/>
                    ) : null}
                  <div className="column">
                    <div className="postCard--content">
                      <p className="postCard--header">
                        <Link
                          className="title is-size-5-mobile is-size-4-desktop"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span className="subtitle is-size-7 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="" to={post.fields.slug}>
                          continua
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  extension
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
