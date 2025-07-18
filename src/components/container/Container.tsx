const Container = ({ titleSize = "text-2xl", bold = false, title, subtitle, buttonIcon: Icon = null, buttonText, showBackground = true, height = "h-90", body }) => {
    return <div className={`${showBackground ? 'bg-white border border-gray-200 rounded-md' : ''} ${height} p-5`}>
        <div className={"flex w-full items-center justify-between"}>
            <div className={"flex flex-col"}>
                <h2 className={`${titleSize} ${bold ? 'font-bold' : 'font-semibold'}`}>{ title }</h2>
                <p className={"text-gray-500"}>{ subtitle }</p>
            </div>
      {
        buttonText != null ?? (
          <button className={"bg-white flex items-center gap-4 border p-2 rounded-md border-gray-300 hover:brightness-95"}>
            <Icon />
            <p className={"text-sm font-semibold"}>{ buttonText }</p>
          </button>  
        )
      }
        </div>
        { body }
    </div>
}

export default Container
