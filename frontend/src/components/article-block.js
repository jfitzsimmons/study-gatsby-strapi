import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlockPortrait = () => {}

const BlockLandscape = () => {}

const BlockSquare = () => {}

const BlockContainer = () => {}

const chooseLayout = () => {}



/**
 * 
 * I can manipulate
 * 
 */
const ArticleBlock = ({ article }) => {
  const imgWidth =
    article.cover?.localFile.childImageSharp.gatsbyImageData.width
  const imgHeight =
    article.cover?.localFile.childImageSharp.gatsbyImageData.height
  


  return (
    <Link
      to={`/article/${article.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >

      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
        aspectRatio={1}
      />
      <div className="px-4 py-4">
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

export default ArticleBlock
