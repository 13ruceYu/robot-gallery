import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart'

interface Props { }

interface State {
  robotGallery: any
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>名字就叫机器人废品回收站吧</h1>
        </div>
        <ShoppingCart></ShoppingCart>
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r: any) => <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>)}
        </div>
      </div>
    );
  }
}

export default App;
