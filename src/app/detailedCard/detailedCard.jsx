import React from "react";
import { getResource } from "../../js/getResource";
import "./detailedCard.scss";
import Spinner from "../spinner/spinner";
import svg from "./imgLoader.svg";
class DetailedCard extends React.Component {
  state = {
    card: null,
    isLoading: false,
    error:false,
    imgTag:null,
    imgLoaded: false,
  };
  componentDidMount() {

    if (this.props.cardClick){
      this.setState({ isLoading: true });

      let img = document.createElement("img");
      img.alt = "cover book";
      img.src = `https://books.google.com/books/content?id=${this.props.id}&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api`;
      img.onload = () => {
        this.setState({
        // imgTag: img,
        imgLoaded:true,
      });
      };

      const request = getResource(`https://www.googleapis.com/books/v1/volumes/${this.props.id}`)

        .then((body) => {
          this.setState({ card: body, cardClickInner: false, });
        }).catch((error) => {
          this.setState({error:true})
          console.error(`Error ${error}`)
        }).finally(() => {
          this.setState({
            cardClickInner: false,
            isLoading: false,
          })
        })
    }

  }
  render() {
    const { id } = this.props;
    const { card, isLoading} = this.state;




    if (card) {
      return (
        <div className="detailed-card">
          <aside className="book-image">
            <div className="adapt-img" style={{minHeight:"368px"}}>
              {
                this.state.imgLoaded ?  <img src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api`} alt="image book" />
                  :
                  <div style={{width:"100%",height:"100%",position:"relative" }}>
                    <img alt={"image loader"} style={{width:"100px", height:"100px",position:"absolute",top:"50%", left:"50%"}} src={svg}/>
                  </div>
              }
            </div>
          </aside>
          <div className="datailed-card__container">
            <main className="datailed-card__desc">
              <p className="detailed-card__categories">{card.volumeInfo?.valueOfCategory?.[0]}</p>
              <p className="detailed-card__title">{card.volumeInfo?.title}</p>
              <p className="authors">Авторы:</p>
              <p className="detailed-card__authors">{card.volumeInfo?.authors?.join(", ")}</p>
              <p className="detailed-card__area">{card.volumeInfo?.description}</p>
            </main>
          </div>
        </div>
      )
    }
    return isLoading ? <Spinner /> : null;
  }
}
export default DetailedCard;