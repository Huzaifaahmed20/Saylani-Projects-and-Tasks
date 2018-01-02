let container = document.getElementById("container");

class helloFrameWorks extends React.Component {
    render() {
        return React.createElement('h1', null, `${this.props.frameWorkName}: `, `${this.props.title}`);
    }
}


ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(helloFrameWorks, {
            id: 'ember',
            frameWorkName: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'
        }, null),

        React.createElement(helloFrameWorks, {
            id: 'backbone',
            frameWorkName: 'BackBone.js',
            title: 'Backbone.js gives structure to web applications'
        }, null),

        React.createElement(helloFrameWorks, {
            id: 'angular',
            frameWorkName: 'Angular.js',
            title: 'Superheroic JavaScript MVW Framework'
        }, null),
    ),
    container
);