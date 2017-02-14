#Bangladesh-areacode
Get Nation Wide Dialing (NWD) Codes in Bangladesh

## Installation
```
npm install --save bangladesh-telephone-areacode
```
##Functions
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
  ... more items ]

```

```js
console.log(data.find( 'Begumgonj'))
console.log(data.find( 'Benapool'))
console.log(data.find( 'Bhairab'))
console.log(data.find( 'Bhandaria'))
console.log(data.find( 'Bhoirab Bazar'))

//output
3221
4228
9424
4623
9424

```
```js
let area =g.areaCode(9424);
console.log(area);

//output array
[ 'Bhairab', 'Bhoirab Bazar' ]
```

## Contributing

Feel free to fix, update or add new entry anytime.






