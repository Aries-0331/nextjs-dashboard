'use client';

import { authenticateWithGithub } from '@/app/lib/actions';

export function SignInWithGitHub() {
  return (
    <form action={authenticateWithGithub}>
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}
