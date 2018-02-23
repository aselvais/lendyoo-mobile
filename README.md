# Welcome to Lendyoo

This is a mobile application for managing the items you lent to friends.
The dev is a React Native based app. So to set it up it is pretty easy:

### Clone the project via GIT

    git clone ssh://antidot.ca/home/git/repositories/lendyoo-mobile.git

### Install the dependencies via npm
    
```bash
npm install
git submodule init
git submodule update
react-native link
```

## Development

```bash
react-native run-ios
```


## Questions

- Why a lend/borrow button? I would just do a "lend", it should be the responsibility
of the item's owner to keep track of it (plus it means if the borrower want's to lend or do other actions
he has to download the app too)

## Good references for React

https://github.com/vhpoet/react-native-styling-cheat-sheet
https://github.com/jondot/awesome-react-native


# External modules

## Update react native

    sudo npm install -g react-native-git-upgrade
    react-native-git-upgrade


# Build release

## Android

Run the following command:

    cd android && ./gradlew assembleRelease 
    
Then your package is available at:

    ./android/app/build/outputs/apk/

## iOS

You will have to run Xcode then go to Product > archive; this will build an
archive and open a GUI for you to upload it to TestFlight ... 


## Google analytics

Code: UA-109621846-1

## Codepush

lendyoo-mobile-android:
```bash
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Deployment Key                                                   │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ mhId9RSSPKAC3M5FlaCASBYO4Nl3d6a1b3b3-a940-4ce5-ace9-1b792d004c3a │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ WE1w6reJIX8PlsSoTkoXojwaWzd7d6a1b3b3-a940-4ce5-ace9-1b792d004c3a │
└────────────┴──────────────────────────────────────────────────────────────────┘
```

lendyoo-mobile-ios:

```bash
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Deployment Key                                                   │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ mUX8beY7JlUWUueddtKItbth1w4Hd6a1b3b3-a940-4ce5-ace9-1b792d004c3a │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ ERGPkEw_Bcm7UTULRg5YzbXzKi7fd6a1b3b3-a940-4ce5-ace9-1b792d004c3a │
└────────────┴──────────────────────────────────────────────────────────────────┘
```

Deploy the code to ios and android:
```bash
code-push release-react lendyoo-mobile-android android -d Production &&
code-push release-react lendyoo-mobile-ios ios -d Production
```

List the deployed versions:
```bash
code-push deployment ls lendyoo-mobile-android
code-push deployment ls lendyoo-mobile-ios
```

## Screens


- Landing / Onboarding
- Signup
- Login
- Settings
- Contacts
- Lend
- Loans history
- Loan status



