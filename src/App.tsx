import React, { useEffect, useState } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart'

// interface Props { }

// interface State {
//   robotGallery: any
// }

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  // 模拟 componnetDidMount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }
      }
      setLoading(false)
    }

    fetchData();
  }, [])

  useEffect(() => {
    document.title = `clicked ${count} times`
  }, [count])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>名字就叫机器人废品回收站吧</h1>
      </div>
      <button onClick={() => { setCount(count + 1) }}>click</button>
      <span>{count}</span>
      <ShoppingCart></ShoppingCart>
      <div>{(error !== '' || !error) && `网站出错：${error}`}</div>
      {
        loading
          ? <h1>loading</h1>
          : <div className={styles.robotList}>
            {robotGallery.map((r: any, i: number) =>
              i % 2 === 0 ?
                <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
                :
                <RobotDiscount key={r.id} id={r.id} name={r.name} email={r.email}></RobotDiscount>
            )}
          </div>
      }

    </div>
  );
}

export default App;
