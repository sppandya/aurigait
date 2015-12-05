/**
 * Created by Sahil on 05/12/15.
 */
var Reflux=require('reflux');
var Action=require('../actions/action');

var _notes=[];

var CommonStore = Reflux.createStore({

    init: function() {
        this.listenTo(Action.createNote, this.onCreate);
        this.listenTo(Action.editNote, this.onEdit);
    },

    onCreate: function(note) {
        _notes.push(note);
        this.trigger(_notes);
    },

    onEdit: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes[i].text=note.text;
                this.trigger(_notes);
                break;
            }
        }
    },

    getNotes:function(){
        return _notes;
    },

    getNote:function(id){
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===id){
                return _notes[i];
            }
        }
    }

});

module.exports=CommonStore;
