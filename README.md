# Lendyou Mobile App

## Installation

```bash
npm install
react-native link
```

## Development

```bash
react-native run-ios
```

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
code-push release-react WinLoseOrTie-android android -d Production &&
code-push release-react WinLoseOrTie-ios ios -d Production
```

List the deployed versions:
```bash
code-push deployment ls WinLoseOrTie-android
code-push deployment ls WinLoseOrTie-ios
```