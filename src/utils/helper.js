const filterdata=(outputdata)=>{
    const filterdata=outputdata.filter((weather)=>
          (weather.dt)<=(new Date().getTime())
    );
    return filterdata;
}
export default filterdata;