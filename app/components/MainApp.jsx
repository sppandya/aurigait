/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteListBox=require('./NoteListBox.jsx');
var NoteCreationBox=require('./NoteCreationBox.jsx');

var MainApp = React.createClass({

    getInitialState:function(){
        return {id:null}
    },

    onEdit:function(id){
        this.setState({currentlyEdited:id});
    },

    onAdd:function(){
        this.setState({currentlyEdited:null});
    },

    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>React Note App with changes</h1>
                    </div>
                </div>
                <div className="row">
                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <NoteCreationBox id={this.state.currentlyEdited} />
                </div>
		<div className="row footer">
			Here is a footer
		</div>
            </div>
        )
    }
});

module.exports=MainApp;
