import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../styles/layoutStyled'
import ReactLoading from 'react-loading';
function Blog() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useState(() => {
        setLoading(true);
        axios.get('https://saurav.tech/NewsAPI/sources.json')
            .then(res => {
                setPosts(res.data.sources) 
                setLoading(false);
            });
    }, []);

  return (
    <Container>
        <h1>Blog</h1>
        <hr />
        { loading ? (
            <div style={{display:"flex", justifyContent:'center'}}>
                <ReactLoading type={'bars'} color={'#3400ff'} height={'20%'} width={'20%'} />
            </div>
        ) : (
            <>
            {posts.map((data, idx) => (
                <div key={idx}>
                    <h4>Name: {data.name}</h4>
                    <p>Description: {data.description}</p>
                    <p>Url: <a href={data.url} target="_blank" >{data.url}</a></p>
                    <hr />
                </div>
            ))}
            </>
            )
        }
    </Container>
  )
}

export default Blog