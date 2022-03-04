import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  const images = [
    "300x150",
    "150x300",
    "300x150",
    "300x150",
    "150x300",
    "150x300",
    "300x150",
    "300x150",
    "150x300",
    "150x300",
    "300x150",
    "150x300",
  ]

  const setCardDimensions = (card) => {
    let cardClasses = []
    card.charAt(0) === "3"
      ? cardClasses.push("w-6/12 md:w-4/12 lg: w-2/12 h-40")
      : cardClasses.push("w-3/12 md:w-2/12 lg: w-1/12 h-80")
    return cardClasses.join(" ")
  }

  const Cards = (card) => {
    let skip = -1
    let perspective = ""
    //       perspective = (img.charAt(0) === "3") ? "landscape" : "portrait"
    let all = (
      <div className={"border-2 " + setCardDimensions(img)}>
        {console.log(`img.charAt(0) ${img.charAt(0)}`)}
        Title {i}
      </div>
    )
    images.map((img, i) => (
      <div className={"border-2 " + setCardDimensions(img)}>
        {console.log(`img.charAt(0) ${img.charAt(0)}`)}
        Title {i}
      </div>
    ))
  }

  /**
   *
   * convert map to forloop.
   * instead of just setting calsses, sed entire container
   * adjust logic to use different kinds of containers
   *
   */

  return (
    <Layout>
      {console.log(images[0].charAt(0))}
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <div className="container flex flex-wrap">
          <Cards />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
