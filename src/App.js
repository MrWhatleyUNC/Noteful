import React from 'react';
import './App.css';
import Header from'./Header';
import Main from './Main'
import Sidebar from './Sidebar'
import FolderList from './FolderList';
import Folder from './Folder';
import store from './store';
import Note from './Note';
import NotesList from './NotesList';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folders: store.folders,
      notes: store.notes
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <div className='sidebar-container'>
        <Sidebar>
          <Switch>
            <Route path= '/' render={(routerprops)=><FolderList {...routerprops} folders= {this.state.folders}/>}
            />
            <Route path='/folder/:folderId' render={(routerprops)=><FolderList {...routerprops} folders= {this.state.folders}/>}
            />
            {/* <Route path= '/folder/:folderId' component={FolderList}/>
            <Route path= '/note/:noteId' component={Note}/> */}
          </Switch>
        </Sidebar>
        </div>
        <Main>
        <Switch>
          <Route path='/' render={(routerprops)=><NotesList {...routerprops} notes={this.state.notes}/>}
          />
          <Route path='/folder/:folderId' render={(routerprops)=><NotesList {...routerprops} notes={this.state.notes}/>}
          />
        </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
