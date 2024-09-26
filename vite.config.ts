import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
    // Load environment variables based on the current mode
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    console.log('Loaded VITE_BASE_URL:', env.VITE_BASE_URL); // Log the loaded base URL

    return {
        plugins: [react()],
        server: {
            open: true,
        },
        base: env.VITE_BASE_URL || '/',
    };
});
