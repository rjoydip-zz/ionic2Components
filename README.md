# Ionic2MyComponent

## Folder structure

``` src
     |
     |---- app
     |
     |---- assets
     |
     |---- components
     |          |
     |          |--- auth
     |                |
     |                |--- data ()
     |                |     |
     |                |     |---- mock.countries.ts
     |                |
     |                |--- forgotPass
     |                |
     |                |--- login
     |                |
     |                |--- signup
     |                |
     |                |--- social-login
     |                |
     |                |--- validators
     |                |
     |                |--- auth.config.ts
     |                |
     |                |--- auth.interface.ts
     |                |
     |                |--- auth.module.ts
     |                |
     |                |--- auth.provider.ts
     |          
     |---- pages
     |
     |---- theme
     |      
     |---- index.html
     |---- manifest.json
     |---- service-worker.js
```

## File / Folder description inside components

```
src -> app -> components -> auth -> data
```

Example: mock data of country list as array of object format

```
  src -> app -> components -> auth -> forgotPass
```

Example: Forgot Compoment

```
  src -> app -> components -> auth -> login
```

Example: Login components

```
  src -> app -> components -> auth -> signup
```

Example: Signup components

```
  src -> app -> components -> auth -> social-login
```

Example: Social Login

```
  src -> app -> components -> auth -> validators
```  

Example: Custom validation rules if it is required. Inside there ``` index.ts ``` is exporting all custom rules file together (sharable module structure). Every rules file is seperated.

```
  src -> app -> components -> auth -> auth.config.ts
```

Example: Configuration for the auth module

```
  src -> app -> components -> auth -> auth.interface.ts
```

Example: This interface file is for structuring the configuration for auth module.

```
  src -> app -> components -> auth -> auth.module.ts
```

Example: This module can be applied if lazy module support otherwise this file is unused. All the components has been declare and defined in entrycomponents and also exported.

```
  src -> app -> components -> auth -> auth.provider.ts
```

Example: Requesting external service for here.


## Features
* Login
* Signup
* Forgot Password
* Social Login (Google plus, Facebook)

## Social Login Instruction

### Google+

  Visit: https://developers.google.com/mobile/add?platform=android&cntapi=signin
    i)    Give app name
    ii)   Give Package name like (com.ionicframework.demo508795). You will find this package name from    config.xml under ```widget``` -> ``` id ```.
    iii)  Generate Sha-1 from your pc cmd by using the follwing command.
          Command: ``` keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android ```
          Note: If keytool is not gobally install then go to ``` C:\Program Files\Java\jre1.8.0_91\bin ``` open command prompt and type above command.
    iv)   copy sha-1  from cmd and put it there.
    v)    Download GoogleService.json file and put it to your project folder.
    vi)   open GoogleService-info.plist and copy REVERSED_CLIENT_ID like com.googleusercontent.apps.....
    vii)  cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=put your reversed client id.

### Code

``` window.plugins.googleplus.login({

			// 'scopes': 'profile,email ',// optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.

			   'webClientId': '338564391857-s0nsjn3l148gqith80rpo0bh9k1b75k1.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.

			   'offline': true,

		},

		function (user_data) {

		   Console.log(JSON.stringify(user_data));
		 },

		function (msg) {

		  console.log(msg);

		 }

		);
```

### Facebook
  1) Visit https://developers.facebook.com/apps
      i)    Create a new apps
      ii)   Follow this docs https://ionicframework.com/docs/native/facebook
      iii)  Add platform for android and give ``` Google Play Package Name``` You will find this package name from    config.xml under ```widget``` -> ``` id ```.

That's it :)
