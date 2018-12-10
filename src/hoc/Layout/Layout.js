import React,{Component} from 'react';
import Aux from '../Auxiilirary/Auxilirary';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
class Layout extends Component{
    state = {
        showSideDrawer:false
    };
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    };
    sideDrawerToggleHandler=()=>{
        this.setState(previousState=>{
            return {showSideDrawer:!previousState.showSideDrawer};
        })
    };
    render(){
        return(
            <Aux>
                <Toolbar toggleHandler={this.sideDrawerToggleHandler} />
                <SideDrawer  open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;

