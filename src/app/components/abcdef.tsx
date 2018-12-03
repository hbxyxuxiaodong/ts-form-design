// import * as React from 'react';
import * as PropTypes from 'prop-types';
import React from 'react';


export  class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
       <div>
          <p>dddd</p>
        </div>
    );
  }
}

 interface IAppProps {
}

 interface IAppState {
}