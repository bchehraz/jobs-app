import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<Button
					title="Onwards!"
					raised
					buttonStyle={styles.buttonStyle}
					containerViewStyle={{ marginTop: 15 }}
					onPress={this.props.onComplete}
				/>
			);
		}
	}
	renderSlides() {
		return this.props.data.map((slide, i) => {
			return (
				<View
					style={[styles.slideStyle, { backgroundColor: slide.color }]}
					key={slide.text}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(i)}
				</View>
			);
		});
	}

	render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
				pagingEnabled
      >
				{this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	textStyle: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: '#0288D1'
	}
};

export default Slides;