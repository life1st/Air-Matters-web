# API

## country list

```
  url: '/list/country'
  method: get
  request: {
    ok: true,
    data: [
      {
        name: '中国大陆',
        placeId: 'ce4c01d6',
        img: 'css/images/flags/country/china.png'
      }
    ]
  }
```

## place

```
  url: '/place/:placeId'
  method: get
  params: {
    placeId: <String>
    [,standard: <String> | default: 'aqi_us']
    [,lang: <String> | default: 'zh-Hans']
  }
  
  // 非地级市
  request: {
    ok: true,
    data: {
      place: [
        {
          name: '上海',
          placeId: '4e4d63c9'
          aqi: '117',
        },
        ...
      ],
    }
  }
  
  // 地级市
  request: {
    ok: true,
    data: {
      place: [
        {
          name: ''
        }
      ],
      detail: {
        
      }
    }
  }
```