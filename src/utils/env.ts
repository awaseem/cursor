import Constants from 'expo-constants'

export enum Environment {
  dev = 'dev',
  production = 'production',
}

export function getEnv(): Environment {
  const env = Constants.manifest.releaseChannel
  if (env.indexOf('dev') !== -1) {
    return Environment.dev
  }
  if (env.indexOf('production') !== -1) {
    return Environment.production
  }
  return Environment.dev
}

export function isProd(): boolean {
  return getEnv() === Environment.production
}
