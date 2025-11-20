export interface User {
  id: string;
  roles: string[];
  enabled: boolean;
  username: string;
  updatedAt: string | null;
  registerAt: string;
  authorities: Authority[];
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

interface Authority {
  authority: string;
}
