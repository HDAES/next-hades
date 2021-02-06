const SearchEmpty = () =>{
    return (
        <div className="empty">
            <img src="/search.png" alt="Empty"/>
            <div className="lable">暂未搜索内容</div>
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
export default SearchEmpty;