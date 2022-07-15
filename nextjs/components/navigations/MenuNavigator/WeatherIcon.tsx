import dayjs from 'dayjs'
import { MoonIcon, SunIcon } from './Weathers'
import { useEffect, useState } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window._AMapSecurityConfig = {
  securityJsCode:'0fe826e59d226bad28c8c825c738a104',
}
const getCityByAMap = (AMap:any) => {
  return new Promise((resolve, reject)=>{
    AMap.plugin('AMap.CitySearch', function () {
      const citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status:any, result:any) {
        if (status === 'complete' && result.info === 'OK') {
          resolve(result)
        }else{
          reject(false)
        }
      })
    })
  })
}
const GetWeatherByAMap = (AMap:any,city:string)=>{
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Weather', function() {
      //创建天气查询实例
      const weather = new AMap.Weather();

      //执行实时天气信息查询
      weather.getLive(city, function(err:any, data:any) {
        if (err){
          reject(err)
        }else{
          resolve(data)
        }
      });
    });
  })
}
const WeatherIcon = ()=>{
  const [icon,setIcon] = useState(SunIcon)
  const initWeather = async () => {
    const now = dayjs()
    const hour = now.hour()
    const AMap = await AMapLoader.load({
      key:"c617b7e446727851346550bacf2ed771",                     // 申请好的Web端开发者Key，首次调用 load 时必填
      version:"2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins:[''],               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
    const cityRes = await getCityByAMap(AMap) as any
    const weatherRes = await GetWeatherByAMap(AMap,cityRes.city) as any
    const weather = weatherRes.weather as string
    let weatherCode,timeCode
    if (weather.includes('云')){
      weatherCode = 1
    }else if(weather.includes('雷阵雨')){
      weatherCode = 2
    }
    else if(weather.includes('雨')){
      weatherCode = 3
    } else if(weather.includes('风')){
      weatherCode = 4
    }else {
      weatherCode = 0
    }
    if (hour >= 6 && hour < 18) {
      timeCode = 0
    } else {
      timeCode = 1
    }
    const weatherMap:any = {
      '00':SunIcon,
      '01':SunIcon,
      '02':SunIcon,
      '03':SunIcon,
      '04':SunIcon,
      '10':MoonIcon,
      '11':MoonIcon,
      '12':MoonIcon,
      '13':MoonIcon,
      '14':MoonIcon,
    }
    setIcon(weatherMap[''+timeCode+weatherCode])
  }
  useEffect(()=>{
    initWeather()
    const timer = setInterval(initWeather,3600*1000)
    return clearInterval(timer)
  },[])
  return <>
    {icon}
  </>
}
export default WeatherIcon
