#!/bin/bash
cd flutter-app

# Build only for web with optimizations
flutter build web \
  --release \
  --web-renderer html \
  --dart-define=FLUTTER_WEB_CANVASKIT_URL=/canvaskit/ \
  --pwa-strategy none

# Move to root (for GitHub Pages)
cp -r build/web/* ../
touch ../.nojekyll  # Disable Jekyll processing