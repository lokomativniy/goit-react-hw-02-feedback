import Feedback from './components/Feedback/Feedback';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      {/* <h2 className="title">Please leave feedback</h2> */}
      {/* <FeedbackOptions /> */} <Feedback />
    </Container>
  );
}

export default App;
