

const ArticleEmpty = () =>{
    return (
        <div className="empty">
            <img src="/Empty.png" alt="Empty"/>
            <div className="lable">暂未找到内容</div>
            <div className="back" onClick={()=>window.history.back()}>返回</div>
            <style jsx>{`
                .empty{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .Empty{
                    font-size: 18px;
                    color: var(--text-color);
                }
                .back{
                    margin-top:20px;
                    padding:5px 25px;
                    font-size: 14px;
                    color: var(--text-color);
                    border:1px solid #CCC;
                    border-radius: 20px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}

export default ArticleEmpty;