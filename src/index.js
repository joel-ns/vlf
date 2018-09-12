import localForage from 'localforage';

/* eslint no-console: ["error", { allow: ["warn", "error", "no-undef"] }] */
const vlf = {
    install (Vue) {
        Vue.prototype.$vlf = new Vue({
            name: 'vlf',
            methods: {
                getItem (key) {
                    return localForage.getItem(key)
                },
                setItem (key, value) {
                    return localForage.setItem(key, value)
                },
                removeItem (key) {
                    return localForage.removeItem(key)
                },
                clear () {
                    return localForage.clear()
                },
                length () {
                    return localForage.length()
                },
                key (keyIndex) {
                    return localForage.key(keyIndex)
                },
                keys () {
                    return localForage.keys()
                },
                iterate () {
                    return localForage.iterate()
                },
                setDriver (driverName) {
                    return localForage.setDriver(driverName)
                },
                config (options) {
                    return localForage.config(options)
                },
                defineDriver(driver) {
                    return localForage.defineDriver(driver);
                },
                driver() {
                    return localForage.driver();
                },
                ready() {
                    return localForage.ready();
                },
                supports(driverName) {
                    return localForage.supports(driverName);
                },
                createInstance (options) {
                    return localForage.createInstance(options)
                },
                dropInstance(options) {
                    return localForage.dropInstance(options);
                }
            }
        })
    }
};

export default vlf
