ng new --style scss --routing maintz
cd maintz
npm i
del package-lock.json
yarn install

ng add @angular/material
ng g module material --flat
ng g module shared --flat

ng g c core/header
ng g c core/footer
ng g @angular/material:navigation core/navigation
ng g c core/notFound
ng g c core/under-construction

ng g c home/home
ng g @angular/material:dashboard home/dashboard

ng g module about --route --routing
ng g c about/about
ng g c about/website
ng g c about/contact-us

ng g module accounts --route --routing
ng g class --type model accounts/user
ng g service accounts/accounts
ng g guard accounts/auth/auth
ng g interceptor accounts/auth/auth
ng g c accounts/login
ng g c accounts/logoff
ng g c accounts/privacy
ng g c accounts/register
ng g c accounts/terms
ng g c accounts/userEdit
ng g c accounts/userList

ng g module links  --route --routing
ng g class --type model links/link
ng g service links/links
ng g service links/links.http
ng g c links/linkAddEdit
ng g c links/linksList

ng g module photos --route --routing
ng g class --type model photos/photo
ng g service photos/photos
ng g service photos/photos.http
ng g c photos/photoAddEdit
ng g c photos/photoList
ng g c photos/photoCarousel

ng g module videos --route --routing
ng g class --type model videos/video
ng g service videos/videos
ng g service videos/videos.http
ng g c videos/videoAddEdit
ng g c videos/videoList
ng g c videos/videoCarousel

yarn add ngx-toaster
yarn run ngcc

