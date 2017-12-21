import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ToolTip.css';

export default class ToolTip extends Component {
    static displayName = "ToolTip";

    static propTypes= {
        children: PropTypes.node.isRequired,
    }

    render(){
        const {children} = this.props;
        return(
            <section>
                <section className={styles.tooltip}>
                    12
                </section>
                <section className={styles.header}>
                    {children}
                </section>
            </section>
        );
    }
}