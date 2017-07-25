Welcome to my Ionic 2 Component Module
===

------
### Folder structure

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
     |                |--- data
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
     |                |--- Directives
     |                |         |
     |                |         |--- equal-validators.directive.ts
     |                |
     |                |--- validators
     |                |         |
     |                |         |--- inedx.ts
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
     |---- providers
     |         |
     |         |---- in-app-browser
     |                      |
     |                      |--- in-app-browser
     |
     |---- theme
     |      
     |---- index.html
     |---- manifest.json
     |---- service-worker.js
```

**Features**

* Login
* Signup
* Forgot Password
* Social Login (Google plus, Facebook)

***File/Folder description***

```
src -> app -> components -> auth -> data
```
***Description:*** mock data of country list as array of object format

```
src -> app -> components -> auth -> forgotPass
```
***Description:*** Forgot Compoment

```
src -> app -> components -> auth -> login
```
***Description:*** Login components

```
src -> app -> components -> auth -> signup
```
***Description:*** Signup components

```
src -> app -> components -> auth -> social-login
```
***Description:*** Social Login

```
src -> app -> components -> auth -> validators
```  
***Description:*** Custom validation rules if it is required. Inside there ``` index.ts ``` is exporting all custom rules file together (sharable module structure). Every rules file is seperated.

```
src -> app -> components -> auth -> auth.config.ts
```
***Description:*** Configuration for the auth module

```
src -> app -> components -> auth -> auth.interface.ts
```
***Description:*** This interface file is for structuring the configuration for auth module.

```
src -> app -> components -> auth -> auth.module.ts
```
***Description:*** This module can be applied if lazy module support otherwise this file is unused. All the components has been declare and defined in entrycomponents and also exported.

```
src -> app -> components -> auth -> auth.provider.ts
```
***Description:*** Requesting external service for here.

### Social Login Instruction

**NOTE**
> - Don't put googlePlus or facebook native module as dependency injection. Because it will give a error on browser.Rather than make a instance of that e.g:

``` this.fb = new Facebook();
```

#### * Google+

Visit: ***https://developers.google.com/mobile/add?platform=android&cntapi=signin***

1.    Give app name
2.   Give Package name like (com.ionicframework.demo508795). You will find this package name from    config.xml under ***widget -> id***.
3.  Generate Sha-1 from your pc cmd by using the following command.

	Command:
	**keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android***

    Note: If keytool is not gobally install then go to
	***C:\Program Files\Java\jre1.8.0_91\bin***
	open command prompt and type above command.

4. copy sha-1  from cmd and put it there.
5. Download GoogleService.json file and put it to your project folder.
6. open GoogleService-info.plist and copy ***REVERSED_CLIENT_ID*** like com.googleusercontent.apps.....
7.  ***cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=put your reversed client id***.

***Code***

```private googlePlus: any;
this.googlePlus = new GooglePlus();
      this.googlePlus.login({})
        .then(res => alert(JSON.stringify(res)))
        .catch(err => console.error(err));
```

#### * Facebook

Visit https://developers.facebook.com/apps

1. Create a new apps
2. Follow this docs ***https://ionicframework.com/docs/native/facebook***
3. Add platform for android and give Google Play Package Name You will find this package name from ***config.xml*** under ***widget -> id***.


***Code***

```private fb: any;
this.fb = new Facebook();
    this.fb.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) => alert(JSON.stringify(res)))
        .catch(e => console.log('Error logging into Facebook', e));
    } else {
      console.log("You are not in currect platform");
    }
```

That's it :smile: :ok_hand:
