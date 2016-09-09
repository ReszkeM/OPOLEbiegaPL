import React from 'react';
import Carousel from 'nuka-carousel';

// styles
import {block} from '../../constants/styles'

export const Slider = React.createClass({
    mixins: [Carousel.ControllerMixin],

    renderCarousel: function() {
        if (this.props.collection.length !== 0){
            return  <Carousel style={block} className="center-block">
                        { this.props.collection.map( (object) =>
                            <this.props.component key={object.Id} object={object} action={this.props.action} />
                        )}
                    </Carousel>
        }
        return null;
    },

    render: function() {
        return this.renderCarousel();
    }
});