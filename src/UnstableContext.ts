import * as React from 'react';

export interface UnstableContextProps {
  /**
   * Used for Timeline component `reverse` prop.
   * Safe to remove if refactor.
   */
  railFollowPrevStatus?: boolean;
}

export const UnstableContext = React.createContext<UnstableContextProps>({});
