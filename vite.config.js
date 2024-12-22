import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // 빌드 결과물이 저장될 디렉터리 이름
    emptyOutDir: true, // 기존 디렉터리를 비우고 새로 빌드
  },
});