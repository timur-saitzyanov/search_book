import React, {Component, Suspense} from 'react';
import ReactDom from 'react-dom';
import './app.scss';
import {state} from "../state/state";
import Spinner from "./spinner/spinner";
import {ErrorBoundary} from './ErrorBoundary/error-boundary';
import sortCategory from '../js/sortCategory';
import {Header} from './header/header';
import {getResource} from '../js/getResource';
const DataItems = React.lazy(()=> import('./dataItems/dataItems'));
const DetailedCard = React.lazy(()=> import('./detailedCard/detailedCard'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = state;
  }

  searchBook = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };
  getDataBooks = () => {
    const {
      baseUrl, inputValue, valueOfNovelty,
      startIndex, maxShowResults
    } = this.state;
    this.setState({
      isLoading: true,
      showCountItems:false,
    })
    return getResource(`${baseUrl}q=${inputValue}&startIndex=${startIndex}&maxResults=${maxShowResults}&orderBy=${valueOfNovelty}&key=AIzaSyBQ9gr9_qzVHHHFmXXKm37ShcL7A8bYd28`)
      .then((body) => {
        const {totalItems} = body;
        console.log(body)
        if (body.items === undefined) {
          this.setState({
            totalItems: 0,
          })
          return [];
        }
        this.setState((prevState) => ({
          totalItems: totalItems,
          dataItems: [...prevState.dataItems, ...body.items],
          showCountItems:false,
        }));
      }).catch((err) => {
        console.error("Could not fetch " + err);
        this.setState({
          isError: true,
        });
      }).finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  chooseByNovelty = (event) => {

    this.setState(()=>{
      return {
        dataItems: [],
        valueOfNovelty: event.target.value,
      }
    });
  };

  chooseCategory = (event) => {
    this.setState({
      valueOfCategory: event.target.value,
    });
    console.log(event.target.value);

  }
  btnSearch = () => {
    if (this.state.inputValue !== "") {
      this.setState({
        cardClick: false,
        dataItems: [],
        btnSearch: true,
        isLoading: true,
      })

      this.getDataBooks();
    }
  }
  cardClick = (id) => {
    this.setState({
      id,
      cardClick: true,
    });
  }


  handleKeyPress = (event) => {
    if ((event.key === 'Enter' && this.state.inputValue !== "")) {

      this.setState({
        cardClick: false,
        dataItems: [],
        isLoading: true,
        isEnter: true,
      });
      this.getDataBooks();
    }
  };


  componentDidUpdate(prevProps, prevState) {
    if ((prevState.startIndex !== this.state.startIndex)) {
      this.getDataBooks();
    }
    if ((prevState.valueOfCategory !== this.state.valueOfCategory)) {
      sortCategory(this.state.dataItems, this.state.valueOfCategory);
    }
    if ((prevState.valueOfNovelty !== this.state.valueOfNovelty) && (this.state.inputValue !== "")) {
      this.getDataBooks();
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      isError: true,
    });
    console.log(`Error: ${error}, errorInfo:  ${info}`);
  }

  onLoad = () => {

    this.setState(({startIndex, maxShowResults}) => {

      return {
        isLoading: true,
        startIndex: startIndex + maxShowResults,
        maxShowResults: 30,
      }
    });
  }


  render() {
    const {totalItems, valueOfNovelty, isError, isLoading,
      isEnter, cardClick, valueOfCategory, btnSearch, id} = this.state;

    const visibleItems = sortCategory(this.state.dataItems, this.state.valueOfCategory);
    let loadMoreClassName = "loadMore"

    if (totalItems < 10 || this.state.cardClick) {
      loadMoreClassName += " hide";
    }


    return (
      <div className="wrapper">
        <Header searchBook={this.searchBook} handleKeyPress={this.handleKeyPress} btnSearch={this.btnSearch}/>
        <div className="labels">
          <label className="label">
            <span className="label__text">Sorting categories By</span>
            <select className="select" value={valueOfCategory} onChange={this.chooseCategory} name="select" id="select1">
              <option value="all">all</option>
              <option value="Art">art</option>
              <option value="Biography">biography</option>
              <option value="Computers">computers</option>
              <option value="History">history</option>
              <option value="Medical">medical</option>
              <option value="Poetry">poetry</option>
            </select>
          </label>
          <label className="label">
            <span className="label__text label__text--unique">Sorting By</span>
            <select className="select" name="select" value={valueOfNovelty} id="select1" onChange={this.chooseByNovelty}>
              <option value="relevance">relevance
              </option>
              <option value="newest">newest</option>
            </select>

          </label>
        </div>

        {this.state.cardClick ?
          <Suspense fallback={<Spinner/>}>
            <DetailedCard id={id} cardClick={cardClick}/>
          </Suspense>

          :
          <>
            {this.state.isLoading && <Spinner/>}
            {isError ? null : (isEnter || btnSearch) ? <p className="main__title">
            Found { ( valueOfCategory === "all" ) ? totalItems : visibleItems.length } results</p>  : null}
            <ErrorBoundary isError={isError}>

              <main style={visibleItems.length === 0 ? {visibility:"hidden"}:{}} className="main">
                      <div className="main__body">
                        <Suspense fallback={<Spinner/>}>
                          <DataItems cardClick={(id) => this.cardClick(id)} dataItems={visibleItems}/>
                        </Suspense>
                      </div>
              </main>

          </ErrorBoundary>
            { isError ? null : visibleItems.length > 0 && <footer className="footer">
              <button style={isLoading ? {backgroundColor:"grey"}: null} onClick={this.onLoad} className={loadMoreClassName}>
                    Load More
              </button>
              </footer>}
          </>}
      </div>
    )
  }
}


ReactDom.render(<App/>, document.querySelector('#root'));