import SearchForm from "../SearchForm/SearchForm"
import {useState} from "react";
import type { Article } from "../../types/article"
import ArticleList from "../ArticleList/ArticleList"
import {FetchArticle} from "../../services/articleService"







export default function App() {
  const [articles, setarticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await FetchArticle(topic);
      setarticles(data);
    setIsLoading(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && (<p>Loading data, please wait...</p>)}
      {isError && (<p>Whoops, something went wrong! Please try again!</p>)}

    {articles.length > 0 && (<ArticleList items={articles}/>)}
    </>
  )
}