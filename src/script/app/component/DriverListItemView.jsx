define([
    'react',
    'common/mixin/LazyImgLoadMixin'
], (
    React,
    LazyImgLoadMixin
) => {

    const DriverListItemView = React.createClass({
        mixins: [LazyImgLoadMixin],
        propTypes: {
            driver:         React.PropTypes.object.isRequired,
            onSelectDriver: React.PropTypes.func.isRequired,
            isSelected:     React.PropTypes.bool.isRequired
        },
        _onClickDriver() {
            this.props.onSelectDriver(this.props.driver);
        },
        render() {
            let driverItemClassName = 'cDriverItem';
            if (this.props.isSelected) { driverItemClassName += ' isSelected'; }
            return (
                <li className="cColumnItem mCount5" onClick={this._onClickDriver}>
                    <div className={driverItemClassName}>
                        <img className="img" src="dist/image/loader.svg" data-src={`dist/image/driver/${this.props.driver.id}.png`} alt={this.props.driver.name} />
                        <div className="name">{this.props.driver.name}</div>
                    </div>
                </li>
            );
        }
    });

    return DriverListItemView;
});

