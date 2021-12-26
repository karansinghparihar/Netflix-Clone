import { Link } from 'react-router-dom'
import EmptyBackdrop from '../images/emptyBackdrop.jpg'

const Content = ({ content, contentType, searchType }) => {
    // https://image.tmdb.org/t/p/w500/

    const { id, backdrop_path, original_title, name, overview } = content
    console.log(original_title)
    return (
        <div className={`${contentType === 'search' ? 'content-search' : 'content'}`}>

            {contentType === 'search' ? <>
                <Link to={`/${contentType}/${searchType}/${id}`}>
                    {backdrop_path === null ? <div className='content-image-null'>
                        <img src={EmptyBackdrop} alt={EmptyBackdrop} />
                    </div> :
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={`${contentType === 'tv' ? name : original_title} `} />
                    }
                </Link>
                <h3 style={{textAlign: 'center'}}>{`${searchType === 'movie' ? original_title : name}`}</h3>
            </> : <>
                <Link to={`/${contentType}/${id}`}>
                    {backdrop_path === null ? <div className='content-image-null'>No Image</div> :
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={`${contentType === 'tv' ? name : original_title} `} />
                    }
                </Link>
                <h3 style={{color: 'white', textAlign: 'center'}}>{`${contentType === 'movie' ? original_title : name}`}</h3>
            </>
            }

        </div>
    )
}
export default Content;
