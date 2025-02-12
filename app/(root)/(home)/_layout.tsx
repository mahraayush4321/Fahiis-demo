import { Stack } from 'expo-router';

const Layout = () => {
  return (
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="vehicles" options={{ headerShown: true }} />
      </Stack>
  );
}

export default Layout