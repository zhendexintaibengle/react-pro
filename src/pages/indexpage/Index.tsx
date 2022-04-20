import React from 'react';

class IndexPage extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            value: undefined,
        }
    };

    render() {
        return (
            <div>
                还是无法使用jsx？
                <img src="@/assets/images/logo.svg" />
            </div>
        )
    }
};

export default IndexPage;