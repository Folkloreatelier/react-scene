var React = require('react');
var ReactScene = require('../../src/index');

var ChildScene = require('./ChildScene');

var Scene = React.createClass({
    
    getInitialState: function()
    {
        return {
            
        };
    },
    
    render: function()
    {
        return (
            <div>
                <h1>Scene</h1>
                <ChildScene />
            </div>
        );
    },
    
    load: function(e)
    {
        var done = e.async();
        
        setTimeout(function()
        {
            done();
        }, 2000);
    },
    
    build: function(e)
    {
        
    },
    
    resize: function(e)
    {
        
    },
    
    play: function(e)
    {
        var done = e.async();
        
        setTimeout(function()
        {
            done();
        }, 2000);
        
        setTimeout(_.bind(function()
        {
            this.props.scene.end();
        }, this), 4000);
    },
    
    pause: function(e)
    {
        
    },
    
    end: function(e)
    {
        
    },
    
    destroy: function(e)
    {
        
    }
});

module.exports = ReactScene.createScene(Scene);
