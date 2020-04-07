import React from 'react';
import PropTypes from 'prop-types';


class Main extends React.Component {

    render() {
        return (
            <main className="container__page--main" id="main" role="main">
                <div className="container__general">
                    <div className="container__section--main">

                        <h2 className="main__title text__section--title" >{this.props.mainTitle}</h2>
                        {this.props.children}

                    </div>
                </div>
            </main>
        );
    }
}

Main.defaultProps = {
    mainTitle: 'sección principal'
}
Main.propTypes = {
    mainTitle: PropTypes.string
}


export default Main;
