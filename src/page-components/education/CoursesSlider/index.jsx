import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../../components/Layout';
import Text from '../../../components/Text';
import Slider from './Slider';

class CoursesSlider extends Component {
  constructor() {
    super();

    this.state = {
      current: 0,
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(isNext) {
    const length = this.props.items.length;
    let next = this.state.current;

    if (isNext) {
      next = next + 4;
      if (next >= length) {
        next = 0;
      } else if (next + 4 > length) {
        next = length - 4;
      }
    } else {
      next = next - 4;
      if (next < 0) {
        next = length - 4;
      }
    }

    this.setState({
      current: next,
    });
  }

  render() {
    const { title, items } = this.props;

    return (
      <Layout>
        <Layout paddingHorizontal={3}>
          <Text size={3} bold>
            {title}
          </Text>
        </Layout>
        <Slider
          current={this.state.current}
          items={items}
          handleArrowClick={this.handleArrowClick}
        />
      </Layout>
    );
  }
}

CoursesSlider.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(Object),
};

export default CoursesSlider;
