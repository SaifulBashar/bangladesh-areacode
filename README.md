#Bangladesh-areacode
Get Nation Wide Dialing (NWD) Codes in Bangladesh

## Installation
```
npm install --save bangladesh-telephone-areacode
```
###Function
```
all() // return json

find(parameter) //return area code of give location in parameter

areaCode(parameter) //return location array
```
## Examples

```js
const data = require('bangladesh-telephone-areacode');
console.log(data.all());
```
```
{ location: 'Arihajar', code: 6722 },
  { location: 'Ashugonj', code: 8528 },
  { location: 'Auvoynagar', code: 4222 },
  { location: 'Bagerhat', code: 468 },
  { location: 'Bagharpara', code: 4223 },
  { location: 'Bajitpur', code: 9423 },
  { location: 'Balaganj', code: 8222 },
  { location: 'Banaripara', code: 4332 },
  { location: 'Bandar', code: 6724 },
  { location: 'Banderban', code: 361 },
  { location: 'Barabkundu', code: 3028 },
  { location: 'Baralekha', code: 8622 },
  { location: 'Barguna', code: 448 },
  { location: 'Barisal', code: 431 },
  ... more items ]

```

```js
console.log(data.find( 'Begumgonj'))
console.log(data.find( 'Benapool'))
console.log(data.find( 'Bhairab'))
console.log(data.find( 'Bhandaria'))
console.log(data.find( 'Bhoirab Bazar'))
console.log(data.find( 'Bhola'))
console.log(data.find( 'Bhyuapur'))
console.log(data.find( 'Biani Bazar'))
```
```
3221
4228
9424
4623
9424
491
9223
8223

```
```js
let area =g.areaCode(9424);
console.log(area);

//output array
[ 'Bhairab', 'Bhoirab Bazar' ]
```

## Contributing

Feel free to fix, update or add new entry anytime.






