/*
 * @Descripttion: 点击事件
 * @Author: Hades
 * @Date: 2021-01-25 22:04:04
 * @LastEditTime: 2021-01-25 23:00:42
 */
import { Component } from 'react'
import './layout.less'

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heart: []
        };
    }
    componentDidMount() {
        window.addEventListener('click', (event) => {
            const oldheart = this.state.heart
            oldheart.push({
                left: `${event.clientX - 10}px`,
                top: `${event.clientY - 10}px`,
                background: this.getColor(),
                ins: true
            })
            this.setState({
                heart: oldheart
            })
            if (oldheart.length > 10) {
                this.setState({
                    heart: []
                })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('click',()=>{
            console.log('取消监听事件')
        });
        this.setState = (state, callback) => {
            return;
        }
    }
    getColor = () => {
        const random = () => Math.floor(Math.random() * 255)
        return `rgb(${random()}, ${random()}, ${random()})`
    }
    render() {
        return <div>
            {
                this.state.heart.map((item, index) => {
                    return <div className="heart" style={item} key={index} ></div>
                })
            }
        </div>
    }
}
export default Click;