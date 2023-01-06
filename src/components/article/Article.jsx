// Import the article CSS styles
import './article.css'

// This is a functional component that receives an `imgUrl`, `date`, and `title` as props
const Article = ({ imgUrl, date, title }) => (
  // Render the article container with the specified image, date, and title
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      {/* Render the image for the article */}
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        {/* Render the date for the article */}
        <p>{date}</p>
        {/* Render the title for the article */}
        <h3>{title}</h3>
      </div>
      {/* Render a link to read the full article */}
      <p>Read Full Article</p>
    </div>
  </div>
)

// Export the Article component
export default Article
