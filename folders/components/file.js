import React from 'react';
import PropTypes from 'prop-types';

import './file.css';

class File extends React.Component {

    static propTypes = {
        file: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
        }),
    };

    render() {

        return (
            <div className={"file"}>
                <div className={"file-image"}/>
                {this.props.file.name}
            </div>
        );
    }
}

export default File;