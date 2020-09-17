import React from 'react';

import { Cards, Chart, CardsCalculation } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
state = {
  data: {},

}

 async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {

    return (
      <div className={styles.container}>
        <Typography variant="h1">
          COVID-19
        </Typography>
        <Cards data={this.state.data} />
        <CardsCalculation data={this.state.data} />
        <Chart />
      </div>
    )
  }
}


export default App;
 