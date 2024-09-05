// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o modo React Strict, que ajuda a identificar problemas no seu aplicativo
  reactStrictMode: true,

  // Configura o carregamento de imagens de domínios externos
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pontamed.com.br',
        port: '', // Deixe vazio se não precisar especificar a porta
        pathname: '/**', // Permite todas as imagens sob o domínio
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // Deixe vazio se não precisar especificar a porta
        pathname: '/**', // Permite todas as imagens sob o domínio
      },
    ],
  },

  // Configura redirecionamentos
  async redirects() {
    return [
      {
        source: '/old-path/:id',
        destination: '/new-path/:id',
        permanent: true, // Define se o redirecionamento é permanente (301) ou temporário (302)
      },
    ];
  },

  // Configura cabeçalhos HTTP
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica o cabeçalho a todas as rotas
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },

  // Configuração para Webpack (caso precise personalizar)
  webpack: (config, { isServer }) => {
    // Exemplo de modificação: adicionar um plugin
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default nextConfig;
