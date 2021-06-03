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