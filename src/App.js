import React, {Component} from 'react';
import MenuNavigation from './components/MenuNavigation';
import ActionBar from './components/ActionBar';
import NavRouter from "./utils/NavRouter";
import {Layout} from 'antd';
import {Route} from "react-router-dom";

import './css/Home.css';

const {Header, Content, Footer, Sider} = Layout;


class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props);
        const {match} = this.props;
        return (
            <div className="Full" >
                <Layout className ="Full">
                    <Sider
                        collapsible
                        trigger={null}
                        collapsed={this.state.collapsed}
                    >
                        <MenuNavigation baseUrl={match.url}/>
                    </Sider>

                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <ActionBar onToggle={this.toggle} toggleState={this.state.collapsed}/>
                        </Header>


                        <Content overlay="">
                            <Route path={`${match.url}/:id`} component={NavRouter}/>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>
                            Copyright©2018  上海崇生体育发展有限公司
                        </Footer>
                    </Layout>
                </Layout>

            </div>
        );
    }
}

export default App;
