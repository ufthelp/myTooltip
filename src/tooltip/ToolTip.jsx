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
            <section className={styles.tooltip}> {children}
                <section className={styles.tooltiptext}>
                   test
                </section>
            </section>
        );
    }
}