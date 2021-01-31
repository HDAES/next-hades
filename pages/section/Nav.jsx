const Nav = ({list,changeNav}) =>{
    return (
        <div className="nav">
        <div className="nav-item" onClick={()=>changeNav('all')}>全部</div>
        {
            formateTags(list).map((item,index)=>{
                return <div className="nav-item" key={index} onClick={()=>changeNav(item)}>
                    {item}
                </div>
            })
        }
        <style jsx>{`
        .nav{
            width:200px;
            margin:20px 20px 0 0;
            padding-bottom:20px;
            color: var(--text-color);
            background-color: var(--header-background-color);
        }
        .nav-item{
            font-weight: 500;
            padding:20px 0 0 15px;
            cursor: pointer;
            color: var(--text-color);
        } 
        .nav-item:hover{
            color: var(--header-logo-color);
        } 
        `}</style>
    </div>
    )
}

export default Nav;

//标签数组
function formateTags(list){
    let tempList = [] 
    list.forEach(item => {
        tempList.push(item.tname)
    });
    return Array.from(new Set(tempList))
 }