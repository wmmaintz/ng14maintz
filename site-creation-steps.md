REM The npm, yarn, and Angular/Cli Steps taken to create the maintz.com website.

ng new --style scss --routing ng14maintz
cd ng14aintz
npm install
del package-lock.json
yarn install
yarn add timers
yarn add moment
npm install --save node-fetch
npm install --save-dev @types/node-fetch
npm install --save ajax

ng add @angular/material
ng g module material --flat
ng g module shared --flat

ng g service message
ng g service httpErrorHandler
ng g service in-memory-data
ng g service requestCache
ng g service config/config

ng g interceptor interceptors/auth
ng g interceptor interceptors/caching
ng g interceptor interceptors/customJson
ng g interceptor interceptors/ensureHttps
ng g interceptor interceptors/logging
ng g interceptor interceptors/noop
ng g interceptor interceptors/retry
ng g interceptor interceptors/trimName
ng g interceptor interceptors/upload

ng g c messages --module app.module

ng g service core/loading
ng g c core/loading --module app.module
ng g c core/downloader --module app.module
ng g c core/header --module app.module
ng g c core/footer --module app.module
ng g @angular/material:navigation core/navigation --module app.module
ng g c core/notFound --module app.module
ng g c core/under-construction --module app.module
ng g c core/calendar --module app.module
ng g c core/calendar-three-mon --module app.module
ng g c core/carousel --module app.module
ng g c core/subFooter --module app.module
ng g service core/downloader/downloader --module app.module  
ng g c home/home --module app.module
ng g @angular/material:dashboard home/dashboard --module app.module

ng g module about --route --routing
ng g c about/about --module about.module
ng g c about/website --module about.module
ng g c about/contact-us --module about.module

ng g module accounts --route --routing
ng g class --type model accounts/user --module accounts.module
ng g class --type model accounts/state --module accounts.module
ng g service accounts/accounts --module accounts.module
ng g guard accounts/auth/auth --module accounts.module
ng g interceptor accounts/auth/auth --module accounts.module
ng g c accounts/login --module accounts.module
ng g c accounts/logoff --module accounts.module
ng g c accounts/privacy --module accounts.module
ng g @angular/material:address-form accounts/register --module accounts.module
ng g c accounts/terms --module accounts.module
ng g @angular/material:address-form accounts/userEdit --module accounts.module
ng g c accounts/userList --module accounts.module
ng g service accounts/auth/auth

ng g module links  --route --routing
ng g class --type model links/link --module links.module
ng g service links/links --module links.module
ng g service links/links.http --module links.module
ng generate @angular/material:address-form links/linkAddEdit --module links.module
ng g c links/linksList --module links.module

ng g module photos --route --routing
ng g class --type model photos/photo --module photos.module
ng g service photos/photos --module photos.module
ng g service photos/photos.http --module photos.module
ng generate @angular/material:address-form photos/photoAddEdit --module photos.module
ng g c photos/photoList --module photos.module
ng g c photos/photoCarousel --module photos.module

ng g module videos --route --routing
ng g class --type model videos/video --module videos.module
ng g service videos/videos --module videos.module
ng g service videos/videos.http --module videos.module
ng generate @angular/material:address-form videos/videoAddEdit --module videos.module
ng g c videos/videoList --module videos.module
ng g c videos/videoCarousel --module videos.module

yarn add ngx-toaster
yarn run ngcc

REM Setup git
echo "# ng14maintz" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/wmmaintz/ng14maintz.git
git push -u origin main


