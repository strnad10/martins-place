import * as React from "react"
import { Link } from "gatsby"

const ContentItem = ({ item }) => (
  <li>
    <Link to={item.url}>{item.title}</Link>
    {item?.items?.length ? (
      <ContentList key={`${item.url}-list`} items={item.items} />
    ) : null}
  </li>
)

const ContentList = ({ items }) => {
  return (
    <ul>
      {items?.map(item => {
        return <ContentItem key={`${item.url}-item`} item={item} />
      })}
    </ul>
  )
}

export const Toc = ({ tableOfContents }) => {
  if(tableOfContents.items === undefined) {
    return null
  }
  
  return <div className="toc"><p>In this article</p><ContentList items={tableOfContents.items} /></div>
}