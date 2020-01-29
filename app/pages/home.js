import { Link} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import {HomeAction} from "../redux/actions"
import style from './../style/index.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  static asyncData(store) {
    store.dispatch(HomeAction())
  }
  render() {
    return (
      <div >
        <h1 className={style.heads}       onClick= {() => {console.log("click")}}

        > {this.props.title} </h1>
        < Link to = "/list" > 跳转列表页 </Link>
        < Link to = "/todolist" > 日程 </Link>
      </div>
    )
  }
}

/**
 * 通过connect将redux中的数据传递进入组件
 */
function mapStateTpProps(state) {
  return {
    ...state.home
  };
}

export default connect(mapStateTpProps)(Home)
