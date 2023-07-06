const item = {
    title: '1234 5678 90poiuy trewqabn hgtyvbghr twedvtxf rsju hrsxf'
}


item?.title?.length <= 105 ? item?.title : item?.title?.slice(0, 25) + '...'