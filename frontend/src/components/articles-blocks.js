import React from "react"
import ArticleBlock from "./article-block"

/**
 *
 * on front end set hard dimensions for either landscape or portrait
 * check whether the pics width is larger or height is larger
 * for dimesions and make appropriate layout adjustments
 *
 */

const ArticlesBlocks = ({ articles }) => {
  let skip = -1
  let perspective = ""
  let blocks = []
  //       perspective = (img.charAt(0) === "3") ? "landscape" : "portrait"

  const getOrientation = (a) => {
    let width = a.cover?.localFile.childImageSharp.gatsbyImageData.width
    let height = a.cover?.localFile.childImageSharp.gatsbyImageData.height

    if (width === height) return "square"
    return width > height ? "landscape" : "portrait"
  }

  const chooseBlockLayout = (i) => {
    let curr = getOrientation(articles[i])
    // let prev = articles[i - 1] ? getOrientation(articles[i - 1]) : "start"
    let next = articles[i + 1] ? getOrientation(articles[i + 1]) : "end"
    let skip = false
    let layout =
      Math.random() > 0.5 ? (
        <div className="portrait article-tile w-5/12 md:w-3/12 xl:w-2/12">
          <ArticleBlock article={articles[i]} />
        </div>
      ) : (
        <div className="portrait-2 article-tile w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12">
          <ArticleBlock article={articles[i]} />
        </div>
      )

    // if a block is landscape and next block is landscape and previous
    if (curr === "landscape" && next === "landscape") {
      skip = true
      layout = (
        <div className="landscape article-tile w-7/12 flex-col md:w-5/12 lg:w-4/12 xl:w-3/12">
          <ArticleBlock article={articles[i]} />
          <ArticleBlock article={articles[i + 1]} />
        </div>
      )
    }
    if (curr === "landscape" && next === "portrait") {
      layout = (
        <div className="square article-tile w-7/12 md:w-4/12 xl:w-2/12">
          <ArticleBlock article={articles[i]} />
        </div>
      )
    }

    return { layout, skip }
  }

  for (let i = 0; i < articles.length; i++) {
    const layoutAll = chooseBlockLayout(i)
    blocks.push(layoutAll.layout)
    i += layoutAll.skip
  }

  return <div className="full-width flex flex-wrap">{blocks}</div>
}

export default ArticlesBlocks
