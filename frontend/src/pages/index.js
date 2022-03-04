import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesBlocks from "../components/articles-blocks"
import Seo from "../components/seo"
import Headings from "../components/headings"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleBlock
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  /**
   *
   * add some logic here to rearrange articles
   * must have two horizontal articles in succesion
   *
   * orrrr
   *
   * if only a single landscape, make full(square)
   *
   */

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <ArticlesBlocks articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
