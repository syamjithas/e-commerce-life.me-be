https://chat.openai.com/share/8b7260f1-97f2-4fa1-aa6b-55bf71a1b66c

https://material.angular.io/guide/typography

shared/components/layouts/full-content

ng generate g shared/guard/auth

ng generate c shared/components/carousel
ng generate c shared/components/top-categories
ng generate c shared/components/popular
ng generate c shared/components/product-card
ng generate c shared/components/advertisement
ng generate c shared/components/just-launched
ng generate c shared/components/shop-by-brand
ng generate c shared/components/promotion
ng generate c pages/home


ng generate s shared/services/auth
ng generate s shared/services/http
ng generate s shared/services/localStorage


ng generate interceptor  shared/interceptor/auth
ng generate interceptor  shared/interceptor/jwt




project-name/
├── src/
│   ├── config/                        # Application configuration settings
│   │   ├── configuration.ts           # Configuration service
│   │   └── validation.schema.ts       # Configuration validation
│   ├── core/                          # Core application modules (e.g., authentication, logging, error handling)
│   │   ├── auth/                      # Authentication module
│   │   ├── logging/                   # Logging module
│   │   └── exceptions/                # Custom exceptions and filters
│   ├── features/                      # Application features divided by domain
│   │   ├── users/                     # Example feature module for user management
│   │   │   ├── dto/                   # Data transfer objects for the users module
│   │   │   ├── entities/              # User entities (models)
│   │   │   ├── users.controller.ts    # Users controller
│   │   │   ├── users.module.ts        # Users module
│   │   │   ├── users.service.ts       # Users service
│   │   │   └── users.repository.ts    # Users repository
│   │   └── products/                  # Another example feature module
│   ├── shared/                        # Shared modules/utilities
│   │   ├── decorators/                # Custom decorators
│   │   ├── filters/                   # Exception filters
│   │   ├── guards/                    # Guards (e.g., roles guard)
│   │   ├── interceptors/              # Interceptors
│   │   └── utilities/                 # Utility functions/classes
│   └── app.module.ts                  # Root application module
├── test/                              # Test specifications
│   ├── e2e/                           # End-to-end tests
│   └── unit/                          # Unit tests
├── .env                               # Environment variables for development
├── .env.production                    # Environment variables for production
├── .eslintrc.js                       # ESLint configuration
├── .prettierrc                        # Prettier configuration
├── nest-cli.json                      # Nest CLI configuration
├── package.json                       # Package manifest
├── tsconfig.build.json                # TypeScript configuration for the build
└── tsconfig.json                      # TypeScript configuration


src/
└── core/
    └── auth/
        ├── dto/
        │   └── login.dto.ts             # Data Transfer Object for login information
        ├── guards/
        │   ├── jwt-auth.guard.ts        # Guard to protect routes with JWT
        │   └── roles.guard.ts           # Roles guard to handle role-based access
        ├── strategies/
        │   ├── jwt.strategy.ts          # JWT strategy for authentication
        │   └── local.strategy.ts        # Strategy for local authentication (e.g., username & password)
        ├── constants.ts                 # Constants used in the auth module (e.g., secret keys)
        ├── auth.controller.ts           # Controller to handle auth routes, like login & logout
        ├── auth.module.ts               # Auth module setup
        ├── auth.service.ts              # Service to handle authentication logic
        └── user.entity.ts               # User entity definition, if not elsewhere
