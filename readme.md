```shell
firebase login:add
firebase login:list
firebase login:use
```

```shell
cd functions
npm run build
cd ..
firebase emulators:start --only functions
```

```shell
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
```

firebase serve --only hosting