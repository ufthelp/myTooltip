import React, { Component } from 'react';

import ToolTip from '../tooltip/ToolTip';

import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <header className={styles.header}>
          <h1 className={styles.title}>.</h1>
        </header>
        <section className={styles.body}>
          <ToolTip>
            <section className={styles.onload}>
              OnLoad
            </section>
          </ToolTip>
        </section>
      </div>
    );
  }
}
