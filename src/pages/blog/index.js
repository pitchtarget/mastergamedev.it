import React from 'react'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Image from '../../components/elements/Image'

export default class BlogIndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterTag: null,
      filteredPosts: this.props.data.allMarkdownRemark.edges,
    }
  }

  filterPost = (tag) => {
    const { filterTag } = this.state
    const allPosts = this.props.data.allMarkdownRemark.edges

    let filteredPosts = allPosts.filter(function(post) {
      return post.node.frontmatter.tags.includes(tag)
    });

    this.setState({
      filteredPosts: filterTag === tag ? allPosts : filteredPosts,
      filterTag: filterTag === tag ? null : tag,
    })

  }

  render() {
    const { filterTag, filteredPosts } = this.state
    const tags = this.props.data.tagsListQuery.group

    return (
      <Layout>
        <Image src="/img/docenti.jpg" alt="blog-cover" styles="cover is-small" children/>
        <section className="section has-background-white">
          <div className="container is-horizontal-spaced">
            <div className="columns is-tablet is-multiline">
              <div className="column is-10-widescreen is-offset-1-widescreen">
                <div className="content">
                  <h1 className="title is-1">Ultime news</h1>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    { tags && tags.map(tag => (
                      <li
                        key={tag.fieldValue}
                        onClick={() => this.filterPost(tag.fieldValue)}
                        className={filterTag === tag.fieldValue ? "active" : ""}
                      >
                        <span>  {tag.fieldValue}</span>
                        <small>  {tag.totalCount}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="columns is-multiline">
                  { filteredPosts &&
                    filteredPosts.map(({ node: post }) => (
                      <div className="column is-6-tablet" key={post.id}>
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
                                  <span> &bull; </span>
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    tagsListQuery: PropTypes.shape({
      group: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
query BlogPageQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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
          tags
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
  tagsListQuery: allMarkdownRemark(limit: 1000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`
