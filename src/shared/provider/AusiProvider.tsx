import axios from 'axios';
import React, {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {baseURL, defaultTimeout} from '../env/API';
import {fetchError} from '../helpers/fetchError';
import {Australia} from '../model/Australia';

export enum SortKind {
  Default = 'URUTKAN',
  NameAsc = 'Name A-Z',
  NameDesc = 'Name Z-A',
  DateNewest = 'Tanggal Terbaru',
  DateOldest = 'Tanggal Terlama',
}

enum ActionKind {
  initSort = 'initSort',
  Entry = 'entry',
  Fetch = 'fetch',
  Search = 'search',
  Sort = 'sort',
  Reset = 'reset',
}

interface Ausipayload {}

// An interface for our actions
interface AusiAction {
  type: ActionKind;
  payload: AusiState;
}

// An interface for our state
interface AusiState {
  isFetching: boolean;
  isSearching: boolean;
  ausiData: Australia;
  sortValues: SortKind[];
  activeSort: SortKind;
}

// An interface for our method
interface AusiMethod {
  initSortArray: () => void;
  fetchData: () => Promise<boolean>;
  testFunction: () => void;
  onSearchTrx: (key: string) => void;
  onSortTrx: (key: SortKind) => void;
}

const initialContextState: AusiState = {
  isFetching: true,
  isSearching: false,
  ausiData: {} as Australia,
  sortValues: [],
  activeSort: SortKind.Default,
};

const initialContextMethod: AusiMethod = {
  initSortArray: () => {},
  fetchData: () => Promise.resolve(false),
  testFunction: () => {},
  onSearchTrx: () => {},
  onSortTrx: () => {},
};

const trxStateContext = createContext<AusiState>(initialContextState);
const trxMethodContext = createContext<AusiMethod>(initialContextMethod);

const AusiProvider = memo((props: PropsWithChildren<{}>) => {
  const {children} = props;

  const reducer = (state: AusiState, action: AusiAction) => {
    switch (action.type) {
      case ActionKind.initSort:
        return {
          ...state,
          sortValues: action.payload.sortValues,
        };
      case ActionKind.Entry:
        return {
          ...state,
          ausiData: action.payload.ausiData,
        };

      case ActionKind.Fetch:
        return {
          ...state,
          isFetching: action.payload.isFetching,
        };

      case ActionKind.Reset:
        return {
          ...initialContextState,
        };
      default:
        throw new Error(
          `Unexpected type of action. \n the actiontype was ${action.type}`,
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, initialContextState);

  const trxState: AusiState = useMemo(() => state, [state]);

  const trxMethod = useMemo(
    () => ({
      initSortArray: () => {
        let array = Object.values(SortKind);
        dispatch({
          type: ActionKind.initSort,
          payload: {...state, sortValues: array},
        });
      },
      fetchData: async (): Promise<boolean> => {
        console.log('fetch data');
        try {
          const result = await axios.get(`${baseURL}`, {
            timeout: defaultTimeout,
          });
          let ausiData: Australia = result.data;

          dispatch({
            type: ActionKind.Entry,
            payload: {...state, ausiData: ausiData},
          });

          return true;
        } catch (err) {
          const Err = fetchError(err, 'Provider');

          return false;
        }
      },
      testFunction: () => {},
      onSearchTrx: (key: string) => {},
      onSortTrx: (key: SortKind) => {},
    }),
    [dispatch, state],
  );

  return (
    <trxStateContext.Provider value={trxState}>
      <trxMethodContext.Provider value={trxMethod}>
        {children}
      </trxMethodContext.Provider>
    </trxStateContext.Provider>
  );
});

export const useAusiState = (): AusiState => {
  const context = useContext(trxStateContext);
  if (context === undefined) {
    throw new Error('useAusiState Error is not Initialized');
  }
  return context;
};
export const useAusiMethod = (): AusiMethod => {
  const context = useContext(trxMethodContext);
  if (context === undefined || context == initialContextMethod) {
    throw new Error('useAusiMethod Error is not Initialized');
  }
  return context;
};

export default AusiProvider;
