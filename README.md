# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**

```bash
yarn start
```

## Step 2: Start your Application

### For Android

```bash
yarn android
```

If you are running the server locally run the tcp to access the correct port

```bash
yarn android:tcp
```

### For iOS

Make sure to install the required pods

```bash
yarn ios:install
```

```bash
yarn ios
```

### Server

To make changes on server change the `.env` file to point to `localhost:3000` and clone the repository [rsmelo92/postgres-prisma-nextjs](https://github.com/rsmelo92/postgres-prisma-nextjs) following the instructions on its readme
