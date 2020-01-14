# vlf
vue-localforage 

[![Build Status](https://travis-ci.com/joel-ns/vlf.svg?branch=master)](https://travis-ci.com/joel-ns/vlf)

# Installation
```bash
npm install  --save vlf
```
# Usage
```javascript
import Vlf from 'vlf'
Vue.use(Vlf)
```
# Example
```javascript
this.$vlf.createInstance({
    storeName: 'user'
}).then((store) => {
    store.setItem('key', [])
    store.length().then((keys) => {
        console.log(keys)
    })
    store.iterate((value, key, num) => {
        return [key, value]
    }).then((result) => {
        console.log(result)
    })
})
```
---
The other methods of use are the same as the official website, just add a this.$vlf in front, the same behind!
