/**
 * @jsx React.DOM
 */

var React = require('react');
var TextArea=require('./TextArea.jsx');
var Action = require('../../actions/action.js');
var CommonStore = require('../../stores/CommonStore.js');

var NoteCreationBox = React.createClass({

    handleSave:function(noteText,id){

        if(id){
            Action.editNote({_id:id,text:noteText});
        }

        else{
            Action.createNote({_id:Date.now(),text:noteText});
        }
    },

    render: function() {

        var note;

        if(this.props.id) {
            note=CommonStore.getNote(this.props.id);
        }

        return (
            <div className="col-md-8">
                <TextArea onSave={this.handleSave} id={this.props.id} noteText={note ? note.text : ''} />
            </div>
        )
    }
});

module.exports=NoteCreationBox;
