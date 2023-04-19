import {  useEffect, useContext } from 'react'
import ArticleContext from '../../contexts/articles/ArticleContext'



const ArticleList = () => {
const { articles, getArticles, deleteOneArticle } = useContext(ArticleContext)





useEffect(() =>{
  getArticles()
},[])

// const postArticle = async () => {
//     const article =({"title":"angular", "description": "learn how to create app with angular"})
//     await axios.post("http://localhost:4000/articles", article)
//     console.log("article added");
// }
  return (
    <>
    <h1>List of Articles</h1>

  

    {articles && articles.map(article => (
     <div key={article.id}>
     <h1>{article.title}</h1>
     <p>{article.description}</p>
     <button onClick={() => deleteOneArticle(article.id)} className="btn btn-danger btn-sm">Delete</button>
     </div>
    ))}
    
   
    </>
  )
}

export default ArticleList