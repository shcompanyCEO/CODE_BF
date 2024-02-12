import NextAuth from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
// Import other providers as needed
interface OAuthUserConfig<P> {
  clientId: string;
  clientSecret: string;
  // redirectUri: string;
  // potentially other configuration properties...
}

interface OAuthConfig<P> {
  authorizationUrl: string;
  tokenUrl: string;
  userProfileUrl: string;
  // potentially other OAuth details...
}

export default NextAuth({
  providers : [
    GoogleProvider<OAuthUserConfig<P>>({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }): 
    // Configure other providers here
  ],
  // Add additional NextAuth configuration as needed
});
