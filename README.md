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
