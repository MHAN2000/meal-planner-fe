const QuickAction = ({ title, subtitle, icon: Icon, iconColor}) => {
    return <div className={"flex justify-center items-center flex-col border-1 bg-white h-30 border-gray-200 rounded-md"}>
        <Icon className={`text-4xl ${iconColor}`}/>
        <h3 className={"font-semibold text-md"}>{ title }</h3>
        <p className={"text-gray-500 text-sm"}>{ subtitle }</p>
    </div>
}

export default QuickAction