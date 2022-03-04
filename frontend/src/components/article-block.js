import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/**
 *
 * I can manipulate
 *
 */
const ArticleBlock = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="relative flex flex-1 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
    >
      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
        aspectRatio={1}
      />
      <div className="absolute bottom-0 bg-white/50 px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleBlock on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            transformOptions: { fit: COVER, cropFocus: ATTENTION }
          )
        }
      }
    }
  }
`

export default ArticleBlock
