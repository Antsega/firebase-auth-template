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
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

firebase serve --only hosting
firebase emulators:start

1) Replace .env in frontend/ with App's credentials
2) (optional) Rename roles for new users in (default to baseUser)
    - frontend/src/core/api/firebase.ts
    - frontend/src/core/types/firebase.d.ts
    - functions/src/CreateFirebaseUser.ts

3) Change frontend/src/core/api/functions.ts
    - functionUrl path to match urls when starting firebase functions

AuthContext
Centralized Authentication Logic - All authentication-related logic is centralized in one place, making it easier to manage and update.

