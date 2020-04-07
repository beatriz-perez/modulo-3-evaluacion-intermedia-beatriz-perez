import React from 'react';

class Paragraph extends React.Component {

    render() {
        return (
            <p className="paragraph text_base">{this.props.paragraphContent}</p>
        );
    }
}



export default Paragraph;