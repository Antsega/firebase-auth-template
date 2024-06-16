
type RouteProps = {
    children: React.ReactNode;
  };
  

interface HistoryEntry {
    message: string;
}

interface UserInfoType {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    name: ?string;
    is_active: boolean;
    is_superuser: boolean;
    email_verified: boolean;
    role: string;
}

interface CreateUserType {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    email_verified: boolean;
    role?: string;
    is_active: boolean;
    is_superuser: boolean;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
}
