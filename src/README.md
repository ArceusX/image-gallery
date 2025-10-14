
# React Image Gallery Scrolldown App

Your everyday gallery, that you can adopt to a variety of uses: as a "How To" guide,
a photo blog, or portfolio showcase. Video is supported and interface is mobile-friendly.

Everything is coded as a **React** component, so you can easily add new images with one line of code.

Other pages & functionalities facilitate a full blog. See **Features** 

## Features
1. Clicking on an image item opens a modal that shows the full image. You can press the left (<), right (>) keys
   to scroll between items. Or press Space or Esc to close the modal
2. A Contact page lets viewers send you a message. These messages are forwarded to your chosen email
    via SendGrid on Netlify's server. You can adopt the code to use other services
3. You can add text, image, and video to your "Blog" page by passing a JSON object to Blog.jsx
4. A navigation bar allows you to scroll down to an image/video with a particular date.

## Live Demo

View the app live here: [React Image Gallery](https://image-gallery-14.netlify.app/)

## Libraries Used

- **react-router-dom**: adsf
- **sendgrid/mail**:
- **react-player**:

## Start


1. **Setup Netlify (For Hosting & Serving Requests)**
    A. Create an account at Netlify.
	B. Create a new project and link it to your chosen repo on GitHub for deployment.
	C. In `[project]/[app_name]/netlify/functions` folder, create sendEmail.js. In that file, import `@sendgrid/mail` and  write `exports.handler = async (event)` that calls `await sgMail.send(msg)`

2. **Setup SendGrid (To Send Emails On Netlify Request)**
	A. Create your SendGrid Account
	B. Register your email to use the service
	C. Create a `SENDGRID_API_KEY`. Add key in SendGrid > Project Configuration > Environment variables
	D. In `siteInfo.js` file, edit `export const address` to be the email you registered with SendGrid 
	
3. **Build & Run App**
    A. Download this repo, cd into it, and run ...
    B.  `npm install`, `npm run dev` to build local
    C. To build a hosted version, simply push changes to this app's repo on Github. Netlify will
        automatically see the changes and build your app