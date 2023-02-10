import React from "react";
const DataItems = ({ dataItems, cardClick }) => {
  return dataItems.map(item => {

    return (
      <section key={item.id} className="main__container">
        <button onClick={() => cardClick(item.id)} key={item.id + "card"} className="card">
          <div className="card__inner">
            {
              !item.volumeInfo.imageLinks ?
                <div className={"notImg"}>
                  <p>Изображение отсутствует</p>
                </div>

              :<img className="card__img" src={item.volumeInfo.imageLinks.smallThumbnail} alt="Thebookcover" />}

            <div className="putdown">
              <h2><a className="card__type-book" href="#">{item.volumeInfo?.categories?.[0]}</a></h2>
              <div className={"card__title-inner"}>
                <p className="block-with-text">{item.volumeInfo.title}</p>
              </div>
              <div className={"card__book-author-inner"}>
                <p className="block-with-text card__book-author">{item.volumeInfo?.authors?.[0]}</p>
              </div>
            </div>
          </div>
        </button>
      </section>

    )
  })
}
export default DataItems;