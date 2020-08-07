import { Album } from '@interfaces/album';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as albumsAction from './albums.actions';

export interface State {
  albums: Album[];
  album: Album;
}

export const albumsFeatureKey = 'albums';

export const initialState: State = {
  album: null,
  albums: null
};

const scoreboardReducer = createReducer(
  initialState,
  on( albumsAction.getAlbumsSuccess,
    ( state, actions) => ({ ...state, albums: [ ...actions.albums ] })
  ),
  on( albumsAction.addAlbumsSuccess,
    (( state, { album }) => ({ ...state, albums: [ { ...album }, ...state.albums ] })
    )),
  on( albumsAction.deleteAlbumsSuccess,
    (( state, { album }) => ({ ...state, albums: state.albums.filter( item => item.id !== album.id ) })
    )),
  on( albumsAction.editAlbumsSuccess,
    (( state, { album }) => ({
        ...state,
        albums: state.albums.map( item => ( item.id === album.id ) ? { ...album } : { ...item } )
      })
    )),
);

const featureAlbumSelector = createFeatureSelector<State>(albumsFeatureKey);

export const getAlbumData = createSelector( featureAlbumSelector, ( state ) => state.album );
export const getAlbumsData = createSelector( featureAlbumSelector, ( state ) => state.albums );

export function reducer(state: State | undefined, action: Action ): State {
  return scoreboardReducer( state, action );
}
