import React from 'react';

/* import LogRocket from 'logrocket';
LogRocket.init('x8jl1q/test-project'); */

import { library } from '@fortawesome/fontawesome-svg-core';
import {  
  faSun, faCloud, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faCloudSunRain, faCloudBolt, faSnowflake,faSmog

} from '@fortawesome/free-solid-svg-icons'

library.add(
  faSun, faCloud, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faCloudSunRain,faCloudBolt, faSnowflake, faSmog
)

import './styles/style.less';

import Weather from './WeatherWrapper';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
const App = () => {
    return <ErrorBoundary><Weather /></ErrorBoundary>;
};

export default App;
