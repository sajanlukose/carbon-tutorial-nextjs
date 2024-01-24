'use client';

import OrbitHeader from '@/components/OrbitHeader/OrbitHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <OrbitHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
