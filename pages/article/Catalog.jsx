const Catalog = () =>{

    
    return (
        <div className="catalog">
            <div className="title">目录</div>
            <style jsx>{`
            .catalog{
                border-radius: 5px;
                padding:5px;
                background-color:var(--header-background-color);
            }
            .title{
                font-size:24px;
                font-weight: bold;
                color:var(--header-logo-color);
            }
            `}</style>
        </div>
    )
}

export default Catalog;