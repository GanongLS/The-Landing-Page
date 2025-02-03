# The Landing Page App

This App being developed by Luki Subandi. I intend to license this App under MIT License.

Fork or clone this repository to your personal repository.

## How to run the App:

1. Setup React Native Environment in your personal PC based on this guide: https://reactnative.dev/docs/environment-setup.
2. Open your remote personal repository that held the codebase for this up.
3. In the root folder run this int your terminal/command cli:
   1. Run `npm install` or `yarn`.
   2. Then run `react-native start` or `yarn start`.
   3. Then run `react-native run-android` or `yarn run-android`

In the Linux based OS you may find npm not running as expected you may need `npx react-native start` then `npx react-native run-android`.

If you find some error feel free to open issues.

Happy Hacking.

-@ganLS-

---

## How to create Debug APK

copy the following command and paste in the terminal in the main folder

`react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res`

or

`react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug`

In the case of Linux OS, it is necessary to add yarn/npx in front of the command, but this is not necessary on other OS.

If there are any problems due to the Enoent error, try creating the folder with
`mkdir android/app/src/main/assets`

after finished
#Open android file
`cd android`

#Create debug build:
`./gradlew assembleDebug`

#Create release build:
`./gradlew assembleRelease`

apk debug ada pada
`cd app/build/outputs/apk/debug`

---

This repository was created to fulfill the test assessment to enter the Luminary as mobile Front End Development team. 

Catatan dalam Pengembangan:
1. 

---

React Context Provider

Why did I choose to use React.Context + React.useReducer over react-redux? The most practical reason is because I am already familiar with this state management. However, there are many other technical reasons, such as:

1. react.context + react.useReducer was created by the developer who created redux, so it can be said that the API of react.context + useReducer is better maintained, easier to use and has less boiler plate and middleware.

2. No need to install additional packages, the fewer third party packages, the easier it is to maintain work/projects.

3. Can create multi stores without much boilerplate. I have created applications with more than 40 react.context.providers. And it still runs very light. The downside of applications with one global state store is that there is a lot of middleware, nesting state and boilerplate.

4. react.context + react.useProvider are directly maintained by the React developer team so the possibility of unmaintained APIs, major (or minor) upgrade conflicts and other incompatibilities from version changes is very small.

I have used react-redux in my career, I studied it for about 2 full weeks. It only took me 3 days to understand react.context. From my subjective point of view, if I want to work on a personal project using react.js or react-native I will always prioritize react.context + react.useReducer over react-redux. However, in my work I will still follow the framework that is widely used by the team or the framework required by the company.

Like my experience now I am working with the Flutter/Dart framework using BLoC. I was initially more fluent in using Provider, but after 1.5 years of using BLoC I can say that I am more fluent in using BLoC. Likewise with redux, if I use it for 1.5 years I will most likely understand it better.

In addition, development using react-redux is not much different from react.useReducer, only different at the middleware level used as a state distributor, so it will be easier for me to implement it.

-Luki Subandi-
