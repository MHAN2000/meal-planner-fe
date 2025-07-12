const PageButton = ({page, onClick}) => {
    return <div onClick={onClick}
        className={`bg-white hover:brightness-95 cursor-pointer rounded-lg flex items-center py-2 px-4 gap-2 ${page.selected ? 'text-orange-700 bg-orange-100' : 'text-gray-600'} font-semibold`}>
        {<page.icon/>}
        <p>{page.name}</p>
    </div>
}

export default PageButton