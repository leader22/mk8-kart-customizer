define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const TopLayout = React.createClass({
        render() {
            return (
                <div>
                    <h1>トップページ</h1>
                    <hr />
                    <Link to="custom">はじめる</Link>
                    <Link to="about">このサービスについて</Link>
                </div>
            );
        }
    });

    return TopLayout;
});