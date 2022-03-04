import React from "react"
import ArticleCard from "./article-card"

/**
 *
 * on front end set hard dimensions for either landscape or portrait
 * check whether the pics width is larger or height is larger
 * for dimesions and make appropriate layout adjustments
 *
 */

const ArticlesGrid = ({ articles }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  )
}

export default ArticlesGrid
