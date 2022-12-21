// import styles from "../styles/Home.module.css";
import {Container} from 'react-bootstrap';
import MovieList from '../components/MovieList';

export default function Home() {
  return (
    <Container >  
      <h1 className="text-center my-3">
        Movies
      </h1>
      <MovieList />
    </Container>
  );
}
