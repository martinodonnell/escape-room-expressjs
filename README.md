# Setup

Add `config.js` file to `public/javascripts/server/firebase/config.js`

```
exports.firebaseConfig = {
  apiKey: <API KEY>,
  authDomain: <authDomain>,
  databaseURL: <databaseURL>,
  projectId: <projectId>,
  storageBucket: <storageBucket>,
  messagingSenderId: <messagingSenderId>,
  appId: <appId>,
  measurementId: <measurementId>,
};
```

This can be found in your firebase project settings

firebase project -> project settings -> your apps -> config, copy into file


## Deploy to google App Engine
You will need to setup gcloud on your local but once that is done, run `npm start deploy` to deploy it to google app engine. This will take a few minutes. It also costs a lot of money atm to use so enjoy!!!!!

## Undeploy
```
$ gcloud app versions list 

SERVICE  VERSION.ID       TRAFFIC_SPLIT  LAST_DEPLOYED              SERVING_STATUS
default  20210603t100647  1.00           2021-06-03T10:12:41+01:00  SERVING

# stop deployment
$ gcloud app versions stop 20210603t100647

# cleanup
$ gcloud app versions delete 20210603t100647
```


