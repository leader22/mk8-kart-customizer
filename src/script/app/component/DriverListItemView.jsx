define([
    'react'
], (
    React
) => {

    const DriverListItemView = React.createClass({
        propTypes: {
            driver: React.PropTypes.object.isRequired,
            onSelectDriver: React.PropTypes.func.isRequired
        },
        _onClickDriver() {
            this.props.onSelectDriver(this.props.driver);
        },
        render() {
            return (
                <li className="cColumnItem mCount3" onClick={this._onClickDriver}>
                    <div className="cDriverItem">
                        <img className="img" src={`dist/image/driver/${this.props.driver.id}.png`} alt={this.props.driver.name} />
                        <div className="name">{this.props.driver.name}</div>
                    </div>
                </li>
            );
        }
    });

    return DriverListItemView;
});

