# `SpaceONE` Open Source Project Site
![image](https://user-images.githubusercontent.com/50590192/107342563-b0c97a00-6b03-11eb-8ba4-bf8383c47664.png)

## Tech Stack
- React
- Next.js
- Typescript
- styled-components
- Github API
- SCSS

## Scripts
`yarn dev`  
Runs the app in the development mode.  
Open http://localhost:3000 to view it in the browser.

`yarn serve:docker`  
Runs the app on Docker.  
Open http://localhost:80 to view it in the browser.

## Structure
```
root                        			 
│
├── components              
|
├── config                
│				
├── pages                 
│     ├── index.tsx             // '/'
│     ├── release-note.tsx      // '/release-note'
│     ├── _app.tsx        
│     ├── _document_.tsx        
│     ├── index.scss      
│     └── api             
│ 
├── public  
│     └── assets          
│
└── styles                          
      ├── global-style.ts
      ├── styled.d.ts    
      └── styled.d.ts    
```