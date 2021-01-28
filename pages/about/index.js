/*
 * @Descripttion: 关于
 * @Author: Hades
 * @Date: 2021-01-26 11:31:04
 * @LastEditTime: 2021-01-28 13:46:57
 */
import MyLayout from '../../components/layout/Layout'
import Me from './Me'
import Contacts from './Contacts'
import Map from './Map'
const About = () =>{
    return (
        <MyLayout>
            <div className="about">
                <div className="avatar">
                    <img className="avator-image" src="http://qiniu.xl686.com/avatar.png" />
                    <div className="name">hades·xl </div>
                    <span className="nick">I long for money ! ! !</span>
                </div>
                <div className="about-container">
                    <div className="me-friend">
                        <Me/>
                    </div>
                    <div className="des-map">
                        <Contacts/>
                        <Map/>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .avatar{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 30px 0; 
            }
            .avator-image{
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            .name {
                font-family: Damion;
                font-size: 36px;
                color: var(--header-logo-color);
            }
            .nick {
                padding: 5px 0;
                font-size: 16px;
                font-weight: 500;
                color: var(--text-color);
            }
            .about-container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .me-friend{
                width: var(--left-width);
            }
            .des-map{
                width: var(--right-width);
            }
            `}</style>
        </MyLayout>
    )
}

export default About;